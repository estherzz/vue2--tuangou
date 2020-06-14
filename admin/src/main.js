import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import axios from 'axios';
import App from '@/App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 富文本编辑器
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 安装axios 和 element-ui
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(VueQuillEditor)
new Vue({
    router,
    store,
    render:h=>h(App)
}).$mount('#app')