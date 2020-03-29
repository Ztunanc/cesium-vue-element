<template>
   <div id="cesiumContainer">
   </div>
</template>

<script>

export default {
  name: 'cesiumContainer',
  mounted(){
     let viewer = new Cesium.Viewer('cesiumContainer');
     window.viewer = viewer;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>