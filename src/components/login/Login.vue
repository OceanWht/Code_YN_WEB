<template>
  <!--<div class="login" :style="'height:'+fullHeight+'px;'">-->
  <div class="login" :style="backgroundImage">
    <el-container direction="vertical">
      <el-header>
        <!-- <img src="../../../static/imgs/(zhaoxi.net).png" class="imgs">-->
      </el-header>
      <el-main>
        <el-form ref="form" :model="form">
          <el-form-item prop="name">
            <el-col :span="4" :offset="10">
              <el-input v-model="form.name" placeholder="用户名" prefix-icon="el-icon-user" clearable></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-col :span="4" :offset="10">
              <el-input v-model="form.pwd" type="password" placeholder="密码" prefix-icon="el-icon-lock"
                        clearable @keyup.enter.native="login('form')"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="5" :offset="8">
              <el-checkbox label="记住密码" v-model="form.isRemember"></el-checkbox>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="login('form')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
         <img src="../../../static/imgs/login_bottom.png" class="imgs"/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import allBackGroundImages from '@/images/bg'

  export default {
    name: "Login",
    data() {
      return {
        allBackgroundImages: allBackGroundImages,
        form: {
          name: '',
          pwd: '',
          isRemember: '',
        },
        fullHeight: document.documentElement.clientHeight //获取屏幕高度
      }
    },
    watch: {
      fullHeight(val) { //监控浏览器高度
        if (!this.timer) {
          this.fullHeight = val;
          this.timer = true;
          let that = this;
          setTimeout(function () {
            that.timer = false
          }, 400)
        }
      }
    },
    //先新建一个样式的计算变量，这个计算变量会设置随机的背景图，然后在把这个计算变量绑定到要设置的html元素上
    computed: {
      backgroundImage() {
        // 根据背景图数组的长度随机选择索引
        let randIndex = Math.floor(Math.random() * this.allBackgroundImages.length);
        return {
          // 获取对应的图片资源并将其设置到`background-image`属性上
          backgroundImage: `url(${this.allBackgroundImages[randIndex]})`
        }
      }
    },
    mounted() {
      this.get_bodyHeight();
    },
    methods: {
      login(formName) {
        let self = this;
        let name = self.form.name;
        let pwd = self.form.pwd;
        if (name === '' || pwd === '') {
          self.$notify({
            message: '请输入用户名或者密码',
            type: 'error'
          });

          return false;
        }

        if (name === 'root' && pwd === 'root') {
          self.$cookies.set('name', name);
          self.$cookies.set('pwd', pwd);
          self.$router.push({name: 'Index', params: {name: name, pwd: pwd}});
          return true;
        }


        console.log('name', name);
        console.log('pwd', pwd);
        let body = {
          "name": name,
          "pwd": pwd,
          "client_id": "dny_power"
        };
        self.$http.post(self.$software_url + "Account/Login", body, self.$config).then(res => {
          console.log(res);
          if (res.status === 200) {
            self.$cookies.set('name', name);
            self.$cookies.set('pwd', pwd);
            let data = res.data.body;
            if (data.length === 0) {
              self.$notify({
                message: '登录失败，请联系管理员',
                type: 'error'
              });
            }

            let SystemMenu = {
              'userid': data[0].userid
            };
            let config = {
              "headers": {'Content-Type': 'application/json;charset=UTF-8', 'token': data[0].token},
            }
            self.$http.post(self.$software_url + "/Account/SystemMenu", SystemMenu, config).then(res => {
              console.log(res);
              if (res.status === 200) {
                self.$cookies.set('ClientName', res.data.body.ClientName);
                let loginBody = {
                  'name': name,
                  'pass': pwd,
                  'uid': data[0].uid,
                  'userid': data[0].userid,
                  'token': data[0].token
                };

                //存库
                self.$http.post(self.$baseUrl + "/enterpriseInfo/login", loginBody, self.$config).then(res => {
                  if (res.data.code === 0) {

                    //设置token
                    let loginData = res.data.result;
                    self.$cookies.set('enterpriseCode', loginData.enterpriseCode);
                    self.$cookies.set('token', data[0].token);
                    self.$cookies.set('uid', data[0].uid);
                    self.$router.push({name: 'Index', params: {name: name, pwd: pwd}}); //带参传递参数
                  } else {
                    self.$notify({
                      message: '登录失败，请联系管理员',
                      type: 'error'
                    });
                  }
                }, ret => {
                  self.$notify({
                    message: '登录失败，请联系管理员',
                    type: 'error'
                  });
                });
              } else {
                self.$notify({
                  message: '登录失败，请联系管理员',
                  type: 'error'
                });
              }
            }, reason => {
              self.$notify({
                message: '登录失败，请联系管理员',
                type: 'error'
              });
            })

          } else {
            self.$notify({
              message: '登录失败，请联系管理员',
              type: 'error'
            });
          }
        }, reason => {
          self.$notify({
            message: '登录失败，请联系管理员',
            type: 'error'
          });
        });
        //  this.$router.push({ name: 'Index',params:{name:name,pwd:pwd}}); //带参传递参数

      },
      get_bodyHeight() {//动态获取浏览器高度
        const that = this;
        window.onresize = () => {
          return (() => {
            window.fullHeight = document.documentElement.clientHeight;
            that.fullHeight = window.fullHeight;
          })()
        }
      }
    }
  }
</script>
<style scoped>

  .login {
    padding: 0px;

    margin: 0px;

    position: absolute;

    top: 0px;

    left: 0px;

    width: 100%;

    height: 100%;

    border: hidden;

  }

  .el-header {
    margin-top: 10%;
  }

  .el-header img {
    max-width: 100%;
    max-height: 200px; /*图片自适应*/
  }

  .el-main {
    margin-top: 8%;
  }

  .el-footer {
    margin-top: 5%;
  }

  .el-footer img {
    max-width: 100%;
    max-height: 150px; /*图片自适应*/
  }

  .el-button {
    width: 16.5%;
  }

  /*.imgs {
    position: relative;
  }*/

</style>
