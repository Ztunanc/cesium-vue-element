<template>
  <div class="selectModelType">
      <div class="tip"><p>设置默认控件的显示与隐藏</p></div>
      <template v-for="(item,index) in attr">
          <div :key="index">
              <div style="text-align left"></div>
              <el-checkbox @click="ctrAttrVis(index)" class="chb" v-model="item.value">
                  {{item.value}}
              </el-checkbox>
          </div>
      </template>
  </div>
</template>

<script>
import Vue from 'vue';
import { Checkbox } from 'element-ui';
Vue.component(Checkbox.name, Checkbox);

export default {
    name:"viewerSeting",
    data(){
        return {
            attr:[
                {
                    lable:"动画",
                    value:false,
                    key:"animation"
                },{
                    lable:"图层选择控件",
                    value:false,
                    key:"layersel"
                },{
                    lable:"地名查找",
                    value:false,
                    key:"find",
                },{
                    lable:"时间线",
                    value:false,
                    key:"timeline",
                },{
                    lable:"二三维切换",
                    value:false,
                    key:"two2three"
                },{
                    lable:"帮助信息",
                    value:false,
                    key:"help"
                },{
                    lable:"信息框",
                    value:false,
                    key:"info"
                },{
                    lable:"主页",
                    value:false,
                    key:"home"
                },{
                    lable:"版权Logo信息",
                    value:false,
                    key:"logo"
                }
            ]
        }
    },
    methods:{
        atrAttrVis(v){
            let key = this.attr[v].key;
            switch (key) {
                case "animation":
                    viewer._animation.container.style.display = this.attr[v].value?"block":"none";
                    break;
                case "info":
                    viewer._info.container.style.display = this.attr[v].value?"block":"none";
                    break;
                case "help":
                    viewer.baseLayerPicker.container.children[5].style.display = this.attr[v].value?"inline":"none";
                    break;
                case "timeline":
                    viewer._timeline.container.style.display = this.attr[v].value?"block":"none";
                    break;
                case "logo":
                    viewer.cesiumWidget.creditContainer.style.display = this.attr[v].value?"block":"none";
                    break;
                case "two2three":
                    viewer.baseLayerPicker.container.children[2].style.display = this.attr[v].value?"inline":"none";
                    break;
                case "home":
                    viewer.baseLayerPicker.container.children[1].style.display = this.attr[v].value?"inline":"none";
                    break;
                case "find":
                    viewer.baseLayerPicker.container.children[0].style.display = this.attr[v].value?"inline":"none";
                    break;
                case "layersel":
                    viewer.baseLayerPicker.container.children[3].style.display = this.attr[v].value?"inline":"none";
                    break;
                default:
                    break;
            }
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
  .selectModelType{
    position: absolute;
    width: 220px;
    margin: 20px;
    z-index: 100;
    padding: 10px;
  }
  .chb{
    margin: 3px;
  }
</style>>