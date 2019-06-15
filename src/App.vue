<template>
  <div>
    <counter  />
    <!-- <counter-brother  ></counter-brother> -->
  </div>
</template>

<script>
// 两个兄弟组件 共享count 数据
// count 不应该不属于Counter组件私有 ,不应该是data(){}   而是在props
import Counter from './components/Counter';
// import CounterBrother from './components/CounterBrother';
export default {
  data() {
    return {
      count:0
    }
  },
  // methods: {
  //   incrementCount(){
  //     this.count++
  //   }
  // },
 components:{
   'counter':Counter,
  //  'counterBrother':CounterBrother
 }
}
</script>

<style>

</style>
