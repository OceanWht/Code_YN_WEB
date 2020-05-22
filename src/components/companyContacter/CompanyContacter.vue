<template>
  <el-container style="margin-top: 5%">
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="新增联系人" :visible.sync="dialogFormVisible" >
        <el-form ref="dialogForm" :model="dialogForm" label-width="200px" style="margin-left: 20%">
          <el-form-item prop="regVersion" label="平台服务版本">
            <el-col :span="8">
              <el-input v-model="dialogForm.regVersion"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="dicVersion" label="基础数据版本">
            <el-col :span="8">
            <el-input v-model="dialogForm.dicVersion"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="enterpriseCode" label="统一社会信用代码">
            <el-col :span="8">
            <el-input v-model="dialogForm.enterpriseCode"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="contacterName" label="姓名">
            <el-col :span="8">
              <el-input v-model="dialogForm.contacterName"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="phone" label="电话">
            <el-col :span="8">
              <el-input v-model="dialogForm.phone"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="dept" label="所在部门">
            <el-col :span="8">
              <el-input v-model="dialogForm.dept"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="job" label="岗位">
            <el-col :span="8">
              <el-input v-model="dialogForm.job"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="fax" label="传真">
            <el-col :span="8">
              <el-input v-model="dialogForm.fax"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="email" label="邮件">
            <el-col :span="8">
              <el-input v-model="dialogForm.email"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
            <el-col :span="8">
              <el-input v-model="dialogForm.remark" type="textarea"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button-group>
              <el-button type="success">保存</el-button>
              <el-button type="primary">取消</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-table :data="tableData"  :row-class-name="tableRowClassName">
        <el-table-column prop="regVersion" label="平台服务版本" fixed="left" width="200">
        </el-table-column>
        <el-table-column prop="dicVersion" label="基础数据版本" width="200">
        </el-table-column>
        <el-table-column prop="enterpriseCode" label="统一社会信用代码" width="200">
        </el-table-column>
        <el-table-column prop="contacterName" label="姓名">
        </el-table-column>
        <el-table-column prop="phone" label="电话" width="200">
        </el-table-column>
        <el-table-column prop="dept" label="所在部门">
        </el-table-column>
        <el-table-column prop="job" label="职位">
        </el-table-column>
        <el-table-column prop="fax" label="传真" width="200">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="200">
        </el-table-column>
        <el-table-column prop="remark" label="备注" width="200">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)"  size="small">编辑</el-button>
            <el-button  size="small" type="danger"  @click="deleteItem">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-footer>
  </el-container>


</template>

<script>
  export default {
    name: "CompanyContacter",
    data() {
      return {
        dialogFormVisible:false,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        dialogForm:{
          regVersion:'',
          dicVersion:'',
          enterpriseCode:'',
          contacterName:'',
          phone:'',
          dept:'',
          job:'',
          fax:'',
          email:'',
          remark:''
        },
        tableData: [
          {
            "dataIndex":"FC155C390316…2633(64位)",
            "regVersion": "1.0版本",
            "dicVersion": "1.0版本",
            'enterpriseCode': '123456789123456789',
            'contacterName':'张三',
            'phone':'18888888888',
            'dept':'研发部',
            'job':'主任',
            'fax':'0871-68888888',
            'email':'328295484@qq.com',
            'remark':'单位联系人'
          },
          {
            "regVersion": "1.0版本",
            "dicVersion": "1.0版本",
            'enterpriseCode': '123456789123456789'
          },
          {
            "regVersion": "1.0版本",
            "dicVersion": "1.0版本",
            'enterpriseCode': '123456789123456789'
          }
        ]
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
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
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      deleteItem() {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
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
