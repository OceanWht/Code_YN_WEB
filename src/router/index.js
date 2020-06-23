import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Index from '@/components/index/Index'
import Apply from '@/components/enterpriseInfo/Apply'
import CompanyContacter from '@/components/companyContacter/CompanyContacter'
import CompanyProductStructure from '@/components/companyProductStructure/CompanyProductStructure'
import CompanyOutputValue from '@/components/companyOutputValue/CompanyOutputValue'
import CompanyEnergyConservation from '@/components/companyEnergyConservation/CompanyEnergyConservation'
import CompanyEnergyAccount from '@/components/companyEnergyAccount/CompanyEnergyAccount'
import CompanyMaterielProduct from '@/components/companyMaterielProduct/CompanyMaterielProduct'
import ProcessConfigure from '@/components/processConfigure/ProcessConfigure'
import UnitConfigure from '@/components/unitConfigure/UnitConfigure'
import CompanyEnergySys from '@/components/CompanyEnergySys/CompanyEnergySys'
import CompanyEnergyManager from '@/components/companyEnergyManager/CompanyEnergyManager'
import CompanyEnergyMonitor from '@/components/companyEnergyMonitor/CompanyEnergyMonitor'
import CompanyCalculater from '@/components/companyCalculater/CompanyCalculater'
import DeviceConfigure from '@/components/deviceConfigure/DeviceConfigure'
import DataCollectConfigure from '@/components/dataCollectConfigure/DataCollectConfigure'
import EnergyCertification from '@/components/energyCertification/EnergyCertification'
import GaugeConfigure from '@/components/gaugeConfigure/GaugeConfigure'
import OtherBasicConfig from '@/components/uidRelationShip/OtherBasicConfig'
import UidRelationShip from '@/components/uidRelationShip/UidRelationShip'
import GaugeReplaceConfigure from '@/components/gaugeReplaceConfigure/GaugeReplaceConfigure'
import GaugeVerifyConfigure from '@/components/gaugeVerifyConfigure/GaugeVerifyConfigure'
import DataEnterpriseEnergy from '@/components/dataEnterpriseEnergy/DataEnterpriseEnergy'
import AddEnergy from '@/components/arganEnergy/AddEnergy'
import AddIDC from '@/components/arganEnergy/AddIDC'
import AddWarm from '@/components/arganEnergy/AddWarm'
import DataUploadManual from '@/components/dataUploadManual/DataUploadManual'

Vue.use(Router)

export default new Router({
  mode:'hash',
  base:'/XL_NHJC_WEB',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/apply',
          name: 'Apply',
          component: Apply
        },
        {
          path: '/companyContacter',
          name: 'CompanyContacter',
          component: CompanyContacter
        },
        {
          path: '/companyProductStructure',
          name: 'CompanyProductStructure',
          component: CompanyProductStructure
        },
        {
          path: '/companyOutputValue',
          name: 'CompanyOutputValue',
          component: CompanyOutputValue
        },
        {
          path: '/companyEnergyConservation',
          name: 'CompanyEnergyConservation',
          component: CompanyEnergyConservation
        },
        {
          path: '/companyEnergyAccount',
          name: 'CompanyEnergyAccount',
          component: CompanyEnergyAccount
        },
        {
          path: '/companyMaterielProduct',
          name: 'CompanyMaterielProduct',
          component: CompanyMaterielProduct
        },
        {
          path: '/processConfigure',
          name: 'ProcessConfigure',
          component: ProcessConfigure
        },
        {
          path: '/unitConfigure',
          name: 'UnitConfigure',
          component: UnitConfigure
        },
        {
          path: '/companyEnergySys',
          name: 'CompanyEnergySys',
          component: CompanyEnergySys
        },
        {
          path: '/companyEnergyManager',
          name: 'CompanyEnergyManager',
          component: CompanyEnergyManager
        },
        {
          path: '/companyEnergyMonitor',
          name: 'CompanyEnergyMonitor',
          component: CompanyEnergyMonitor
        },
        {
          path: '/companyCalculater',
          name: 'CompanyCalculater',
          component: CompanyCalculater
        },
        {
          path: '/deviceConfigure',
          name: 'DeviceConfigure',
          component: DeviceConfigure
        },
        {
          path: '/dataCollectConfigure',
          name: 'DataCollectConfigure',
          component: DataCollectConfigure
        },
        {
          path: '/energyCertification',
          name: 'EnergyCertification',
          component: EnergyCertification
        },
        {
          path: '/gaugeConfigure',
          name: 'GaugeConfigure',
          component: GaugeConfigure
        },
        {
          path: '/uidRelationShip',
          name: 'UidRelationShip',
          component: UidRelationShip
        },
        {
          path: '/otherBasicConfig',
          name: 'OtherBasicConfig',
          component: OtherBasicConfig
        },
        {
          path: '/gaugeReplaceConfigure',
          name: 'GaugeReplaceConfigure',
          component: GaugeReplaceConfigure
        },
        {
          path: '/gaugeVerifyConfigure',
          name: 'GaugeVerifyConfigure',
          component: GaugeVerifyConfigure
        },
        {
          path: '/dataEnterpriseEnergy',
          name: 'DataEnterpriseEnergy',
          component: DataEnterpriseEnergy
        },
        {
          path: '/arganEnergy/AddEnergy',
          name: 'AddEnergy',
          component: AddEnergy
        },
        {
          path: '/arganEnergy/AddIDC',
          name: 'AddIDC',
          component: AddIDC
        },
        {
          path: '/arganEnergy/AddWarm',
          name: 'AddWarm',
          component: AddWarm
        },
        {
          path: '/dataUploadManual',
          name: 'DataUploadManual',
          component: DataUploadManual
        },
      ]
    },
  ]
})
