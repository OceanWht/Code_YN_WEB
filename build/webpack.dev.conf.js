'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

//配置本地json
const express = require('express');
const app = express();
const regionData = require('../region.json');
const regionList = regionData.regionList;
const energyTypeList = regionData.energyTypeList;
const IndustryCodesOne = regionData.IndustryCodesOne;
const IndustryCodesTwo = regionData.IndustryCodesTwo;
const IndustryCodesThree = regionData.IndustryCodesThree;
const IndustryCodesFour = regionData.IndustryCodesFour;
const EnergyTypeUnitCollectCodes = regionData.EnergyTypeUnitCollectCodes;
const MetertypeJsonCodes = regionData.MetertypeJsonCodes;
const apiRoutes = express.Router();
app.use('/regionData', apiRoutes);

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap, usePostCSS: true})
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        {from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html')},
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? {warnings: false, errors: true}
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },

    //添加本地json
    before(app) {
      app.get('/regionData/regionList', (req, res) => {
        res.json({
          errno: 0,
          data: regionList
        })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
      }),
        app.get('/regionData/energyTypeList', (req, res) => {
          res.json({
            errno: 0,
            data: energyTypeList
          })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
        }),
        app.get('/regionData/IndustryCodesOne', (req, res) => {
          res.json({
            errno: 0,
            data: IndustryCodesOne
          })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
        }),
        app.get('/regionData/IndustryCodesTwo', (req, res) => {
          res.json({
            errno: 0,
            data: IndustryCodesTwo
          })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
        }),
        app.get('/regionData/IndustryCodesThree', (req, res) => {
          res.json({
            errno: 0,
            data: IndustryCodesThree
          })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
        }),
        app.get('/regionData/IndustryCodesFour', (req, res) => {
          res.json({
            errno: 0,
            data: IndustryCodesFour
          })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
        }),
        app.get('/regionData/EnergyTypeUnitCollectCodes', (req, res) => {
          res.json({
            errno: 0,
            data: EnergyTypeUnitCollectCodes
          })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
        }),
        app.get('/regionData/MetertypeJsonCodes', (req, res) => {
          res.json({
            errno: 0,
            data: MetertypeJsonCodes
          })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
        })

    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
