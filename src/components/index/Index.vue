<template>
  <el-container>
    <el-header> <ems-header></ems-header></el-header>
    <el-container>
      <el-aside width="300px" >
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;margin-top: 10px;margin-left: -40px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          text-color="#3c8dbc"
          active-text-color="#ffd04b" :collapse="isCollapse"
          router>
          <el-submenu index="enterpriseInfo">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>端系统接入管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/apply">端系统注册申请</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用能单位基础数据上传</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/companyContacter">联系人信息</el-menu-item>
              <el-menu-item index="2-2">能源管理体系信息</el-menu-item>
              <el-menu-item index="2-3">能源管理人员信息</el-menu-item>
              <el-menu-item index="2-4">能耗监测项目负责人信息</el-menu-item>
              <el-menu-item index="2-5">能源计量人员配置信息</el-menu-item>
              <el-menu-item index="2-6">企业认证信息</el-menu-item>
              <el-menu-item index="2-7">产品结构信息</el-menu-item>
              <el-menu-item index="2-8">产值/增加值/销售收入信息</el-menu-item>
              <el-menu-item index="2-9">节能项目情况信息</el-menu-item>
              <el-menu-item index="2-10">水/电/燃气户号信息</el-menu-item>
              <el-menu-item index="2-11">非能源产品信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用能单位采集配置数据上传</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">生产工序信息</el-menu-item>
              <el-menu-item index="3-2">工序单元信息</el-menu-item>
              <el-menu-item index="3-3">重点耗能设备信息</el-menu-item>
              <el-menu-item index="3-4">数据采集配置项信息</el-menu-item>
              <el-menu-item index="3-5">计量器具信息</el-menu-item>
              <el-menu-item index="3-6">计量器具更换记录</el-menu-item>
              <el-menu-item index="3-7">计量器具检定/校准记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用能单位采集数据上传</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">用能单位能源资源计量采集数据</el-menu-item>
              <el-menu-item index="4-2">公共机构能源资源消费信息</el-menu-item>
              <el-menu-item index="4-3">公共机构数据中心机房能源消费信息</el-menu-item>
              <el-menu-item index="4-4">公共机构采暖能源资源消费信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


        </el-menu>
      </el-aside>
      <el-container>
        <el-main style="margin-left: 3%">
          <router-view/>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </el-container>

</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        name: this.$route.params.name,
        isCollapse: true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-header {
    margin-top: -3%;
  }

  .el-header, .el-footer {
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    line-height: 50px;
    overflow-x: hidden;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-menu{
    min-width: 20%;
    text-align: left;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 800px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
    min-height: 400px;
  }

</style>
