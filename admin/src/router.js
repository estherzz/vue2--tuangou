import Vue from 'vue';
import Router from 'vue-router';
import Home from '@v/Home'; 
import Main from '@v/Main'; 
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',component:Home,
            children:[
                {path:'/product/create',component:()=>import('@v/product/Create')},
                {path:'/product/list/:page',
                // props:true,
                // 返回对象 外边加圆括号
                props:route=>({page:+route.params.page}),
                component:()=>import('@v/product/List')},
                {path:'/product/edit/:id',component:()=>import('@v/product/Edit')},
                {path:'/home/ads',component:()=>import('@v/home/Ads')},
                {path:'/home/types',component:()=>import('@v/home/Types')},
                {path:'/user/create',component:()=>import('@v/user/Create')},
                {path:'/user/list/:page',
                props:route=>({page:+route.params.page}),component:()=>import('@v/user/List')},
                {path:'/user/edit/:id',component:()=>import('@v/user/Edit')},
                // 默认path  放在最后
                {path:'/*',component:Main},
            ]
        }
    ]
})