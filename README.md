el: #root  根挂载结点
App component + vue-router +vuex 混合一起的应用
Vuex是Vue.js应用程序的状态管理模式+库。
new Vue({
  el:'#app',
  render: h=>h(App)   将根应用挂载上去
})

vue的难点是 数据管理 组件状态 data(){},
当两兄弟组件要共享状态时
props 传递数据

当页面上多个组件要共享状态时
将共享状态 放置在这些组件的共同的父组件data来管理
状态要唯一  放在一个地方(共同的父组件)  方便管理
统一状态管理
如果不统一 状态有可能不同步

v-on:increment="incrementCount"
props:  this.$emit()

麻烦 找父节点有点麻烦 this.$emit()
很多状态要共享  很多组件  组件的关系也错综复杂
App 叫做全局数据管理 vuex 应用状态管理