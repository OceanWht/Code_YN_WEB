<template>
  <el-container>
    <el-header>
    </el-header>
    <el-main>
      <el-form ref="regionForm" :model="regionForm" :rules="rules" label-width="200px">
        <el-row>
          <el-col :span="24">
            <el-form-item label="所属地区" prop="province">
              <el-col :span="4">
                <el-select v-model="regionForm.province" placeholder="请选择" filterable clearable>
                  <el-option v-for="item in regionList"
                             :key="item.code" :label="item.fullName" :value="item.code"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4" v-show="regionForm.province" :offset="1">
                <el-select v-model="regionForm.city" placeholder="请选择" filterable clearable>
                  <el-option v-for="item in cityList" :key="item.code" :label="item.fullName"
                             :value="item.code">
                  </el-option>
                </el-select>
              </el-col>

              <el-col :span="4" v-show="areaShow" :offset="1">
                <el-select v-model="regionForm.area" placeholder="请选择" filterable clearable>
                  <el-option v-for="item in areaList" :key="item.code" :label="item.fullName"
                             :value="item.code">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="单位类型" prop="typeCode">
              <el-col :span="4">
                <el-select v-model="regionForm.typeCode" placeholder="请选择" filterable clearable>
                  <el-option
                    v-for="item in energyTypeList" :key="item.code" :label="item.name"
                    :value="item.code"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4" :offset="1">
                <el-select v-model="regionForm.typeCodeTwo" placeholder="请选择" filterable clearable
                           v-show="energyTypeListTwoShow">
                  <el-option
                    v-for="item in energyTypeShowListTwo" :key="item.code" :label="item.name"
                    :value="item.code"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="所属行业" prop="IndustryCodesOne">
              <el-col :span="4">
                <el-select v-model="regionForm.IndustryCodesOne" placeholder="请选择" filterable clearable>
                  <el-option v-for="item in IndustryCodesOneList" :key="item.code" :label="item.name"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4" :offset="1">
                <el-select v-model="regionForm.IndustryCodesTwo" placeholder="请选择" filterable clearable
                           v-show="IndustryCodesTwoShow">
                  <el-option v-for="item in IndustryCodesTwoShowList" :key="item.code" :label="item.name"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4" :offset="1">
                <el-select v-model="regionForm.IndustryCodesThree" placeholder="请选择" filterable clearable
                           v-show="IndustryCodesThreeShow">
                  <el-option v-for="item in IndustryCodesThreeShowList" :key="item.code" :label="item.name"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4" :offset="1">
                <el-select v-model="regionForm.IndustryCodesFour" placeholder="请选择" filterable clearable
                           v-show="IndustryCodesFourShow">
                  <el-option v-for="item in IndustryCodesFourShowList" :key="item.code" :label="item.name"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-col :span="7">
              <el-form-item label="单位名称" prop="cmpName">
                <el-input v-model="regionForm.cmpName"/>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="统一社会信用代码" prop="enterpriseCode">
                <el-input v-model="regionForm.enterpriseCode" :disabled="enterpriseCodeDisable" clearable/>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-col :span="7">
              <el-form-item label="法人代表" prop="corporationName">
                <el-input v-model="regionForm.corporationName" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="省级平台访问密码" prop="password" v-if="false">
                <el-input v-model="regionForm.password"/>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="所属领域" prop="fieldCode">
              <el-col :span="4">
                <el-select v-model="regionForm.fieldCode" placeholder="请选择" filterable>
                  <el-option v-for="item in filedCodeList" :key="item.code" :label="item.name"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="企业耗能级别" prop="energyConsumeLevel">
              <el-col :span="4">
                <el-select v-model="regionForm.energyConsumeLevel" placeholder="请选择" filterable>
                  <el-option v-for="item in energyConsumeLevelList" :key="item.code" :label="item.name"
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
                <el-select v-model="regionForm.isorg" placeholder="请选择">
                  <el-option v-for="item in isOrg" :key="item.code" :label="item.value"
                             :value="item.code"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="机构类型" prop="orgType" v-show="orgTypeShow">
                <el-select v-model="regionForm.orgType" placeholder="请选择">
                  <el-option v-for="item in orgTypeList" :key="item.code" :label="item.value"
                             :value="item.code"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="机构子类型" prop="orgTypeChild" v-show="orgTypeChildShow">
                <el-select v-model="regionForm.orgTypeChild" placeholder="请选择">
                  <el-option v-for="item in orgTypeChildList" :key="item.code" :label="item.value"
                             :value="item.code"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="17">
            <el-form-item label="组织机构代码" prop="orgCode" v-show="orgCodeShow">
              <el-input v-model="regionForm.orgCode"/>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="24">
            <el-form-item label="是否央企" prop="center">
              <el-col :span="4">
                <el-select v-model="regionForm.center" placeholder="请选择">
                  <el-option v-for="item in isCenter" :key="item.code" :label="item.value"
                             :value="item.code"></el-option>
                </el-select>
              </el-col>

            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17" v-show="groupNameShow">
            <el-form-item label="集团名称" prop="groupName">
              <el-input v-model="regionForm.groupName"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17" v-show="groupAddressShow">
            <el-form-item label="集团地址" prop="groupAddress">
              <el-input v-model="regionForm.groupAddress"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="是否能源加工转换类企业" required prop="jgzh">
              <el-col :span="4">
                <el-select v-model="regionForm.jgzh" placeholder="请选择">
                  <el-option v-for="item in isJgzh" :key="item.code" :label="item.value"
                             :value="item.code"></el-option>
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
                    placeholder="选择日期"
                    :picker-options="pickerOptions"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="单位注册资本(万元)" prop="registerPrincipal">
                <el-input v-model="regionForm.registerPrincipal"/>
              </el-form-item>
            </el-col>

          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="企业联系电话(区号)" prop="phone">
              <el-input v-model="regionForm.phone"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="企业注册地址" prop="registerAddress">
              <el-input v-model="regionForm.registerAddress" type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="企业地址" prop="address">
              <el-input v-model="regionForm.address" type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="17">
            <el-form-item label="企业网站地址" prop="url">
              <el-input v-model="regionForm.url" type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- <el-row>
           <el-col :span="17">
             <el-form-item label="企业组织机构" prop="organization">
               <el-input v-model="regionForm.organization" />
             </el-form-item>
           </el-col>
         </el-row>-->

        <el-row>
          <el-col :span="24">
            <el-col :span="7">
              <el-form-item label="邮政编码" prop="zipCode">
                <el-input v-model="regionForm.zipCode"/>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="传真" prop="fax">
                <el-input v-model="regionForm.fax"/>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="电子邮箱" prop="email">
                <el-input v-model="regionForm.email"/>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-col :span="7">
              <el-form-item label="经度" prop="longitude">
                <el-input v-model="regionForm.longitude"/>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="纬度" prop="latitude">
                <el-input v-model="regionForm.latitude"/>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="生产线名称" prop="productionLine">
              <el-input v-model="regionForm.productionLine" type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="主导产品" prop="leadingProduct">
              <el-input v-model="regionForm.leadingProduct" type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="17">
            <el-form-item label="备注" prop="remark">
              <el-input v-model="regionForm.remark" type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="17">
            <el-form-item label="营业执照" prop="license">
              <el-col :span="7">
                <el-image :src="regionForm.license" v-if="regionForm.license"/>
                <el-upload
                  class="upload-demo"
                  drag
                  action=""
                  :on-change="getFile"
                  :before-upload="beforeAvatarUpload1"
                  :multiple='false'
                  :limit="1">
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
                <el-image :src="regionForm.organization" v-if="regionForm.organization"/>
                <el-upload
                  class="upload-demo"
                  drag
                  action=""
                  :on-change="getOrganization"
                  :before-upload="beforeAvatarUpload1"
                  :multiple='false'
                  :limit="1">
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过400kb</div>
                </el-upload>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit('regionForm')">保存并注册</el-button>
          <!-- <el-button type="primary" @click="onUpdate('regionForm')">保存并更新</el-button>-->
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
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        groupNameShow: false,
        groupAddressShow: false,
        IndustryCodesTwoShow: false,
        IndustryCodesThreeShow: false,
        IndustryCodesFourShow: false,
        regionForm: {
          organization: '',
          license: '',
          orgCode: '',
          orgType: '',
          orgTypeChild: '',
          groupName: '',
          groupAddress: '',
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
          enterpriseCode: this.$cookies.get('enterpriseCode'),
          cmpName: '',
          IndustryCodesOne: '',
          IndustryCodesTwo: '',
          IndustryCodesThree: '',
          IndustryCodesFour: '',
          typeCode: '',
          typeCodeTwo: '',
          area: '',
          city: '',//市
          province: '',
        },
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
        regionList: [],
        cityList: [],
        areaList: [],
        orgCodeShow: false,
        areaShow: false,
        orgTypeShow: false,
        orgTypeChildShow: false,
        energyTypeList: [],
        energyTypeListTwo: [],
        energyTypeShowListTwo:[],
        IndustryCodesOneList: [],
        IndustryCodesTwoList: [],
        IndustryCodesTwoShowList: [],
        IndustryCodesThreeList: [],
        IndustryCodesThreeShowList: [],
        IndustryCodesFourList: [],
        IndustryCodesFourShowList: [],
        filedCodeList: [],
        energyConsumeLevelList: [],
        orgTypeChildList: [],
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
        enterpriseCodeDisable: true,
        energyTypeListTwoShow: false,
        rules: {
          province: [
            {required: true, message: '请输入所属地区', trigger: 'blur'}
          ],
          typeCode: [
            {required: true, message: '请输入单位类型', trigger: 'blur'}
          ],
          IndustryCodesOne: [
            {required: true, message: '请输入所属行业', trigger: 'blur'}
          ],
          cmpName: [
            {required: true, message: '请输入单位名称', trigger: 'blur'}
          ],
          enterpriseCode: [
            {required: true, message: '请输入统一社会信用代码', trigger: 'blur'}
          ],
          corporationName: [
            {required: true, message: '请输入法人代表名称', trigger: 'blur'}
          ],
          fieldCode: [
            {required: true, message: '请选择企业所属领域', trigger: 'blur'}
          ],
          energyConsumeLevel: [
            {required: true, message: '请选择企业能耗级别', trigger: 'blur'}
          ],
          isorg: [
            {required: true, message: '请选择是否是公共机构', trigger: 'blur'}
          ],
          center: [
            {required: true, message: '请选择是否是是否央企', trigger: 'blur'}
          ],
          jgzh: [
            {required: true, message: '请选择是否能源加工转换类企业', trigger: 'blur'}
          ],
          registerPrincipal: [
            {required: true, message: '请输入企业注册资金', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入企业联系电话', trigger: 'blur'}
          ],
          registerAddress: [
            {required: true, message: '请输入企业注册地址', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '请输入企业地址', trigger: 'blur'}
          ],
          url: [
            {required: true, message: '请输入企业网站地址', trigger: 'blur'}
          ],
          zipCode: [
            {required: true, message: '请输入邮政编码', trigger: 'blur'}
          ],
          fax: [
            {required: true, message: '请输入传真', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入电子邮箱', trigger: 'blur'}
          ],
          longitude: [
            {required: true, message: '请输入经度', trigger: 'blur'}
          ],
          latitude: [
            {required: true, message: '请输入纬度', trigger: 'blur'}
          ],
          productionLine: [
            {required: true, message: '请输入生产线名称', trigger: 'blur'}
          ],
          leadingProduct: [
            {required: true, message: '请输入主导产品', trigger: 'blur'}
          ],
          license: [
            {required: true, message: '请输入营业执照', trigger: 'blur'}
          ]
        }
      }
    },
    watch: {
      'regionForm.typeCode': {
        handler: function (newVal, oldVal) {
          const _that = this;
          if (newVal === '') {
            _that.energyTypeShowListTwo = [];
            _that.energyTypeListTwoShow = false;
            _that.regionForm.typeCodeTwo = '';
          } else {
            _that.energyTypeShowListTwo = [];
            let indexNumber = newVal.substring(0,1);
            _that.energyTypeListTwo.forEach(function (item,index) {
              let indexNumberTwo = item.code.substring(0,1);
              if (indexNumber === indexNumberTwo){
                _that.energyTypeShowListTwo.push(item);
              }

            });

            _that.energyTypeListTwoShow = true;
          }
        },
        deep: true,
        immediate: true
      },
      'regionForm.center': {
        handler: function (newVal, oldVal) {
          const _that = this;
          if (newVal === 0 || newVal === '' || newVal === '否') {
            _that.regionForm.groupName = '';
            _that.regionForm.groupAddress = '';
            _that.groupNameShow = false;
            _that.groupAddressShow = false;
          } else {
            _that.groupNameShow = true;
            _that.groupAddressShow = true;
          }
        },
        deep: true,
        immediate: true
      },
      'regionForm.isorg': {
        handler: function (newVal, oldVal) {
          const _that = this;
          if (newVal === 0 || newVal === '' || newVal === '否') {
            _that.orgTypeShow = false;
            _that.orgTypeChildShow = false;
            _that.orgCodeShow = false;

          } else {
            _that.orgCodeShow = true;
            _that.orgTypeShow = true;
          }
        },
        deep: true,
        immediate: true
      },
      'regionForm.IndustryCodesOne': {
        handler: function (newVal, oldVal) {
          const _that = this;
          if (newVal === '') {
            _that.IndustryCodesTwoShow = false;
            _that.IndustryCodesTwoShowList.splice(0, _that.IndustryCodesTwoShowList.length);
            _that.IndustryCodesThreeShowList.splice(0, _that.IndustryCodesThreeShowList.length);
            _that.IndustryCodesFourShowList.splice(0, _that.IndustryCodesFourShowList.length);
            _that.regionForm.IndustryCodesTwo = '';
            _that.regionForm.IndustryCodesThree = '';
            _that.regionForm.IndustryCodesFour = '';
            _that.IndustryCodesThreeShow = false;
            _that.IndustryCodesFourShow = false;
            return;
          }
          console.log(newVal);
          let data = _that.IndustryCodesTwoList;
          let showIndustryCodesTwoList = Array();
          data.forEach(function (item, index) {
            if (item.code.indexOf(newVal) > -1) {
              showIndustryCodesTwoList.push(item);
            }
          });
          if (showIndustryCodesTwoList.length > 0) {
            _that.IndustryCodesTwoShow = true;
            _that.IndustryCodesTwoShowList.splice(0, _that.IndustryCodesTwoShowList.length);
            _that.IndustryCodesThreeShowList.splice(0, _that.IndustryCodesThreeShowList.length);
            _that.IndustryCodesFourShowList.splice(0, _that.IndustryCodesFourShowList.length);
            _that.regionForm.IndustryCodesTwo = '';
            _that.regionForm.IndustryCodesThree = '';
            _that.regionForm.IndustryCodesFour = '';
            _that.IndustryCodesThreeShow = false;
            _that.IndustryCodesFourShow = false;
            _that.IndustryCodesTwoShowList = showIndustryCodesTwoList;
          }

        },
        deep: true,
        immediate: true
      },
      'regionForm.IndustryCodesTwo': {
        handler: function (newVal, oldVal) {
          const _that = this;
          if (newVal === '') {
            _that.IndustryCodesThreeShowList.splice(0, _that.IndustryCodesThreeShowList.length);
            _that.IndustryCodesFourShowList.splice(0, _that.IndustryCodesFourShowList.length);
            _that.regionForm.IndustryCodesThree = '';
            _that.regionForm.IndustryCodesFour = '';
            _that.IndustryCodesThreeShow = false;
            _that.IndustryCodesFourShow = false;
            return;
          }

          console.log(newVal);
          let data = _that.IndustryCodesThreeList;

          let showIndustryCodesTwoList = Array();
          data.forEach(function (item, index) {
            if (item.code.indexOf(newVal) > -1) {
              showIndustryCodesTwoList.push(item);
            }
          });
          if (showIndustryCodesTwoList.length > 0) {
            _that.IndustryCodesThreeShow = true;

            _that.regionForm.IndustryCodesThree = '';
            _that.regionForm.IndustryCodesFour = '';
            _that.IndustryCodesFourShowList = [];
            _that.IndustryCodesFourShow = false;
            //先清空
            _that.IndustryCodesThreeShowList = [];
            _that.IndustryCodesThreeShowList = showIndustryCodesTwoList;
          } else {
            _that.regionForm.IndustryCodesThree = '';
            _that.regionForm.IndustryCodesFour = '';
            _that.IndustryCodesThreeShowList = [];
            _that.IndustryCodesFourShowList = [];
            _that.IndustryCodesThreeShow = false;
            _that.IndustryCodesFourShow = false;
          }


        },
        deep: true,
        immediate: true
      },
      'regionForm.IndustryCodesThree': {
        handler: function (newVal, oldVal) {
          const _that = this;
          if (newVal === '') {
            _that.IndustryCodesThreeShowList.splice(0, _that.IndustryCodesThreeShowList.length);
            _that.regionForm.IndustryCodesFour = '';
            _that.IndustryCodesFourShow = false;
            return;
          }

          console.log(newVal);
          _that.regionForm.IndustryCodesFour = '';
          let data = _that.IndustryCodesFourList;
          let showIndustryCodesTwoList = Array();
          data.forEach(function (item, index) {
            if (item.code.indexOf(newVal) > -1) {
              showIndustryCodesTwoList.push(item);
            }
          });
          if (showIndustryCodesTwoList.length > 0) {
            _that.IndustryCodesFourShow = true;
            _that.regionForm.IndustryCodesFour = '';
            //先清空
            _that.IndustryCodesFourShowList = [];
            _that.IndustryCodesFourShowList = showIndustryCodesTwoList;
          }

        },
        deep: true,
        immediate: true
      },
      'regionForm.orgType': {
        handler: function (newVal, oldVal) {
          const _that = this;
          let data = _that.orgTypeList;
          data.forEach(function (item, index) {
            if (item.code === newVal) {
              if (item.children !== undefined && item.children !== null) {
                _that.orgTypeChildShow = true;
                _that.orgTypeChildList = item.children;
              } else {
                _that.orgTypeChildShow = false;
              }
            }
          })
        },
        deep: true,
        immediate: true
      },
      'regionForm.province': {
        handler: function (newVal, oldVal) {
          const _that = this;
          console.log(newVal, oldVal);
          if (newVal === '') {
            //先清空
            _that.regionForm.city = '';
          }
          let data = _that.regionList;
          for (var i = 0; i < data.length; i++) {
            if (data[i].code === newVal) {
              if (data[i].children !== undefined && data[i].children !== null) {

                //先清空
                _that.regionForm.city = '';
                _that.cityList = data[i].children;
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
          let data = _that.cityList;
          for (var i = 0; i < data.length; i++) {
            if (data[i].code === newVal) {
              if (data[i].children !== undefined && data[i].children !== null) {
                _that.areaShow = true;
                //先清空
                _that.regionForm.area = '';
                _that.areaList = data[i].children;
              } else {
                _that.areaShow = false;
                _that.regionForm.area = '';
                _that.areaList = [];
              }
            }
          }
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
      },
      getBase64(file) {
        return new Promise(function (resolve, reject) {
          let reader = new FileReader();
          let imgResult = "";
          reader.readAsDataURL(file);
          reader.onload = function () {
            imgResult = reader.result;
          };
          reader.onerror = function (error) {
            reject(error);
          };
          reader.onloadend = function () {
            resolve(imgResult);
          };
        });
      },
      getOrganization(file) {
        this.getBase64(file.raw).then(res => {
          console.log(res);
          this.regionForm.organization = res;
        });
      },
      getFile(file) {
        this.getBase64(file.raw).then(res => {
          console.log(res);
          this.regionForm.license = res;
        });
      },
      beforeAvatarUpload1(file) {
        const isJPGOrPNG = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt400K = file.size / 1024 < 400;
        if (!isJPGOrPNG) {
          this.$message.error('上传图片只能是 JPG/PNG 格式!');
        }
        if (!isLt400K) {
          this.$message.error('上传图片大小不能超过 400K!');
        }


        return isJPGOrPNG && isLt400K;
      },
      onUpdate(formName) {
        console.log('onUpdate!');
        const self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            let body = {
              'data': self.regionForm
            };
            self.$http.post(self.$baseUrl + '/enterpriseInfo/update', body, self.$config).then(res => {
              console.log(res);
              let data = res.data;
              if (data.result !== null) {
                if (data.result.responseCode === 200) {
                  self.$message({
                    message: '企业更新成功',
                    type: 'success'
                  });
                } else {
                  self.$notify({
                    title: '警告',
                    message: data.result.responseMessage,
                    type: 'warning'
                  });
                }
              } else {
                self.$notify({
                  title: '警告',
                  message: res.msg,
                  type: 'warning'
                });
              }

            }, reason => {
              console.log("申请失败" + reason);
              self.$message.error('申请失败');
            })
          } else {
            self.$notify.error({
              title: '错误',
              message: '必填项不可为空'
            });
            return false;
          }
        });
      },
      onSubmit(formName) {
        console.log('submit!');
        const self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            let body = {
              'data': self.regionForm
            };
            self.$http.post(self.$baseUrl + '/enterpriseInfo/apply', body, self.$config).then(res => {
              console.log(res);
              let data = res.data;
              if (data.result !== null) {
                if (data.result.responseCode === 200) {
                  self.$message({
                    message: '企业注册成功',
                    type: 'success'
                  });
                } else {
                  self.$notify({
                    title: '警告',
                    message: data.result.responseMessage,
                    type: 'warning'
                  });
                }
              } else {
                self.$notify({
                  title: '警告',
                  message: res.msg,
                  type: 'warning'
                });
              }
            }, reason => {
              console.log("申请失败" + reason);
              self.$message.error('申请失败');
            })
          } else {
            self.$notify.error({
              title: '错误',
              message: '必填项不可为空'
            });
            return false;
          }
        });

      }
    },
    created() {
      const self = this;
      this.$http.get(self.$baseUrl+'/regionData/regionList').then(res => {
        console.log(res);
        if (res.data.data.data !== null) {
          this.regionList = res.data.data.data;
        }
      }, res => {
        console.log("加载失败")
      });
      let body = {
        'code': this.regionForm.enterpriseCode
      };
      this.$http.post(self.$baseUrl + '/enterpriseInfo/getBasicData', body, self.$config).then(res => {
        console.log(res);
        if (res.data.code === 0) {
          let data = res.data.result;
          self.energyTypeList = data.energyTypeList;
          self.energyTypeListTwo = data.energyTypeListTwo;
          self.IndustryCodesOneList = data.IndustryCodesOneList;
          self.IndustryCodesTwoList = data.IndustryCodesTwoList;
          self.IndustryCodesThreeList = data.IndustryCodesThreeList;
          self.IndustryCodesFourList = data.IndustryCodesFourList;
          self.filedCodeList = data.filedCodeList;
          self.energyConsumeLevelList = data.energyConsumeLevelList;
          if (data.applicationCode === 404) {
            self.$message({
              message: '该企业未注册，请先注册',
              type: 'warning',
              offset:50
            });
          } else {
            console.log(data.applicationModel);
            self.enterpriseCodeDisable = true;
            let applicationModel = data.applicationModel;
            self.regionForm.cmpName = applicationModel.cmpname;
          //  self.regionForm.enterpriseCode = self.$cookies.get('enterpriseCode');
            self.regionForm.corporationName = applicationModel.corporationname;
            self.regionForm.zipCode = applicationModel.zipcode;
            self.regionForm.address = applicationModel.address;
            self.regionForm.email = applicationModel.email;
            self.regionForm.latitude = applicationModel.latitude;
            self.regionForm.longitude = applicationModel.longitude;
            self.regionForm.url = applicationModel.url;
            self.regionForm.registerPrincipal = applicationModel.registerprincipal;
            // self.regionForm.isorg = applicationModel.isorg === '0' ? '否' : '是';
            self.regionForm.registerAddress = applicationModel.registeraddress;
            self.regionForm.phone = applicationModel.phone;
            self.regionForm.fax = applicationModel.fax;
            self.regionForm.productionLine = applicationModel.productionline;
            self.regionForm.leadingProduct = applicationModel.leadingproduct;
            self.regionForm.license = applicationModel.license;
            self.regionForm.remark = applicationModel.remark;
            self.regionForm.organization = applicationModel.organization;
            self.regionForm.registerDate = applicationModel.registerdate;
            self.regionList.forEach(function (item, index) {
              if (item.code === 530000) {
                self.regionForm.province = item.fullName;
                self.cityList = item.children;
              }
            });

            /*self.filedCodeList.forEach(function (item, index) {
              if (item.code === applicationModel.fieldcode) {
                self.regionForm.fieldCode = item.name;
              }
            });

            self.energyConsumeLevelList.forEach(function (item, index) {
              if (item.code === applicationModel.energyconsumelevel) {
                self.regionForm.energyConsumeLevel = item.name;
              }
            });

            self.isCenter.forEach(function (item, index) {
              if (item.code === Number(applicationModel.center)) {
                self.regionForm.center = item.value;
              }
            });

            self.isJgzh.forEach(function (item,index) {
              if (item.code === Number(applicationModel.jgzh)){
                self.regionForm.jgzh = item.value;
              }
            });*/

            /*  self.regionForm.province = applicationModel.regioncode;
              self.regionForm.typeCode = applicationModel.typecode;
              self.regionForm.IndustryCodesOne = applicationModel.industrycode;*/
          }
        } else {
          self.$message({
            message: '加载其他基础数据失败:' + res.msg,
            type: 'warning'
          });
        }
      }, res => {
        console.log("加载失败");
        self.$message({
          message: '加载其他基础数据失败',
          type: 'warning'
        });
      });

    }
  }
</script>


<style scoped>

</style>
