<template>
  <el-container>
    <el-header>
    </el-header>
    <el-main>
      <el-form ref="regionForm" :model="regionForm" label-width="200px">
        <el-row>
          <el-col :span="24">
            <el-form-item label="所属地区" required prop="province">
              <el-col :span="4">
                <el-select v-model="regionForm.province" placeholder="请选择" clearable filterable>
                  <el-option v-for="item in regionForm.regionList"
                             :key="item.code" :label="item.fullName" :value="item.code"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4" v-show="regionForm.province">
                <el-select v-model="regionForm.city" placeholder="请选择" clearable filterable>
                  <el-option v-for="item in regionForm.cityList" :key="item.code" :label="item.fullName"
                             :value="item.code">
                  </el-option>
                </el-select>
              </el-col>

              <el-col :span="4" v-show="areaShow">
                <el-select v-model="regionForm.area" placeholder="请选择" clearable filterable>
                  <el-option v-for="item in regionForm.areaList" :key="item.code" :label="item.fullName"
                             :value="item.code">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="单位类型" required prop="typeCode">
              <el-col :span="4">
                <el-select v-model="regionForm.typeCode" placeholder="请选择" clearable filterable>
                  <el-option
                    v-for="item in regionForm.energyTypeList" :key="item.code" :label="item.name"
                    :value="item.code"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="所属行业" required prop="IndustryCodesOne">
              <el-col :span="4">
                <el-select v-model="regionForm.IndustryCodesOne" placeholder="请选择" clearable filterable>
                  <el-option v-for="item in regionForm.IndustryCodesOneList" :key="item.code" :label="item.name"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-select v-model="regionForm.IndustryCodesTwo" placeholder="请选择" clearable filterable>
                  <el-option v-for="item in regionForm.IndustryCodesTwoList" :key="item.code" :label="item.name"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-select v-model="regionForm.IndustryCodesThree" placeholder="请选择" clearable filterable>
                  <el-option v-for="item in regionForm.IndustryCodesThreeList" :key="item.code" :label="item.name"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-select v-model="regionForm.IndustryCodesFour" placeholder="请选择" clearable filterable>
                  <el-option v-for="item in regionForm.IndustryCodesFourList" :key="item.code" :label="item.name"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-col :span="7">
              <el-form-item label="单位名称" prop="cmpName" required>
                <el-input v-model="regionForm.cmpName" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="统一社会信用代码" prop="enterpriseCode" required>
                <el-input v-model="regionForm.enterpriseCode" clearable/>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-col :span="7">
              <el-form-item label="法人代表" prop="corporationName" required>
                <el-input v-model="regionForm.corporationName" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="省级平台访问密码" prop="password" required>
                <el-input v-model="regionForm.password" clearable/>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="所属领域" prop="fieldCode" required>
              <el-col :span="4">
                <el-select v-model="regionForm.fieldCode" placeholder="请选择" clearable filterable>
                  <el-option v-for="item in regionForm.filedCodeList" :key="item.code" :label="item.name"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="企业耗能级别" prop="energyConsumeLevel" required>
              <el-col :span="4">
                <el-select v-model="regionForm.energyConsumeLevel" placeholder="请选择" clearable filterable>
                  <el-option v-for="item in regionForm.energyConsumeLevelList" :key="item.code" :label="item.name"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
           <el-col :span="8">
             <el-form-item label="是否是公共机构" required prop="isorg">
                 <el-select v-model="regionForm.isorg" placeholder="请选择" clearable>
                   <el-option v-for="item in regionForm.isOrg" :key="item.code" :label="item.value"
                              :value="item.code"></el-option>
                 </el-select>
             </el-form-item>
           </el-col>
            <el-col :span="8">
              <el-form-item label="机构类型" prop="orgType" v-show="regionForm.isorg">
                  <el-select v-model="regionForm.orgType" placeholder="请选择">
                    <el-option v-for="item in regionForm.orgTypeList" :key="item.code" :label="item.value"
                               :value="item.code"></el-option>
                  </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="机构子类型" prop="orgTypeChild" v-show="regionForm.isorg">
                <el-select v-model="regionForm.orgTypeChild" placeholder="请选择">
                  <el-option v-for="item in regionForm.orgTypeChildList" :key="item.code" :label="item.value"
                             :value="item.code"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="17">
            <el-form-item label="组织机构代码" prop="orgCode" v-show="regionForm.isorg">
              <el-input v-model="regionForm.orgCode" clearable />
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="24">
            <el-form-item label="是否央企" required prop="center">
              <el-col :span="4">
                <el-select v-model="regionForm.center" placeholder="请选择">
                  <el-option v-for="item in regionForm.isCenter" :key="item.code" :label="item.value"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>

            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17" v-show="regionForm.center">
            <el-form-item label="集团名称" prop="groupName">
              <el-input v-model="regionForm.groupName" clearable/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17" v-show="regionForm.center">
            <el-form-item label="集团地址" prop="groupAddress">
              <el-input v-model="regionForm.groupAddress" clearable/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="是否能源加工转换类企业" required prop="jgzh">
              <el-col :span="4">
                <el-select v-model="regionForm.jgzh" placeholder="请选择">
                  <el-option>是</el-option>
                  <el-option>否</el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-col :span="10">
              <el-form-item label="单位注册日期" prop="registerDate">
                <el-col :span="8">
                  <el-date-picker
                    v-model="regionForm.registerDate"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="单位注册资本(万元)" prop="registerPrincipal" required>
                <el-input v-model="regionForm.registerPrincipal" clearable/>
              </el-form-item>
            </el-col>

          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="企业联系电话(区号)" prop="phone" required>
              <el-input v-model="regionForm.phone" clearable/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="企业注册地址" prop="registerAddress" required>
              <el-input v-model="regionForm.registerAddress" clearable type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="企业地址" prop="address" required>
              <el-input v-model="regionForm.address" clearable type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="17">
            <el-form-item label="企业网站地址" prop="url" required>
              <el-input v-model="regionForm.url" clearable type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>

       <!-- <el-row>
          <el-col :span="17">
            <el-form-item label="企业组织机构" prop="organization">
              <el-input v-model="regionForm.organization" clearable/>
            </el-form-item>
          </el-col>
        </el-row>-->

        <el-row>
          <el-col :span="24">
            <el-col :span="7">
              <el-form-item label="邮政编码" prop="zipCode" required>
                <el-input v-model="regionForm.zipCode" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="传真" prop="fax" required>
                <el-input v-model="regionForm.fax" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="电子邮箱" prop="email" required>
                <el-input v-model="regionForm.email" clearable/>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-col :span="7">
              <el-form-item label="经度" prop="longitude" required>
                <el-input v-model="regionForm.longitude" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="纬度" prop="latitude" required>
                <el-input v-model="regionForm.latitude" clearable/>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="生产线名称" prop="productionLine" required>
              <el-input v-model="regionForm.productionLine" clearable type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="主导产品" prop="leadingProduct" required>
              <el-input v-model="regionForm.leadingProduct" clearable type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="17">
            <el-form-item label="备注" prop="remark">
              <el-input v-model="regionForm.remark" clearable type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="营业执照" prop="license" required>
             <el-col :span="7">
               <el-upload
                 class="upload-demo"
                 drag
                 action=""
                 multiple>
                 <i class="el-icon-upload"></i>
                 <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                 <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过400kb</div>
               </el-upload>
             </el-col>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="企业组织机构" prop="organization">
              <el-col :span="7">
                <el-upload
                  class="upload-demo"
                  drag
                  action=""
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过400kb</div>
                </el-upload>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">保存并上传</el-button>
        </el-form-item>
      </el-form>

    </el-main>
  </el-container>


