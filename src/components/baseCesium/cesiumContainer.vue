<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
    name:"cesiumViewer",
    data(){
        return {}
    },
    mounted(){
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZjkwMGRhMC0zNmFlLTRiMGItYTFlMy02YTFhYzUyNDY1ZWYiLCJpZCI6MTQ3MDksInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1ODE5MDg2Nzl9.9oHr4pHyzYxCCQSwMPJNzvwgqLcPpQ8InfiCo4WfYmM';
        let viewer = new Cesium.Viewer('cesiumContainer',{
            imageryProvider:new Cesium.ArcGisMapServerImageryProvider({
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
                enablePickFeatures: false
            }),
            selectionIndicator : false,
            infoBox : false,
            //terrainProvider: Cesium.createWorldTerrain(),
            shouldAnimate : true,
            baseLayerPicker:true,
            // selectedImageryProviderViewModel:cs[7],
        });

        window.viewer=viewer //全局注册viewer
        console.log(viewer);
        // this.$emit("loadeds");
    },
}
</script>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>>