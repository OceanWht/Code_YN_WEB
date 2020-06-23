<template>
  <el-container style="margin-top: 5%">
    <el-main>
      <el-dialog title="历史数据" :visible.sync="dialogTableVisible" width="90%">
        <el-row>
          <el-table :data="tableDataHistory.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
                    style="width: 100%">
            <el-table-column type="expand" fixed="left">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="id">
                    <span>{{ props.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="数据索引">
                    <span>{{ props.row.dataindex }}</span>
                  </el-form-item>
                  <el-form-item label="平台服务版本">
                    <span>{{ props.row.regversion }}</span>
                  </el-form-item>
                  <el-form-item label="基础数据版本">
                    <span>{{ props.row.dicversion }}</span>
                  </el-form-item>
                  <el-form-item label="统一社会信用代码">
                    <span>{{ props.row.enterprisecode }}</span>
                  </el-form-item>
                  <el-form-item label="上传数据项名称">
                    <span>{{ props.row.backupField1 }}</span>
                  </el-form-item>
                  <el-form-item label="上传数据项编码">
                    <span>{{ props.row.datacode }}</span>
                  </el-form-item>
                  <el-form-item label="上传数据">
                    <span>{{ props.row.datavalue }}</span>
                  </el-form-item>
                  <el-form-item label="折标系数">
                    <span>{{ props.row.convertration }}</span>
                  </el-form-item>
                  <el-form-item label="数据有效性">
                    <span>{{ props.row.valid }}</span>
                  </el-form-item>
                  <el-form-item label="数据范围">
                    <span>{{ props.row.scope }}</span>
                  </el-form-item>
                  <el-form-item label="数据采集类型">
                    <span>{{ props.row.inputtype }}</span>
                  </el-form-item>
                  <el-form-item label="数据采集频率">
                    <span>{{ props.row.stattype }}</span>
                  </el-form-item>
                  <el-form-item label="数据统计时间">
                    <span>{{ props.row.statdate }}</span>
                  </el-form-item>
                  <el-form-item label="数据上传时间">
                    <span>{{ props.row.uploaddate }}</span>
                  </el-form-item>
                  <el-form-item label="数据上传状态">
                    <span>{{ props.row.backupField3 }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="id" label="id" v-if="false">
            </el-table-column>
            <el-table-column prop="dataindex" label="数据索引" v-if="false">
            </el-table-column>
            <el-table-column prop="regversion" label="平台服务版本" v-if="false">
            </el-table-column>
            <el-table-column prop="dicversion" label="基础数据版本" v-if="false">
            </el-table-column>
            <el-table-column prop="enterprisecode" label="统一社会信用代码" v-if="false">
            </el-table-column>
            <el-table-column prop="backupField1" label="上传数据项名称" width="200" fixed="left">
            </el-table-column>
            <el-table-column prop="datacode" label="上传数据项编码" width="200" v-if="false">
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
            <el-table-column prop="remark" label="备注" width="200" v-if="false">
            </el-table-column>
            <el-table-column prop="stattype" label="数据采集频率" width="200">
            </el-table-column>
            <el-table-column prop="statdate" label="数据统计时间" width="200">
            </el-table-column>
            <el-table-column prop="uploaddate" label="数据上传时间" width="200">
            </el-table-column>
            <el-table-column prop="backupField3" label="数据上传状态" width="200">
            </el-table-column>
           <!-- <el-table-column
              fixed="right"
              label="操作"
              width="150">
              <template slot-scope="scope">
                <el-button @click="energyEdit(scope.row)" size="primary" round>编辑</el-button>
              </template>
            </el-table-column>-->
          </el-table>
        </el-row>
      </el-dialog>
      <el-dialog title="编辑计量采集数据" :visible.sync="dialogFormVisible">
        <el-form ref="dialogForm" :model="dialogForm" :rules="rules" label-width="200px">
          <el-form-item prop="id" label="id" v-if="false">
            <el-input v-model="dialogForm.id"></el-input>
          </el-form-item>
          <el-form-item prop="dataindex" label="数据索引" v-if="false">
            <el-input v-model="dialogForm.dataindex"></el-input>
          </el-form-item>
          <el-form-item prop="regversion" label="平台服务版本">
            <el-input v-model="dialogForm.regversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="dicversion" label="基础数据版本">
            <el-input v-model="dialogForm.dicversion" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="enterprisecode" label="统一社会信用代码">
            <el-input v-model="dialogForm.enterprisecode" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="backupfield1" label="上传数据项名称" >
            <el-input v-model="dialogForm.backupfield1" disabled></el-input>
          </el-form-item>
          <el-form-item prop="datacode" label="上传数据项编码" >
            <el-input v-model="dialogForm.datacode" disabled></el-input>
          </el-form-item>
          <el-form-item prop="datavalue" label="上传数据">
            <el-input v-model="dialogForm.datavalue"></el-input>
          </el-form-item>
          <el-form-item prop="convertration" label="折标系数">
            <el-input v-model="dialogForm.convertration"></el-input>
          </el-form-item>
          <el-form-item prop="valid" label="数据有效性">
            <el-col :span="7">
              <el-select v-model="dialogForm.valid" placeholder="请选择">
                <el-option v-for="item in validList" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="scope" label="数据范围">
            <el-input v-model="dialogForm.scope" disabled></el-input>
          </el-form-item>
          <el-form-item prop="inputtype" label="数据采集类型">
            <el-input v-model="dialogForm.inputtype" disabled></el-input>
          </el-form-item>
          <el-form-item prop="stattype" label="数据采集频率">
            <el-input v-model="dialogForm.stattype" disabled></el-input>
          </el-form-item>
          <el-form-item prop="statdate" label="数据统计时间">
            <el-input v-model="dialogForm.statdate" disabled></el-input>
          </el-form-item>
          <el-form-item prop="uploaddate" label="数据上传时间">
            <el-input v-model="dialogForm.uploaddate" disabled></el-input>
          </el-form-item>
          <el-form-item prop="backupfield3" label="数据上传状态">
            <el-input v-model="dialogForm.backupfield3" disabled></el-input>
          </el-form-item>
          <el-form-item>
            <el-button-group style="margin-left: -25%">
              <el-button type="success" @click="saveUpdate('dialogForm')">保存</el-button>
              <el-button type="primary" @click="cancleUpdate">取消</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-dialog>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="日数据填报" name="day">
              <el-row>
                <el-col :span="3">
                  <el-date-picker
                    v-model="date"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </el-col>
                <el-col :span="3" :offset="1">
                 <!-- <el-button type="success" size="medium" round @click="queryByDate">查询</el-button>-->
                  <el-tooltip class="item" effect="dark" content="根据日期查看历史上传成功数据" placement="top">
                  <el-button type="primary" size="medium" round @click="queryByDate">查询历史数据</el-button>
                  </el-tooltip>
                </el-col>
              </el-row>

            </el-tab-pane>
            <el-tab-pane label="月数据填报" name="month">
              <el-row>
                <el-col :span="3">
                  <el-date-picker
                    v-model="date"
                    type="month"
                    placeholder="选择日期"
                    :picker-options="pickerOptions"
                    format="yyyy 年 MM 月"
                    value-format="yyyy-MM">
                  </el-date-picker>
                </el-col>
                <el-col :span="3" :offset="1">
                  <el-tooltip class="item" effect="dark" content="根据日期查看历史上传成功数据" placement="top">
                    <el-button type="primary" size="medium" round @click="queryByDate">查询历史数据</el-button>
                  </el-tooltip>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="年数据填报" name="year">
              <el-row>
                <el-col :span="3">
                  <el-date-picker
                    v-model="date"
                    type="year"
                    placeholder="选择日期"
                    :picker-options="pickerOptions"
                    format="yyyy 年"
                    value-format="yyyy">
                  </el-date-picker>
                </el-col>
                <el-col :span="3" :offset="1">
                  <el-tooltip class="item" effect="dark" content="根据日期查看历史上传成功数据" placement="top">
                    <el-button type="primary" size="medium" round @click="queryByDate">查询历史数据</el-button>
                  </el-tooltip>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
          <el-row>
            <el-table :data="tableData.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
                      style="width: 100%">
              <el-table-column type="expand" fixed="left">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="id">
                      <span>{{ props.row.id }}</span>
                    </el-form-item>
                    <el-form-item label="数据索引">
                      <span>{{ props.row.dataindex }}</span>
                    </el-form-item>
                    <el-form-item label="平台服务版本">
                      <span>{{ props.row.regversion }}</span>
                    </el-form-item>
                    <el-form-item label="基础数据版本">
                      <span>{{ props.row.dicversion }}</span>
                    </el-form-item>
                    <el-form-item label="统一社会信用代码">
                      <span>{{ props.row.enterprisecode }}</span>
                    </el-form-item>
                    <el-form-item label="上传数据项名称">
                      <span>{{ props.row.backupField1 }}</span>
                    </el-form-item>
                    <el-form-item label="上传数据项编码">
                      <span>{{ props.row.datacode }}</span>
                    </el-form-item>
                    <el-form-item label="上传数据">
                      <span>{{ props.row.datavalue }}</span>
                    </el-form-item>
                    <el-form-item label="折标系数">
                      <span>{{ props.row.convertration }}</span>
                    </el-form-item>
                    <el-form-item label="数据有效性">
                      <span>{{ props.row.valid }}</span>
                    </el-form-item>
                    <el-form-item label="数据范围">
                      <span>{{ props.row.scope }}</span>
                    </el-form-item>
                    <el-form-item label="数据采集类型">
                      <span>{{ props.row.inputtype }}</span>
                    </el-form-item>
                    <el-form-item label="数据采集频率">
                      <span>{{ props.row.stattype }}</span>
                    </el-form-item>
                    <el-form-item label="数据统计时间">
                      <span>{{ props.row.statdate }}</span>
                    </el-form-item>
                    <el-form-item label="数据上传时间">
                      <span>{{ props.row.uploaddate }}</span>
                    </el-form-item>
                    <el-form-item label="数据上传状态">
                      <span>{{ props.row.backupField3 }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column prop="id" label="id" v-if="false">
              </el-table-column>
              <el-table-column prop="dataindex" label="数据索引" v-if="false">
              </el-table-column>
              <el-table-column prop="regversion" label="平台服务版本" v-if="false">
              </el-table-column>
              <el-table-column prop="dicversion" label="基础数据版本" v-if="false">
              </el-table-column>
              <el-table-column prop="enterprisecode" label="统一社会信用代码" v-if="false">
              </el-table-column>
              <el-table-column prop="backupField1" label="上传数据项名称" width="200" fixed="left">
              </el-table-column>
              <el-table-column prop="datacode" label="上传数据项编码" width="200" v-if="false">
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
              <el-table-column prop="remark" label="备注" width="200" v-if="false">
              </el-table-column>
              <el-table-column prop="stattype" label="数据采集频率" width="200">
              </el-table-column>
              <el-table-column prop="statdate" label="数据统计时间" width="200">
              </el-table-column>
              <el-table-column prop="uploaddate" label="数据上传时间" width="200">
              </el-table-column>
              <el-table-column prop="backupField3" label="数据上传状态" width="200">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="150">
                <template slot-scope="scope">
                  <el-button @click="energyEdit(scope.row)" size="primary" round>编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-row>
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
    //手动填报页面
    name: "DataUploadManual",
    data() {
      return {
        tableDataHistory:[],
        dialogTableVisible:false,
        validList:[
          {'code': '1', 'name': '有效'},
          {'code': '0', 'name': '可疑'},
        ],
        rules: {
          datavalue: [
            {required: true, message: '请输入上传数据', trigger: 'blur'},
          ],
          convertration: [
            {required: true, message: '请输入折标系数', trigger: 'blur'}
          ],
          valid: [
            {required: true, message: '请选择数据有效性', trigger: 'blur'}
          ]
        },
        dialogForm: {
          id: '',
          dataindex: '',
          regversion: '',
          dicversion: '',
          enterprisecode: '',
          backupfield3:'',
          backupfield1:'',
          datacode: '',
          datavalue: '',
          convertration: '',
          valid: '',
          scope: '',
          inputtype: '',
          stattype:'',
          statdate:'',
          uploaddate:''
        },
        dialogFormVisible:false,
        tableData: [],
        scopeList: [
          {'code': '1', 'name': '全厂'},
          {'code': '2', 'name': '生产工序'},
          {'code': '3', 'name': '生产工序单元'},
          {'code': '4', 'name': '重点耗能设备'}
        ],
        statTypeList: [
          {'code': '0', 'name': '实时'},
          {'code': '1', 'name': '日'},
          {'code': '2', 'name': '月'},
          {'code': '3', 'name': '年'}
        ],
        uploadStatusList: [
          {'code': '0', 'name': '成功'},
          {'code': '1', 'name': '失败'},
          {'code': '2', 'name': '待传'}
        ],
        inputTypeList: [
          {'code': '1', 'name': '管理信息系统'},
          {'code': '2', 'name': '生产监控管理系统'},
          {'code': '3', 'name': '分布式控制系统'},
          {'code': '4', 'name': '现场仪表'},
          {'code': '5', 'name': '手工填报'},
          {'code': '6', 'name': '能源供应单位'},
          {'code': '7', 'name': '其他'}
        ],
        page: {
          currentPage: 1, // 当前页
          pageSize: 10, // 每页显示条目个数
          totalCount: 0 // 总条目数
        },
        minvalue: '',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        activeName: 'day',
        //采集频率默认是 日数据
        statType: '1',
        date: new Date(),
      };
    },
    methods: {
      saveUpdate(formName) {
        let self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let saveData = self.dialogForm;
            self.statTypeList.forEach(function (item,index) {
              if (item.name === saveData.stattype){
                saveData.stattype = item.code;
              }
            });

            self.scopeList.forEach(function (item,index) {
              if (item.name === saveData.scope){
                saveData.scope = item.code;
              }
            })

            self.inputTypeList.forEach(function (item,index) {
              if (item.name === saveData.inputtype){
                saveData.inputtype = item.code;
              }
            })

            self.uploadStatusList.forEach(function (item,index) {
              if (item.name === saveData.backupfield3){
                saveData.backupfield3 = item.code;
              }
            })

            let data = {
              "data":saveData
            };
            self.$http.post(self.$baseUrl+"/dataEnterpriseEnergy",data,self.$config).then(
              res=>{
                console.log(res);
                if (res.data.code === 0){
                  self.$message({
                    message: '填报用能单位能源资源计量采集数据成功',
                    type: 'success'
                  });
                }else {
                  self.$message({
                    message: '新增失败:'+res.data.result.responseMessage,
                    type: 'warning'
                  });
                }
                self.dialogFormVisible = false;
                self.getList(self.dialogForm.enterprisecode,self.statType,self.date)
              },reason => {
                console.log("新增失败");
              }
            )
          }else {
            this.$notify.error({
              title: '错误',
              message: '信息填写格式错误'
            });
            return false;
          }
        })
      },
      cancleUpdate(){
        this.dialogFormVisible = false;
      },
      energyEdit(row){
        console.log(row);
        let self = this;
        self.dialogFormVisible = true;
        self.dialogForm.id = row.id;
        self.dialogForm.dicversion = row.dicversion;
        self.dialogForm.regversion = row.regversion;
        self.dialogForm.enterprisecode = row.enterprisecode;
        self.dialogForm.backupfield1 = row.backupField1;
        self.dialogForm.backupfield3 = row.backupField3;
        self.dialogForm.convertration = row.convertration;
        self.dialogForm.inputtype = row.inputtype;
        self.dialogForm.scope = row.scope;
        self.dialogForm.statdate = row.statdate;
        self.dialogForm.uploaddate = row.uploaddate;
        self.dialogForm.stattype = row.stattype;
        self.dialogForm.datacode = row.datacode;
      },
      queryByDate() {
        let self = this;
        self.dialogTableVisible = true;
        let enterpriseCode = self.$cookies.get('enterpriseCode');
        let statType = self.statType;
        let date = self.date;
        if (statType === '1'){
          //日数据
          date = self.$moment(date).format('YYYY-MM-DD');
        }else if (statType === '2'){
          //月数据
          date = self.$moment(date).format('YYYY-MM');
        }else if (statType === '3'){
          //月数据
          date = self.$moment(date).format('YYYY');
        }
        let data = {
          'enterpriseCode': enterpriseCode,
          'statType': statType,
          'date': date
        }

        //获取数据
        self.$http.post(self.$baseUrl + "/dataEnterpriseEnergy/listHistory", data, self.$config).then(res => {
          console.log(res);
          if (res.data.code === 0) {
            let data = res.data.result;
            data.forEach(function (item, index) {
              /*if (item.statdate.indexOf("T") > -1){
                item.statdate = item.statdate.substring(0, item.statdate.lastIndexOf("T"));
              }*/
              //采集范围
              self.scopeList.forEach(function (item1, index1) {
                if (item.scope === item1.code) {
                  item.scope = item1.name
                }
              })

              //采集频率
              self.statTypeList.forEach(function (item2, index2) {
                if (item.stattype === item2.code) {
                  item.stattype = item2.name
                }
              })

              self.uploadStatusList.forEach(function (item3, index3) {
                if (item.backupField3 === item3.code) {
                  item.backupField3 = item3.name
                }
              })

              //采集来源
              self.inputTypeList.forEach(function (item4, index4) {
                if (item.inputtype === item4.code) {
                  item.inputtype = item4.name
                }
              })

              //数据有效性
              self.validList.forEach(function (item5,index5) {
                if (item.valid === item5.code){
                  item.valid = item5.name;
                }
              })
            });

            self.tableDataHistory = data;

            self.page.totalCount = res.data.result.length;
          }
        }, res => {
          console.log("加载失败");
        })
      },
      getList(eCode, statType, date) {
        let self = this;
        let data = {
          'enterpriseCode': eCode,
          'statType': statType,
          'date': date,
          'inputType':'5'
        }
        //获取数据
        self.$http.post(self.$baseUrl + "/dataEnterpriseEnergy/list", data, self.$config).then(res => {
          console.log(res);
          if (res.data.code === 0) {
            let data = res.data.result;
            data.forEach(function (item, index) {
             /*if (item.statdate.indexOf("T") > -1){
               item.statdate = item.statdate.substring(0, item.statdate.lastIndexOf("T"));
             }*/
              //采集范围
              self.scopeList.forEach(function (item1, index1) {
                if (item.scope === item1.code) {
                  item.scope = item1.name
                }
              })

              //采集频率
              self.statTypeList.forEach(function (item2, index2) {
                if (item.stattype === item2.code) {
                  item.stattype = item2.name
                }
              })

              self.uploadStatusList.forEach(function (item3, index3) {
                if (item.backupField3 === item3.code) {
                  item.backupField3 = item3.name
                }
              })

              //采集来源
              self.inputTypeList.forEach(function (item4, index4) {
                if (item.inputtype === item4.code) {
                  item.inputtype = item4.name
                }
              })

              //数据有效性
              self.validList.forEach(function (item5,index5) {
                if (item.valid === item5.code){
                  item.valid = item5.name;
                }
              })
            });
            
            self.tableData = data;

            self.page.totalCount = res.data.result.length;
          }
        }, res => {
          console.log("加载失败");
        })
      },
      handleClick(tab, event) {
        let self = this;
        console.log(tab, event);
        console.log(tab.label);
        console.log(tab.name);
        if (tab.name === 'day') {
          self.statType = '1';
        }else if (tab.name === 'month'){
          self.statType = '2';
        } else if (tab.name === 'year'){
          self.statType = '3';
        }

        let enterpriseCode = self.$cookies.get('enterpriseCode');
        let statType = self.statType;
        let date = self.date;
        date = self.$moment(date).format('YYYY-MM-DD');

        self.getList(enterpriseCode, statType, date);
      },
      handleClickSystem(tab, event) {
        console.log(tab, event);
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
      //默认获取日数据手工填报
      let self = this;
      self.getList(self.$cookies.get('enterpriseCode'), self.statType, self.date);
      let data = {
        "enterpriseCode": self.$cookies.get('enterpriseCode')
      };

    }
  }
</script>
<style>
  .el-table--enable-row-transition .el-table__body td {
    text-align: -webkit-left;
  }

  .el-table .cell {
    text-align: center;
  }

  .el-form--inline .el-form-item__content {
    display: inline-block;
    vertical-align: middle;
  }
</style>
<style scoped>

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>
