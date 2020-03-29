import Vue from 'vue'
import Router from 'vue-router'
import cesiumContainer from '@/components/cesiumContainer'
import viewerSeting from '@/components/viewerSeting'

Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'cesiumContainer',
  //     component: cesiumContainer
  //   }
  // ]
  routes: [
    {
      path:'/',
      components:{
        'default':cesiumContainer,
        'viewerSeting':viewerSeting,
      }
    }
  ]
})
