<template>
  <el-container style="margin-top: 5%">
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="编辑产品结构信息" :visible.sync="dialogFormVisibleEdit">
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
          <el-form-item prop="productname" label="产品名称" >
            <el-input v-model="dialogFormEdit.productname" ></el-input>
          </el-form-item>
          <el-form-item prop="productcode" label="产品编号" >
            <el-input v-model="dialogFormEdit.productcode" ></el-input>
          </el-form-item>
          <el-form-item prop="producttype" label="产品类型" >
            <el-input v-model="dialogFormEdit.producttype" ></el-input>
          </el-form-item>
          <el-form-item prop="productunit" label="计量单位">
            <el-input v-model="dialogFormEdit.productunit"></el-input>
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
      <el-dialog title="新增产品结构信息" :visible.sync="dialogFormVisible">
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
          <el-form-item prop="productname" label="产品名称" >
            <el-input v-model="dialogForm.productname" ></el-input>
          </el-form-item>
          <el-form-item prop="productcode" label="产品编号" >
            <el-input v-model="dialogForm.productcode" ></el-input>
          </el-form-item>
          <el-form-item prop="producttype" label="产品类型" >
            <el-input v-model="dialogForm.producttype" ></el-input>
          </el-form-item>
          <el-form-item prop="productunit" label="计量单位">
            <el-input v-model="dialogForm.productunit"></el-input>
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
        <el-table-column prop="productname" label="产品名称">
        </el-table-column>
        <el-table-column prop="productcode" label="产品编号">
        </el-table-column>
        <el-table-column prop="producttype" label="产品类型">
        </el-table-column>
        <el-table-column prop="productunit" label="计量单位">
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
        name: "CompanyProductStructure",
        data() {
            return {
                dialogFormVisible:false,
                dialogFormVisibleEdit:false,
                dialogForm:{
                    regversion: '',
                    dicversion: '',
                    enterprisecode: '',
                    productname: '',
                    productcode: '',
                    producttype: '',
                    productunit: '',
                    remark: ''
                },
                dialogFormEdit: {
                    id: '',
                    dataindex: '',
                    regversion: '',
                    dicversion: '',
                    enterprisecode: '',
                    productname: '',
                    productcode: '',
                    producttype: '',
                    productunit: '',
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
                    productname:[
                        { required: true, message: '请输入产品名称', trigger: 'blur' }
                    ],
                    productcode:[
                        { required: true, message: '请输入产品编号', trigger: 'blur' }
                    ],
                    producttype:[
                        { required: true, message: '请输入产品类型', trigger: 'blur' }
                    ],
                    productunit:[
                        { required: true, message: '请输入计量单位', trigger: 'blur' }
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
                self.$http.post(baseUrl+"/companyProductStructure/select",data,config).then(res=>{
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
                        self.$http.post(baseUrl+"/companyProductStructure/add",data,config).then(
                            res=>{
                                console.log(res);
                                if (res.data.code === 0){
                                    self.$message({
                                        message: '新增产品结构信息成功',
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
                self.dialogFormEdit.productname = row.productname;
                self.dialogFormEdit.productcode = row.productcode;
                self.dialogFormEdit.producttype = row.producttype;
                self.dialogFormEdit.productunit = row.productunit;
                self.dialogFormEdit.remark = row.remark==null?'':row.remark
            },
            saveEdit(formName) {
                let self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = {
                            "data":self.dialogFormEdit
                        };

                        self.$http.post(baseUrl+"/companyProductStructure/update",data,config).then(
                            res=>{
                                console.log(res);
                                if (res.data.code === 0){
                                    self.$message({
                                        message: '更新产品结构信息成功',
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

                    self.$http.post(baseUrl+"/companyProductStructure/delete",data,config).then(
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
