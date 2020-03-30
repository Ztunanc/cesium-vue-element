import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/page/layout'
import login from '@/components/page/login'
import register from '@/components/page/register'
import navbar from '@/components/page/navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'navbar',
      component:navbar,
      // 嵌套路由
      children:[
        {
          // 这里不设置值，是把main作为默认页面
          path: '/', 
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        }
      ]
    }
  ]
})
