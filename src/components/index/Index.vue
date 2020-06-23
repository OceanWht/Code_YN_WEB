<template>
  <el-container>
    <el-header>
      <ems-header></ems-header>
    </el-header>
    <el-container>
      <el-aside width="300px" >
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;margin-top: 10px;margin-left: -40px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          @select="select"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          text-color="#3c8dbc"
          active-text-color="#ffd04b" :collapse="isCollapse"
          router>
          <el-submenu index="enterpriseInfo" v-bind:style="{'display':sysShow1?'block':'none'}">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>端系统接入管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/apply">端系统注册申请</el-menu-item>
              <el-menu-item index="/DataCollectConfigure">数据采集配置项管理</el-menu-item>
              <el-menu-item index="/dataUploadManual">数据填报管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3" v-bind:style="{'display':sysShow3?'block':'none'}">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用能单位采集配置数据上传</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/ProcessConfigure">生产工序信息</el-menu-item>
              <el-menu-item index="/UnitConfigure">工序单元信息</el-menu-item>
              <el-menu-item index="/DeviceConfigure">重点耗能设备信息</el-menu-item>
              <el-menu-item index="/GaugeConfigure">计量器具信息</el-menu-item>
              <el-menu-item index="/GaugeReplaceConfigure">计量器具更换记录</el-menu-item>
              <el-menu-item index="/GaugeVerifyConfigure">计量器具检定/校准记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2" v-bind:style="{'display':sysShow2?'block':'none'}">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用能单位基础数据上传</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/companyContacter">联系人信息</el-menu-item>
              <el-menu-item index="/companyEnergySys">能源管理体系信息</el-menu-item>
              <el-menu-item index="/companyEnergyManager">能源管理人员信息</el-menu-item>
              <el-menu-item index="/companyEnergyMonitor">能耗监测项目负责人信息</el-menu-item>
              <el-menu-item index="/companyCalculater">能源计量人员配置信息</el-menu-item>
              <el-menu-item index="/energyCertification">企业认证信息</el-menu-item>
              <el-menu-item index="/CompanyProductStructure">产品结构信息</el-menu-item>
              <el-menu-item index="/CompanyOutputValue">产值/增加值/销售收入信息</el-menu-item>
              <el-menu-item index="/CompanyEnergyConservation">节能项目情况信息</el-menu-item>
              <el-menu-item index="/CompanyEnergyAccount">水/电/燃气户号信息</el-menu-item>
              <el-menu-item index="/CompanyMaterielProduct">非能源产品信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4" v-bind:style="{'display':sysShow4?'block':'none'}">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用能单位采集数据上传</span>
            </template>
            <el-menu-item-group>
              <!--<el-menu-item index="/DataEnterpriseEnergy">用能单位能源资源计量采集数据</el-menu-item>-->
              <el-menu-item index="/arganEnergy/AddEnergy">公共机构能源资源消费信息</el-menu-item>
              <el-menu-item index="/arganEnergy/AddIDC">公共机构数据中心机房能源消费信息</el-menu-item>
              <el-menu-item index="/arganEnergy/AddWarm">公共机构采暖能源资源消费信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5" v-bind:style="{'display':sysShow?'block':'none'}">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>系统配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/uidRelationShip">企业UID与社会码关系配置</el-menu-item>
              <el-menu-item index="/otherBasicConfig">其他基础数据配置</el-menu-item>
              <!--<el-menu-item index="4-3">获取基础数据</el-menu-item>-->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main >
          <el-page-header @back="goBack" v-show="pageHeaderShow">
          </el-page-header>
          <el-row  v-show="calendarShow">
            <el-calendar v-model="calendarValue">
            </el-calendar>
          </el-row>
          <router-view />
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
        content:'',
        pageHeaderShow:false,
        calendarShow:true,
        calendarValue:new Date(),
        name: this.$cookies.get('name'),
        pass:this.$cookies.get('pwd'),
        isCollapse: true,
        sysShow:false,
        sysShow1:false,
        sysShow2:false,
        sysShow3:false,
        sysShow4:false,

       // enterpriseInfoShow:false,
      }
    },
    methods: {
      goBack() {
        this.$router.push({ name: 'Index',params:{name:this.name,pwd:this.pass}});
        this.pageHeaderShow = false;
        this.calendarShow = true;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      select(key, keyPath){
        console.log(key, keyPath);
        this.calendarShow = false;
        this.pageHeaderShow = true;
      }
    },
    created() {
      if (this.name === 'root' && this.pass==='root'){
        this.sysShow = true;
        this.sysShow1 = false;
        this.sysShow2 = false;
        this.sysShow3 = false;
        this.sysShow4 = false;
        this.calendarShow = true;

      }else {
        this.sysShow = false;
        this.sysShow1 = true;
        this.sysShow2 = true;
        this.sysShow3 = true;
        this.sysShow4 = true;
        this.calendarShow = false;
      }
    }
  }
</script>
<style scoped>
  html * {
    font-size: 15px;
  }

  .is-selected {
    color: #1989FA;
  }

  .el-calendar-table thead th {
    text-align: center;
  }

  .el-submenu .el-menu-item {
    font-size: 15px;
  }

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
