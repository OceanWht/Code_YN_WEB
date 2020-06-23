<template>
  <el-container>
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="编辑用能单位计量器具更换记录" :visible.sync="dialogFormVisibleEdit" >
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
          <el-form-item prop="replacedserno" label="被替换计量器出产序号">
              <el-input v-model="dialogFormEdit.replacedserno"></el-input>
          </el-form-item>
          <el-form-item prop="replacedmanageno" label="被替换计量器管理编号">
              <el-input v-model="dialogFormEdit.replacedmanageno"></el-input>
          </el-form-item>
          <el-form-item prop="replacedbarcode" label="被替换计量器二维码">
              <el-input v-model="dialogFormEdit.replacedbarcode"></el-input>
          </el-form-item>
          <el-form-item prop="installserno" label="新装计量器出产序号">
              <el-input v-model="dialogFormEdit.installserno"></el-input>
          </el-form-item>
          <el-form-item prop="installmanageno" label="新装计量器管理编号">
              <el-input v-model="dialogFormEdit.installmanageno"></el-input>
          </el-form-item>
          <el-form-item prop="installbarcode" label="新装计量器二维码">
              <el-input v-model="dialogFormEdit.installbarcode"></el-input>
          </el-form-item>
          <el-form-item label="新装计量器时间" prop="installtime">
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
          <el-form-item prop="remark" label="替换说明">
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
      <el-dialog title="新增用能单位计量器具更换记录" :visible.sync="dialogFormVisible" >
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
          <el-form-item prop="replacedserno" label="被替换计量器出产序号">
              <el-input v-model="dialogForm.replacedserno"></el-input>
          </el-form-item>
          <el-form-item prop="replacedmanageno" label="被替换计量器管理编号">
              <el-input v-model="dialogForm.replacedmanageno"></el-input>
          </el-form-item>
          <el-form-item prop="replacedbarcode" label="被替换计量器二维码">
              <el-input v-model="dialogForm.replacedbarcode"></el-input>
          </el-form-item>
          <el-form-item prop="installserno" label="新装计量器出产序号">
              <el-input v-model="dialogForm.installserno"></el-input>
          </el-form-item>
          <el-form-item prop="installmanageno" label="新装计量器管理编号">
              <el-input v-model="dialogForm.installmanageno"></el-input>
          </el-form-item>
          <el-form-item prop="installbarcode" label="新装计量器二维码">
              <el-input v-model="dialogForm.installbarcode"></el-input>
          </el-form-item>
          <el-form-item label="新装计量器时间" prop="installtime">
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
          <el-form-item prop="remark" label="替换说明">
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
        <el-table-column prop="replacedserno" label="被替换计量器出产序号" width="200">
        </el-table-column>
        <el-table-column prop="replacedmanageno" label="被替换计量器管理编号" width="200">
        </el-table-column>
        <el-table-column prop="replacedbarcode" label="被替换计量器二维码" width="200">
        </el-table-column>
        <el-table-column prop="installserno" label="新装计量器出产序号" width="200">
        </el-table-column>
        <el-table-column prop="installmanageno" label="新装计量器管理编号" width="200">
        </el-table-column>
        <el-table-column prop="installbarcode" label="新装计量器二维码" width="200">
        </el-table-column>
        <el-table-column prop="installtime" label="新装计量器时间" width="200">
        </el-table-column>
        <el-table-column prop="remark" label="替换说明" width="200">
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
    name: "GaugeReplaceConfigure",
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
        dialogForm:{
          id:'',
          regversion:'',
          dicversion:'',
          dataindex:'',
          enterprisecode:'',
          replacedserno:'',
          replacedmanageno:'',
          replacedbarcode:'',
          installserno:'',
          installmanageno:'',
          installbarcode:'',
          installtime:'',
          remark:''
        },
        dialogFormEdit:{
          id:'',
          regversion:'',
          dicversion:'',
          dataindex:'',
          enterprisecode:'',
          replacedserno:'',
          replacedmanageno:'',
          replacedbarcode:'',
          installserno:'',
          installmanageno:'',
          installbarcode:'',
          installtime:'',
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
            { min: 18, max: 18, message: '长度在 18 个字符', trigger: 'blur' }
          ],
          replacedserno:[
            { required: true, message: '被替换计量器出产序号', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
          ],
          replacedmanageno:[
            { required: true, message: '被替换计量器管理编号', trigger: 'blur' },
            { min: 12, max: 12, message: '长度在 12 个字符', trigger: 'blur' }
          ],
          installserno:[
            { required: true, message: '新装计量器出产序号', trigger: 'blur' },
            { min: 30, max: 30, message: '长度在 30 个字符', trigger: 'blur' }
          ],
          installmanageno:[
            { required: true, message: '新装计量器管理编号', trigger: 'blur' },
            { min: 12, max: 12, message: '长度在 12 个字符', trigger: 'blur' }
          ],
          installtime:[
            { required: true, message: '新装计量器时间', trigger: 'blur' },
            { min: 1, max: 24, message: '长度在 1 到 24 个字符', trigger: 'blur' }
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
            self.$http.post(self.$baseUrl+"/gaugeReplaceConfigure/add",data,self.$config).then(
              res=>{
                console.log(res);
                if (res.data.code === 0){
                  self.$message({
                    message: '新增用能单位计量器具更换记录成功',
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

            self.$http.post(self.$baseUrl+"/gaugeReplaceConfigure/update",data,self.$config).then(
              res=>{
                console.log(res);
                if (res.data.code === 0){
                  self.$message({
                    message: '更新用能单位计量器具更换记录成功',
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
        self.$http.post(self.$baseUrl+"/gaugeReplaceConfigure/list",data).then(res=>{
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
        self.dialogFormEdit.replacedserno = row.replacedserno;
        self.dialogFormEdit.replacedmanageno = row.replacedmanageno;
        self.dialogFormEdit.replacedbarcode = row.replacedbarcode;
        self.dialogFormEdit.installserno = row.installserno;
        self.dialogFormEdit.installmanageno = row.installmanageno;
        self.dialogFormEdit.installbarcode = row.installbarcode;
        self.dialogFormEdit.installtime = row.installtime;
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

          self.$http.post(self.$baseUrl+"/gaugeReplaceConfigure/delete",data,self.$config).then(
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
      self.$http.post(self.$baseUrl+"/gaugeReplaceConfigure/getVersion",data,self.$config).then(res=>{
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
