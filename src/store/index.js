import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    num: 1,
  },

  //只会对数据进行包装，不会修改state中的数据
  getters: {
    showNum:state =>{
      return "当前最新的num是"+state.num++
    }
  },

  mutations: {
    // 不要在mutations函数中执行异步操作
    // 第一个形参永远都是state
    // add(state){
    //   state.count++;
    // },
    add(state, step) {
      state.count += step;
    },
    incr(state) {
      state.count++;
    },
    addN(state, step) {
      state.count -= step;
    },
    // countAdd(state){
    //   state.num++;
    // },
    countAdd(state, step) {
      state.num += step;
    }

  },

  // 异步操作
  actions: {
    // addAsync(context){
    //   setInterval(()=>{
    //     context.commit("countAdd")
    //   },1000)
    // }
    addAsync(context, step) {
      setInterval(() => {
        context.commit("countAdd", step)
      }, 1000)
    }
  },

  modules: {
  }

})
