import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search:'',
    products:[],
  },
  mutations: {
    search(state,value){
      // console.log(333,value);
      state.search = value
    },
    // 添加商品
    addItem(state,data){
      if(Object.is(NaN,+data.price)){
        // 如果price不是数字
        return alert('没有价格，不可加入购物车')
      }
      // 价格是数字
      state.products.push(data);
      // console.log(this.getters.price,state,data,'addItem')
    },
    // 删除商品
    deleteItem(state,data){
      // 判断是否在购物车  findeIndex不存在的index=-1
      let index = state.products.findIndex(item=>item._id == data._id);
      if(index>=0){
        state.products.splice(index,1);
      }else{
        alert('该商品不在购物车中不可移除');
      }
      // console.log(this.getters.price,state,data,'deleteItem');
    },
    remove(state,id){
      let index = state.products.findIndex(item=>item._id===id);
      state.products.splice(index,1);
    }

  },
  getters:{
    // 购物车价格
    price(state){
      // reduce(fn,initNum)
      return state.products.reduce((res,item)=>
      // 防止item.price是字符串
      res+(+item.price*item.orderNum)
      ,0)
      // 保留两位小数
      .toFixed(2)
    }
  },
  actions: {
  },
  modules: {
  }
})
