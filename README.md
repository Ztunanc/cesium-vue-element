# cesium-vue-element

>  Cesium+Vue+Webpack+element UI框架

## Build Setup

```bash
# 安装依赖
npm install

# 运行开发环境
npm run dev

# 编译
npm run build

# 编译分析报告
npm run build --report

# 打开浏览器查看运行结果
localhost:8080
```

# 开发记录
## 2020.03.29 
+ 已完成
1. 支持最新版本的Cesium，使用require引入Cesium并设为全局变量，在子组件中可通过Cesium.**方式使用；
2. 在cesiumViewer组件中定义viewer并设为全局对象；
3. 安装element-ui并设置局部引用，创建viewerSeting组件测试。
+ 下一步安排：
1. 将Cesium功能封装成独立的模块（将cesium的属性赋值给Vue的data对象中会造成一些性能问题）。
2. 使用element-ui创建一个platfrom。
