<template>
  <div id="app">
    <!-- cesiumViewer,里面定义全局viewer，因此必须第一个引用 -->
    <router-view ref="cesiumContainer"></router-view>
    <router-view name="viewerSetting"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body, #cesiumContainer {
  width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;
 }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>