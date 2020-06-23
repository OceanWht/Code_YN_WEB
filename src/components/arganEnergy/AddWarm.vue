<template>
  <el-container>
    <el-header>
      <el-col :offset="11">
        <el-button type="primary" size="medium" round @click="dialogFormVisible=true">新增</el-button>
      </el-col>
    </el-header>
    <el-main>
      <el-dialog title="新增公共机构采暖能源资源消费信息" :visible.sync="dialogFormVisible" >
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
          <el-form-item prop="charger" label="单位负责人">
            <el-input v-model="dialogForm.charger"></el-input>
          </el-form-item>
          <el-form-item prop="statisticians" label="统计负责人">
            <el-input v-model="dialogForm.statisticians"></el-input>
          </el-form-item>
          <el-form-item prop="preparer" label="填表人">
            <el-input v-model="dialogForm.preparer"></el-input>
          </el-form-item>
          <el-form-item prop="f301" label="采暖面积(平方米)">
            <el-input v-model="dialogForm.f301"></el-input>
          </el-form-item>
          <el-form-item prop="f3011" label="独立供暖面积(平方米)">
            <el-input v-model="dialogForm.f3011"></el-input>
          </el-form-item>
          <el-form-item prop="f3012" label="集中供暖面积（按面积收费）(平方米)">
            <el-input v-model="dialogForm.f3012"></el-input>
          </el-form-item>
          <el-form-item prop="f3013" label="集中供暖面积（按热量收费）(平方米)">
            <el-input v-model="dialogForm.f3013"></el-input>
          </el-form-item>
          <el-form-item prop="f302" label="采暖天数(天)">
            <el-input v-model="dialogForm.f302"></el-input>
          </el-form-item>
          <el-form-item prop="f303" label="热水锅炉热功率(兆瓦)">
            <el-input v-model="dialogForm.f303"></el-input>
          </el-form-item>
          <el-form-item prop="f304" label="蒸汽锅炉蒸发量(吨/小时)">
            <el-input v-model="dialogForm.f304"></el-input>
          </el-form-item>
          <el-form-item prop="f310" label="采暖水消费量(立方米)">
            <el-input v-model="dialogForm.f310"></el-input>
          </el-form-item>
          <el-form-item prop="f311" label="采暖水消费费用(元)">
            <el-input v-model="dialogForm.f311"></el-input>
          </el-form-item>
          <el-form-item prop="f320" label="采暖电消费量(千瓦时)">
            <el-input v-model="dialogForm.f320"></el-input>
          </el-form-item>
          <el-form-item prop="f321" label="采暖电消费费用(元)">
            <el-input v-model="dialogForm.f321"></el-input>
          </el-form-item>
          <el-form-item prop="f330" label="采暖煤炭消费量(吨)">
            <el-input v-model="dialogForm.f330"></el-input>
          </el-form-item>
          <el-form-item prop="f331" label="采暖煤炭消费费用(元)">
            <el-input v-model="dialogForm.f331"></el-input>
          </el-form-item>
          <el-form-item prop="f340" label="采暖天然气消费量(立方米)">
            <el-input v-model="dialogForm.f340"></el-input>
          </el-form-item>
          <el-form-item prop="f341" label="采暖天然气消费费用(元)">
            <el-input v-model="dialogForm.f341"></el-input>
          </el-form-item>
          <el-form-item prop="f350" label="采暖柴油消费量(升)">
            <el-input v-model="dialogForm.f350"></el-input>
          </el-form-item>
          <el-form-item prop="f351" label="采暖柴油消费费用(元)">
            <el-input v-model="dialogForm.f351"></el-input>
          </el-form-item>
          <el-form-item prop="f360" label="采暖热力消费量(吉焦)">
            <el-input v-model="dialogForm.f360"></el-input>
          </el-form-item>
          <el-form-item prop="f361" label="采暖热力消费费用(元)">
            <el-input v-model="dialogForm.f361"></el-input>
          </el-form-item>
          <el-form-item prop="f370" label="其他能源消费量(吨标准煤)">
            <el-input v-model="dialogForm.f370"></el-input>
          </el-form-item>
          <el-form-item prop="f371" label="其他能源消费费用(元)">
            <el-input v-model="dialogForm.f371"></el-input>
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
      <el-dialog title="编辑公共机构采暖能源资源消费信息" :visible.sync="dialogFormVisibleEdit" >
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
          <el-form-item prop="charger" label="单位负责人">
            <el-input v-model="dialogFormEdit.charger"></el-input>
          </el-form-item>
          <el-form-item prop="statisticians" label="统计负责人">
            <el-input v-model="dialogFormEdit.statisticians"></el-input>
          </el-form-item>
          <el-form-item prop="preparer" label="填表人">
            <el-input v-model="dialogFormEdit.preparer"></el-input>
          </el-form-item>
          <el-form-item prop="f301" label="采暖面积(平方米)">
            <el-input v-model="dialogFormEdit.f301"></el-input>
          </el-form-item>
          <el-form-item prop="f3011" label="独立供暖面积(平方米)">
            <el-input v-model="dialogFormEdit.f3011"></el-input>
          </el-form-item>
          <el-form-item prop="f3012" label="集中供暖面积（按面积收费）(平方米)">
            <el-input v-model="dialogFormEdit.f3012"></el-input>
          </el-form-item>
          <el-form-item prop="f3013" label="集中供暖面积（按热量收费）(平方米)">
            <el-input v-model="dialogFormEdit.f3013"></el-input>
          </el-form-item>
          <el-form-item prop="f302" label="采暖天数(天)">
            <el-input v-model="dialogFormEdit.f302"></el-input>
          </el-form-item>
          <el-form-item prop="f303" label="热水锅炉热功率(兆瓦)">
            <el-input v-model="dialogFormEdit.f303"></el-input>
          </el-form-item>
          <el-form-item prop="f304" label="蒸汽锅炉蒸发量(吨/小时)">
            <el-input v-model="dialogFormEdit.f304"></el-input>
          </el-form-item>
          <el-form-item prop="f310" label="采暖水消费量(立方米)">
            <el-input v-model="dialogFormEdit.f310"></el-input>
          </el-form-item>
          <el-form-item prop="f311" label="采暖水消费费用(元)">
            <el-input v-model="dialogFormEdit.f311"></el-input>
          </el-form-item>
          <el-form-item prop="f320" label="采暖电消费量(千瓦时)">
            <el-input v-model="dialogFormEdit.f320"></el-input>
          </el-form-item>
          <el-form-item prop="f321" label="采暖电消费费用(元)">
            <el-input v-model="dialogFormEdit.f321"></el-input>
          </el-form-item>
          <el-form-item prop="f330" label="采暖煤炭消费量(吨)">
            <el-input v-model="dialogFormEdit.f330"></el-input>
          </el-form-item>
          <el-form-item prop="f331" label="采暖煤炭消费费用(元)">
            <el-input v-model="dialogFormEdit.f331"></el-input>
          </el-form-item>
          <el-form-item prop="f340" label="采暖天然气消费量(立方米)">
            <el-input v-model="dialogFormEdit.f340"></el-input>
          </el-form-item>
          <el-form-item prop="f341" label="采暖天然气消费费用(元)">
            <el-input v-model="dialogFormEdit.f341"></el-input>
          </el-form-item>
          <el-form-item prop="f350" label="采暖柴油消费量(升)">
            <el-input v-model="dialogFormEdit.f350"></el-input>
          </el-form-item>
          <el-form-item prop="f351" label="采暖柴油消费费用(元)">
            <el-input v-model="dialogFormEdit.f351"></el-input>
          </el-form-item>
          <el-form-item prop="f360" label="采暖热力消费量(吉焦)">
            <el-input v-model="dialogFormEdit.f360"></el-input>
          </el-form-item>
          <el-form-item prop="f361" label="采暖热力消费费用(元)">
            <el-input v-model="dialogFormEdit.f361"></el-input>
          </el-form-item>
          <el-form-item prop="f370" label="其他能源消费量(吨标准煤)">
            <el-input v-model="dialogFormEdit.f370"></el-input>
          </el-form-item>
          <el-form-item prop="f371" label="其他能源消费费用(元)">
            <el-input v-model="dialogFormEdit.f371"></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
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
      <el-table :data="tableData.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"  :row-class-name="tableRowClassName">
        <el-table-column prop="id" label="id" v-if="false">
        </el-table-column>
        <el-table-column prop="dataindex" label="数据索引" v-if="false">
        </el-table-column>
        <el-table-column prop="i0" label="数据状态" fixed="left" width="200">
        </el-table-column>
        <el-table-column prop="regversion" label="平台服务版本" fixed="left" width="200">
        </el-table-column>
        <el-table-column prop="dicversion" label="基础数据版本" width="200">
        </el-table-column>
        <el-table-column prop="enterprisecode" label="统一社会信用代码" width="200">
        </el-table-column>
        <el-table-column prop="reportdate" label="报送日期" width="200">
        </el-table-column>
        <el-table-column prop="charger" label="单位负责人"width="200">
        </el-table-column>
        <el-table-column prop="statisticians" label="统计负责人"width="200">
        </el-table-column>
        <el-table-column prop="preparer" label="填表人"width="200">
        </el-table-column>
        <el-table-column prop="prepardate" label="填报日期"width="200">
        </el-table-column>
        <el-table-column prop="f301" label="采暖面积(平方米)"width="200">
        </el-table-column>
        <el-table-column prop="f3011" label="独立供暖面积(平方米)"width="200">
        </el-table-column>
        <el-table-column prop="f3012" label="集中供暖面积（按面积收费）(平方米)"width="200">
        </el-table-column>
        <el-table-column prop="f3013" label="集中供暖面积（按热量收费）(平方米)"width="200">
        </el-table-column>
        <el-table-column prop="f302" label="采暖天数(天)"width="200">
        </el-table-column>
        <el-table-column prop="f303" label="热水锅炉热功率(兆瓦)"width="200">
        </el-table-column>
        <el-table-column prop="f304" label="蒸汽锅炉蒸发量(吨/小时)"width="200">
        </el-table-column>
        <el-table-column prop="f310" label="采暖水消费量(立方米)"width="200">
        </el-table-column>
        <el-table-column prop="f311" label="采暖水消费费用(元)"width="200">
        </el-table-column>
        <el-table-column prop="f320" label="采暖电消费量(千瓦时)"width="200">
        </el-table-column>
        <el-table-column prop="f321" label="采暖电消费费用(元)"width="200">
        </el-table-column>
        <el-table-column prop="f330" label="采暖煤炭消费量(吨)"width="200">
        </el-table-column>
        <el-table-column prop="f331" label="采暖煤炭消费费用(元)"width="200">
        </el-table-column>
        <el-table-column prop="f340" label="采暖天然气消费量(立方米)"width="200">
        </el-table-column>
        <el-table-column prop="f341" label="采暖天然气消费费用(元)"width="200">
        </el-table-column>
        <el-table-column prop="f350" label="采暖柴油消费量(升)"width="200">
        </el-table-column>
        <el-table-column prop="f351" label="采暖柴油消费费用(元)"width="200">
        </el-table-column>
        <el-table-column prop="f360" label="采暖热力消费量(吉焦)"width="200">
        </el-table-column>
        <el-table-column prop="f361" label="采暖热力消费费用(元)"width="200">
        </el-table-column>
        <el-table-column prop="f370" label="其他能源消费量(吨标准煤)"width="200">
        </el-table-column>
        <el-table-column prop="f371" label="其他能源消费费用(元)"width="200">
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
    name: "AddWarm",
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
          reportdate:'',
          charger:'',
          statisticians:'',
          preparer:'',
          prepardate:'',
          f301:'',
          f3011:'',
          f3012:'',
          f3013:'',
          f302:'',
          f303:'',
          f304:'',
          f310:'',
          f311:'',
          f320:'',
          f321:'',
          f330:'',
          f331:'',
          f340:'',
          f341:'',
          f350:'',
          f351:'',
          f360:'',
          f361:'',
          f370:'',
          f371:'',
          remark:'',
          i0:''
        },
        dialogFormEdit:{
          id:'',
          regversion:'',
          dicversion:'',
          dataindex:'',
          enterprisecode:'',
          reportdate:'',
          charger:'',
          statisticians:'',
          preparer:'',
          prepardate:'',
          f301:'',
          f3011:'',
          f3012:'',
          f3013:'',
          f302:'',
          f303:'',
          f304:'',
          f310:'',
          f311:'',
          f320:'',
          f321:'',
          f330:'',
          f331:'',
          f340:'',
          f341:'',
          f350:'',
          f351:'',
          f360:'',
          f361:'',
          f370:'',
          f371:'',
          remark:'',
          i0:''
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
          reportdate:[
            { required: true, message: '报送日期', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
          ],
          charger:[
            { required: true, message: '单位负责人', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          statisticians:[
            { required: true, message: '统计负责人', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          preparer:[
            { required: true, message: '填表人', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          prepardate:[
            { required: true, message: '填报日期', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
          ],
          f301:[
            { required: true, message: '采暖面积(平方米)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f3011:[
            { required: true, message: '独立供暖面积(平方米)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f3012:[
            { required: true, message: '集中供暖面积（按面积收费）(平方米)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f3013:[
            { required: true, message: '集中供暖面积（按热量收费）(平方米)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f302:[
            { required: true, message: '采暖天数(天)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f303:[
            { required: true, message: '热水锅炉热功率(兆瓦)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f304:[
            { required: true, message: '蒸汽锅炉蒸发量(吨/小时)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f310:[
            { required: true, message: '采暖水消费量(立方米)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f311:[
            { required: true, message: '采暖水消费费用(元)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f320:[
            { required: true, message: '采暖电消费量(千瓦时)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f321:[
            { required: true, message: '采暖电消费费用(元)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f330:[
            { required: true, message: '采暖煤炭消费量(吨)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f331:[
            { required: true, message: '采暖煤炭消费费用(元)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f340:[
            { required: true, message: '采暖天然气消费量(立方米)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f341:[
            { required: true, message: '采暖天然气消费费用(元)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f350:[
            { required: true, message: '采暖柴油消费量(升)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f351:[
            { required: true, message: '采暖柴油消费费用(元)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f360:[
            { required: true, message: '采暖热力消费量(吉焦)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f361:[
            { required: true, message: '采暖热力消费费用(元)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f370:[
            { required: true, message: '其他能源消费量(吨标准煤)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          f371:[
            { required: true, message: '其他能源消费费用(元)', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
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
            self.dialogForm.i0 = 2;
            let data = {
              "data":self.dialogForm
            };
            self.$http.post(self.$baseUrl+"/arganEnergy/addWarm",data,self.$config).then(
              res=>{
                console.log(res);
                if (res.data.code === 0){
                  self.$message({
                    message: '新增公共机构采暖能源资源消费信息成功',
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
            if(self.dialogFormEdit.i0 == '上传成功'){
              self.dialogFormEdit.i0 = 0;
            }else if(self.dialogFormEdit.i0 == '上传失败'){
              self.dialogFormEdit.i0 = 1;
            }else if(self.dialogFormEdit.i0 == '等待上传'){
              self.dialogFormEdit.i0 = 2;
            }
            let data = {
              "data":self.dialogFormEdit
            };

            self.$http.post(self.$baseUrl+"/arganEnergy/updateWarm",data,self.$config).then(
              res=>{
                console.log(res);
                if (res.data.code === 0){
                  self.$message({
                    message: '更新公共机构采暖能源资源消费信息成功',
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
        self.$http.post(self.$baseUrl+"/addWarm/list",data).then(res=>{
          console.log(res);
          if (res.data.code === 0){
            self.tableData = res.data.result;
            self.page.totalCount = res.data.result.length;
            let tabledata = res.data.result;
            tabledata.forEach(function (item,index) {
              if (item.reportdate !== null && item.reportdate.indexOf('T') > -1){
                item.reportdate = item.reportdate.substring(0,item.reportdate.lastIndexOf('T'))
              }
              if (item.prepardate !== null && item.prepardate.indexOf('T') > -1){
                item.prepardate = item.prepardate.substring(0,item.prepardate.lastIndexOf('T'))
              }
            })
          }
          let taticList = {
            0:'上传成功',
            1:'上传失败',
            2:'等待上传'
          };
          res.data.result.forEach(function(ke, val){
            if(ke.i0 == 0){
              ke.i0 = taticList[0];
            }else if(ke.i0 == 1){
              ke.i0 = taticList[1];
            }else if(ke.i0 == 2){
              ke.i0 = taticList[2];
            }
          });
        },res=>{
          console.log("加载失败");
        })
      },
      handleClick(row) {
        let self = this;
        if(row.i0 == '上传成功'){
          self.$message({
            type: 'warning',
            message: '此数据已经上传完成，不能被修改!'
          });
          return;
        }
        self.dialogFormVisibleEdit = true;
        self.dialogFormEdit.id = row.id;
        self.dialogFormEdit.dataindex = row.dataindex;
        self.dialogFormEdit.regversion = row.regversion;
        self.dialogFormEdit.dicversion = row.dicversion;
        self.dialogFormEdit.enterprisecode = row.enterprisecode;
        self.dialogFormEdit.reportdate = row.reportdate;
        self.dialogFormEdit.idcname = row.idcname;
        self.dialogFormEdit.charger = row.charger;
        self.dialogFormEdit.statisticians = row.statisticians;
        self.dialogFormEdit.preparer = row.preparer;
        self.dialogFormEdit.prepardate = row.prepardate;
        self.dialogFormEdit.f301 = row.f301;
        self.dialogFormEdit.f3011 = row.f3011;
        self.dialogFormEdit.f3012 = row.f3012;
        self.dialogFormEdit.f3013 = row.f3013;
        self.dialogFormEdit.f302 = row.f302;
        self.dialogFormEdit.f303 = row.f303;
        self.dialogFormEdit.f304 = row.f304;
        self.dialogFormEdit.f310 = row.f310;
        self.dialogFormEdit.f311 = row.f311;
        self.dialogFormEdit.f320 = row.f320;
        self.dialogFormEdit.f321 = row.f321;
        self.dialogFormEdit.f330 = row.f330;
        self.dialogFormEdit.f331 = row.f331;
        self.dialogFormEdit.f340 = row.f340;
        self.dialogFormEdit.f341 = row.f341;
        self.dialogFormEdit.f350 = row.f350;
        self.dialogFormEdit.f351 = row.f351;
        self.dialogFormEdit.f360 = row.f360;
        self.dialogFormEdit.f361 = row.f361;
        self.dialogFormEdit.f370 = row.f370;
        self.dialogFormEdit.f371 = row.f371;
        self.dialogFormEdit.remark = row.remark;
        self.dialogFormEdit.i0 = row.i0;
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
        if(row.i0 == '上传成功'){
          self.$message({
            type: 'warning',
            message: '此数据已经上传完成，不能被删除!'
          });
          return;
        }
        self.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let data ={
            'data':row
          };

          self.$http.post(self.$baseUrl+"/arganEnergy/deleteWarm",data,self.$config).then(
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
      self.$http.post(self.$baseUrl+"/arganEnergy/getVersion",data,self.$config).then(res=>{
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
