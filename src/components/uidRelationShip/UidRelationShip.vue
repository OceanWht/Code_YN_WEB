<template>
  <el-container style="margin-top: 5%">
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="编辑UID关系信息" :visible.sync="dialogFormVisibleEdit">
        <el-form ref="dialogFormEdit" :model="dialogFormEdit" :rules="rules" label-width="200px">
          <el-form-item prop="id" label="id" v-if="false">
            <el-input v-model="dialogFormEdit.id"></el-input>
          </el-form-item>
          <el-form-item prop="uid" label="UID">
            <el-input v-model="dialogFormEdit.uid" disabled></el-input>
          </el-form-item>
          <el-form-item prop="enterpriseCode" label="统一社会信用代码">
            <el-input v-model="dialogFormEdit.enterpriseCode"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button-group style="margin-left: -25%">
              <el-button type="success" @click="saveUpdate('dialogForm')">保存</el-button>
              <el-button type="primary" @click="cancleUpdate">取消</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="新增UID关系信息" :visible.sync="dialogFormVisible">
        <el-form ref="dialogForm" :model="dialogForm" :rules="rules" label-width="200px">
          <el-form-item prop="uid" label="UID">
            <el-input v-model="dialogForm.uid"></el-input>
          </el-form-item>
          <el-form-item prop="enterpriseCode" label="统一社会信用代码">
            <el-input v-model="dialogForm.enterpriseCode"></el-input>
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
        <el-table-column prop="id" label="id" fixed="left" width="300">
        </el-table-column>
        <el-table-column prop="uid" label="uid" width="300">
        </el-table-column>
        <el-table-column prop="enterpriseCode" label="统一社会信用代码" width="300">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="500">
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
    name: "UidRelationShip",
    data() {
      return {
        tableData: [],
        page: {
          currentPage: 1, // 当前页
          pageSize: 10, // 每页显示条目个数
          totalCount: 0 // 总条目数
        },
        dialogFormVisible: false,
        dialogFormVisibleEdit: false,
        dialogForm: {
          uid: '',
          enterpriseCode: '',
        },
        dialogFormEdit: {
          id: '',
          uid: '',
          enterpriseCode: '',
        },
        rules: {
          uid: [
            {required: true, message: '请输入uid', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
          ],
          enterpriseCode: [
            {required: true, message: '请输入统一社会信用代码', trigger: 'blur'},
            {min: 18, max: 18, message: '长度在 18 个字符', trigger: 'blur'}
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
              "data": self.dialogForm
            }
            self.$http.post(self.$baseUrl + "/otherSysConfig/updateUidRel", data, self.$config).then(
              res => {
                console.log(res);
                if (res.data.code === 0) {
                  self.$message({
                    message: '修改UID关系成功',
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
                self.getList()
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
            let data = {
              "data": self.dialogForm
            };
            self.$http.post(self.$baseUrl + "/otherSysConfig/addUidRel", data, self.$config).then(
              res => {
                console.log(res);
                if (res.data.code === 0) {
                  self.$message({
                    message: '新增UID关系成功',
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
                self.getList()
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
          self.$http.post(self.$baseUrl+"/otherSysConfig/deleteUidRel",data,self.$config).then(
            res =>{
              console.log(res);
              if (res.data.code === 0){
                self.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                self.getList();
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
      handleClick(row) {
        let self = this;
        console.log(row);
        self.dialogFormVisibleEdit = true;
        self.dialogFormEdit.id = row.id;
        self.dialogFormEdit.uid = row.uid;
        self.dialogFormEdit.enterpriseCode = row.enterpriseCode;
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
      getList() {
        let self = this;
        //获取数据
        self.$http.post(self.$baseUrl + "/otherSysConfig/getUidRelList", null, self.$config).then(res => {
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
      self.getList();
    }
  }
</script>

<style scoped>

</style>