</template>

<script>
  export default {
    name: "apply",
    data() {
      return {
        regionForm: {
          orgCode:'',
          orgType: '',
          orgTypeChild:'',
          orgTypeChildList:[],
          orgTypeList: [
            {'code': '01', 'value': '国家机关'},
            {
              'code': '02', 'value': '事业单位',
              'children': [
                {'code': '021', 'value': '教育事业'},
                {'code': '022', 'value': '科技事业'},
                {'code': '023', 'value': '文化事业'},
                {'code': '024', 'value': '卫生事业'},
                {'code': '025', 'value': '体育事业'},
                {'code': '026', 'value': '其它'}
                ]
            },
            {'code': '03', 'value': '团体组织'}
          ],
          groupName: '',
          groupAddress: '',
          isCenter: [
            {'code': 0, 'value': '否'},
            {'code': 1, 'value': '是'}
          ],
          isJgzh: [
            {'code': 0, 'value': '否'},
            {'code': 1, 'value': '是'}
          ],
          isOrg: [
            {'code': 0, 'value': '否'},
            {'code': 1, 'value': '是'}
          ],
          remark: '',
          leadingProduct: '',
          productionLine: '',
          url: '',
          longitude: '',
          latitude: '',
          energyConsumeLevel: '',
          jgzh: '',
          center: '',
          password: '',
          corporationName: '',
          email: '',
          fax: '',
          zipCode: '',
          address: '',
          isorg: '',
          registerAddress: '',
          phone: '',
          registerPrincipal: '',
          registerDate: '',
          fieldCode: '',
          enterpriseCode: '',
          cmpName: '',
          IndustryCodesOne: '',
          IndustryCodesTwo: '',
          IndustryCodesThree: '',
          IndustryCodesFour: '',
          typeCode: '',
          area: '',
          city: '',//市
          province: '',
          regionList: [],
          cityList: [],
          areaList: [],
          energyTypeList: [],
          IndustryCodesOneList: [],
          IndustryCodesTwoList: [],
          IndustryCodesThreeList: [],
          IndustryCodesFourList: [],
          filedCodeList: [
            {'code': '100', 'name': '工业'},
            {'code': '200', 'name': '交通运输、仓储和邮政业'},
            {'code': '300', 'name': '住宿和 餐饮业'},
            {'code': '400', 'name': '批发和零售业'},
            {'code': '500', 'name': '教育'},
            {'code': '600', 'name': '其他'},

          ],
          energyConsumeLevelList: [
            {'code': '1', 'name': '5000 吨以下'},
            {'code': '2', 'name': '5000~10000 吨'},
            {'code': '3', 'name': '1万-10 万吨'},
            {'code': '4', 'name': '10万-50 万吨'},
            {'code': '5', 'name': '50万-300 万吨'},
            {'code': '6', 'name': '300万吨以上'},
          ]
        },
        areaShow: false

      }
    },
    watch: {
      'regionForm.orgType':{
        handler:function (newVal,oldVal) {
          const _that = this;
          let data = _that.regionForm.orgTypeList;
          data.forEach(function (item,index) {
            if (item.code === newVal){
              if (item.children !== null){
                _that.regionForm.orgTypeChildList=item.children;
              }else{
              }
            }
          })
        }
      },
      'regionForm.province': {
        handler: function (newVal, oldVal) {
          const _that = this;
          console.log(newVal, oldVal);
          if (newVal === '') {
            //先清空
            _that.regionForm.city = '';
          }
          let data = _that.regionForm.regionList;
          for (var i = 0; i < data.length; i++) {
            if (data[i].code === newVal) {
              if (data[i].children !== null) {

                //先清空
                _that.regionForm.city = '';
                _that.regionForm.cityList = data[i].children;
              }
            }
          }
        },
        deep: true,
        immediate: true
      },
      'regionForm.city': {
        handler: function (newVal, oldVal) {
          const _that = this;
          console.log(newVal, oldVal);
          if (newVal === '') {
            _that.regionForm.area = '';
            _that.areaShow = false;
          }
          let data = _that.regionForm.cityList;
          for (var i = 0; i < data.length; i++) {
            if (data[i].code === newVal) {
              if (data[i].children !== null) {
                _that.areaShow = true;
                //先清空
                _that.regionForm.area = '';
                _that.regionForm.areaList = data[i].children;
              } else {
                _that.areaShow = false;
                _that.regionForm.area = '';
                _that.regionForm.areaList = [];
              }
            }
          }
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    created() {
      this.$http.get('/regionData/regionList').then(res => {
        console.log(res);
        if (res.data.errno === 0) {
          this.regionForm.regionList = res.data.data;
        }
      }, res => {
        console.log("加载失败")
      });

      this.$http.get('/regionData/energyTypeList').then(res => {
        console.log(res);
        if (res.data.errno === 0) {
          this.regionForm.energyTypeList = res.data.data;
        }
      }, res => {
        console.log("加载失败")
      });

      this.$http.get('/regionData/IndustryCodesOne').then(res => {
        console.log(res);
        if (res.data.errno === 0) {
          this.regionForm.IndustryCodesOneList = res.data.data;
        }
      }, res => {
        console.log("加载失败")
      });

      this.$http.get('/regionData/IndustryCodesTwo').then(res => {
        console.log(res);
        if (res.data.errno === 0) {
          this.regionForm.IndustryCodesTwoList = res.data.data;
        }
      }, res => {
        console.log("加载失败")
      });
      this.$http.get('/regionData/IndustryCodesThree').then(res => {
        console.log(res);
        if (res.data.errno === 0) {
          this.regionForm.IndustryCodesThreeList = res.data.data;
        }
      }, res => {
        console.log("加载失败")
      });
      this.$http.get('/regionData/IndustryCodesFour').then(res => {
        console.log(res);
        if (res.data.errno === 0) {
          this.regionForm.IndustryCodesFourList = res.data.data;
        }
      }, res => {
        console.log("加载失败")
      });


    }
  }
</script>


<style scoped>

</style>
