<template>
  <div>
    Clicked:{{$store.state.count}}
    <button @click="increment">+</button>
  </div>
</template>

<script>
//让store里的改变状态的方法 mapAction
import {mapActions} from 'vuex'
export default {
  // data 属于自身的状态
 data() {
   return {
     
   }
 },
 props:['count'],
 methods: mapActions([
   'increment'
 ]
 )
  //  increment(){
    //  this.$emit('increment');
    // 修改store的状态

   
 
}
</script>

<style >

</style>
