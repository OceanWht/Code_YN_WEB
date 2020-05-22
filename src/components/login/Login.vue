<template>
  <div class="login" :style="'height:'+fullHeight+'px;'">
    <el-container direction="vertical">
      <el-header>
         <!-- <img src="./static/imgs/login_title.png" class="imgs">-->
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
              <el-input v-model="form.pwd" type="password" placeholder="密码" prefix-icon="el-icon-lock" clearable></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="5" :offset="8">
              <el-checkbox label="记住密码" v-model="form.isRemember"></el-checkbox>
            </el-col>
          </el-form-item>
          <el-form-item>
              <el-button type="success" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
       <!-- <img src="./static/imgs/login_bottom.png" class="imgs"/>-->
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        form:{
          name:'',
          pwd:'',
          isRemember:''
        },
        fullHeight: document.documentElement.clientHeight //获取屏幕高度
      }
    },
    watch:{
      fullHeight(val){ //监控浏览器高度
        if (!this.timer){
          this.fullHeight = val;
          this.timer = true;
          let that = this;
          setTimeout(function (){
            that.timer = false
          },400)
        }
      }
    },
    mounted () {
      this.get_bodyHeight()
    },
    methods :{
      login() {
        let name = this.form.name;
        let pwd = this.form.pwd;
        console.log('name',name);
        console.log('pwd',pwd);
        this.$router.push({ name: 'Index',params:{name:name,pwd:pwd}}); //带参传递参数
      },
      get_bodyHeight () {//动态获取浏览器高度
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
    width: 100%;
    /*background: url("./static/imgs/bg-24.png") no-repeat center;*/
    background-color: gray;
    background-size: 100% 100%;
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
    max-height: 150px;  /*图片自适应*/
  }

  .el-button {
    width: 16.5%;
  }

  /*.imgs {
    position: relative;
  }*/

</style>
