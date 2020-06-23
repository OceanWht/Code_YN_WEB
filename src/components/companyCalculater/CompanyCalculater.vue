<template>
  <el-container style="margin-top: 5%">
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="编辑计量人员配置信息" :visible.sync="dialogFormVisibleEdit">
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
          <el-form-item prop="calculatername" label="姓名">
            <el-input v-model="dialogFormEdit.calculatername"></el-input>
          </el-form-item>
          <el-form-item prop="dept" label="部门名称">
            <el-input v-model="dialogFormEdit.dept"></el-input>
          </el-form-item>
          <el-form-item prop="job" label="职位">
            <el-input v-model="dialogFormEdit.job"></el-input>
          </el-form-item>
          <el-form-item prop="phone" label="电话">
            <el-input v-model="dialogFormEdit.phone"></el-input>
          </el-form-item>
          <el-form-item prop="technicalpost" label="专业技术职称">
            <el-input v-model="dialogFormEdit.technicalpost"></el-input>
          </el-form-item>
          <el-form-item prop="certificate" label="专业技术证书">
            <el-row>
              <el-col :span="8">
                <el-image :src="dialogFormEdit.certificate" v-if="dialogFormEdit.certificate"></el-image>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-upload
                  class="upload-demo"
                  drag
                  action=""
                  :on-change="getFile"
                  :before-upload="beforeAvatarUpload"
                  :auto-upload='false'
                  :multiple='false'
                  :limit="1">
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item prop="certificatename" label="技术证书名称">
            <el-input v-model="dialogFormEdit.certificatename"></el-input>
          </el-form-item>
          <el-form-item prop="certificateno" label="技术证书编号">
            <el-input v-model="dialogFormEdit.certificateno"></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
            <el-input v-model="dialogFormEdit.remark" type="textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button-group style="margin-left: -25%">
              <el-button type="success" @click="saveUpdate('dialogForm')">保存</el-button>
              <el-button type="primary" @click="cancleUpdate">取消</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="新增计量人员配置信息" :visible.sync="dialogFormVisible">
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
          <el-form-item prop="calculatername" label="姓名">
            <el-input v-model="dialogForm.calculatername"></el-input>
          </el-form-item>
          <el-form-item prop="dept" label="部门名称">
            <el-input v-model="dialogForm.dept"></el-input>
          </el-form-item>
          <el-form-item prop="job" label="职位">
            <el-input v-model="dialogForm.job"></el-input>
          </el-form-item>
          <el-form-item prop="phone" label="电话">
            <el-input v-model="dialogForm.phone"></el-input>
          </el-form-item>
          <el-form-item prop="technicalpost" label="专业技术职称">
            <el-input v-model="dialogForm.technicalpost" ></el-input>
          </el-form-item>
          <el-form-item prop="certificate" label="专业技术证书">
            <el-row>
              <el-col :span="8">
                <el-image :src="dialogForm.certificate" v-if="dialogForm.certificate"></el-image>
              </el-col>
            </el-row>
          <el-row>
            <el-col :span="8">
              <el-upload
                class="upload-demo"
                drag
                action=""
                :on-preview="handlePictureCardPreview"
                :on-change="getFile"
                :before-upload="beforeAvatarUpload"
                :multiple='false'
                :limit="1">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过400kb</div>
              </el-upload>
            </el-col>
          </el-row>
          </el-form-item>
          <el-form-item prop="certificatename" label="技术证书名称">
            <el-input v-model="dialogForm.certificatename"></el-input>
          </el-form-item>
          <el-form-item prop="certificateno" label="技术证书编号">
            <el-input v-model="dialogForm.certificateno"></el-input>
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
        <el-table-column prop="calculatername" label="姓名" width="200">
        </el-table-column>
        <el-table-column prop="dept" label="部门名称" width="200">
        </el-table-column>
        <el-table-column prop="phone" label="电话" width="200">
        </el-table-column>
        <el-table-column prop="job" label="职位" width="200">
        </el-table-column>
        <el-table-column prop="technicalpost" label="专业技术职称" width="200">
        </el-table-column>
        <el-table-column prop="certificate" label="专业技术证书" width="200" v-if="false" >
        </el-table-column>
        <el-table-column prop="certificatename" label="技术证书名称" width="200">
        </el-table-column>
        <el-table-column prop="certificateno" label="技术证书编号" width="200">
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
    name: "CompanyCalculater",
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
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
          calculatername: '',
          dept: '',
          phone: '',
          job: '',
          technicalpost: '',
          certificate: '',
          certificatename: '',
          certificateno: '',
          remark: ''
        },
        dialogFormEdit: {
          id: '',
          dataindex: '',
          regversion: '',
          dicversion: '',
          enterprisecode: '',
          calculatername: '',
          dept: '',
          phone: '',
          job: '',
          technicalpost: '',
          certificate: '',
          certificatename: '',
          certificateno: '',
          remark: ''
        },
        rules: {
          calculatername: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
          ],
          dept: [
            {required: true, message: '请输入部门名称', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入电话', trigger: 'blur'},
            {min: 11, max: 13, message: '长度在 11 到 13 个字符', trigger: 'blur'}
          ],
          job: [
            {required: true, message: '请输入职位', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handlePictureCardPreview(file){
        this.dialogImageUrl = file.url;
      },
      cancleUpdate() {
        this.dialogFormVisibleEdit = false;
      },
      getBase64(file) {
        return new Promise(function(resolve, reject) {
          let reader = new FileReader();
          let imgResult = "";
          reader.readAsDataURL(file);
          reader.onload = function() {
            imgResult = reader.result;
          };
          reader.onerror = function(error) {
            reject(error);
          };
          reader.onloadend = function() {
            resolve(imgResult);
          };
        });
      },
      getFile(file) {
        this.getBase64(file.raw).then(res => {
          console.log(res);
          this.dialogForm.certificate = res;
        });
      },
      beforeAvatarUpload(file) {
        const isJPGOrPNG = file.type === 'image/jpeg' || file.type === 'image/png' ;
        const isLt400K = file.size / 1024 < 400;
        if (!isJPGOrPNG) {
          this.$message.error('上传图片只能是 JPG/PNG 格式!');
        }
        if (!isLt400K) {
          this.$message.error('上传图片大小不能超过 400K!');
        }

        return isJPGOrPNG && isLt400K;
      },
      cancleAdd() {
        this.dialogFormVisible = false;
      },
      saveUpdate(formName) {
        let self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let data = {
              "data": self.dialogForm
            }
            self.$http.post(self.$baseUrl + "/CompanyEnergy/calculaterUpdate", data, self.$config).then(
              res => {
                console.log(res);
                if (res.data.code === 0) {
                  self.$message({
                    message: '修改能源管理人员信息成功',
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
                self.getList(self.dialogForm.enterprisecode)
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
        self.$refs[formName].validate((valid) => {
          if (valid) {
            self.dialogForm.id = null;
            let data = {
              "data": self.dialogForm
            };
            self.$http.post(self.$baseUrl + "/CompanyEnergy/calculaterAdd", data, self.$config).then(
              res => {
                console.log(res);
                if (res.data.code === 0) {
                  self.$message({
                    message: '新增能源管理人员信息成功',
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

          self.$http.post(self.$baseUrl + "/CompanyEnergy/calculaterDelete", data, self.$config).then(
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
        self.dialogFormEdit.calculaterName = row.calculaterName;
        self.dialogFormEdit.dept = row.dept;
        self.dialogFormEdit.job = row.job;
        self.dialogFormEdit.phone = row.phone==null?'':row.phone;
        self.dialogFormEdit.technicalpost = row.technicalpost==null?'':row.technicalpost;
        self.dialogFormEdit.certificate = row.certificate==null?'':row.certificate;
        self.dialogFormEdit.certificatename = row.certificatename==null?'':row.certificatename;
        self.dialogFormEdit.certificateno = row.certificateno==null?'':row.certificateno;
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
        self.$http.post(self.$baseUrl + "/CompanyEnergy/calculaterList", data, self.$config).then(res => {
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
