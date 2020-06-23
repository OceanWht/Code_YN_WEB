<template>
  <el-container>
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="编辑用能单位计量器具信息" :visible.sync="dialogFormVisibleEdit" >
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
          <el-form-item prop="metername" label="计量器具名称">
              <el-input v-model="dialogFormEdit.metername"></el-input>
          </el-form-item>
          <el-form-item prop="metertype" label="计量器具类型">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogFormEdit.metertype" clearable>
                <el-option v-for="item in metertypeCodeList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-select placeholder="请选择" v-model="dialogFormEdit.metertypecodeTwo" v-show="metertypecodeTwoShow">
                <el-option v-for="item in metertypeCodeTwoList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
            <el-form-item label="器具等级"  prop="meterlevel">
              <el-col :span="7">
              <el-select v-model="dialogFormEdit.meterlevel" placeholder="请选择">
                <el-option v-for="item in meterlevellist" :key="item.code" :label="item.value"
                           :value="item.code"></el-option>
              </el-select>
              </el-col>
            </el-form-item>
          <el-form-item label="计量相关参数类型" prop="paramsType">
            <el-col :span="7">
              <el-select v-model="dialogFormEdit.paramsType" placeholder="请选择">
                <el-option v-for="item in paramsTypelist" :key="item.code" :label="item.value"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="params" label="计量相关参数">
              <el-input v-model="dialogFormEdit.params"></el-input>
          </el-form-item>
          <el-form-item prop="datacode" label="所属上报数据组合编码">
            <el-col :span="7">
              <el-select v-model="dialogFormEdit.datacode" placeholder="请选择" filterable clearable>
                <el-option
                  v-for="item in dataCodeList"
                  :key="item.code"
                  :label="item.code"
                  :value="item.code">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="与上报数据组合编码算术关系" prop="reportarithmetic">
            <el-col :span="7">
              <el-select v-model="dialogFormEdit.reportarithmetic" placeholder="请选择">
                <el-option v-for="item in reportarithmeticlist" :key="item.code" :label="item.value"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="与上报数据组合编码算术系数" prop="reportratio">
            <el-col :span="7">
              <el-select v-model="dialogFormEdit.reportratio" placeholder="请选择">
                <el-option v-for="item in reportratiolist" :key="item.code" :label="item.value"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="manufacturer" label="生产厂家">
              <el-input v-model="dialogFormEdit.manufacturer"></el-input>
          </el-form-item>
          <el-form-item prop="model" label="规格型号">
              <el-input v-model="dialogFormEdit.model"></el-input>
          </el-form-item>
          <el-form-item prop="precisionlevel" label="精确度等级">
              <el-input v-model="dialogFormEdit.precisionlevel"></el-input>
          </el-form-item>
          <el-form-item prop="ranges" label="测量范围">
              <el-input v-model="dialogFormEdit.ranges"></el-input>
          </el-form-item>
          <el-form-item prop="manageno" label="管理编号">
              <el-input v-model="dialogFormEdit.manageno"></el-input>
          </el-form-item>
          <el-form-item prop="alignstate" label="检定校准状态">
            <el-col :span="7">
              <el-select v-model="dialogFormEdit.alignstate" placeholder="请选择" filterable clearable>
                <el-option
                  v-for="item in optionsAlignstate"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="aligncycle" label="检定校准周期">
              <el-input v-model="dialogFormEdit.aligncycle"></el-input>
          </el-form-item>
          <el-form-item label="最近一次检定校准时间" prop="lastaligndate">
            <el-col :span="8">
              <el-date-picker
                v-model="dialogFormEdit.lastaligndate"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="下次一次检定校准时间" prop="nextaligndate">
            <el-col :span="8">
              <el-date-picker
                v-model="dialogFormEdit.nextaligndate"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item prop="alignorg" label="检测机构">
              <el-input v-model="dialogFormEdit.alignorg"></el-input>
          </el-form-item>
          <el-form-item prop="unalignreason" label="未检定/校准原因">
              <el-input v-model="dialogFormEdit.unalignreason"></el-input>
          </el-form-item>
          <el-form-item prop="location" label="安装地点">
              <el-input v-model="dialogFormEdit.location"></el-input>
          </el-form-item>
          <el-form-item prop="installer" label="安装方">
            <el-col :span="7">
              <el-select v-model="dialogFormEdit.installer" placeholder="请选择" filterable clearable>
                <el-option
                  v-for="item in optionsInstaller"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="安装时间" prop="installtime">
            <el-col :span="8">
              <el-date-picker
                v-model="dialogFormEdit.installtime"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item prop="linksys" label="接入系统">
            <el-col :span="7">
              <el-select v-model="dialogFormEdit.linksys" placeholder="请选择" filterable clearable>
                <el-option
                  v-for="item in optionsLinkSys"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="currentstate" label="当前状态">
            <el-col :span="7">
              <el-select v-model="dialogFormEdit.currentstate" placeholder="请选择" filterable clearable>
                <el-option
                  v-for="item in optionsCurrentState"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="状态发生时间" prop="statechangetime">
            <el-col :span="8">
              <el-date-picker
                v-model="dialogFormEdit.statechangetime"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item prop="serno" label="设备出产序列号">
              <el-input v-model="dialogFormEdit.serno"></el-input>
          </el-form-item>
          <el-form-item prop="barcode" label="计量器具二维码">
              <el-input v-model="dialogFormEdit.barcode"></el-input>
          </el-form-item>
          <el-form-item prop="barcode" label="备注">
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
      <el-dialog title="新增用能单位计量器具信息" :visible.sync="dialogFormVisible" >
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
          <el-form-item prop="metername" label="计量器具名称">
              <el-input v-model="dialogForm.metername"></el-input>
          </el-form-item>
          <el-form-item prop="metertype" label="计量器具类型">
            <el-col :span="7">
              <el-select placeholder="请选择" v-model="dialogForm.metertype" clearable>
                <el-option v-for="item in metertypeCodeList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-select placeholder="请选择" v-model="dialogForm.metertypecodeTwo" v-show="metertypecodeTwoShow">
                <el-option v-for="item in metertypeCodeTwoList" :key="item.code" :label="item.name"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="器具等级" prop="meterlevel">
            <el-col :span="7">
              <el-select v-model="dialogForm.meterlevel" placeholder="请选择">
                <el-option v-for="item in meterlevellist" :key="item.code" :label="item.value"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="计量相关参数类型" prop="paramsType">
            <el-col :span="7">
              <el-select v-model="dialogForm.paramsType" placeholder="请选择">
                <el-option v-for="item in paramsTypelist" :key="item.code" :label="item.value"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="params" label="计量相关参数">
              <el-input v-model="dialogForm.params"></el-input>
          </el-form-item>
          <el-form-item prop="datacode" label="所属上报数据组合编码">
            <el-col :span="7">
              <el-select v-model="dialogForm.datacode" placeholder="请选择" filterable clearable>
                <el-option
                  v-for="item in dataCodeList"
                  :key="item.code"
                  :label="item.code"
                  :value="item.code">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="与上报数据组合编码算术关系" prop="reportarithmetic">
            <el-col :span="7">
              <el-select v-model="dialogForm.reportarithmetic" placeholder="请选择">
                <el-option v-for="item in reportarithmeticlist" :key="item.code" :label="item.value"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="与上报数据组合编码算术系数" prop="reportratio">
            <el-col :span="7">
              <el-select v-model="dialogForm.reportratio" placeholder="请选择">
                <el-option v-for="item in reportratiolist" :key="item.code" :label="item.value"
                           :value="item.code"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="manufacturer" label="生产厂家">
              <el-input v-model="dialogForm.manufacturer"></el-input>
          </el-form-item>
          <el-form-item prop="model" label="规格型号">
              <el-input v-model="dialogForm.model"></el-input>
          </el-form-item>
          <el-form-item prop="precisionlevel" label="精确度等级">
              <el-input v-model="dialogForm.precisionlevel"></el-input>
          </el-form-item>
          <el-form-item prop="ranges" label="测量范围">
              <el-input v-model="dialogForm.ranges"></el-input>
          </el-form-item>
          <el-form-item prop="manageno" label="管理编号">
              <el-input v-model="dialogForm.manageno"></el-input>
          </el-form-item>
          <el-form-item prop="alignstate" label="检定校准状态">
            <el-col :span="7">
              <el-select v-model="dialogForm.alignstate" placeholder="请选择" filterable clearable>
                <el-option
                  v-for="item in optionsAlignstate"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="aligncycle" label="检定校准周期">
              <el-input v-model="dialogForm.aligncycle"></el-input>
          </el-form-item>
          <el-form-item label="最近一次检定校准时间" prop="lastaligndate">
            <el-col :span="8">
              <el-date-picker
                v-model="dialogForm.lastaligndate"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="下次一次检定校准时间" prop="nextaligndate">
            <el-col :span="8">
              <el-date-picker
                v-model="dialogForm.nextaligndate"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item prop="alignorg" label="检测机构">
              <el-input v-model="dialogForm.alignorg"></el-input>
          </el-form-item>
          <el-form-item prop="unalignreason" label="未检定/校准原因">
              <el-input v-model="dialogForm.unalignreason"></el-input>
          </el-form-item>
          <el-form-item prop="location" label="安装地点">
              <el-input v-model="dialogForm.location"></el-input>
          </el-form-item>
          <el-form-item prop="installer" label="安装方">
            <el-col :span="7">
            <el-select v-model="dialogForm.installer" placeholder="请选择" filterable clearable>
              <el-option
                v-for="item in optionsInstaller"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="安装时间" prop="installtime">
            <el-col :span="8">
              <el-date-picker
                v-model="dialogForm.installtime"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item prop="linksys" label="接入系统">
            <el-col :span="7">
            <el-select v-model="dialogForm.linksys" placeholder="请选择" filterable clearable>
              <el-option
                v-for="item in optionsLinkSys"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="currentstate" label="当前状态">
            <el-col :span="7">
            <el-select v-model="dialogForm.currentstate" placeholder="请选择" filterable clearable>
              <el-option
                v-for="item in optionsCurrentState"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="状态发生时间" prop="statechangetime">
            <el-col :span="8">
              <el-date-picker
                v-model="dialogForm.statechangetime"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item prop="serno" label="设备出产序列号">
              <el-input v-model="dialogForm.serno"></el-input>
          </el-form-item>
          <el-form-item prop="barcode" label="计量器具二维码">
              <el-input v-model="dialogForm.barcode"></el-input>
          </el-form-item>
          <el-form-item prop="barcode" label="备注">
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
      <el-table :data="tableData.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"  :row-class-name="tableRowClassName">
        <el-table-column prop="id" label="id" v-if="false">
        </el-table-column>
        <el-table-column prop="dataindex" label="数据索引" v-if="false">
        </el-table-column>
        <el-table-column prop="regversion" label="平台服务版本" fixed="left" width="200">
        </el-table-column>
        <el-table-column prop="dicversion" label="基础数据版本" width="200">
        </el-table-column>
        <el-table-column prop="enterprisecode" label="统一社会信用代码" width="200">
        </el-table-column>
        <el-table-column prop="metername" label="计量器具名称" width="200">
        </el-table-column>
        <el-table-column prop="metertype" label="计量器具类型" width="200">
        </el-table-column>
        <el-table-column prop="meterlevel" label="器具等级" width="200">
        </el-table-column>
        <el-table-column prop="params" label="计量相关参数" width="200">
        </el-table-column>
        <el-table-column prop="datacode" label="所属上报数据组合编码" width="200">
        </el-table-column>
        <el-table-column prop="reportarithmetic" label="与上报数据组合编码算术关系" width="200">
        </el-table-column>
        <el-table-column prop="reportratio" label="与上报数据组合编码算术系数" width="200">
        </el-table-column>
        <el-table-column prop="manufacturer" label="生产厂家" width="200">
        </el-table-column>
        <el-table-column prop="model" label="规格型号" width="200">
        </el-table-column>
        <el-table-column prop="precisionlevel" label="精确度等级" width="200">
        </el-table-column>
        <el-table-column prop="ranges" label="测量范围" width="200">
        </el-table-column>
        <el-table-column prop="manageno" label="管理编号" width="200">
        </el-table-column>
        <el-table-column prop="alignstate" label="检定校准状态" width="200">
        </el-table-column>
        <el-table-column prop="aligncycle" label="检定校准周期" width="200">
        </el-table-column>
        <el-table-column prop="lastaligndate" label="最近一次检定校准时间" width="200">
        </el-table-column>
        <el-table-column prop="nextaligndate" label="下次一次检定校准时间" width="200">
        </el-table-column>
        <el-table-column prop="alignorg" label="检测机构" width="200">
        </el-table-column>
        <el-table-column prop="unalignreason" label="未检定/校准原因" width="200">
        </el-table-column>
        <el-table-column prop="location" label="安装地点" width="200">
        </el-table-column>
        <el-table-column prop="installer" label="安装方" width="200">
        </el-table-column>
        <el-table-column prop="installtime" label="安装时间" width="200">
        </el-table-column>
        <el-table-column prop="linksys" label="接入系统" width="200">
        </el-table-column>
        <el-table-column prop="currentstate" label="当前状态" width="200">
        </el-table-column>
        <el-table-column prop="statechangetime" label="状态发生时间" width="200">
        </el-table-column>
        <el-table-column prop="serno" label="设备出产序列号" width="200">
        </el-table-column>
        <el-table-column prop="barcode" label="计量器具二维码" width="200">
        </el-table-column>
        <el-table-column prop="remark" label="备注" width="200">
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
    name: "GaugeConfigure",
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        count:'',
        dialogFormVisible:false,
        dialogFormVisibleEdit:false,
        metertypecodeShow: false,
        metertypecodeTwoShow: false,
        MetertypeJsonCodes: [],
        metertypeCodeList:[],
        metertypeCodeTwoList:[],
        dialogForm:{
          id:'',
          regversion:'',
          dicversion:'',
          dataindex:'',
          enterprisecode:'',
          metername:'',
          metertype:'',
          metertypecodeTwo:'',
          meterlevel:'',
          paramsType:'',
          params:'',
          datacode:'',
          reportarithmetic:'',
          reportratio:'',
          manufacturer:'',
          model:'',
          precisionlevel:'',
          ranges:'',
          manageno:'',
          alignstate:'',
          aligncycle:'',
          lastaligndate:'',
          nextaligndate:'',
          alignorg:'',
          unalignreason:'',
          location:'',
          installer:'',
          installtime:'',
          linksys:'',
          currentstate:'',
          statechangetime:'',
          serno:'',
          barcode:'',
          remark:''
        },
        dialogFormEdit:{
          id:'',
          regversion:'',
          dicversion:'',
          dataindex:'',
          enterprisecode:'',
          metername:'',
          metertype:'',
          metertypecodeTwo:'',
          meterlevel:'',
          paramsType:'',
          params:'',
          datacode:'',
          reportarithmetic:'',
          reportratio:'',
          manufacturer:'',
          model:'',
          precisionlevel:'',
          ranges:'',
          manageno:'',
          alignstate:'',
          aligncycle:'',
          lastaligndate:'',
          nextaligndate:'',
          alignorg:'',
          unalignreason:'',
          location:'',
          installer:'',
          installtime:'',
          linksys:'',
          currentstate:'',
          statechangetime:'',
          serno:'',
          barcode:'',
          remark:''
        },
        meterlevellist:[
          {code: '1', value: '进出用能计量器具'},
          {code: '2', value: '主要次级用能计量器具'},
          {code: '3', value: '主要用能设备计量器具'}
        ],
        paramsTypelist:[
          {code: '1', value: '能源品种'},
          {code: '2', value: '能耗工质'},
          {code: '3', value: '企业自定义物料'},
          {code: '4', value: '非能源品种'},
          {code: '5', value: '质量参数'}
        ],
        reportarithmeticlist:[
          {code: '1', value: '加'},
          {code: '2', value: '减'},
          {code: '3', value: '乘'},
          {code: '4', value: '除'}
        ],
        reportratiolist:[
          {code: '1', value: '全部'},
          {code: '0.5', value: '该计量'}
        ],
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
          metername:[
            { required: true, message: '计量器具名称', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          metertype:[
            { required: true, message: '计量器具类型', trigger: 'blur' },
            { min: 8, max: 8, message: '长度在 8 个字符', trigger: 'blur' }
          ],
          meterlevel:[
            { required: true, message: '器具等级', trigger: 'blur' },
            { min: 1, max: 1, message: '长度在 1 个字符', trigger: 'blur' }
          ],
          paramsType:[
            { required: true, message: '计量相关参数类型', trigger: 'blur' },
            { min: 1, max: 1, message: '长度在 1 个字符', trigger: 'blur' }
          ],
          params:[
            { required: true, message: '计量相关参数', trigger: 'blur' },
            { min: 4, max: 4, message: '长度在 4 个字符', trigger: 'blur' }
          ],
          datacode:[
            { required: true, message: '所属上报数据组合编码', trigger: 'blur' },
            { min: 16, max: 18, message: '长度在 16 到 18 个字符', trigger: 'blur' }
          ],
          reportarithmetic:[
            { required: true, message: '与上报数据组合编码算术关系', trigger: 'blur' },
            { min: 1, max: 1, message: '长度在 1 个字符', trigger: 'blur' }
          ],
          reportratio:[
            { required: true, message: '与上报数据组合编码算术系数', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          manufacturer:[
            { required: true, message: '生产厂家', trigger: 'blur' },
            { min: 4, max: 50, message: '长度在 4 到 50 个字符', trigger: 'blur' }
          ],
          model:[
            { required: true, message: '规格型号', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          precisionlevel:[
            { required: true, message: '精确度等级', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
          ],
          ranges:[
            { required: true, message: '测量范围', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          manageno:[
            { required: true, message: '管理编号', trigger: 'blur' },
            { min: 3, max: 3, message: '长度在 3 个字符', trigger: 'blur' }
          ],
          alignstate:[
            { required: true, message: '检定校准状态', trigger: 'blur' },
            { min: 1, max: 1, message: '长度在 1 个字符', trigger: 'blur' }
          ],
          aligncycle:[
            { required: true, message: '检定校准周期', trigger: 'blur' },
            { min: 2, max: 2, message: '长度在 2 个字符', trigger: 'blur' }
          ],
          lastaligndate:[
            { required: true, message: '最近一次检定校准时间', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          nextaligndate:[
            { required: true, message: '下次一次检定校准时间', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          alignorg:[
            { required: true, message: '检测机构', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          location:[
            { required: true, message: '安装地点', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          installer:[
            { required: true, message: '安装方', trigger: 'blur' },
            { min: 1, max: 1, message: '长度在 1 个字符', trigger: 'blur' }
          ],
          installtime:[
            { required: true, message: '安装时间', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          linksys:[
            { required: true, message: '接入系统', trigger: 'blur' },
            { min: 2, max: 2, message: '长度在 2 个字符', trigger: 'blur' }
          ],
          currentstate:[
            { required: true, message: '当前状态', trigger: 'blur' },
            { min: 1, max: 1, message: '长度在 1 个字符', trigger: 'blur' }
          ],
          serno:[
            { required: true, message: '设备出产序列号', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 30 个字符', trigger: 'blur' }
          ]
        },
        optionsAlignstate: [{
            value: '1',
            label: '合格'
        }, {
            value: '0',
            label: '不合格'
        }],
        optionsInstaller: [{
            value: '1',
            label: '用能单位'
        }, {
            value: '2',
            label: '能源供应公司'
        }, {
            value: '3',
            label: '第三方公司'
        }],
        optionsLinkSys: [{
            value: '01',
            label: '用能单位自身管理系统'
        }, {
            value: '02',
            label: '能源供应公司系统'
        }],
        optionsCurrentState: [{
            value: '1',
            label: '正常'
        }, {
            value: '2',
            label: '故障'
        }, {
            value: '3',
            label: '停用'
        }],
        dataCodeList: [],
        tableData: [],
        page: {
          currentPage: 1, // 当前页
          pageSize: 10, // 每页显示条目个数
          totalCount: 0 // 总条目数
        }
      }
    },
    watch:{
      'dialogForm.metertype':{
        handler: function (newVal, oldVal) {
          let self = this;
          if (newVal =='12040000' || newVal =='12060000' || newVal =='12180000' || newVal =='12340000' || newVal =='12320000' || newVal =='15260000') {
            self.metertypecodeShow = true;
            self.metertypeCodeTwoList = [];
            self.dialogForm.metertypecodeTwo = '';
            self.MetertypeJsonCodes.forEach(function(item,index){
              if(item.code == newVal){
                self.metertypecodeTwoShow = true;
                item.children.forEach(function(item1,index1){
                  self.metertypeCodeTwoList.push(item1);
                });
              }
            });
          }else{
            self.metertypecodeTwoShow = false;
          }
        }
      },
      'dialogFormEdit.metertype':{
        handler: function (newVal, oldVal) {
          let self = this;
          if (newVal =='12040000' || newVal =='12060000' || newVal =='12180000' || newVal =='12340000' || newVal =='12320000' || newVal =='15260000') {
            self.metertypecodeShow = true;
            self.metertypeCodeTwoList = [];
            self.dialogFormEdit.metertypecodeTwo = '';
            self.MetertypeJsonCodes.forEach(function(item,index){
              if(item.code == newVal){
                self.metertypecodeTwoShow = true;
                item.children.forEach(function(item1,index1){
                  self.metertypeCodeTwoList.push(item1);
                });
              }
            });
          }else{
            self.metertypecodeTwoShow = false;
          }
        }
      }
    },
    methods: {
      saveAdd(formName){
        let self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let data = {
              "data":self.dialogForm
            };
            if(self.dialogForm.metertypecodeTwo != ''){
              self.dialogForm.metertype = self.dialogForm.metertypecodeTwo;
            }if(self.metertypecodeTwoShow && self.dialogForm.metertypecodeTwo == ''){
              self.$message({
                message: '请填写二级下拉框',
                type: 'warning'
              });
              return;
            }
            self.$http.post(self.$baseUrl+"/gaugeConfigure/add",data,self.$config).then(
              res=>{
                console.log(res);
                if (res.data.code === 0){
                  self.$message({
                    message: '新增用能单位计量器具信息成功',
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
            let data = {
              "data":self.dialogFormEdit
            };
            if(self.dialogFormEdit.metertypecodeTwo != ''){
              self.dialogFormEdit.metertype = self.dialogFormEdit.metertypecodeTwo;
            }if(self.metertypecodeTwoShow && self.dialogFormEdit.metertypecodeTwo == ''){
              self.$message({
                message: '请填写二级下拉框',
                type: 'warning'
              });
              return;
            }
            self.$http.post(self.$baseUrl+"/gaugeConfigure/update",data,self.$config).then(
              res=>{
                console.log(res);
                if (res.data.code === 0){
                  self.$message({
                    message: '更新用能单位计量器具信息成功',
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
        self.$http.post(self.$baseUrl+"/gaugeConfigure/list",data).then(res=>{
          console.log(res);
          if (res.data.code === 0){
            self.tableData = res.data.result;
            let tabledata = res.data.result;
            tabledata.forEach(function (item,index) {
              if (item.lastaligndate !== null && item.lastaligndate.indexOf('T') > -1){
                item.lastaligndate = item.lastaligndate.substring(0,item.lastaligndate.lastIndexOf('T'));
              }
              if (item.nextaligndate !== null && item.nextaligndate.indexOf('T') > -1){
                item.nextaligndate = item.nextaligndate.substring(0,item.nextaligndate.lastIndexOf('T'));
              }
              if (item.installtime !== null && item.installtime.indexOf('T') > -1){
                item.installtime = item.installtime.substring(0,item.installtime.lastIndexOf('T'));
              }
            })
            let table = res.data.result;
            if (table.length >0){
              table.forEach(function (item,index) {

              });
            }
            self.page.totalCount = res.data.result.length;
          }
        },res=>{
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
        self.dialogFormEdit.metername = row.metername;
        self.dialogFormEdit.metertype = row.metertype;
        self.dialogFormEdit.meterlevel = row.meterlevel;
        self.dialogFormEdit.paramsType = row.paramsType;
        self.dialogFormEdit.params = row.params;
        self.dialogFormEdit.datacode = row.datacode;
        self.dialogFormEdit.reportarithmetic = row.reportarithmetic;
        self.dialogFormEdit.reportratio = row.reportratio;
        self.dialogFormEdit.manufacturer = row.manufacturer;
        self.dialogFormEdit.model = row.model;
        self.dialogFormEdit.precisionlevel = row.precisionlevel;
        self.dialogFormEdit.ranges = row.ranges;
        self.dialogFormEdit.manageno = row.manageno;
        self.dialogFormEdit.alignstate = row.alignstate;
        self.dialogFormEdit.aligncycle = row.aligncycle;
        self.dialogFormEdit.lastaligndate = row.lastaligndate;
        self.dialogFormEdit.nextaligndate = row.nextaligndate;
        self.dialogFormEdit.alignorg = row.alignorg;
        self.dialogFormEdit.unalignreason = row.unalignreason;
        self.dialogFormEdit.location = row.location;
        self.dialogFormEdit.installer = row.installer;
        self.dialogFormEdit.installtime = row.installtime;
        self.dialogFormEdit.linksys = row.linksys;
        self.dialogFormEdit.currentstate = row.currentstate;
        self.dialogFormEdit.statechangetime = row.statechangetime;
        self.dialogFormEdit.serno = row.serno;
        self.dialogFormEdit.barcode = row.barcode;
        self.dialogFormEdit.remark = row.remark;
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
        self.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let data ={
            'data':row
          };

          self.$http.post(self.$baseUrl+"/gaugeConfigure/delete",data,self.$config).then(
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
      this.$http.get(self.$baseUrl+'/regionData/MetertypeJsonCodes').then(res => {
        console.log(res);
        if (res.data.errno === 0) {
          this.MetertypeJsonCodes = res.data.data;
          self.MetertypeJsonCodes.forEach(function(item,index){
              self.metertypeCodeList.push(item);
          });
        }
      }, res => {
        console.log("加载失败")
      });
      self.getList(self.$cookies.get('enterpriseCode'));
      let data = {
        "enterpriseCode":self.$cookies.get('enterpriseCode')
      };
      self.$http.post(self.$baseUrl+"/gaugeConfigure/getVersion",data,self.$config).then(res=>{
        console.log(res);
        if (res.data.code === 0) {
          self.dialogForm.enterprisecode = res.data.result.enterprisecode;
          self.dialogForm.regversion = res.data.result.regversion;
          self.dialogForm.dicversion = res.data.result.dicversion;
        }
      },ret=>{
        console.log("获取Version失败");
      });

      self.$http.post(self.$baseUrl+"/gaugeConfigure/getDataCode",data,self.$config).then(res=>{
          console.log(res);
          if (res.data.code === 0) {
              self.dataCodeList = res.data.result;
          }
      },ret=>{
          console.log("获取所属上报数据组合编码失败");
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
