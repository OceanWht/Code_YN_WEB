<template>
  <el-container>
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="编辑用能单位数据采集配置项信息 " :visible.sync="dialogFormVisibleEdit">
        <el-form ref="dialogFormEdit" :model="dialogFormEdit" :rules="rules" label-width="200px">
          <el-form-item prop="id" label="id" v-if="false">
            <el-input v-model="dialogFormEdit.id"></el-input>
          </el-form-item>
          <el-form-item prop="dataindex" label="数据索引" v-if="false">
            <el-input v-model="dialogFormEdit.dataindex"></el-input>
          </el-form-item>
          <el-form-item prop="regversion" label="平台服务版本">
            <el-input v-model="dialogFormEdit.regversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="dicversion" label="基础数据版本">
            <el-input v-model="dialogFormEdit.dicversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="enterprisecode" label="统一社会信用代码">

            <el-input v-model="dialogFormEdit.enterprisecode" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="collectitemname" label="采集数据项指标名称">

            <el-input v-model="dialogFormEdit.collectitemname"></el-input>
          </el-form-item>
          <el-form-item prop="datacode" label="采集数据项编码">
            <el-input v-model="dialogFormEdit.datacode" disabled></el-input>
          </el-form-item>
          <el-form-item prop="processcode" label="生产工序">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogFormEdit.processcode">
                <el-option v-for="item in processConfigureList" :key="item.processcode" :label="item.processname"
                           :value="item.processcode"></el-option>
              </el-select>

            </el-col>
            <!--<el-input v-model="dialogFormEdit.processcode"></el-input>-->
          </el-form-item>
          <el-form-item prop="processunitcode" label="工序单元">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogFormEdit.processunitcode">
                <el-option v-for="item in unitConfigureList" :key="item.unitcode" :label="item.unitname"
                           :value="item.unitcode"></el-option>
              </el-select>

            </el-col>
          </el-form-item>
          <el-form-item prop="equipmentcode" label="重点耗能设备类型编码">
            <el-input v-model="dialogFormEdit.equipmentcode" disabled></el-input>
          </el-form-item>
          <el-form-item prop="equipmentunitcode" label="重点耗能设备编号">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogFormEdit.equipmentunitcode">
                <el-option v-for="item in equipmentUnitCodeList" :key="item.deviceno" :label="item.devicename"
                           :value="item.deviceno"></el-option>
              </el-select>

            </el-col>
            <!-- <el-input v-model="dialogFormEdit.equipmentunitcode"></el-input>-->
          </el-form-item>
          <el-form-item prop="energyclasscode" label="采集对象类型">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogFormEdit.energyclasscode" clearable>
                <el-option v-for="item in energyClassCodeList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>

            </el-col>
          </el-form-item>
          <el-form-item prop="energytypecode" label="能源分类+分项" v-show="energytypecodeShow">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogFormEdit.energytypecode" clearable>
                <el-option v-for="item in energytypeCodeList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-select placeholder="请选择" v-model="dialogFormEdit.energytypecodeTwo" v-show="energytypecodeTwoShow">
                <el-option v-for="item in energytypeCodeTwoList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="datausagecode" label="用途编码">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogFormEdit.datausagecode">
                <el-option v-for="item in dataUsageCodeList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>

            </el-col>
          </el-form-item>
          <el-form-item prop="inputtype" label="数据采集来源">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogFormEdit.inputtype">
                <el-option v-for="item in inputTypeList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>

            </el-col>
          </el-form-item>
          <el-form-item prop="datavaluemax" label="数据最大值">

            <el-input v-model="dialogFormEdit.datavaluemax"></el-input>
          </el-form-item>
          <el-form-item prop="datavaluemin" label="数据最小值">

            <el-input v-model="dialogFormEdit.datavaluemin"></el-input>
          </el-form-item>
          <el-form-item prop="stattype" label="采集频率">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogFormEdit.stattype">
                <el-option v-for="item in statTypeList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>

            </el-col>
          </el-form-item>
          <el-form-item prop="collectsystemname" label="采集系统名称">

            <el-input v-model="dialogFormEdit.collectsystemname"></el-input>
          </el-form-item>
          <el-form-item prop="scope" label="范围">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogFormEdit.scope">
                <el-option v-for="item in scopeList" :key="item.code" :label="item.name" :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="backupfield1" label="采集数据单元">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogFormEdit.backupfield1" :disabled="backupfield1Disabled">
                <el-option v-for="item in backupfield1List" :key="item.uid" :label="item.name"
                           :value="item.uid"></el-option>
              </el-select>
            </el-col>
          </el-form-item>

          <el-form-item prop="backupfield2" label="采集数据计算组">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogFormEdit.backupfield2" :disabled="backupfield2Disabled">
                <el-option v-for="item in backupfield2List" :key="item.dataCodeId" :label="item.groupName"
                           :value="item.dataCodeId"></el-option>
              </el-select>
            </el-col>
          </el-form-item>

          <el-form-item prop="remark" label="备注">
            <el-input v-model="dialogFormEdit.remark"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button-group style="margin-left: -25%">
              <el-button type="success" @click="saveEdit('dialogFormEdit')">保存</el-button>
              <el-button type="primary" @click="cancleEdit">取消</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="新增用能单位数据采集配置项信息" :visible.sync="dialogFormVisible">
        <el-form ref="dialogForm" :model="dialogForm" :rules="rules" label-width="200px">
          <el-form-item prop="regversion" label="平台服务版本">

            <el-input v-model="dialogForm.regversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="dicversion" label="基础数据版本">

            <el-input v-model="dialogForm.dicversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="enterprisecode" label="统一社会信用代码">

            <el-input v-model="dialogForm.enterprisecode" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="collectitemname" label="采集数据项指标名称">

            <el-input v-model="dialogForm.collectitemname"></el-input>
          </el-form-item>
          <el-form-item prop="datacode" label="采集数据项编码">

            <el-input v-model="dialogForm.datacode" disabled></el-input>
          </el-form-item>
          <el-form-item prop="processcode" label="生产工序">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogForm.processcode">
                <el-option v-for="item in processConfigureList" :key="item.processcode" :label="item.processname"
                           :value="item.processcode"></el-option>
              </el-select>

            </el-col>
            <!--<el-input v-model="dialogFormEdit.processcode"></el-input>-->
          </el-form-item>
          <el-form-item prop="processunitcode" label="工序单元">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogForm.processunitcode">
                <el-option v-for="item in unitConfigureList" :key="item.unitcode" :label="item.unitname"
                           :value="item.unitcode"></el-option>
              </el-select>

            </el-col>
          </el-form-item>
          <el-form-item prop="equipmentcode" label="重点耗能设备类型编码">
            <el-input v-model="dialogForm.equipmentcode" disabled></el-input>
          </el-form-item>
          <el-form-item prop="equipmentunitcode" label="重点耗能设备编号">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogForm.equipmentunitcode">
                <el-option v-for="item in equipmentUnitCodeList" :key="item.deviceno" :label="item.devicename"
                           :value="item.deviceno"></el-option>
              </el-select>

            </el-col>
            <!-- <el-input v-model="dialogFormEdit.equipmentunitcode"></el-input>-->
          </el-form-item>
          <el-form-item prop="energyclasscode" label="采集对象类型">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogForm.energyclasscode" clearable>
                <el-option v-for="item in energyClassCodeList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>

            </el-col>
          </el-form-item>
          <el-form-item prop="energytypecode" label="能源分类+分项" v-show="energytypecodeShow">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogForm.energytypecode">
                <el-option v-for="item in energytypeCodeList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-select placeholder="请选择" v-model="dialogForm.energytypecodeTwo" v-show="energytypecodeTwoShow">
                <el-option v-for="item in energytypeCodeTwoList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="datausagecode" label="用途编码">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogForm.datausagecode">
                <el-option v-for="item in dataUsageCodeList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>

            </el-col>
          </el-form-item>
          <el-form-item prop="inputtype" label="数据采集来源">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogForm.inputtype">
                <el-option v-for="item in inputTypeList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>

            </el-col>
          </el-form-item>
          <el-form-item prop="datavaluemax" label="数据最大值">

            <el-input v-model="dialogForm.datavaluemax"></el-input>
          </el-form-item>
          <el-form-item prop="datavaluemin" label="数据最小值">

            <el-input v-model="dialogForm.datavaluemin"></el-input>
          </el-form-item>
          <el-form-item prop="stattype" label="采集频率">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogForm.stattype">
                <el-option v-for="item in statTypeList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>

            </el-col>
          </el-form-item>
          <el-form-item prop="collectsystemname" label="采集系统名称">

            <el-input v-model="dialogForm.collectsystemname"></el-input>
          </el-form-item>
          <el-form-item prop="scope" label="范围">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogForm.scope">
                <el-option v-for="item in scopeList" :key="item.code" :label="item.name" :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>

          <el-form-item prop="backupfield1" label="采集数据单元">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogForm.backupfield1" :disabled="backupfield1Disabled">
                <el-option v-for="item in backupfield1List" :key="item.uid" :label="item.name"
                           :value="item.uid"></el-option>
              </el-select>
            </el-col>
          </el-form-item>

          <el-form-item prop="backupfield2" label="采集数据计算组">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogForm.backupfield2" :disabled="backupfield2Disabled">
                <el-option v-for="(item,index) in backupfield2List" :key="item.dataCodeId" :label="item.groupName"
                           :value="item.dataCodeId"></el-option>
              </el-select>
            </el-col>
          </el-form-item>

          <el-form-item prop="remark" label="备注">
            <el-input v-model="dialogForm.remark"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button-group style="margin-left: -25%">
              <el-button type="success" @click="saveAdd('dialogForm')">保存</el-button>
              <el-button type="primary" @click="cancleAdd">取消</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-table :data="tableData.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
                :row-class-name="tableRowClassName" >
        <el-table-column type="expand" fixed="left">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="id">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="数据索引">
                <span>{{ props.row.dataindex }}</span>
              </el-form-item>
              <el-form-item label="平台服务版本">
                <span>{{ props.row.regversion }}</span>
              </el-form-item>
              <el-form-item label="基础数据版本">
                <span>{{ props.row.dicversion }}</span>
              </el-form-item>
              <el-form-item label="统一社会信用代码">
                <span>{{ props.row.enterprisecode }}</span>
              </el-form-item>
              <el-form-item label="采集数据项指标名称">
                <span>{{ props.row.collectitemname }}</span>
              </el-form-item>
              <el-form-item label="采集数据项编码">
                <span>{{ props.row.datacode }}</span>
              </el-form-item>
              <el-form-item label="生产工序">
                <span>{{ props.row.processcode }}</span>
              </el-form-item>
              <el-form-item label="工序单元">
                <span>{{ props.row.processunitcode }}</span>
              </el-form-item>
              <el-form-item label="重点耗能设备类型">
                <span>{{ props.row.equipmentcode }}</span>
              </el-form-item>
              <el-form-item label="重点耗能设备编号">
                <span>{{ props.row.equipmentunitcode }}</span>
              </el-form-item>
              <el-form-item label="采集对象类型">
                <span>{{ props.row.energyclasscode }}</span>
              </el-form-item>
              <el-form-item label="用途编码">
                <span>{{ props.row.datausagecode }}</span>
              </el-form-item>
              <el-form-item label="数据最大值">
                <span>{{ props.row.datavaluemax }}</span>
              </el-form-item>
              <el-form-item label="数据最小值">
                <span>{{ props.row.datavaluemin }}</span>
              </el-form-item>
              <el-form-item label="采集频率">
                <span>{{ props.row.stattype }}</span>
              </el-form-item>
              <el-form-item label="采集系统名称">
                <span>{{ props.row.collectsystemname }}</span>
              </el-form-item>
              <el-form-item label="范围">
                <span>{{ props.row.scope }}</span>
              </el-form-item>
              <el-form-item label="采集数据单元">
                <span>{{ props.row.backupField1 }}</span>
              </el-form-item>
              <el-form-item label="采集数据计算组">
                <span>{{ props.row.backupField2 }}</span>
              </el-form-item>
              <el-form-item label="备注">
                <span>{{ props.row.remark }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="id" v-if="false">
        </el-table-column>
        <el-table-column prop="dataindex" label="数据索引" v-if="false">
        </el-table-column>
        <el-table-column prop="regversion" label="平台服务版本" v-if="false">
        </el-table-column>
        <el-table-column prop="dicversion" label="基础数据版本" v-if="false">
        </el-table-column>
        <el-table-column prop="enterprisecode" label="统一社会信用代码" v-if="false">
        </el-table-column>
        <el-table-column prop="collectitemname" label="采集数据项指标名称" fixed="left" width="200">
        </el-table-column>
        <el-table-column prop="datacode" label="采集数据项编码" width="200">
        </el-table-column>
        <el-table-column prop="processcode" label="生产工序" width="200">
        </el-table-column>
        <el-table-column prop="processunitcode" label="工序单元" width="200">
        </el-table-column>
        <el-table-column prop="equipmentcode" label="重点耗能设备类型" width="200">
        </el-table-column>
        <el-table-column prop="equipmentunitcode" label="重点耗能设备编号" width="200">
        </el-table-column>
        <el-table-column prop="energyclasscode" label="采集对象类型" width="200">
        </el-table-column>
        <!--  <el-table-column prop="energytypecode" label="能源分类+分项" width="200">
          </el-table-column>-->
        <el-table-column prop="datausagecode" label="用途编码" width="200">
        </el-table-column>
        <el-table-column prop="inputtype" label="数据采集来源" width="200">
        </el-table-column>
        <el-table-column prop="datavaluemax" label="数据最大值" v-if="false">
        </el-table-column>
        <el-table-column prop="datavaluemin" label="数据最小值" v-if="false">
        </el-table-column>
        <el-table-column prop="stattype" label="采集频率" v-if="false">
        </el-table-column>
        <el-table-column prop="collectsystemname" label="采集系统名称" v-if="false">
        </el-table-column>
        <el-table-column prop="backupField1" label="采集数据单元" v-if="false">
        </el-table-column>
        <el-table-column prop="backupField2" label="采集数据计算组" v-if="false">
        </el-table-column>
        <el-table-column prop="scope" label="范围" v-if="false">
        </el-table-column>
        <el-table-column prop="remark" label="备注" v-if="false">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
            <el-button size="small" type="danger" @click="deleteItem(scope.row)">删除</el-button>
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
    name: "DataCollectconfigure",
    data() {
      return {
        backupfield1Disabled: true,
        backupfield2Disabled: true,
        //采集数据来源单元
        backupfield1List: [],
        //采集数据来源计算组
        calcGroupBeans: [],
        backupfield2List: [],
        //一次能源，二次能源
        EnergyTypeUnitCollectCodes: [],
        energyClassCodeList: [],
        //重点耗能设备编号  重点耗能设备类型根据这个生成
        equipmentUnitCodeList: [
          {'deviceno': '0000', 'devicename': '全厂'},
        ],
        statTypeList: [
          {'code': '0', 'name': '实时'},
          {'code': '1', 'name': '日'},
          {'code': '2', 'name': '月'},
          {'code': '3', 'name': '年'}
        ],
        scopeList: [
          {'code': '1', 'name': '全厂'},
          {'code': '2', 'name': '生产工序'},
          {'code': '3', 'name': '生产工序单元'},
          {'code': '4', 'name': '重点耗能设备'}
        ],
        //生产工序编码，默认全厂00，其余企业自定义，工序单元同理
        processConfigureList: [
          {'processcode': '00', 'processname': '全厂'}
        ],
        //工序单元编码
        unitConfigureList: [
          {'unitcode': '00', 'unitname': '全厂'}
        ],
        dataUsageCodeList: [],
        //能耗工质
        energySubstanceCodes: [],
        //非能源
        unenergyProductCodes: [],
        energytypecodeShow: false,
        energytypecodeTwoShow: false,
        energytypeCodeList: [],
        energytypeCodeTwoList: [],
        inputTypeList: [],
        //能效指标
        energyEfficiencyCodes: [],
        //能效指标分类
        energyEfficiencyType: [],
        //经济指标
        businessTargetCodes: [],
        //其他数据
        otherDataCodes: [],
        //重点用能设备编码
        deviceTypeCodes: [],
        count: '',
        dialogFormVisible: false,
        dialogFormVisibleEdit: false,
        dialogForm: {
          id: '',
          dataindex: '',
          regversion: '',
          dicversion: '',
          enterprisecode: '',
          collectitemname: '',
          datacode: '',
          processcode: '',
          processunitcode: '',
          equipmentcode: '',
          equipmentunitcode: '',
          energyclasscode: '',
          energytypecode: '',
          energytypecodeTwo: '',
          datausagecode: '',
          inputtype: '',
          datavaluemax: '',
          datavaluemin: '',
          stattype: '',
          collectsystemname: '',
          //采集数据单元
          backupfield1: '',
          //采集数据计算组
          backupfield2: '',
          scope: '',
          remark: ''
        },
        dialogFormEdit: {
          id: '',
          dataindex: '',
          regversion: '',
          dicversion: '',
          enterprisecode: '',
          collectitemname: '',
          datacode: '',
          processcode: '',
          processunitcode: '',
          equipmentcode: '',
          equipmentunitcode: '',
          energyclasscode: '',
          energytypecode: '',
          energytypecodeTwo: '',
          datausagecode: '',
          inputtype: '',
          datavaluemax: '',
          datavaluemin: '',
          stattype: '',
          collectsystemname: '',
          //采集数据单元
          backupfield1: '',
          //采集数据计算组
          backupfield2: '',
          scope: '',
          remark: ''
        },
        rules: {
          regversion: [
            {required: true, message: '请输入平台服务版本', trigger: 'blur'},
          ],
          dicversion: [
            {required: true, message: '请输入基础数据版本', trigger: 'blur'},
          ],
          enterprisecode: [
            {required: true, message: '请输入统一社会信用码', trigger: 'blur'}
          ],
          collectitemname: [
            {required: true, message: '请输入采集数据项指标名称', trigger: 'blur'}
          ],
          /*datacode: [
            {required: true, message: '请输入采集数据项编码', trigger: 'blur'}
          ],*/
          processcode: [
            {required: true, message: '生产工序', trigger: 'blur'}
          ],
          processunitcode: [
            {required: true, message: '工序单元', trigger: 'blur'}
          ],
          equipmentcode: [
            {required: true, message: '重点耗能设备类型', trigger: 'blur'}
          ],
          equipmentunitcode: [
            {required: true, message: '重点耗能设备编号', trigger: 'blur'}
          ],
          energyclasscode: [
            {required: true, message: '采集对象类型', trigger: 'blur'},
          ],
          energytypecode: [
            {required: true, message: '能源分类+分项', trigger: 'blur'}
          ],
          datausagecode: [
            {required: true, message: '用途编码', trigger: 'blur'},
          ],
          inputtype: [
            {required: true, message: '数据采集来源', trigger: 'blur'},
          ],
          /* datavaluemax:[
             { required: true, message: '数据最大值', trigger: 'blur' },
             { min: 1, max: 6, message: '长度在 1 到 6 个字符', trigger: 'blur' }
           ],
           datavaluemin:[
             { required: true, message: '数据最小值', trigger: 'blur' },
             { min: 1, max: 6, message: '长度在 1 到 6 个字符', trigger: 'blur' }
           ],*/
          stattype: [
            {required: true, message: '采集频率', trigger: 'blur'},
          ],
          /* collectsystemname:[
             { required: true, message: '采集系统名称', trigger: 'blur' },
             { min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur' }
           ],*/
          scope: [
            {required: true, message: '范围', trigger: 'blur'}
          ],
          /* backupfield1: [
             {required: true, message: '采集数据单元', trigger: 'blur'}
           ],
           backupfield2: [
             {required: true, message: '采集数据计算组', trigger: 'blur'}
           ]*/
        },
        tableData: [],
        page: {
          currentPage: 1, // 当前页
          pageSize: 10, // 每页显示条目个数
          totalCount: 0 // 总条目数
        }
      }
    },
    watch: {
      'dialogForm.backupfield1': {
        handler: function (newVal, oldVal) {
          let self = this;
          /*if (newVal === ''){
            self.backupfield2List = [];
            self.dialogForm.backupfield2 = '';
            return false;
          } else {

          }*/
          self.dialogForm.backupfield2 = '';
          self.backupfield2List = [];
          self.calcGroupBeans.forEach(function (item, index) {
            if (item.uid === Number(newVal)) {
              self.backupfield2List.push(item);
            }
          })
        },
        deep: true,
        immediate: false
      },
      'dialogForm.inputtype': {
        handler: function (newVal, oldVal) {
          let self = this;
          //手工填报
          if (newVal === '5') {
            self.backupfield1Disabled = true;
            self.backupfield2Disabled = true;
          } else {
            self.backupfield1Disabled = false;
            self.backupfield2Disabled = false;
          }
        },
        deep: true,
        immediate: true
      },
      'dialogFormEdit.backupfield1': {
        handler: function (newVal, oldVal) {
          let self = this;
          self.dialogFormEdit.backupfield2 = '';
          self.backupfield2List = [];
          self.calcGroupBeans.forEach(function (item, index) {
            if (item.uid === Number(newVal)) {
              self.backupfield2List.push(item);
            }
          })
        },
        deep: true,
        immediate: true
      },
      'dialogFormEdit.inputtype': {
        handler: function (newVal, oldVal) {
          let self = this;
          //手工填报
          if (newVal === '5' || newVal === '手工填报') {
            self.backupfield1Disabled = true;
            self.backupfield2Disabled = true;
          } else {
            self.backupfield1Disabled = false;
            self.backupfield2Disabled = false;
          }
        },
        deep: true,
        immediate: true
      },
      'dialogForm.scope': {
        handler: function (newVal, oldVal) {
          let self = this;
          //：生产工序编码—工序单元编码—重点设备编码—采集数
          //据分类编码—能源品种编码/耗能工质编码/非能源类产品编码/能效指标编码/经营指标编码/其他数据编
          //码—数据用途
          if (self.dialogForm.energytypecodeTwo !== null && self.dialogForm.energytypecodeTwo !== '') {
            self.dialogForm.datacode = self.dialogForm.processcode + self.dialogForm.processunitcode +
              self.dialogForm.equipmentunitcode + self.dialogForm.energyclasscode +
              self.dialogForm.energytypecodeTwo + self.dialogForm.datausagecode;
          } else {
            self.dialogForm.datacode = self.dialogForm.processcode + self.dialogForm.processunitcode +
              self.dialogForm.equipmentunitcode + self.dialogForm.energyclasscode +
              self.dialogForm.energytypecode + self.dialogForm.datausagecode;
          }

        },
        deep: true,
        immediate: true
      },
      'dialogFormEdit.energyclasscode': {
        handler: function (newVal, oldVal) {
          let self = this;
          if (newVal === '') {
            self.energytypecodeShow = false;
          } else {
            self.energytypecodeShow = true;
            self.dialogFormEdit.energytypecode = '';
            //一次能源及折标系数
            if (newVal === '01' || newVal === '05') {
              //能源品种
              self.energytypeCodeList = [];
              self.EnergyTypeUnitCollectCodes.forEach(function (item, index) {
                if (item.code === '0000') {
                  self.energytypeCodeList.push(item);
                }
                if (item.code === '01') {
                  item.children.forEach(function (item1, index1) {
                    self.energytypeCodeList.push(item1);
                  })
                }

              });

              console.log(self.energytypeCodeList, ' self.energytypeCodeList');
            } else if (newVal === '02' || newVal === '06') {
              //能源品种
              self.energytypeCodeList = [];
              self.EnergyTypeUnitCollectCodes.forEach(function (item, index) {
                if (item.code === '0000') {
                  self.energytypeCodeList.push(item);
                }
                if (item.code === '02') {
                  item.children.forEach(function (item1, index1) {
                    self.energytypeCodeList.push(item1);
                  })
                }

              });
            } else if (newVal === '03' || newVal === '07') {
              //能耗工质
              self.energytypeCodeList = self.energySubstanceCodes;
            } else if (newVal === '04') {
              //非能源类产品
              self.energytypeCodeList = self.unenergyProductCodes;
            } else if (newVal === '08') {
              //能效指标
              self.energytypeCodeList = self.energyEfficiencyType;
            } else if (newVal === '09') {
              //经济指标
              self.energytypeCodeList = self.businessTargetCodes;
            } else if (newVal === '10') {
              self.energytypeCodeList = self.otherDataCodes
            }

          }

        },
        deep: true,
        immediate: true
      },
      'dialogForm.energyclasscode': {
        handler: function (newVal, oldVal) {
          let self = this;
          if (newVal === '') {
            self.energytypecodeShow = false;
          } else {
            self.energytypecodeShow = true;
            self.dialogForm.energytypecode = '';
            //一次二次能源及折标系数
            if (newVal === '01' || newVal === '05') {
              //能源品种
              self.energytypeCodeList = [];
              self.EnergyTypeUnitCollectCodes.forEach(function (item, index) {
                if (item.code === '0000') {
                  self.energytypeCodeList.push(item);
                }
                if (item.code === '01') {
                  item.children.forEach(function (item1, index1) {
                    self.energytypeCodeList.push(item1);
                  })
                }

              });

              console.log(self.energytypeCodeList, ' self.energytypeCodeList');
            } else if (newVal === '02' || newVal === '06') {
              //能源品种
              self.energytypeCodeList = [];
              self.EnergyTypeUnitCollectCodes.forEach(function (item, index) {
                if (item.code === '0000') {
                  self.energytypeCodeList.push(item);
                }
                if (item.code === '02') {
                  item.children.forEach(function (item1, index1) {
                    self.energytypeCodeList.push(item1);
                  })
                }

              });
            } else if (newVal === '03' || newVal === '07') {
              //能耗工质
              self.energytypeCodeList = self.energySubstanceCodes;
            } else if (newVal === '04') {
              //非能源类产品
              self.energytypeCodeList = self.unenergyProductCodes;
            } else if (newVal === '08') {
              //能效指标
              self.energytypeCodeList = self.energyEfficiencyType;
            } else if (newVal === '09') {
              //经济指标
              self.energytypeCodeList = self.businessTargetCodes;
            } else if (newVal === '10') {
              self.energytypeCodeList = self.otherDataCodes
            }

          }

        },
        deep: true,
        immediate: true
      },
      'dialogFormEdit.energytypecode': {
        handler: function (newVal, oldVal) {
          let self = this;
          if (self.dialogFormEdit.energyclasscode === '08') {
            if (newVal === '') {
              self.energytypecodeTwoShow = false;
              self.dialogFormEdit.energytypecodeTwo = '';
            } else {
              self.energytypecodeTwoShow = true;
              self.dialogFormEdit.energytypecodeTwo = '';
              self.energytypeCodeTwoList = [];
              let industry;
              self.energyEfficiencyType.forEach(function (item, index) {
                if (item.code === newVal) {
                  industry = item.name;
                }
              })
              self.energyEfficiencyCodes.forEach(function (item, index) {
                if (item.industry === industry) {
                  self.energytypeCodeTwoList.push(item);
                }
              });
            }
          } else if (self.dialogFormEdit.energyclasscode === '01' || self.dialogFormEdit.energyclasscode === '05'
            || self.dialogFormEdit.energyclasscode === '02' || self.dialogFormEdit.energyclasscode === '06') {
            if (newVal === '') {
              self.energytypecodeTwoShow = false;
              self.dialogFormEdit.energytypecodeTwo = '';
            } else {
              self.energytypeCodeList.forEach(function (item, index) {
                if (item.code === newVal) {
                  if (item.children !== undefined && item.children !== null && item.children.length > 0) {
                    self.energytypeCodeTwoList = item.children;
                    self.energytypecodeTwoShow = true;
                  } else {
                    self.energytypeCodeTwoList = [];
                    self.dialogFormEdit.energytypecodeTwo = '';
                    self.energytypecodeTwoShow = false;
                  }

                }
              })
            }
          } else {
            self.energytypecodeTwoShow = false;
            self.dialogFormEdit.energytypecodeTwo = '';
            self.energytypeCodeTwoList = [];
          }

        },
        deep: true,
        immediate: true
      },
      'dialogForm.energytypecode': {
        handler: function (newVal, oldVal) {
          let self = this;
          if (self.dialogForm.energyclasscode === '08') {
            if (newVal === '') {
              self.energytypecodeTwoShow = false;
              self.dialogForm.energytypecodeTwo = '';
            } else {
              self.energytypecodeTwoShow = true;
              self.dialogForm.energytypecodeTwo = '';
              self.energytypeCodeTwoList = [];
              let industry;
              self.energyEfficiencyType.forEach(function (item, index) {
                if (item.code === newVal) {
                  industry = item.name;
                }
              })
              self.energyEfficiencyCodes.forEach(function (item, index) {
                if (item.industry === industry) {
                  self.energytypeCodeTwoList.push(item);
                }
              });
            }
          } else if (self.dialogForm.energyclasscode === '01' || self.dialogForm.energyclasscode === '05'
            || self.dialogForm.energyclasscode === '02' || self.dialogForm.energyclasscode === '06') {
            if (newVal === '') {
              self.energytypecodeTwoShow = false;
              self.dialogForm.energytypecodeTwo = '';
            } else {
              self.energytypeCodeList.forEach(function (item, index) {
                if (item.code === newVal) {
                  if (item.children !== undefined && item.children !== null && item.children.length > 0) {
                    self.energytypeCodeTwoList = item.children;
                    self.energytypecodeTwoShow = true;
                  } else {
                    self.energytypeCodeTwoList = [];
                    self.dialogForm.energytypecodeTwo = '';
                    self.energytypecodeTwoShow = false;
                  }

                }
              })
            }
          } else {
            self.energytypecodeTwoShow = false;
            self.dialogForm.energytypecodeTwo = '';
            self.energytypeCodeTwoList = [];
          }

        },
        deep: true,
        immediate: true
      },
      'dialogFormEdit.equipmentunitcode': {
        handler: function (newVal, oldVal) {
          let self = this;
          if (newVal === '') {
            self.dialogFormEdit.equipmentcode = '';
          } else {

            self.dialogFormEdit.equipmentcode = newVal.substring(0, 2);
            /*let code = newVal.substring(0,2);
            self.deviceTypeCodes.forEach(function (item,index) {
              if (item.code === code){
                self.dialogFormEdit.equipmentcode = item.name;
              }
            });*/
          }

        },
        deep: true,
        immediate: true

      },
      'dialogForm.equipmentunitcode': {
        handler: function (newVal, oldVal) {
          let self = this;
          if (newVal === '') {
            self.dialogForm.equipmentcode = '';
          } else {

            self.dialogForm.equipmentcode = newVal.substring(0, 2);
            /*let code = newVal.substring(0,2);
            self.deviceTypeCodes.forEach(function (item,index) {
              if (item.code === code){
                self.dialogFormEdit.equipmentcode = item.name;
              }
            });*/
          }

        },
        deep: true,
        immediate: true

      }
    },
    methods: {
      saveAdd(formName) {
        let self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let dataAdd = self.dialogForm;
            if (dataAdd.energytypecodeTwo !== '') {
              dataAdd.energytypecode = dataAdd.energytypecodeTwo;
            }
            let data = {
              "data": dataAdd
            };
            self.$http.post(self.$baseUrl + "/dataCollectConfigure/add", data, self.$config).then(
              res => {
                console.log(res);
                if (res.data.code === 0) {
                  self.$message({
                    message: '新增数据采集配置项信息成功',
                    type: 'success'
                  });
                } else {
                  self.$message({
                    message: '新增失败:' + res.data.result.responseMessage,
                    type: 'warning'
                  });
                }
                self.dialogFormVisible = false;
                self.getList(self.dialogForm.enterprisecode);
                self.dialogForm.energytypecode = '';
              }, reason => {
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
            let dataEdit = self.dialogFormEdit;
            console.log(dataEdit, 'dataEdit');
            if (dataEdit.energytypecodeTwo !== '') {
              dataEdit.energytypecode = dataEdit.energytypecodeTwo;
            }

            self.inputTypeList.forEach(function (item, index) {
              if (dataEdit.inputtype === item.name) {
                dataEdit.inputtype = item.code;
              }
            });

            self.processConfigureList.forEach(function (item, index) {
              if (dataEdit.processcode === item.processname) {
                dataEdit.processcode = item.processcode;
              }
            });

            self.unitConfigureList.forEach(function (item, index) {
              if (dataEdit.processunitcode === item.unitname) {
                dataEdit.processunitcode = item.unitcode;
              }
            })

            self.scopeList.forEach(function (item, index) {
              if (dataEdit.scope === item.name) {
                dataEdit.scope = item.code;
              }
            })

            self.statTypeList.forEach(function (item, index) {
              if (dataEdit.stattype === item.name) {
                dataEdit.stattype = item.code;
              }
            });

            self.dataUsageCodeList.forEach(function (item, index) {
              if (dataEdit.datausagecode === item.name) {
                dataEdit.datausagecode = item.code;
              }
            })

            dataEdit.datacode = dataEdit.processcode + dataEdit.processunitcode +
              dataEdit.equipmentunitcode + dataEdit.energyclasscode +
              dataEdit.energytypecode + dataEdit.datausagecode;
            console.log(dataEdit, 'dataEdit11111');

            let data = {
              "data": dataEdit
            };

            self.$http.post(self.$baseUrl + "/dataCollectConfigure/update", data, self.$config).then(
              res => {
                console.log(res);
                if (res.data.code === 0) {
                  self.$message({
                    message: '更新数据采集配置项信息成功',
                    type: 'success'
                  });
                } else {
                  self.$message({
                    message: '更新失败:' + res.data.result.responseMessage,
                    type: 'warning'
                  });
                }
                self.dialogFormVisibleEdit = false;
                self.getList(self.dialogFormEdit.enterprisecode)
              }, reason => {
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
      getList(eCode) {
        var self = this;
        let data = {
          'enterpriseCode': eCode
        }
        //获取数据
        self.$http.post(self.$baseUrl + "/dataCollectConfigure/list", data).then(res => {
          console.log(res);
          if (res.data.code === 0) {
            let table = res.data.result;
            console.log(table, 'table');
            self.page.totalCount = res.data.result.length;

            if (table.length > 0) {
              table.forEach(function (item, index) {
                //范围
                self.scopeList.forEach(function (item1, index1) {
                  if (item1.code === item.scope) {
                    item.scope = item1.name;
                  }
                });
                //生产工序
                self.processConfigureList.forEach(function (item2, index2) {
                  if (item2.processcode === item.processcode) {
                    item.processcode = item2.processname;
                  }
                });
                //工序单元
                self.unitConfigureList.forEach(function (item3, index3) {
                  if (item3.unitcode === item.processunitcode) {
                    item.processunitcode = item3.unitname;
                  }
                });

                //equipmentcode 设备类型
                self.deviceTypeCodes.forEach(function (item4, index4) {
                  if (item4.code === item.equipmentcode) {
                    item.equipmentcode = item4.name;
                  }
                });

                //采集对象类型
                self.energyClassCodeList.forEach(function (item5, index5) {
                  if (item5.code === item.energyclasscode) {
                    item.energyclasscode = item5.name;
                  }
                });

                //用途编码
                self.dataUsageCodeList.forEach(function (item6, index6) {
                  if (item6.code === item.datausagecode) {
                    item.datausagecode = item6.name;
                  }
                });

                //采集来源
                self.inputTypeList.forEach(function (item7, index7) {
                  if (item7.code === item.inputtype) {
                    item.inputtype = item7.name;
                  }
                });

                //采集频率
                self.statTypeList.forEach(function (item8, index8) {
                  if (item8.code === item.stattype) {
                    item.stattype = item8.name;
                  }
                });

                //采集数据计算组
                self.calcGroupBeans.forEach(function (item10,index10) {
                  if (item10.dataCodeId === Number(item.backupField2) && item10.uid === Number(item.backupField1) ){
                    item.backupField2 = item10.groupName;
                  }
                })

                //采集数据单元
                self.backupfield1List.forEach(function (item9,index9) {
                  if (item9.uid === item.backupField1){
                    item.backupField1 = item9.name;
                  }
                })

              });
            }

            self.tableData = table;
          }
        }, res => {
          console.log("加载失败");
        })
      },
      handleClick(row) {
        let self = this;

        self.dialogFormVisibleEdit = true;

        self.dialogFormEdit.id = row.id;
        self.dialogFormEdit.dataindex = row.dataindex;
        self.dialogFormEdit.regversion = row.regversion;
        self.dialogFormEdit.dicversion = row.dicversion;
        self.dialogFormEdit.enterprisecode = row.enterprisecode;
        self.dialogFormEdit.collectitemname = row.collectitemname;
        self.dialogFormEdit.datacode = '';
        self.dialogFormEdit.processcode = row.processcode;
        self.dialogFormEdit.processunitcode = row.processunitcode;
        self.dialogFormEdit.equipmentunitcode = row.equipmentunitcode;
        self.dialogFormEdit.equipmentcode = row.equipmentcode;
        self.dialogFormEdit.energyclasscode = row.energyclasscode;
        self.dialogFormEdit.datausagecode = row.datausagecode;
        self.dialogFormEdit.inputtype = row.inputtype;
        self.dialogFormEdit.datavaluemax = row.datavaluemax;
        self.dialogFormEdit.datavaluemin = row.datavaluemin;
        self.dialogFormEdit.stattype = row.stattype;
        self.dialogFormEdit.collectsystemname = row.collectsystemname;
        self.dialogFormEdit.scope = row.scope;
        self.dialogFormEdit.remark = row.remark;

        console.log(self.backupfield1Disabled, 'self.backupfield1Disabled');
        console.log(self.backupfield2Disabled, 'self.backupfield2Disabled');
        if (self.dialogFormEdit.inputtype === "手工填报") {
          self.backupfield1Disabled = true;
          self.backupfield2Disabled = true;
        } else {
          self.backupfield1Disabled = false;
          self.backupfield2Disabled = false;
        }
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      compare(val1, val2) {
        return Number(val1.code) - Number(val2.code);
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
        self.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let data = {
            'data': row
          };

          self.$http.post(self.$baseUrl + "/dataCollectConfigure/delete", data, self.$config).then(
            res => {
              console.log(res);
              if (res.data.code === 0) {
                self.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                self.getList(row.enterprisecode);
              } else {
                self.$message({
                  type: 'warning',
                  message: '删除失败:' + res.data.result.responseMessage
                });
              }
            }, res => {
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
      self.backupfield1List.push({'uid': self.$cookies.get('uid'), 'name': self.$cookies.get('ClientName')});
      //获取一次能源，二次能源
      this.$http.get(self.$baseUrl +'/regionData/EnergyTypeUnitCollectCodes').then(res => {
        console.log(res);
        if (res.data.errno === 0) {
          this.EnergyTypeUnitCollectCodes = res.data.data;
        }
      }, res => {
        console.log("加载失败")
      });

      let data = {
        "enterpriseCode": self.$cookies.get('enterpriseCode'),
        "token": self.$cookies.get('token'),
        "uid": self.$cookies.get('uid')
      };
      self.$http.post(self.$baseUrl + "/dataCollectConfigure/getBasicData", data, self.$config).then(res => {
        console.log(res, 'res00012312');
        if (res.data !== null && res.data.code === 0 && res.data.result !== null) {
          let basicData = res.data.result;
          //生产工序
          if (basicData.processConfigureModels !== null && basicData.processConfigureModels.length > 0) {
            basicData.processConfigureModels.forEach(function (item, index) {
              self.processConfigureList.push(item);
            })
          }
          //工序单元
          if (basicData.unitConfigureModels !== null && basicData.unitConfigureModels.length > 0) {
            basicData.unitConfigureModels.forEach(function (item, index) {
              self.unitConfigureList.push(item);
            })
          }
          //equipmentUnitCodeList 重点耗能设备编号
          if (basicData.deviceConfigureModels !== null && basicData.deviceConfigureModels.length > 0) {
            basicData.deviceConfigureModels.forEach(function (item, index) {
              self.equipmentUnitCodeList.push(item);
            })
          }
          //energyClassCodeList 采集对象类型
          if (basicData.energyClassCode !== null && basicData.energyClassCode.length > 0) {
            basicData.energyClassCode.forEach(function (item, index) {
              self.energyClassCodeList.push(item);
            })
          }
          self.energyClassCodeList.sort(self.compare);

          //TODO  能源分类 + 分项
          //能耗工质
          if (basicData.energySubstanceCodes !== null && basicData.energySubstanceCodes.length > 0) {
            basicData.energySubstanceCodes.forEach(function (item, index) {
              if (item.code !== '80') {
                self.energySubstanceCodes.push(item)
              }
            })
          }
          self.energySubstanceCodes.sort(self.compare);
          //非能源
          if (basicData.unenergyProductCodes !== null && basicData.unenergyProductCodes.length > 0) {
            basicData.unenergyProductCodes.forEach(function (item, index) {
              self.unenergyProductCodes.push(item)
            })
          }
          self.unenergyProductCodes.sort(self.compare);
          //用途编码
          if (basicData.dataUsageCode !== null && basicData.dataUsageCode.length > 0) {
            basicData.dataUsageCode.forEach(function (item, index) {
              if (item.code !== '80') {
                self.dataUsageCodeList.push(item)
              }
            })
          }
          self.dataUsageCodeList.sort(self.compare);


          //数据采集来源
          if (basicData.inputType !== null && basicData.inputType.length > 0) {
            basicData.inputType.forEach(function (item, index) {
              self.inputTypeList.push(item)
            })
          }
          self.inputTypeList.sort(self.compare);

          //能效指标以及分类
          if (basicData.energyEfficiencyCodes !== null && basicData.energyEfficiencyCodes.length > 0) {
            basicData.energyEfficiencyCodes.forEach(function (item, index) {
              self.energyEfficiencyCodes.push(item)
            })
          }
          self.energyEfficiencyCodes.sort(self.compare);
          //分类
          if (basicData.energyEfficiencyType !== null && basicData.energyEfficiencyType.length > 0) {
            basicData.energyEfficiencyType.forEach(function (item, index) {
              self.energyEfficiencyType.push(item)
            })
          }

          //经济指标
          if (basicData.businessTargetCodes !== null && basicData.businessTargetCodes.length > 0) {
            basicData.businessTargetCodes.forEach(function (item, index) {
              self.businessTargetCodes.push(item)
            })
          }
          self.businessTargetCodes.sort(self.compare);

          //其他数据
          if (basicData.otherDataCodes !== null && basicData.otherDataCodes.length > 0) {
            basicData.otherDataCodes.forEach(function (item, index) {
              self.otherDataCodes.push(item)
            })
          }
          self.otherDataCodes.sort(self.compare);

          //重点用能设备分类编码
          if (basicData.deviceTypeCodes !== null && basicData.deviceTypeCodes.length > 0) {
            basicData.deviceTypeCodes.forEach(function (item, index) {
              self.deviceTypeCodes.push(item)
            })
          }
          self.deviceTypeCodes.sort(self.compare);

          //用能单元
          if (basicData.unitInfoBeans !== undefined && basicData.unitInfoBeans !== null && basicData.unitInfoBeans.length > 0) {
            basicData.unitInfoBeans.forEach(function (item, index) {
              self.backupfield1List.push(item);
            })
          }
          self.backupfield1List.sort(self.compare);
          //计算组
          if (basicData.calcGroupBeans !== undefined && basicData.calcGroupBeans !== null && basicData.calcGroupBeans.length > 0) {
            basicData.calcGroupBeans.forEach(function (item, index) {
              self.calcGroupBeans.push(item);
            })
          }
          self.calcGroupBeans.sort(self.compare);
        }

        self.$http.post(self.$baseUrl + "/dataCollectConfigure/getVersion", data, self.$config).then(res => {
          console.log(res);
          if (res.data.code === 0) {
            self.dialogForm.enterprisecode = res.data.result.enterprisecode;
            self.dialogForm.regversion = res.data.result.regversion;
            self.dialogForm.dicversion = res.data.result.dicversion;
          }
        }, ret => {
          console.log("获取Version失败");
        });

        //获取列表
        self.getList(self.$cookies.get('enterpriseCode'));

      }, reason => {
        console.log("获取getBasicData失败");
      })
    }
  }
</script>

<style>
  .el-table--enable-row-transition .el-table__body td {
    text-align: -webkit-left;
  }

  .el-table .cell {
    text-align: center;
  }

  .el-form--inline .el-form-item__content {
    display: inline-block;
    vertical-align: middle;
  }
</style>

<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
