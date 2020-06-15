import Vue from 'vue';
import Vuex,{Store} from 'vuex';
import { Message } from 'element-ui';
Vue.use(Vuex);
export default new Store({
    state:{
        username:''
    },
    getters:{},
    mutations:{
        updateUsername(state,data){
            state.username = data;
        },

    },
    actions:{
        login(store,data){
            // 发送post请求 用户名和密码 后端返回用户信息
            this._vm.$http.post('/admin/login',data)
            .then(({data})=>{
                // console.log(data)
                if(data.errno === 0 ){
                    store.commit('updateUsername',data.data)
                        
                }else{
                    Message.error(data.msg)
                }
                
            })
        },
        // 检查用户信息
        userInfo(store) {
            
            console.log('useinfo',this._vm)
            this._vm.$http.post('/admin/userInfo')
                .then(({ data }) => {
                    console.log(1111, data)
                    if (data.errno === 0) {
                        // 设置
                        store.commit('updateUsername', data.data)
                    }
                })
            
        }
    }
})