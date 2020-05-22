<template>
  <el-row>
    <el-col :span="4" class="ems_header_title"><span>新联电子能耗在线监测系统</span></el-col>
    <el-col :span="4" :offset="16">
      <el-dropdown>
        <el-avatar> user</el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>登出</el-dropdown-item>
          <el-dropdown-item disabled>修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>

  export default {
    name: "emsHeader"
  }
</script>

<style scoped>
  .el-row {
    height: 100%;
    margin-left: -1%;
    background: url("./static/imgs/top-bj-12.png") ;
  }

  .el-avatar {
    margin-top: 11px;
  }

  .ems_header_title {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    white-space: normal;
  }

  .ems_header_title span {
    text-align: left;
    font-size: 23px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

</style>
