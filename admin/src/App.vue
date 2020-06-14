<template>
    <div id="app">
        <Login v-if="!$store.state.username"></Login>
        <router-view v-else></router-view>
    </div>
</template>
<style lang="scss">
    html,body{
        width: 100%;
        height: 100%;
        background: #efefef;
    }
    #app{
        height: 100%;
    }
    *{
        padding: 0;
        margin: 0;
    }
    li{
        list-style: none;
    }
    // Main.vue中的标题
    .main-title{
        border-bottom:1px solid #ccc;
        font-size: 24px;
        padding-top:5px;
        padding-bottom:15px;
        margin-bottom: 30px;
        font-weight: normal;
    }
</style>
<script>
import Login from '@v/Login'
export default {
    components:{Login},
    created(){
        // console.log(this.$store)
        // 检查用户信息
        this.$store.dispatch('userInfo')
    }
}
</script>