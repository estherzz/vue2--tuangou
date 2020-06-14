<template>
    <div class="page-login">
        <el-form label-width="100px" :model="data" :rules="rules" ref="login">
        <h1>请您登录</h1>
            <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入用户名" v-model="data.username"></el-input>
            </el-form-item>
            <el-form-item  label="密码" prop="password">
                <el-input placeholder="请输入密码" type="password" v-model="data.password"></el-input>
            </el-form-item>
                <el-button type="success" @click="btnLogin">登录</el-button>
        </el-form>
    </div>
</template>
<style lang="scss" scoped>
.page-login{
    h1{
        text-align: center;
        font-size: 25px;
        border-bottom: 1px solid #ddd;
        padding: 10px 0 20px;
        margin-bottom: 10px;
    }
    .el-form{
        width: 460px;
        height: 280px;
        box-sizing: border-box;
        position: fixed;
        left: 50%;
        top:50%;
        margin-left: -230px;
        margin-top: -140px;
        background: #fff;
        border-radius: 15px;
        padding: 20px;
        .el-button{
            width: 100%;
        }
    }
}
</style>
<script>
import {username,password} from '@t/validate'
export default {
    data(){
        return{
            data:{},
            rules:{
                username:{trigger:'blur',validator:username},
                password:{trigger:'blur',validator:password}
            }
        }
    },
    methods:{
        btnLogin(){
            this.$refs.login.validate((valid,...args)=>valid&&this.$store.dispatch('login',this.data))
        }
    }
}
</script>