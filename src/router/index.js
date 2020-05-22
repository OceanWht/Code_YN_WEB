import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Index from '@/components/index/Index'
import Apply from '@/components/enterpriseInfo/Apply'
import CompanyContacter from '@/components/companyContacter/CompanyContacter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/index',
      name:'Index',
      component: Index,
      children:[
        {
          path:'/apply',
          name:'Apply',
          component: Apply
        },
        {
          path:'/companyContacter',
          name:'CompanyContacter',
          component: CompanyContacter
        }
      ]
    },

  ]
})
