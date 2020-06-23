// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './utils/flexible'
import EmsHeader from './components/header/EmsHeader'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import globalVal from './cookiesVal/global'
import moment from 'moment'


Vue.config.productionTip = false
Vue.use(VueCookies);
Vue.use(ElementUI);
Vue.use(globalVal);
Vue.component('ems-header',EmsHeader);
Vue.prototype.$http = axios;
Vue.prototype.$moment = moment;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
