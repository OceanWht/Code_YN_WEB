<template>
  <el-container>
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="新增公共机构能源资源消费信息" :visible.sync="dialogFormVisible" >
        <el-form ref="dialogForm" :model="dialogForm" label-width="200px" :rules="rules">
          <el-form-item prop="regversion" label="平台服务版本">
              <el-input v-model="dialogForm.regversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="dicversion" label="基础数据版本">
              <el-input v-model="dialogForm.dicversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="enterprisecode" label="统一社会信用代码">
              <el-input v-model="dialogForm.enterprisecode" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="charger" label="单位负责人">
              <el-input v-model="dialogForm.charger"></el-input>
          </el-form-item>
          <el-form-item prop="statisticians" label="统计负责人">
              <el-input v-model="dialogForm.statisticians"></el-input>
          </el-form-item>
          <el-form-item prop="preparer" label="填表人">
              <el-input v-model="dialogForm.preparer"></el-input>
          </el-form-item>
          <el-form-item prop="f009" label="用地面积(平方米)">
              <el-input v-model="dialogForm.f009"></el-input>
          </el-form-item>
          <el-form-item prop="f101" label="建筑面积(平方米)">
              <el-input v-model="dialogForm.f101"></el-input>
          </el-form-item>
          <el-form-item prop="f102" label="用能人数">
              <el-input v-model="dialogForm.f102"></el-input>
          </el-form-item>
          <el-form-item prop="f1021" label="编制人数">
              <el-input v-model="dialogForm.f1021"></el-input>
          </el-form-item>
          <el-form-item prop="f103" label="车辆数量">
              <el-input v-model="dialogForm.f103"></el-input>
          </el-form-item>
          <el-form-item prop="f1031" label="汽油车数量">
              <el-input v-model="dialogForm.f1031"></el-input>
          </el-form-item>
          <el-form-item prop="f1032" label="柴油车数量">
              <el-input v-model="dialogForm.f1032"></el-input>
          </el-form-item>
          <el-form-item prop="f1033" label="新能源汽车数量">
              <el-input v-model="dialogForm.f1033"></el-input>
          </el-form-item>
          <el-form-item prop="f104" label="液化石油气消费量(千克)">
              <el-input v-model="dialogForm.f104"></el-input>
          </el-form-item>
          <el-form-item prop="f1041" label="液化石油气消费费用">
              <el-input v-model="dialogForm.f1041"></el-input>
          </el-form-item>
          <el-form-item prop="f105" label="充电桩数量(个)">
              <el-input v-model="dialogForm.f105"></el-input>
          </el-form-item>
          <el-form-item prop="f110" label="电消费量(千瓦时)">
              <el-input v-model="dialogForm.f110"></el-input>
          </el-form-item>
          <el-form-item prop="f111" label="电消费费用">
              <el-input v-model="dialogForm.f111"></el-input>
          </el-form-item>
          <el-form-item prop="f120" label="水消费量(立方米)">
              <el-input v-model="dialogForm.f120"></el-input>
          </el-form-item>
          <el-form-item prop="f121" label="水消费费用">
              <el-input v-model="dialogForm.f121"></el-input>
          </el-form-item>
          <el-form-item prop="f130" label="煤炭消费量(吨)">
              <el-input v-model="dialogForm.f130"></el-input>
          </el-form-item>
          <el-form-item prop="f131" label="煤炭消费费用">
              <el-input v-model="dialogForm.f131"></el-input>
          </el-form-item>
          <el-form-item prop="f140" label="天然气消费量(立方米)">
              <el-input v-model="dialogForm.f140"></el-input>
          </el-form-item>
          <el-form-item prop="f141" label="天然气消费费用">
              <el-input v-model="dialogForm.f141"></el-input>
          </el-form-item>
          <el-form-item prop="f150" label="汽油消费量(升)">
              <el-input v-model="dialogForm.f150"></el-input>
          </el-form-item>
          <el-form-item prop="f151" label="汽油消费费用">
              <el-input v-model="dialogForm.f151"></el-input>
          </el-form-item>
          <el-form-item prop="f1501" label="(汽油)车辆用油量(升)">
              <el-input v-model="dialogForm.f1501"></el-input>
          </el-form-item>
          <el-form-item prop="f1502" label="(汽油)其他用油量(升)">
              <el-input v-model="dialogForm.f1502"></el-input>
          </el-form-item>
          <el-form-item prop="f1511" label="(汽油)车辆用油费用">
              <el-input v-model="dialogForm.f1511"></el-input>
          </el-form-item>
          <el-form-item prop="f1512" label="(汽油)其他用油费用">
              <el-input v-model="dialogForm.f1512"></el-input>
          </el-form-item>
          <el-form-item prop="f160" label="柴油消费量(升)">
              <el-input v-model="dialogForm.f160"></el-input>
          </el-form-item>
          <el-form-item prop="f161" label="柴油消费费用">
              <el-input v-model="dialogForm.f161"></el-input>
          </el-form-item>
          <el-form-item prop="f1601" label="(柴油)车辆用油量(升)">
              <el-input v-model="dialogForm.f1601"></el-input>
          </el-form-item>
          <el-form-item prop="f1602" label="(柴油)其他用油量">
              <el-input v-model="dialogForm.f1602"></el-input>
          </el-form-item>
          <el-form-item prop="f1611" label="(柴油)车辆用油费用">
              <el-input v-model="dialogForm.f1611"></el-input>
          </el-form-item>
          <el-form-item prop="f1612" label="(柴油)其他用油费用">
              <el-input v-model="dialogForm.f1612"></el-input>
          </el-form-item>
          <el-form-item prop="f170" label="热力消费量(吉焦)">
              <el-input v-model="dialogForm.f170"></el-input>
          </el-form-item>
          <el-form-item prop="f171" label="热力消费费用">
              <el-input v-model="dialogForm.f171"></el-input>
          </el-form-item>
          <el-form-item prop="f180" label="其它能源消费量">
              <el-input v-model="dialogForm.f180"></el-input>
          </el-form-item>
          <el-form-item prop="f181" label="费用">
              <el-input v-model="dialogForm.f181"></el-input>
          </el-form-item>
          <el-form-item prop="f190" label="太阳能光热利用系统集热器面积(平方米)">
              <el-input v-model="dialogForm.f190"></el-input>
          </el-form-item>
          <el-form-item prop="f191" label="太阳能光电利用系统装机容量(千瓦)">
              <el-input v-model="dialogForm.f191"></el-input>
          </el-form-item>
          <el-form-item prop="f192" label="浅层地热能利用系统装机容量(千瓦)">
              <el-input v-model="dialogForm.f192"></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
              <el-input v-model="dialogForm.remark"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button-group>
              <el-button type="success" @click="saveAdd('dialogForm')">保存</el-button>
              <el-button type="primary" @click="cancleAdd">取消</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="编辑用能单位重点耗能设备信息" :visible.sync="dialogFormVisibleEdit" >
        <el-form ref="dialogFormEdit" :model="dialogFormEdit" :rules="rules" label-width="200px">
          <el-form-item prop="regversion" label="平台服务版本">
            <el-input v-model="dialogFormEdit.regversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="dicversion" label="基础数据版本">
            <el-input v-model="dialogFormEdit.dicversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="enterprisecode" label="统一社会信用代码">
            <el-input v-model="dialogFormEdit.enterprisecode" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="charger" label="单位负责人">
            <el-input v-model="dialogFormEdit.charger"></el-input>
          </el-form-item>
          <el-form-item prop="statisticians" label="统计负责人">
            <el-input v-model="dialogFormEdit.statisticians"></el-input>
          </el-form-item>
          <el-form-item prop="preparer" label="填表人">
            <el-input v-model="dialogFormEdit.preparer"></el-input>
          </el-form-item>
          <el-form-item prop="f009" label="用地面积(平方米)">
            <el-input v-model="dialogFormEdit.f009"></el-input>
          </el-form-item>
          <el-form-item prop="f101" label="建筑面积(平方米)">
            <el-input v-model="dialogFormEdit.f101"></el-input>
          </el-form-item>
          <el-form-item prop="f102" label="用能人数">
            <el-input v-model="dialogFormEdit.f102"></el-input>
          </el-form-item>
          <el-form-item prop="f1021" label="编制人数">
            <el-input v-model="dialogFormEdit.f1021"></el-input>
          </el-form-item>
          <el-form-item prop="f103" label="车辆数量">
            <el-input v-model="dialogFormEdit.f103"></el-input>
          </el-form-item>
          <el-form-item prop="f1031" label="汽油车数量">
            <el-input v-model="dialogFormEdit.f1031"></el-input>
          </el-form-item>
          <el-form-item prop="f1032" label="柴油车数量">
            <el-input v-model="dialogFormEdit.f1032"></el-input>
          </el-form-item>
          <el-form-item prop="f1033" label="新能源汽车数量">
            <el-input v-model="dialogFormEdit.f1033"></el-input>
          </el-form-item>
          <el-form-item prop="f104" label="液化石油气消费量(千克)">
            <el-input v-model="dialogFormEdit.f104"></el-input>
          </el-form-item>
          <el-form-item prop="f1041" label="液化石油气消费费用">
            <el-input v-model="dialogFormEdit.f1041"></el-input>
          </el-form-item>
          <el-form-item prop="f105" label="充电桩数量(个)">
            <el-input v-model="dialogFormEdit.f105"></el-input>
          </el-form-item>
          <el-form-item prop="f110" label="电消费量(千瓦时)">
            <el-input v-model="dialogFormEdit.f110"></el-input>
          </el-form-item>
          <el-form-item prop="f111" label="电消费费用">
            <el-input v-model="dialogFormEdit.f111"></el-input>
          </el-form-item>
          <el-form-item prop="f120" label="水消费量(立方米)">
            <el-input v-model="dialogFormEdit.f120"></el-input>
          </el-form-item>
          <el-form-item prop="f121" label="水消费费用">
            <el-input v-model="dialogFormEdit.f121"></el-input>
          </el-form-item>
          <el-form-item prop="f130" label="煤炭消费量(吨)">
            <el-input v-model="dialogFormEdit.f130"></el-input>
          </el-form-item>
          <el-form-item prop="f131" label="煤炭消费费用">
            <el-input v-model="dialogFormEdit.f131"></el-input>
          </el-form-item>
          <el-form-item prop="f140" label="天然气消费量(立方米)">
            <el-input v-model="dialogFormEdit.f140"></el-input>
          </el-form-item>
          <el-form-item prop="f141" label="天然气消费费用">
            <el-input v-model="dialogFormEdit.f141"></el-input>
          </el-form-item>
          <el-form-item prop="f150" label="汽油消费量(升)">
            <el-input v-model="dialogFormEdit.f150"></el-input>
          </el-form-item>
          <el-form-item prop="f151" label="汽油消费费用">
            <el-input v-model="dialogFormEdit.f151"></el-input>
          </el-form-item>
          <el-form-item prop="f1501" label="(汽油)车辆用油量(升)">
            <el-input v-model="dialogFormEdit.f1501"></el-input>
          </el-form-item>
          <el-form-item prop="f1502" label="(汽油)其他用油量(升)">
            <el-input v-model="dialogFormEdit.f1502"></el-input>
          </el-form-item>
          <el-form-item prop="f1511" label="(汽油)车辆用油费用">
            <el-input v-model="dialogFormEdit.f1511"></el-input>
          </el-form-item>
          <el-form-item prop="f1512" label="(汽油)其他用油费用">
            <el-input v-model="dialogFormEdit.f1512"></el-input>
          </el-form-item>
          <el-form-item prop="f160" label="柴油消费量(升)">
            <el-input v-model="dialogFormEdit.f160"></el-input>
          </el-form-item>
          <el-form-item prop="f161" label="柴油消费费用">
            <el-input v-model="dialogFormEdit.f161"></el-input>
          </el-form-item>
          <el-form-item prop="f1601" label="(柴油)车辆用油量(升)">
            <el-input v-model="dialogFormEdit.f1601"></el-input>
          </el-form-item>
          <el-form-item prop="f1602" label="(柴油)其他用油量">
            <el-input v-model="dialogFormEdit.f1602"></el-input>
          </el-form-item>
          <el-form-item prop="f1611" label="(柴油)车辆用油费用">
            <el-input v-model="dialogFormEdit.f1611"></el-input>
          </el-form-item>
          <el-form-item prop="f1612" label="(柴油)其他用油费用">
            <el-input v-model="dialogFormEdit.f1612"></el-input>
          </el-form-item>
          <el-form-item prop="f170" label="热力消费量(吉焦)">
            <el-input v-model="dialogFormEdit.f170"></el-input>
          </el-form-item>
          <el-form-item prop="f171" label="热力消费费用">
            <el-input v-model="dialogFormEdit.f171"></el-input>
          </el-form-item>
          <el-form-item prop="f180" label="其它能源消费量">
            <el-input v-model="dialogFormEdit.f180"></el-input>
          </el-form-item>
          <el-form-item prop="f181" label="费用">
            <el-input v-model="dialogFormEdit.f181"></el-input>
          </el-form-item>
          <el-form-item prop="f190" label="太阳能光热利用系统集热器面积(平方米)">
            <el-input v-model="dialogFormEdit.f190"></el-input>
          </el-form-item>
          <el-form-item prop="f191" label="太阳能光电利用系统装机容量(千瓦)">
            <el-input v-model="dialogFormEdit.f191"></el-input>
          </el-form-item>
          <el-form-item prop="f192" label="浅层地热能利用系统装机容量(千瓦)">
            <el-input v-model="dialogFormEdit.f192"></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
            <el-input v-model="dialogFormEdit.remark"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button-group>
              <el-button type="success" @click="saveEdit('dialogFormEdit')">保存</el-button>
              <el-button type="primary" @click="cancleEdit">取消</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-table :data="tableData.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"  :row-class-name="tableRowClassName">
        <el-table-column prop="id" label="id" v-if="false">
        </el-table-column>
        <el-table-column prop="dataindex" label="数据索引" v-if="false">
        </el-table-column>
        <el-table-column prop="i0" label="数据状态" fixed="left" width="200">
        </el-table-column>
        <el-table-column prop="regversion" label="平台服务版本" fixed="left" width="200">
        </el-table-column>
        <el-table-column prop="dicversion" label="基础数据版本" width="200">
        </el-table-column>
        <el-table-column prop="enterprisecode" label="统一社会信用代码" width="200">
        </el-table-column>
        <el-table-column prop="reportdate" label="报送日期" width="200">
        </el-table-column>
        <el-table-column prop="charger" label="单位负责人" width="200">
        </el-table-column>
        <el-table-column prop="statisticians" label="统计负责人" width="200">
        </el-table-column>
        <el-table-column prop="preparer" label="填表人" width="200">
        </el-table-column>
        <el-table-column prop="prepardate" label="填报日期" width="200">
        </el-table-column>
        <el-table-column prop="f009" label="用地面积(平方米)" width="200">
        </el-table-column>
        <el-table-column prop="f101" label="建筑面积(平方米)" width="200">
        </el-table-column>
        <el-table-column prop="f102" label="用能人数" width="200">
        </el-table-column>
        <el-table-column prop="f1021" label="编制人数" width="200">
        </el-table-column>
        <el-table-column prop="f103" label="车辆数量" width="200">
        </el-table-column>
        <el-table-column prop="f1031" label="汽油车数量" width="200">
        </el-table-column>
        <el-table-column prop="f1032" label="柴油车数量" width="200">
        </el-table-column>
        <el-table-column prop="f1033" label="新能源汽车数量" width="200">
        </el-table-column>
        <el-table-column prop="f104" label="液化石油气消费量(千克)" width="200">
        </el-table-column>
        <el-table-column prop="f1041" label="液化石油气消费费用" width="200">
        </el-table-column>
        <el-table-column prop="f105" label="充电桩数量(个)" width="200">
        </el-table-column>
        <el-table-column prop="f110" label="电消费量(千瓦时)" width="200">
        </el-table-column>
        <el-table-column prop="f111" label="电消费费用" width="200">
        </el-table-column>
        <el-table-column prop="f120" label="水消费量(立方米)" width="200">
        </el-table-column>
        <el-table-column prop="f121" label="水消费费用" width="200">
        </el-table-column>
        <el-table-column prop="f130" label="煤炭消费量(吨)" width="200">
        </el-table-column>
        <el-table-column prop="f131" label="煤炭消费费用" width="200">
        </el-table-column>
        <el-table-column prop="f140" label="天然气消费量(立方米)" width="200">
        </el-table-column>
        <el-table-column prop="f141" label="天然气消费费用" width="200">
        </el-table-column>
        <el-table-column prop="f150" label="汽油消费量(升)"width="200">
        </el-table-column>
        <el-table-column prop="f151" label="汽油消费费用" width="200">
        </el-table-column>
        <el-table-column prop="f1501" label="(汽油)车辆用油量(升)" width="200">
        </el-table-column>
        <el-table-column prop="f1502" label="(汽油)其他用油量(升)" width="200">
        </el-table-column>
        <el-table-column prop="f1511" label="(汽油)车辆用油费用" width="200">
        </el-table-column>
        <el-table-column prop="f1512" label="(汽油)其他用油费用" width="200">
        </el-table-column>
        <el-table-column prop="f160" label="柴油消费量(升)" width="200">
        </el-table-column>
        <el-table-column prop="f161" label="柴油消费费用" width="200">
        </el-table-column>
        <el-table-column prop="f1601" label="(柴油)车辆用油量(升)" width="200">
        </el-table-column>
        <el-table-column prop="f1602" label="(柴油)其他用油量" width="200">
        </el-table-column>
        <el-table-column prop="f1611" label="(柴油)车辆用油费用" width="200">
        </el-table-column>
        <el-table-column prop="f1612" label="(柴油)其他用油费用" width="200">
        </el-table-column>
        <el-table-column prop="f170" label="热力消费量(吉焦)" width="200">
        </el-table-column>
        <el-table-column prop="f171" label="热力消费费用" width="200">
        </el-table-column>
        <el-table-column prop="f180" label="其它能源消费量" width="200">
        </el-table-column>
        <el-table-column prop="f181" label="费用" width="200">
        </el-table-column>
        <el-table-column prop="f190" label="太阳能光热利用系统集热器面积(平方米)" width="200">
        </el-table-column>
        <el-table-column prop="f191" label="太阳能光电利用系统装机容量(千瓦)" width="200">
        </el-table-column>
        <el-table-column prop="f192" label="浅层地热能利用系统装机容量(千瓦)" width="200">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)"  size="small">编辑</el-button>
            <el-button  size="small" type="danger"  @click="deleteItem(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage"
        :page-sizes="[10,15,20]"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next"
        :total="page.totalCount">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    name: "AddEnergy",
    data() {
      return {
        count:'',
        dialogFormVisible:false,
        dialogFormVisibleEdit:false,
        dialogForm:{
          id:'',
          regversion:'',
          dicversion:'',
          dataindex:'',
          enterprisecode:'',
          reportdate:'',
          charger:'',
          statisticians:'',
          preparer:'',
          prepardate:'',
          f009:'',
          f101:'',
          f102:'',
          f1021:'',
          f103:'',
          f1031:'',
          f1032:'',
          f1033:'',
          f104:'',
          f1041:'',
          f105:'',
          f110:'',
          f111:'',
          f120:'',
          f121:'',
          f130:'',
          f131:'',
          f140:'',
          f141:'',
          f150:'',
          f151:'',
          f1501:'',
          f1502:'',
          f1511:'',
          f1512:'',
          f160:'',
          f161:'',
          f1601:'',
          f1602:'',
          f1611:'',
          f1612:'',
          f170:'',
          f171:'',
          f180:'',
          f181:'',
          f190:'',
          f191:'',
          f192:'',
          remark:'',
          i0:''
        },
        dialogFormEdit:{
          id:'',
          regversion:'',
          dicversion:'',
          dataindex:'',
          enterprisecode:'',
          reportdate:'',
          charger:'',
          statisticians:'',
          preparer:'',
          prepardate:'',
          f009:'',
          f101:'',
          f102:'',
          f1021:'',
          f103:'',
          f1031:'',
          f1032:'',
          f1033:'',
          f104:'',
          f1041:'',
          f105:'',
          f110:'',
          f111:'',
          f120:'',
          f121:'',
          f130:'',
          f131:'',
          f140:'',
          f141:'',
          f150:'',
          f151:'',
          f1501:'',
          f1502:'',
          f1511:'',
          f1512:'',
          f160:'',
          f161:'',
          f1601:'',
          f1602:'',
          f1611:'',
          f1612:'',
          f170:'',
          f171:'',
          f180:'',
          f181:'',
          f190:'',
          f191:'',
          f192:'',
          remark:'',
          i0:''
        },
        rules:{
          regversion:[
            { required: true, message: '请输入平台服务版本', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          dicversion:[
            { required: true, message: '请输入基础数据版本', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          enterprisecode:[
            { required: true, message: '请输入统一社会信用码', trigger: 'blur' },
            { min: 18, max: 18, message: '长度在 18 个字符', trigger: 'blur' }
          ],
          charger:[
            { required: true, message: '单位负责人', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          statisticians:[
            { required: true, message: '统计负责人', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          preparer:[
            { required: true, message: '填表人', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f009:[
            { required: true, message: '用地面积(平方米)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f101:[
            { required: true, message: '建筑面积(平方米)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f102:[
            { required: true, message: '用能人数', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1021:[
            { required: true, message: '编制人数', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f103:[
            { required: true, message: '车辆数量', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1031:[
            { required: true, message: '汽油车数量', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1032:[
            { required: true, message: '柴油车数量', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1033:[
            { required: true, message: '新能源汽车数量', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f104:[
            { required: true, message: '液化石油气消费量(千克)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1041:[
            { required: true, message: '液化石油气消费费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f105:[
            { required: true, message: '充电桩数量(个)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f110:[
            { required: true, message: '电消费量(千瓦时)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f111:[
            { required: true, message: '电消费费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f120:[
            { required: true, message: '水消费量(立方米)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f121:[
            { required: true, message: '水消费费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f130:[
            { required: true, message: '煤炭消费量(吨)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f131:[
            { required: true, message: '煤炭消费费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f140:[
            { required: true, message: '天然气消费量(立方米)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f141:[
            { required: true, message: '天然气消费费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f150:[
            { required: true, message: '汽油消费量(升)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f151:[
            { required: true, message: '汽油消费费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1501:[
            { required: true, message: '(汽油)车辆用油量(升)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1502:[
            { required: true, message: '(汽油)其他用油量(升)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1511:[
            { required: true, message: '(汽油)车辆用油费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1512:[
            { required: true, message: '(汽油)其他用油费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f160:[
            { required: true, message: '柴油消费量(升)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f161:[
            { required: true, message: '柴油消费费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1601:[
            { required: true, message: '(柴油)车辆用油量(升)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1602:[
            { required: true, message: '(柴油)其他用油量', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1611:[
            { required: true, message: '(柴油)车辆用油费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f1612:[
            { required: true, message: '(柴油)其他用油费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f170:[
            { required: true, message: '热力消费量(吉焦)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f171:[
            { required: true, message: '热力消费费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f180:[
            { required: true, message: '其它能源消费量', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f181:[
            { required: true, message: '费用', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f190:[
            { required: true, message: '太阳能光热利用系统集热器面积(平方米)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f191:[
            { required: true, message: '太阳能光电利用系统装机容量(千瓦)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f192:[
            { required: true, message: '浅层地热能利用系统装机容量(千瓦)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ]
        },
        tableData: [],
        page: {
          currentPage: 1, // 当前页
          pageSize: 10, // 每页显示条目个数
          totalCount: 0 // 总条目数
        }
      }
    },
    methods: {
      saveAdd(formName){
        let self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.dialogForm.i0 = 2;
            let data = {
              "data":self.dialogForm
            };
            self.$http.post(self.$baseUrl+"/arganEnergy/addEnergy",data,self.$config).then(
              res=>{
                console.log(res);
                if (res.data.code === 0){
                  self.$message({
                    message: '新增公共机构能源资源消费信息成功',
                    type: 'success'
                  });
                }else {
                  self.$message({
                    message: '新增失败:'+res.data.result.responseMessage,
                    type: 'warning'
                  });
                }
                self.dialogFormVisible = false;
                self.getList(self.dialogForm.enterprisecode)
              },reason => {
                console.log("新增失败");
              }
            )
          } else {
            this.$notify.error({
              title: '错误',
              message: '信息填写格式错误'
            });
            return false;
          }
        });
      },
      saveEdit(formName) {
        let self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(self.dialogFormEdit.i0 == '上传成功'){
              self.dialogFormEdit.i0 = 0;
            }else if(self.dialogFormEdit.i0 == '上传失败'){
              self.dialogFormEdit.i0 = 1;
            }else if(self.dialogFormEdit.i0 == '等待上传'){
              self.dialogFormEdit.i0 = 2;
            }
            let data = {
              "data":self.dialogFormEdit
            };

            self.$http.post(self.$baseUrl+"/arganEnergy/updateEnergy",data,self.$config).then(
              res=>{
                console.log(res);
                if (res.data.code === 0){
                  self.$message({
                    message: '更新公共机构能源资源消费信息成功',
                    type: 'success'
                  });
                }else {
                  self.$message({
                    message: '更新失败:'+res.data.result.responseMessage,
                    type: 'warning'
                  });
                }
                self.dialogFormVisibleEdit = false;
                self.getList(self.dialogFormEdit.enterprisecode)
              },reason => {
                console.log("更新失败");
              }
            )
          } else {
            this.$notify.error({
              title: '错误',
              message: '信息修改格式错误'
            });
            return false;
          }
        });
      },
      cancleAdd() {
        this.dialogFormVisible = false;
      },
      cancleEdit() {
        this.dialogFormVisibleEdit = false;
      },
      getList(eCode){
        var self = this;
        let data ={
          'enterpriseCode':eCode
        }
        //获取数据
        self.$http.post(self.$baseUrl+"/addEnergy/list",data).then(res=>{
          console.log(res);
          if (res.data.code === 0){
            self.tableData = res.data.result;
            self.page.totalCount = res.data.result.length;
            let tabledata = res.data.result;
            tabledata.forEach(function (item,index) {
              if (item.reportdate !== null && item.reportdate.indexOf('T') > -1){
                item.reportdate = item.reportdate.substring(0,item.reportdate.lastIndexOf('T'))
              }
              if (item.prepardate !== null && item.prepardate.indexOf('T') > -1){
                item.prepardate = item.prepardate.substring(0,item.prepardate.lastIndexOf('T'))
              }
            })
          }
          let taticList = {
            0:'上传成功',
            1:'上传失败',
            2:'等待上传'
          };
          res.data.result.forEach(function(ke, val){
            if(ke.i0 == 0){
              ke.i0 = taticList[0];
            }else if(ke.i0 == 1){
              ke.i0 = taticList[1];
            }else if(ke.i0 == 2){
              ke.i0 = taticList[2];
            }
          });
        },res=>{
          console.log("加载失败");
        })
      },
      handleClick(row) {
        let self = this;
        if(row.i0 == '上传成功'){
          self.$message({
            type: 'warning',
            message: '此数据已经上传完成，不能被修改!'
          });
          return;
        }
        self.dialogFormVisibleEdit = true;
        self.dialogFormEdit.id = row.id;
        self.dialogFormEdit.dataindex = row.dataindex;
        self.dialogFormEdit.regversion = row.regversion;
        self.dialogFormEdit.dicversion = row.dicversion;
        self.dialogFormEdit.enterprisecode = row.enterprisecode;
        self.dialogFormEdit.reportdate = row.reportdate;
        self.dialogFormEdit.charger = row.charger;
        self.dialogFormEdit.statisticians = row.statisticians;
        self.dialogFormEdit.preparer = row.preparer;
        self.dialogFormEdit.prepardate = row.prepardate;
        self.dialogFormEdit.f009 = row.f009;
        self.dialogFormEdit.f101 = row.f101;
        self.dialogFormEdit.f102 = row.f102;
        self.dialogFormEdit.f1021 = row.f1021;
        self.dialogFormEdit.f103 = row.f103;
        self.dialogFormEdit.f1031 = row.f1031;
        self.dialogFormEdit.f1032 = row.f1032;
        self.dialogFormEdit.f1033 = row.f1033;
        self.dialogFormEdit.f104 = row.f104;
        self.dialogFormEdit.f1041 = row.f1041;
        self.dialogFormEdit.f105 = row.f105;
        self.dialogFormEdit.f110 = row.f110;
        self.dialogFormEdit.f111 = row.f111;
        self.dialogFormEdit.f120 = row.f120;
        self.dialogFormEdit.f121 = row.f121;
        self.dialogFormEdit.f130 = row.f130;
        self.dialogFormEdit.f131 = row.f131;
        self.dialogFormEdit.f140 = row.f140;
        self.dialogFormEdit.f141 = row.f141;
        self.dialogFormEdit.f150 = row.f150;
        self.dialogFormEdit.f151 = row.f151;
        self.dialogFormEdit.f1501 = row.f1501;
        self.dialogFormEdit.f1502 = row.f1502;
        self.dialogFormEdit.f1511 = row.f1511;
        self.dialogFormEdit.f1512 = row.f1512;
        self.dialogFormEdit.f160 = row.f160;
        self.dialogFormEdit.f161 = row.f161;
        self.dialogFormEdit.f1601 = row.f1601;
        self.dialogFormEdit.f1602 = row.f1602;
        self.dialogFormEdit.f1611 = row.f1611;
        self.dialogFormEdit.f1612 = row.f1612;
        self.dialogFormEdit.f170 = row.f170;
        self.dialogFormEdit.f171 = row.f171;
        self.dialogFormEdit.f180 = row.f180;
        self.dialogFormEdit.f181 = row.f181;
        self.dialogFormEdit.f190 = row.f190;
        self.dialogFormEdit.f191 = row.f191;
        self.dialogFormEdit.f192 = row.f192;
        self.dialogFormEdit.remark = row.remark;
        self.dialogFormEdit.i0 = row.i0;
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.page.pageSize = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page.currentPage = val;
      },
      deleteItem(row) {
        let self = this;
        if(row.i0 == '上传成功'){
          self.$message({
            type: 'warning',
            message: '此数据已经上传完成，不能被删除!'
          });
          return;
        }
        self.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let data ={
            'data':row
          };

          self.$http.post(self.$baseUrl+"/arganEnergy/deleteEnergy",data,self.$config).then(
            res =>{
              console.log(res);
              if (res.data.code === 0){
                self.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                self.getList(row.enterprisecode);
              }else {
                self.$message({
                  type: 'warning',
                  message: '删除失败:'+res.data.result.responseMessage
                });
              }
            },res =>{
              console.log("删除失败");

            });

        }).catch(() => {
          self.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    created() {
      let self = this;
      self.getList(self.$cookies.get('enterpriseCode'));
      let data = {
        "enterpriseCode":self.$cookies.get('enterpriseCode')
      };
      self.$http.post(self.$baseUrl+"/arganEnergy/getVersion",data,self.$config).then(res=>{
        console.log(res);
        if (res.data.code === 0) {
          self.dialogForm.enterprisecode = res.data.result.enterprisecode;
          self.dialogForm.regversion = res.data.result.regversion;
          self.dialogForm.dicversion = res.data.result.dicversion;
        }
      },ret=>{
        console.log("获取Version失败");
      });
    }
  }
</script>

<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
