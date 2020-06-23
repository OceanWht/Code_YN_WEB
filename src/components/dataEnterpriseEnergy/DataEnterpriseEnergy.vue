<template>
  <el-container>
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="新增用能单位能源资源计量采集数据" :visible.sync="dialogFormVisible" >
        <el-form ref="dialogForm" :model="dialogForm" label-width="200px">
          <el-form-item prop="regversion" label="平台服务版本">
              <el-input v-model="dialogForm.regversion"></el-input>
          </el-form-item>
          <el-form-item prop="dicversion" label="基础数据版本">
              <el-input v-model="dialogForm.dicversion"></el-input>
          </el-form-item>
          <el-form-item prop="enterprisecode" label="统一社会信用代码">
              <el-input v-model="dialogForm.enterprisecode"></el-input>
          </el-form-item>
          <el-form-item prop="datacode" label="上传数据项编码">
              <el-input v-model="dialogForm.datacode"></el-input>
          </el-form-item>
          <el-form-item prop="datavalue" label="上传数据">
              <el-input v-model="dialogForm.datavalue"></el-input>
          </el-form-item>
          <el-form-item prop="convertration" label="折标系数">
              <el-input v-model="dialogForm.convertration"></el-input>
          </el-form-item>
          <el-form-item prop="valid" label="数据有效性">
              <el-input v-model="dialogForm.valid"></el-input>
          </el-form-item>
          <el-form-item prop="scope" label="数据范围">
              <el-input v-model="dialogForm.scope"></el-input>
          </el-form-item>
          <el-form-item prop="inputtype" label="数据采集类型">
              <el-input v-model="dialogForm.inputtype"></el-input>
          </el-form-item>
          <el-form-item prop="stattype" label="数据采集频率">
              <el-input v-model="dialogForm.stattype"></el-input>
          </el-form-item>
          <el-form-item prop="statdate" label="数据统计时间">
              <el-input v-model="dialogForm.statdate"></el-input>
          </el-form-item>
          <el-form-item prop="uploaddate" label="数据上传时间">
              <el-input v-model="dialogForm.uploaddate"></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
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
        <el-table-column prop="datacode" label="上传数据项编码" width="200">
        </el-table-column>
        <el-table-column prop="datavalue" label="上传数据" width="200">
        </el-table-column>
        <el-table-column prop="convertration" label="折标系数" width="200">
        </el-table-column>
        <el-table-column prop="valid" label="数据有效性" width="200">
        </el-table-column>
        <el-table-column prop="scope" label="数据范围" width="200">
        </el-table-column>
        <el-table-column prop="inputtype" label="数据采集类型" width="200">
        </el-table-column>
        <el-table-column prop="stattype" label="数据采集频率" width="200">
        </el-table-column>
        <el-table-column prop="statdate" label="数据统计时间" width="200">
        </el-table-column>
        <el-table-column prop="uploaddate" label="数据上传时间" width="200">
        </el-table-column>
        <el-table-column prop="remark" label="备注" width="200">
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
    name: "DataEnterpriseEnergy",
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
          datacode:'',
          datavalue:'',
          convertration:'',
          valid:'',
          scope:'',
          inputtype:'',
          stattype:'',
          statdate:'',
          uploaddate:'',
          remark:''
        },
        dialogFormEdit:{
          id:'',
          regversion:'',
          dicversion:'',
          dataindex:'',
          enterprisecode:'',
          datacode:'',
          datavalue:'',
          convertration:'',
          valid:'',
          scope:'',
          inputtype:'',
          stattype:'',
          statdate:'',
          uploaddate:'',
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
          datacode:[
            { required: true, message: '上传数据项编码', trigger: 'blur' },
            { min: 18, max: 18, message: '长度在 18 个字符', trigger: 'blur' }
          ],
          datavalue:[
            { required: true, message: '上传数据', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 15 个字符', trigger: 'blur' }
          ],
          convertration:[
            { required: true, message: '折标系数', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          valid:[
            { required: true, message: '数据有效性', trigger: 'blur' },
            { min: 1, max: 1, message: '长度在 1 个字符', trigger: 'blur' }
          ],
          scope:[
            { required: true, message: '数据范围', trigger: 'blur' },
            { min: 1, max: 1, message: '长度在 1 个字符', trigger: 'blur' }
          ],
          inputtype:[
            { required: true, message: '数据采集类型', trigger: 'blur' },
            { min: 1, max: 1, message: '长度在 1 个字符', trigger: 'blur' }
          ],
          stattype:[
            { required: true, message: '数据采集频率', trigger: 'blur' },
            { min: 1, max: 1, message: '长度在 1 个字符', trigger: 'blur' }
          ],
          statdate:[
            { required: true, message: '数据统计时间', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
          ],
          uploaddate:[
            { required: true, message: '数据上传时间', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
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
            self.$http.post(self.$baseUrl+"/dataEnterpriseEnergy",data,self.$config).then(
              res=>{
                console.log(res);
                if (res.data.code === 0){
                  self.$message({
                    message: '新增用能单位能源资源计量采集数据成功',
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
        self.$http.post(self.$baseUrl+"/dataEnterpriseEnergy/list",data).then(res=>{
          console.log(res);
          if (res.data.code === 0){
            self.tableData = res.data.result;
            self.page.totalCount = res.data.result.length;
          }
        },res=>{
          console.log("加载失败");
        })
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
    },
    created() {
      let self = this;
      self.getList(self.$cookies.get('enterpriseCode'));
      let data = {
        "enterpriseCode":self.$cookies.get('enterpriseCode')
      };
      self.$http.post(self.$baseUrl+"/dataEnterpriseEnergy/getVersion",data,self.$config).then(res=>{
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
