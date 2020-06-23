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
          <el-form-item prop="idcname" label="数据中心名称">
            <el-input v-model="dialogForm.idcname"></el-input>
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
          <el-form-item prop="f201" label="机房建筑面积(平方米)">
            <el-input v-model="dialogForm.f201"></el-input>
          </el-form-item>
          <el-form-item prop="f210" label="机柜总数量(个)">
            <el-input v-model="dialogForm.f210"></el-input>
          </el-form-item>
          <el-form-item prop="f2101" label="预留机柜数量(个)">
            <el-input v-model="dialogForm.f2101"></el-input>
          </el-form-item>
          <el-form-item prop="f220" label="设备总功率(千瓦)">
            <el-input v-model="dialogForm.f220"></el-input>
          </el-form-item>
          <el-form-item prop="f2201" label="IT设备功率(千瓦)">
            <el-input v-model="dialogForm.f2201"></el-input>
          </el-form-item>
          <el-form-item prop="f2202" label="空气调节设备功率(千瓦)">
            <el-input v-model="dialogForm.f2202"></el-input>
          </el-form-item>
          <el-form-item prop="f2203" label="配电及附属设备功率(千瓦)">
            <el-input v-model="dialogForm.f2203"></el-input>
          </el-form-item>
          <el-form-item prop="f230" label="UPS装机容量(千伏安)">
            <el-input v-model="dialogForm.f230"></el-input>
          </el-form-item>
          <el-form-item prop="f240" label="机房总用电量(千瓦时)">
            <el-input v-model="dialogForm.f240"></el-input>
          </el-form-item>
          <el-form-item prop="f2401" label="IT设备用电量(千瓦时)">
            <el-input v-model="dialogForm.f2401"></el-input>
          </el-form-item>
          <el-form-item prop="f2402" label="空气调节设备用电量(千瓦时)">
            <el-input v-model="dialogForm.f2402"></el-input>
          </el-form-item>
          <el-form-item prop="f2403" label="配电及附属设备用电量(千瓦时)">
            <el-input v-model="dialogForm.f2403"></el-input>
          </el-form-item>
          <el-form-item prop="f250" label="其他能源消费量(吨标准煤)">
            <el-input v-model="dialogForm.f250"></el-input>
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
          <el-form-item prop="idcname" label="数据中心名称">
            <el-input v-model="dialogFormEdit.idcname"></el-input>
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
          <el-form-item prop="f201" label="机房建筑面积(平方米)">
            <el-input v-model="dialogFormEdit.f201"></el-input>
          </el-form-item>
          <el-form-item prop="f210" label="机柜总数量(个)">
            <el-input v-model="dialogFormEdit.f210"></el-input>
          </el-form-item>
          <el-form-item prop="f2101" label="预留机柜数量(个)">
            <el-input v-model="dialogFormEdit.f2101"></el-input>
          </el-form-item>
          <el-form-item prop="f220" label="设备总功率(千瓦)">
            <el-input v-model="dialogFormEdit.f220"></el-input>
          </el-form-item>
          <el-form-item prop="f2201" label="IT设备功率(千瓦)">
            <el-input v-model="dialogFormEdit.f2201"></el-input>
          </el-form-item>
          <el-form-item prop="f2202" label="空气调节设备功率(千瓦)">
            <el-input v-model="dialogFormEdit.f2202"></el-input>
          </el-form-item>
          <el-form-item prop="f2203" label="配电及附属设备功率(千瓦)">
            <el-input v-model="dialogFormEdit.f2203"></el-input>
          </el-form-item>
          <el-form-item prop="f230" label="UPS装机容量(千伏安)">
            <el-input v-model="dialogFormEdit.f230"></el-input>
          </el-form-item>
          <el-form-item prop="f240" label="机房总用电量(千瓦时)">
            <el-input v-model="dialogFormEdit.f240"></el-input>
          </el-form-item>
          <el-form-item prop="f2401" label="IT设备用电量(千瓦时)">
            <el-input v-model="dialogFormEdit.f2401"></el-input>
          </el-form-item>
          <el-form-item prop="f2402" label="空气调节设备用电量(千瓦时)">
            <el-input v-model="dialogFormEdit.f2402"></el-input>
          </el-form-item>
          <el-form-item prop="f2403" label="配电及附属设备用电量(千瓦时)">
            <el-input v-model="dialogFormEdit.f2403"></el-input>
          </el-form-item>
          <el-form-item prop="f250" label="其他能源消费量(吨标准煤)">
            <el-input v-model="dialogFormEdit.f250"></el-input>
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
        <el-table-column prop="f201" label="机房建筑面积(平方米)" width="200">
        </el-table-column>
        <el-table-column prop="f210" label="机柜总数量(个)" width="200">
        </el-table-column>
        <el-table-column prop="f2101" label="预留机柜数量(个)" width="200">
        </el-table-column>
        <el-table-column prop="f220" label="设备总功率(千瓦)" width="200">
        </el-table-column>
        <el-table-column prop="f2201" label="IT设备功率(千瓦)" width="200">
        </el-table-column>
        <el-table-column prop="f2202" label="空气调节设备功率(千瓦)" width="200">
        </el-table-column>
        <el-table-column prop="f2203" label="配电及附属设备功率(千瓦)" width="200">
        </el-table-column>
        <el-table-column prop="f230" label="UPS装机容量(千伏安)" width="200">
        </el-table-column>
        <el-table-column prop="f240" label="机房总用电量(千瓦时)" width="200">
        </el-table-column>
        <el-table-column prop="f2401" label="IT设备用电量(千瓦时)" width="200">
        </el-table-column>
        <el-table-column prop="f2402" label="空气调节设备用电量(千瓦时)" width="200">
        </el-table-column>
        <el-table-column prop="f2403" label="配电及附属设备用电量(千瓦时)" width="200">
        </el-table-column>
        <el-table-column prop="f250" label="其他能源消费量(吨标准煤)" width="200">
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
    name: "AddIDC",
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
          idcname:'',
          charger:'',
          statisticians:'',
          preparer:'',
          prepardate:'',
          f201:'',
          f210:'',
          f2101:'',
          f220:'',
          f2201:'',
          f2202:'',
          f2203:'',
          f230:'',
          f240:'',
          f2401:'',
          f2402:'',
          f2403:'',
          f250:'',
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
          idcname:'',
          charger:'',
          statisticians:'',
          preparer:'',
          prepardate:'',
          f201:'',
          f210:'',
          f2101:'',
          f220:'',
          f2201:'',
          f2202:'',
          f2203:'',
          f230:'',
          f240:'',
          f2401:'',
          f2402:'',
          f2403:'',
          f250:'',
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
          idcname:[
            { required: true, message: '数据中心名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
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
            { min: 1, max: 30, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f201:[
            { required: true, message: '机房建筑面积(平方米)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f210:[
            { required: true, message: '机柜总数量(个)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f2101:[
            { required: true, message: '预留机柜数量(个)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f220:[
            { required: true, message: '设备总功率(千瓦)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f2201:[
            { required: true, message: 'IT设备功率(千瓦)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f2202:[
            { required: true, message: '空气调节设备功率(千瓦)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f2203:[
            { required: true, message: '配电及附属设备功率(千瓦)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f230:[
            { required: true, message: 'UPS装机容量(千伏安)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f240:[
            { required: true, message: '机房总用电量(千瓦时)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f2401:[
            { required: true, message: 'IT设备用电量(千瓦时)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f2402:[
            { required: true, message: '空气调节设备用电量(千瓦时)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f2403:[
            { required: true, message: '配电及附属设备用电量(千瓦时)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f250:[
            { required: true, message: '其他能源消费量(吨标准煤)', trigger: 'blur' },
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
            self.$http.post(self.$baseUrl+"/arganEnergy/addIDC",data,self.$config).then(
              res=>{
                console.log(res);
                if (res.data.code === 0){
                  self.$message({
                    message: '新增公共机构数据中心机房能源消费信息成功',
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

            self.$http.post(self.$baseUrl+"/arganEnergy/updateIDC",data,self.$config).then(
              res=>{
                console.log(res);
                if (res.data.code === 0){
                  self.$message({
                    message: '更新公共机构数据中心机房能源消费信息成功',
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
        self.$http.post(self.$baseUrl+"/addIDC/list",data).then(res=>{
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
        self.dialogFormEdit.idcname = row.idcname;
        self.dialogFormEdit.charger = row.charger;
        self.dialogFormEdit.statisticians = row.statisticians;
        self.dialogFormEdit.preparer = row.preparer;
        self.dialogFormEdit.prepardate = row.prepardate;
        self.dialogFormEdit.f201 = row.f201;
        self.dialogFormEdit.f210 = row.f210;
        self.dialogFormEdit.f2101 = row.f2101;
        self.dialogFormEdit.f220 = row.f220;
        self.dialogFormEdit.f2201 = row.f2201;
        self.dialogFormEdit.f2202 = row.f2202;
        self.dialogFormEdit.f2203 = row.f2203;
        self.dialogFormEdit.f230 = row.f230;
        self.dialogFormEdit.f240 = row.f240;
        self.dialogFormEdit.f2401 = row.f2401;
        self.dialogFormEdit.f2402 = row.f2402;
        self.dialogFormEdit.f2403 = row.f2403;
        self.dialogFormEdit.f250 = row.f250;
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

          self.$http.post(self.$baseUrl+"/arganEnergy/deleteIDC",data,self.$config).then(
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
