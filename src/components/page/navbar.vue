<template>
  <el-container style="height: 100%;">
    <el-aside width="auto">
      <el-menu class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isHamburgerActive"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">基础数据</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">图层控制器</span>
          <!-- <el-menu-item index="2-1">
            <el-tree
              :data="treeData"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]"
              :props="defaultProps">
            </el-tree>
          </el-menu-item> -->
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header @select="handleSelect" active-text-color="#ffd04b">
        <!-- 添加侧边栏折叠按钮 -->
        <hamburger :is-active="isHamburgerActive" class="hamburger-container" @toggleClick="toggleSideBar"></hamburger>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>zhengp</span>
      </el-header>
      
      <el-main>
        <cesiumContainer></cesiumContainer>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import cesiumContainer from '../baseCesium/cesiumContainer'
import hamburger from './hamburger'
  export default {
    data() {
      let treeData = [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, 
        {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }
      ];

      let defaultProps= {
        children: 'children',
        label: 'label'
      };
      return {
        isHamburgerActive:true,
        treeData:treeData,
        defaultProps:defaultProps,
      }
    },
    components:{cesiumContainer,hamburger},
    methods: {
      handleSelect(key, keyPath) {
          console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
          console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
          console.log(key, keyPath);
      },
      toggleSideBar() {
        // this.$store.dispatch('app/toggleSideBar')
        console.log("点击hanburger");
        this.isHamburgerActive = !this.isHamburgerActive;
        console.log(this.isHamburgerActive);
      },
    }
  };
</script>

<style scoped>
  .el-header {
    background-color: #eef0f5;
    color: #838e9d;
    line-height: 60px;
    text-align: right; 
    font-size: 12px
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    padding-top: 60px;
  }
  .el-aside .el-menu{
    border-right: none;
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
  }

  .hamburger-container:hover {
    background: rgba(0, 0, 0, .025)
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    background-color: #545c64;
    color: #333;
  }
  .el-main{
    padding: 0;
  }
</style>