<template>
    <el-container>
      <el-header>
        <el-col :offset="11">
          <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
        </el-col>
      </el-header>
      <el-main>
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
            <el-form-item prop="devicename" label="设备名称">
                <el-input v-model="dialogFormEdit.devicename"></el-input>
            </el-form-item>
            <el-form-item prop="deviceno" label="设备编号">
                <el-input v-model="dialogFormEdit.deviceno"></el-input>
            </el-form-item>
            <el-form-item prop="model" label="规格型号">
                <el-input v-model="dialogFormEdit.model"></el-input>
            </el-form-item>
            <el-form-item prop="location" label="安装地点">
                <el-input v-model="dialogFormEdit.location"></el-input>
            </el-form-item>
            <el-form-item prop="dept" label="所属部门">
                <el-input v-model="dialogFormEdit.dept"></el-input>
            </el-form-item>
            <el-form-item prop="devicetype" label="设备分类">
                <el-input v-model="dialogFormEdit.devicetype"></el-input>
            </el-form-item>
            <el-form-item prop="usingdate" label="启用日期">
                <el-input v-model="dialogFormEdit.usingdate"></el-input>
            </el-form-item>
            <el-form-item prop="currentstate" label="运行情况">
                <el-input v-model="dialogFormEdit.currentstate"></el-input>
            </el-form-item>
            <el-form-item prop="manufacturer" label="生产厂商">
                <el-input v-model="dialogFormEdit.manufacturer"></el-input>
            </el-form-item>
            <el-form-item prop="energycode" label="能源种类编号">
                <el-input v-model="dialogFormEdit.energycode"></el-input>
            </el-form-item>
            <el-form-item prop="energyvalue" label="能源消耗量或功率">
                <el-input v-model="dialogFormEdit.energyvalue"></el-input>
            </el-form-item>
            <el-form-item prop="processunitcode" label="工序编码+工序单元编码">
                <el-input v-model="dialogFormEdit.processunitcode"></el-input>
            </el-form-item>
            <el-form-item prop="remark" label="用能设备信息">
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
        <el-dialog title="新增用能单位重点耗能设备信息" :visible.sync="dialogFormVisible" >
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
            <el-form-item prop="devicename" label="设备名称">
                <el-input v-model="dialogForm.devicename"></el-input>
            </el-form-item>
            <el-form-item prop="deviceno" label="设备编号">
                <el-input v-model="dialogForm.deviceno"></el-input>
            </el-form-item>
            <el-form-item prop="model" label="规格型号">
                <el-input v-model="dialogForm.model"></el-input>
            </el-form-item>
            <el-form-item prop="location" label="安装地点">
                <el-input v-model="dialogForm.location"></el-input>
            </el-form-item>
            <el-form-item prop="dept" label="所属部门">
                <el-input v-model="dialogForm.dept"></el-input>
            </el-form-item>
            <el-form-item prop="devicetype" label="设备分类">
                <el-input v-model="dialogForm.devicetype"></el-input>
            </el-form-item>
            <el-form-item prop="usingdate" label="启用日期">
                <el-input v-model="dialogForm.usingdate"></el-input>
            </el-form-item>
            <el-form-item prop="currentstate" label="运行情况">
                <el-input v-model="dialogForm.currentstate"></el-input>
            </el-form-item>
            <el-form-item prop="manufacturer" label="生产厂商">
                <el-input v-model="dialogForm.manufacturer"></el-input>
            </el-form-item>
            <el-form-item prop="energycode" label="能源种类编号">
                <el-input v-model="dialogForm.energycode"></el-input>
            </el-form-item>
            <el-form-item prop="energyvalue" label="能源消耗量或功率">
                <el-input v-model="dialogForm.energyvalue"></el-input>
            </el-form-item>
            <el-form-item prop="processunitcode" label="工序编码+工序单元编码">
                <el-input v-model="dialogForm.processunitcode"></el-input>
            </el-form-item>
            <el-form-item prop="remark" label="用能设备信息">
                <el-input v-model="dialogForm.remark"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button-group>
                <el-button type="success" @click="saveAdd('dialogForm')">保存</el-button>
                <el-button type="primary" @cancel="cancleAdd">取消</el-button>
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
          <el-table-column prop="devicename" label="设备名称" width="200">
          </el-table-column>
          <el-table-column prop="deviceno" label="设备编号" width="200">
          </el-table-column>
          <el-table-column prop="model" label="规格型号" width="200">
          </el-table-column>
          <el-table-column prop="location" label="安装地点" width="200">
          </el-table-column>
          <el-table-column prop="dept" label="所属部门" width="200">
          </el-table-column>
          <el-table-column prop="devicetype" label="设备类型" width="200">
          </el-table-column>
          <el-table-column prop="usingdate" label="启用日期" width="200">
          </el-table-column>
          <el-table-column prop="currentstate" label="运行情况" width="200">
          </el-table-column>
          <el-table-column prop="manufacturer" label="生产厂家" width="200">
          </el-table-column>
          <el-table-column prop="energyvalue" label="能源消耗量或功率" width="200">
          </el-table-column>
          <el-table-column prop="processunitcode" label="工序编码+工序单元编码" width="200">
          </el-table-column>
          <el-table-column prop="energycode" label="能源种类编号" width="200">
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
        name: "DeviceConfigure",
      data() {
        return {
          count:'',
          dialogFormVisible:false,
          dialogFormVisibleEdit:false,
          dialogForm:{
            id:'',
            dataindex:'',
            regversion:'',
            dicversion:'',
            enterprisecode:'',
            devicename:'',
            deviceno:'',
            model:'',
            location:'',
            dept:'',
            devicetype:'',
            usingdate:'',
            currentstate:'',
            manufacturer:'',
            energycode:'',
            energyvalue:'',
            processunitcode:'',
            remark:''
          },
          dialogFormEdit:{
            id:'',
            dataindex:'',
            regversion:'',
            dicversion:'',
            enterprisecode:'',
            devicename:'',
            deviceno:'',
            model:'',
            location:'',
            dept:'',
            devicetype:'',
            usingdate:'',
            currentstate:'',
            manufacturer:'',
            energycode:'',
            energyvalue:'',
            processunitcode:'',
            remark:''
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
              { min: 18, max: 18, message: '长度在18个字符', trigger: 'blur' }
            ],
            devicename:[
              { required: true, message: '请输入设备名称', trigger: 'blur' },
              { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
            ],
            deviceno:[
              { required: true, message: '请输入设备编号', trigger: 'blur' },
              { min: 4, max: 4, message: '长度在 4 个字符', trigger: 'blur' }
            ],
            location:[
              { required: true, message: '安装地点', trigger: 'blur' },
              { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
            ],
            dept:[
              { required: true, message: '请输入所在部门', trigger: 'blur' },
              { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
            ],
            deviceType:[
              { required: true, message: '设备分类', trigger: 'blur' },
              { min: 2, max: 2, message: '长度在 2 个字符', trigger: 'blur' }
            ],
            energycode:[
              { required: true, message: '能源种类编号', trigger: 'blur' },
              { min: 4, max: 4, message: '长度在 4 个字符', trigger: 'blur' }
            ],
            processunitcode:[
              { required: true, message: '工序编码+工序单元编码', trigger: 'blur' },
              { min: 4, max: 4, message: '长度在 4 个字符', trigger: 'blur' }
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
              let data = {
                "data":self.dialogForm
              };
              self.$http.post(self.$baseUrl+"/deviceConfigure/add",data,self.$config).then(
                res=>{
                  console.log(res);
                  if (res.data.code === 0){
                    self.$message({
                      message: '新增重点耗能设备信息成功',
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

              self.$http.post(self.$baseUrl+"/deviceConfigure/update",data,self.$config).then(
                res=>{
                  console.log(res);
                  if (res.data.code === 0){
                    self.$message({
                      message: '更新重点耗能设备信息成功',
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
          self.$http.post(self.$baseUrl+"/deviceConfigure/list",data).then(res=>{
            console.log(res);
            if (res.data.code === 0){
              self.tableData = res.data.result;
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
          self.dialogFormEdit.devicename = row.devicename;
          self.dialogFormEdit.deviceno = row.deviceno;
          self.dialogFormEdit.model = row.model;
          self.dialogFormEdit.location = row.location;
          self.dialogFormEdit.dept = row.dept;
          self.dialogFormEdit.devicetype = row.devicetype;
          self.dialogFormEdit.usingdate = row.usingdate;
          self.dialogFormEdit.currentstate = row.currentstate;
          self.dialogFormEdit.manufacturer = row.manufacturer;
          self.dialogFormEdit.energycode = row.energycode;
          self.dialogFormEdit.energyvalue = row.energyvalue;
          self.dialogFormEdit.processunitcode = row.processunitcode;
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

            self.$http.post(self.$baseUrl+"/deviceConfigure/delete",data,self.$config).then(
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
        self.$http.post(self.$baseUrl+"/deviceConfigure/getVersion",data,self.$config).then(res=>{
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
