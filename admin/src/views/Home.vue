<template>
    <el-container class="page-home">
        <el-header>
            <router-link tag="h1" to="/">BBPP后台管理系统</router-link>
            <div class="user">
                <span>您好 <b>{{$store.state.username}}</b> 欢迎回来 ！</span>
                <a href="/admin/logout">退出</a>
            </div>
        </el-header>
        <el-container class="content">
            <el-aside width="240px">
                <!-- :router="true"开启 index作为path路径 -->
                <el-menu :router="true">
                    <el-submenu v-for="(item, index) in menu" :key="index"  :index="String(index)"> 
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>{{item.name}}</span>
                        </template> 
                        <el-menu-item v-for="(childItem,childIndex) in item.children" :key="childIndex" :index="childItem.link">
                            <span> {{childItem.name}}</span>
                        </el-menu-item> 
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<style lang="scss" scoped>
 .page-home{
     height: 100%;
     .el-header,
     .el-aside,
     .el-main{
         background: #fff;
     }

     .el-header{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding-bottom: 10px;
        h1{
             font-size: 26px;
             cursor: pointer;
        }
     }
    .content{
        margin-top:10px ;
        .el-main {
            margin-left: 10px;
        }
    }
 }
</style>
<script>
export default {
    methods:{
        
    },
    data(){
        return{
            menu:[
                {
                    name:'商品模块',
                    children:[
                        {name:'创建商品',link:'/product/create'},
                        {name:'商品列表',link:'/product/list/1'}
                        ]
                },
                {
                    name:'首页模块',
                    children:[
                        {name:'首页广告',link:'/home/ads'},
                        {name:'分类按钮',link:'/home/types'}
                        ]
                },
                 {
                    name:'用户模块',
                    children:[
                        {name:'创建用户',link:'/user/create'},
                        {name:'用户列表',link:'/user/list/1'}
                    ]
                }
            ]
        }
    }
}
</script>