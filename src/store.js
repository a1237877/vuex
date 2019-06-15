import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

// 状态
const state = {
  count:0
}
// 中央
//state 要改 actions 是交给你调用的 increment 不能直接修改state.count  只有mutations才可以修改
//只有actions 才可以触发mutations改变 只有mutations 才可以修改state
const mutations = {
  increment(state){
    state.count++
  }
}
const actions = {
  increment:({commit}) => {
    commit('increment')   
    // 'increment' 表示mutations方法
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})