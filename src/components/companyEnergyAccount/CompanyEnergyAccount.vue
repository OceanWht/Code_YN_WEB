<template>
  <el-container style="margin-top: 5%">
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="编辑户号信息" :visible.sync="dialogFormVisibleEdit">
        <el-form ref="dialogFormEdit" :model="dialogFormEdit" :rules="rules" label-width="200px">
          <el-form-item prop="id" label="id" v-if="false">
            <el-input v-model="dialogFormEdit.id"></el-input>
          </el-form-item>
          <el-form-item prop="dataIndex" label="数据索引" v-if="false">
            <el-input v-model="dialogFormEdit.dataIndex"></el-input>
          </el-form-item>
          <el-form-item prop="regVersion" label="平台服务版本">
            <el-input v-model="dialogFormEdit.regVersion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="dicVersion" label="基础数据版本">
            <el-input v-model="dialogFormEdit.dicVersion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="enterpriseCode" label="统一社会信用代码">
            <el-input v-model="dialogFormEdit.enterpriseCode" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="accountType" label="账户类型">
            <el-col :span="7">
              <el-select v-model="dialogFormEdit.accountType">
                <el-option v-for="item in accountTypeList" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="accountNo" label="账号">
            <el-input v-model="dialogFormEdit.accountNo"></el-input>
          </el-form-item>
          <el-form-item prop="accountName" label="开户名称">
            <el-input v-model="dialogFormEdit.accountName"></el-input>
          </el-form-item>
          <el-form-item prop="provider" label="供能机构名称">
            <el-input v-model="dialogFormEdit.provider"></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
            <el-input v-model="dialogFormEdit.remark" type="textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button-group style="margin-left: -25%">
              <el-button type="success" @click="saveUpdate('dialogFormEdit')">保存</el-button>
              <el-button type="primary" @click="cancleUpdate">取消</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="新增户号信息" :visible.sync="dialogFormVisible">
        <el-form ref="dialogForm" :model="dialogForm" :rules="rules" label-width="200px">
          <el-form-item prop="regVersion" label="平台服务版本">
            <el-input v-model="dialogForm.regVersion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="dicVersion" label="基础数据版本">
            <el-input v-model="dialogForm.dicVersion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="enterpriseCode" label="统一社会信用代码">
            <el-input v-model="dialogForm.enterpriseCode" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="accountType" label="账户类型">
            <el-col :span="7">
              <el-select v-model="dialogForm.accountType">
                <el-option v-for="item in accountTypeList" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="accountNo" label="账号">
            <el-input v-model="dialogForm.accountNo"></el-input>
          </el-form-item>
          <el-form-item prop="accountName" label="开户名称">
            <el-input v-model="dialogForm.accountName"></el-input>
          </el-form-item>
          <el-form-item prop="provider" label="供能机构名称">
            <el-input v-model="dialogForm.provider"></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
            <el-input v-model="dialogFormEdit.remark" type="textarea"></el-input>
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
                :row-class-name="tableRowClassName">
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
        <el-table-column prop="accounttype" label="账户类型" width="200">
        </el-table-column>
        <el-table-column prop="accountno" label="账号" width="200">
        </el-table-column>
        <el-table-column prop="accountname" label="开户名称" width="200">
        </el-table-column>
        <el-table-column prop="provider" label="供能机构名称" width="200">
        </el-table-column>
        <el-table-column prop="remark" label="备注" width="200">
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
      <el-pagination v-show="page.totalCount > 10"
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
        name: "CompanyEnergyAccount",
      data() {
        return {
          accountTypeList:[
            {'code': '1', 'name': '水'},
            {'code': '2', 'name': '电'},
            {'code': '3', 'name': '燃气'}
          ],
          tableData: [],
          page: {
            currentPage: 1, // 当前页
            pageSize: 10, // 每页显示条目个数
            totalCount: 0 // 总条目数
          },
          dialogFormVisible: false,
          dialogFormVisibleEdit: false,
          dialogForm: {
            regVersion: '',
            dicVersion: '',
            enterpriseCode: '',
            accountType: '',
            accountNo: '',
            accountName: '',
            provider: '',
            remark: ''
          },
          dialogFormEdit: {
            id: '',
            dataIndex: '',
            regVersion: '',
            dicVersion: '',
            enterpriseCode: '',
            accountType: '',
            accountNo: '',
            accountName: '',
            provider: '',
            remark: ''
          },
          rules: {
            accountType: [
              {required: true, message: '请选择账户类型', trigger: 'blur'}
            ],
            accountNo: [
              {required: true, message: '请输入账号', trigger: 'blur'},
              { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
            ],
            accountName: [
              {required: true, message: '请输入开户名称', trigger: 'blur'},
              { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
            ],
            provider: [
              {required: true, message: '请输入供能机构名称', trigger: 'blur'},
              { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
            ]
          }
        }
      },
      methods:{
        cancleUpdate() {
          this.dialogFormVisibleEdit = false;
        },
        cancleAdd() {
          this.dialogFormVisible = false;
        },
        deleteItem(row) {
          let self = this;
          self.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let data ={
              'dataIndex':row.dataindex,
              'enterpriseCode':row.enterprisecode
            };

            self.$http.post(self.$baseUrl+"/companyEnergyAccount/delete",data,self.$config).then(
              res =>{
                console.log(res);
                if (res.data.code === 0){
                  if (res.data.result.responseCode === 200){
                    self.$message({
                      message: '删除成功',
                      type: 'success'
                    });
                  } else {
                    self.$message({
                      message: res.data.result.responseMessage,
                      type: 'warning'
                    });
                  }
                  self.getList(row.enterprisecode);
                }else {
                  if (res.data.result !== null && res.data.result.responseMessage !== null) {
                    self.$message({
                      message: '删除失败:' + res.data.result.responseMessage,
                      type: 'warning'
                    });
                  } else {
                    self.$message({
                      message: '删除失败:' + res.data.msg,
                      type: 'warning'
                    });
                  }
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
        },
        saveUpdate(formName) {
          let self = this;
          self.$refs[formName].validate((valid) => {
            if (valid) {
              let data = {
                'id':self.dialogFormEdit.id,
                'dataIndex':self.dialogFormEdit.dataIndex,
                'regVersion':self.dialogFormEdit.regVersion,
                'dicVersion':self.dialogFormEdit.dicVersion,
                'enterpriseCode':self.dialogFormEdit.enterpriseCode,
                'accountType':self.dialogFormEdit.accountType,
                'accountNo':self.dialogFormEdit.accountNo,
                'accountName':self.dialogFormEdit.accountName,
                'provider':self.dialogFormEdit.provider,
                'remark':self.dialogFormEdit.remark
              }
              self.$http.post(self.$baseUrl + "/companyEnergyAccount/update", data, self.$config).then(
                res => {
                  console.log(res);
                  if (res.data.code === 0) {
                    if (res.data.result.responseCode === 200){
                      self.$message({
                        message: '修改能源账户信息成功',
                        type: 'success'
                      });
                    } else {
                      self.$message({
                        message: res.data.result.responseMessage,
                        type: 'warning'
                      });
                    }
                    self.dialogFormVisibleEdit = false;
                    self.getList(self.dialogFormEdit.enterpriseCode)
                  } else {
                    if (res.data.result !== null && res.data.result.responseMessage !== null) {
                      self.$message({
                        message: '修改失败:' + res.data.result.responseMessage,
                        type: 'warning'
                      });
                    } else {
                      self.$message({
                        message: '修改失败:' + res.data.msg,
                        type: 'warning'
                      });
                    }

                  }
                  self.dialogFormVisible = false;
                  self.getList(self.dialogForm.enterpriseCode)
                }, reason => {
                  console.log("新增失败");
                })
            }else {
              self.$notify.error({
                title: '错误',
                message: '信息填写格式错误'
              });
              return false;
            }
          });
        },
        saveAdd(formName) {
          let self = this;
          self.$refs[formName].validate((valid) => {
            if (valid) {
              let data = {
                'regVersion':self.dialogForm.regVersion,
                'dicVersion':self.dialogForm.dicVersion,
                'enterpriseCode':self.dialogForm.enterpriseCode,
                'accountType':self.dialogForm.accountType,
                'accountNo':self.dialogForm.accountNo,
                'accountName':self.dialogForm.accountName,
                'provider':self.dialogForm.provider
              }
              self.$http.post(self.$baseUrl + "/companyEnergyAccount/add", data, self.$config).then(
                res => {
                  console.log(res);
                  if (res.data.code === 0) {
                    if (res.data.result.responseCode === 200){
                      self.$message({
                        message: '新增能源账户信息成功',
                        type: 'success'
                      });
                    } else {
                      self.$message({
                        message: res.data.result.responseMessage,
                        type: 'warning'
                      });
                    }

                  } else {
                    if (res.data.result !== null && res.data.result.responseMessage !== null) {
                      self.$message({
                        message: '新增失败:' + res.data.result.responseMessage,
                        type: 'warning'
                      });
                    } else {
                      self.$message({
                        message: '新增失败:' + res.data.msg,
                        type: 'warning'
                      });
                    }

                  }
                  self.dialogFormVisible = false;
                  self.getList(self.dialogForm.enterpriseCode)
                }, reason => {
                  console.log("新增失败");
                })
            }else {
              self.$notify.error({
                title: '错误',
                message: '信息填写格式错误'
              });
              return false;
            }
          });
        },
        handleClick(row) {
          let self = this;
          console.log(row);
          self.dialogFormEdit.id = row.id;
          self.dialogFormEdit.dataIndex = row.dataindex;
          self.dialogFormEdit.regVersion = row.regversion;
          self.dialogFormEdit.dicVersion = row.dicversion;
          self.dialogFormEdit.enterpriseCode = row.enterprisecode;
         // self.dialogFormEdit.accountType = row.accounttype;
          self.dialogFormEdit.accountName = row.accountname;
          self.dialogFormEdit.accountNo = row.accountno;
          self.dialogFormEdit.provider = row.provider;
          self.dialogFormEdit.remark = row.remark == null?'':row.remark;
          self.dialogFormVisibleEdit = true;
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.page.pageSize = val;
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.page.currentPage = val;
        },
        tableRowClassName({row, rowIndex}) {
          if (rowIndex === 1) {
            return 'warning-row';
          } else if (rowIndex === 3) {
            return 'success-row';
          }
          return '';
        },
        getList(code){
          let self = this;
          let data = {
            'enterpriseCode': code,
          };
          //获取数据
          self.$http.post(self.$baseUrl + "/companyEnergyAccount/list", data, self.$config).then(res => {
            console.log(res);
            if (res.data.code === 0) {
              if (res.data.result) {
                let tabledata = res.data.result;
                tabledata.forEach(function (item,index) {
                  if (item.accounttype === '1'){
                    item.accounttype = '水'
                  } else if (item.accounttype === '2') {
                    item.accounttype = '电'
                  }else if (item.accounttype === '3'){
                    item.accounttype = '燃气'
                  }
                });
                self.tableData = tabledata;
                self.page.totalCount = res.data.result.length;
              }

            }
          }, res => {
            console.log("加载失败");
          })
        }
      },
      created() {
        let self = this;
        self.getList(self.$cookies.get('enterpriseCode'));
        let data = {
          "enterpriseCode": self.$cookies.get('enterpriseCode')
        };
        self.$http.post(self.$baseUrl + "/CompanyContacter/getVersion", data, self.$config).then(res => {
          console.log(res);
          if (res.data.code === 0) {
            self.dialogForm.enterpriseCode = res.data.result.enterprisecode;
            self.dialogForm.regVersion = res.data.result.regversion;
            self.dialogForm.dicVersion = res.data.result.dicversion;
          }
        }, ret => {
          console.log("获取Version失败");
        });
      }
    }
</script>

<style scoped>

</style>
