import Vue from 'vue'
import Router from 'vue-router'
import cesiumContainer from '@/components/baseCesium/cesiumContainer'
import viewerSetting from '@/components/baseSettings/viewerSetting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      components:{
        'default':cesiumContainer,
        'viewerSetting':viewerSetting,
      }
    }
  ]
})
