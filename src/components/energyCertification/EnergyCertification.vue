<template>
  <el-container style="margin-top: 5%">
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="编辑企业认证信息" :visible.sync="dialogFormVisibleEdit">
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
          <el-form-item prop="energypass" label="是否通过体系认证">
            <el-col :span="7">
              <el-select v-model="dialogFormEdit.energypass" placeholder="请选择">
                <el-option v-for="item in options" :key="item.code" :label="item.value" :value="item.code">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="passorg" label="认证机构">
            <el-input v-model="dialogFormEdit.passorg"></el-input>
          </el-form-item>
          <el-form-item prop="director" label="负责人姓名">
            <el-input v-model="dialogFormEdit.director"></el-input>
          </el-form-item>
          <el-form-item prop="phone" label="电话">
            <el-input v-model="dialogFormEdit.phone"></el-input>
          </el-form-item>
          <el-form-item prop="passdate" label="认证日期">
            <el-col :span="7">
              <el-date-picker
                v-model="dialogFormEdit.passdate"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOption"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-col>
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
      <el-dialog title="新增企业认证信息" :visible.sync="dialogFormVisible">
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
          <el-form-item prop="energypass" label="是否通过体系认证">
            <el-col :span="7">
              <el-select v-model="dialogForm.energypass" placeholder="请选择">
                <el-option v-for="item in options" :key="item.code" :label="item.value" :value="item.code">
                </el-option>
              </el-select>
            </el-col>

          </el-form-item>
          <el-form-item prop="passorg" label="认证机构">
            <el-input v-model="dialogForm.passorg"></el-input>
          </el-form-item>
          <el-form-item prop="director" label="负责人姓名">
            <el-input v-model="dialogForm.director"></el-input>
          </el-form-item>
          <el-form-item prop="phone" label="电话">
            <el-input v-model="dialogForm.phone"></el-input>
          </el-form-item>
          <el-form-item prop="passdate" label="认证日期">
            <el-col :span="7">
              <el-date-picker
                v-model="dialogForm.passdate"
                type="date"
                placeholder="选择日期"
              :picker-options="pickerOption"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-col>

          </el-form-item>
          <el-form-item prop="remark" label="备注">
            <el-input v-model="dialogForm.remark" type="textarea"></el-input>
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
        <el-table-column prop="energypass" label="是否通过体系认证" width="200">
        </el-table-column>
        <el-table-column prop="passorg" label="认证机构" width="200">
        </el-table-column>
        <el-table-column prop="director" label="负责人姓名" width="200">
        </el-table-column>
        <el-table-column prop="phone" label="电话" width="200">
        </el-table-column>
        <el-table-column prop="passdate" label="认证日期" width="200">
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
        name: "EnergyCertification",
      data() {
        return {
          pickerOption:{
            disabledDate(time){
              return time.getTime() > Date.now();
            }
          },
          options:[
            {
              "code":1,
              "value":"通过"
            },
            {
              "code":0,
              "value":"暂未通过"
            }
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
            id: '',
            dataindex: '',
            regversion: '',
            dicversion: '',
            enterprisecode: '',
            energypass: '',
            passorg: '',
            director: '',
            phone: '',
            passdate: '',
            remark: ''
          },
          dialogFormEdit: {
            id: '',
            dataindex: '',
            regversion: '',
            dicversion: '',
            enterprisecode: '',
            energypass: '',
            passorg: '',
            director: '',
            phone: '',
            passdate: '',
            remark: ''
          },
          rules: {
            energypass: [
              {required: true, message: '请选择是否通过认证', trigger: 'blur'},
            ],
            passorg: [
              {required: true, message: '请输入认证机构名称', trigger: 'blur'},
              {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
            ],
            phone: [
              {min: 11, max: 13, message: '长度在 11 到 13 个字符', trigger: 'blur'}
            ]
          }
        }
      },
      methods: {
        cancleUpdate() {
          this.dialogFormVisibleEdit = false;
        },
        cancleAdd() {
          this.dialogFormVisible = false;
        },
        saveUpdate(formName) {
          let self = this;
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let data = {
                "data": self.dialogFormEdit
              }
              self.$http.post(self.$baseUrl + "/CompanyEnergy/energyCertificationUpdate", data, self.$config).then(
                res => {
                  console.log(res);
                  if (res.data.code === 0) {
                    self.$message({
                      message: '修改企业认证信息成功',
                      type: 'success'
                    });
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
                  self.dialogFormVisibleEdit = false;
                  self.getList(self.dialogFormEdit.enterprisecode)
                }, reason => {
                  console.log("修改失败");
                })
            } else {
              this.$notify.error({
                title: '错误',
                message: '信息填写格式错误'
              });
              return false;
            }
          })
        },
        saveAdd(formName) {
          let self = this;
          this.$refs[formName].validate((valid) => {
            if (valid) {
              self.dialogForm.id = null;
              let data = {
                "data": self.dialogForm
              };
              self.$http.post(self.$baseUrl + "/CompanyEnergy/energyCertificationAdd", data, self.$config).then(
                res => {
                  console.log(res);
                  if (res.data.code === 0) {
                    self.$message({
                      message: '新增企业认证信息成功',
                      type: 'success'
                    });
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
                  self.getList(self.dialogForm.enterprisecode)
                }, reason => {
                  console.log("新增失败");
                })
            } else {
              this.$notify.error({
                title: '错误',
                message: '信息填写格式错误'
              });
              return false;
            }
          });
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

            self.$http.post(self.$baseUrl + "/CompanyEnergy/energyCertificationDelete", data, self.$config).then(
              res => {
                console.log(res);
                if (res.data.code === 0) {
                  self.$message({
                    type: 'success',
                    message: '删除成功!'
                  });
                  self.getList(row.enterprisecode);
                } else {
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
              }, res => {
                console.log("删除失败");

              });

          }).catch(() => {
            self.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        handleClick(row) {
          let self = this;
          console.log(row);
          self.dialogFormVisibleEdit = true;
          self.dialogFormEdit.id = row.id;
          self.dialogFormEdit.dataindex = row.dataindex;
          self.dialogFormEdit.enterprisecode = row.enterprisecode;
          self.dialogFormEdit.dicversion = row.dicversion;
          self.dialogFormEdit.regversion = row.regversion;
          self.dialogFormEdit.energypass = row.energypass==1?'通过':'暂未通过';
          self.dialogFormEdit.passorg = row.passorg;
          self.dialogFormEdit.director = row.director==null?'':row.director;
          self.dialogFormEdit.phone = row.phone==null?'':row.phone;
          self.dialogFormEdit.passdate = row.passdate==null?'':row.passdate;
          self.dialogFormEdit.remark = row.remark == null ? '' : row.remark;
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
        getList(code) {
          let self = this;
          let data = {
            'enterpriseCode': code,
          };
          //获取数据
          self.$http.post(self.$baseUrl + "/CompanyEnergy/energyCertificationList", data, self.$config).then(res => {
            console.log(res);
            if (res.data.code === 0) {
              if (res.data.result) {
                self.tableData = res.data.result;
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
            self.dialogForm.enterprisecode = res.data.result.enterprisecode;
            self.dialogForm.regversion = res.data.result.regversion;
            self.dialogForm.dicversion = res.data.result.dicversion;
          }
        }, ret => {
          console.log("获取Version失败");
        });
      }
    }
</script>

<style scoped>

</style>
