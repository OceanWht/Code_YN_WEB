<template>
  <el-container style="margin-top: 5%">
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="编辑产值、增加值、销售收入信息" :visible.sync="dialogFormVisibleEdit">
        <el-form ref="dialogFormEdit" :model="dialogFormEdit" :rules="rules"  label-width="200px" >
          <el-form-item prop="id" label="id"  v-if="false">
            <el-input v-model="dialogFormEdit.id"></el-input>
          </el-form-item>
          <el-form-item prop="dataindex" label="数据索引" v-if="false">
            <el-input v-model="dialogFormEdit.dataindex"></el-input>
          </el-form-item>
          <el-form-item prop="regversion" label="平台服务版本"  >
            <el-input v-model="dialogFormEdit.regversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="dicversion" label="基础数据版本" >
            <el-input v-model="dialogFormEdit.dicversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="enterprisecode" label="统一社会信用代码" >
            <el-input v-model="dialogFormEdit.enterprisecode" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="countyear" label="计入年度" >
            <el-input v-model="dialogFormEdit.countyear" ></el-input>
          </el-form-item>
          <el-form-item prop="outputvalue" label="年度增加值" >
            <el-input v-model="dialogFormEdit.outputvalue" ></el-input>
          </el-form-item>
          <el-form-item prop="addedvalue" label="年度产值" >
            <el-input v-model="dialogFormEdit.addedvalue" ></el-input>
          </el-form-item>
          <el-form-item prop="salesincome" label="年度销售收入">
            <el-input v-model="dialogFormEdit.salesincome"></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="描述">
            <el-input v-model="dialogFormEdit.remark"></el-input>
          </el-form-item>
          <el-form-item size="large">
            <el-button-group style="margin-left: -25%">
              <el-button type="primary" @click="saveEdit('dialogFormEdit')">保存</el-button>
              <el-button  @click="cancleEdit">取消</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="新增产值、增加值、销售收入信息" :visible.sync="dialogFormVisible">
        <el-form ref="dialogForm" :model="dialogForm" :rules="rules" label-width="200px" >
          <el-form-item prop="regversion" label="平台服务版本"  >
            <el-input v-model="dialogForm.regversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="dicversion" label="基础数据版本" >
            <el-input v-model="dialogForm.dicversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="enterprisecode" label="统一社会信用代码" >
            <el-input v-model="dialogForm.enterprisecode" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="countyear" label="计入年度" >
            <el-input v-model="dialogForm.countyear" ></el-input>
          </el-form-item>
          <el-form-item prop="outputvalue" label="年度增加值" >
            <el-input v-model="dialogForm.outputvalue" ></el-input>
          </el-form-item>
          <el-form-item prop="addedvalue" label="年度产值" >
            <el-input v-model="dialogForm.addedvalue" ></el-input>
          </el-form-item>
          <el-form-item prop="salesincome" label="年度销售收入">
            <el-input v-model="dialogForm.salesincome"></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="描述">
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
        <el-table-column prop="countyear" label="计入年度">
        </el-table-column>
        <el-table-column prop="outputvalue" label="年度增加值">
        </el-table-column>
        <el-table-column prop="addedvalue" label="年度产值">
        </el-table-column>
        <el-table-column prop="salesincome" label="年度销售收入">
        </el-table-column>
        <el-table-column prop="remark" label="描述">
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
    const baseUrl = 'http://localhost:8999/yn-nhjc';
    let config = {
        "headers":{'Content-Type':'application/json;charset=UTF-8'}
    };
    export default {
        name: "CompanyOutputValue",
        data() {
            return {
                dialogFormVisible:false,
                dialogFormVisibleEdit:false,
                dialogForm:{
                    regversion: '',
                    dicversion: '',
                    enterprisecode: '',
                    countyear: '',
                    outputvalue: '',
                    addedvalue: '',
                    salesincome: '',
                    remark: ''
                },
                dialogFormEdit: {
                    id: '',
                    dataindex: '',
                    regversion: '',
                    dicversion: '',
                    enterprisecode: '',
                    countyear: '',
                    outputvalue: '',
                    addedvalue: '',
                    salesincome: '',
                    remark: ''
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
                    countyear:[
                        { required: true, message: '请输入计入年度', trigger: 'blur' }
                    ],
                    outputvalue:[
                        { required: true, message: '请输入年度增加值（单位万）', trigger: 'blur' }
                    ],
                    addedvalue:[
                        { required: true, message: '请输入年度产值（单位万）', trigger: 'blur' }
                    ],
                    salesincome:[
                        { required: true, message: '请输入年度销售收入（单位万）', trigger: 'blur' }
                    ],
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
            getList(enterpriseCode){
                var self = this;
                let data = {
                    'enterpriseCode':enterpriseCode,
                };
                //获取数据
                self.$http.post(baseUrl+"/companyOutputValue/select",data,config).then(res=>{
                    console.log(res);
                    if (res.data.code === 0){
                        self.tableData = res.data.result;
                        self.page.totalCount = res.data.result.length;
                    }
                },res=>{
                    console.log("加载失败");
                })
            },
            saveAdd(formName) {
                let self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = {
                            "data":self.dialogForm
                        };
                        self.$http.post(baseUrl+"/companyOutputValue/add",data,config).then(
                            res=>{
                                console.log(res);
                                if (res.data.code === 0){
                                    self.$message({
                                        message: '新增产值、增加值、销售收入信息成功',
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
            handleClick(row) {
                let self = this;
                console.log(row);
                self.dialogFormVisibleEdit = true;
                self.dialogFormEdit.id = row.id;
                self.dialogFormEdit.dataindex = row.dataindex;
                self.dialogFormEdit.regversion = row.regversion;
                self.dialogFormEdit.dicversion = row.dicversion;
                self.dialogFormEdit.enterprisecode = row.enterprisecode;
                self.dialogFormEdit.countyear = row.countyear;
                self.dialogFormEdit.outputvalue = row.outputvalue;
                self.dialogFormEdit.addedvalue = row.addedvalue;
                self.dialogFormEdit.salesincome = row.salesincome;
                self.dialogFormEdit.remark = row.remark==null?'':row.remark
            },
            saveEdit(formName) {
                let self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = {
                            "data":self.dialogFormEdit
                        };

                        self.$http.post(baseUrl+"/companyOutputValue/update",data,config).then(
                            res=>{
                                console.log(res);
                                if (res.data.code === 0){
                                    self.$message({
                                        message: '更新产值、增加值、销售收入信息成功',
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
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            cancleAdd() {
                this.dialogFormVisible = false;
            },
            cancleEdit() {
                this.dialogFormVisibleEdit = false;
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

                    self.$http.post(baseUrl+"/companyOutputValue/delete",data,config).then(
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
            this.getList(self.$cookies.get('enterpriseCode'));
            let data = {
                "enterpriseCode":self.$cookies.get('enterpriseCode')
            };
            self.$http.post(baseUrl+"/CompanyContacter/getVersion",data,config).then(res=>{
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
