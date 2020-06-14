<template>
    <div class="page-main">
        <h2 class="main-title">修改密码</h2>
        <el-form label-width="200px" :model="data" :rules="rules" ref="changePwd">
            <el-form-item label="用户名" prop="username">
                <el-input type="text" placeholder="请输入用户名" v-model="data.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="data.password"></el-input>
            </el-form-item>
              <el-form-item label="重复密码" prop="rePassword">
                <el-input type="password" placeholder="请确认密码" v-model="data.rePassword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" size="mini" @click="submit">提交</el-button>
               <!--另一种重置方法 
                 this.$refs.main.resetFields();-->
                <el-button type="warning" native-type="reset" size="mini">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style scoped lang="scss">
    .page-main{
        .el-form{
            width: 60%;
            max-width: 900px;
            min-width: 400px;
            margin:20px auto;
        }
    }
</style>
<script>
import {username,password,rePassword} from '@t/validate'
export default {
    data(){
        return{
            data:{},
            rules:{
                username:[
                    {trigger:'blur',validator:username}
                ],
                password:[
                    {trigger:'blur',validator:password}
                ],
                rePassword:[
                    {trigger:'blur',validator:(...args)=>rePassword(this.data.password,...args)}
                ]
            }
        }
    },
    methods:{
        submit(){
            this.$refs.changePwd.validate((valid)=>{
                if(valid){
                    let {username,password} = this.data;
                    this.$http.post('/admin/manager/updata',{username,password})
                    .then(({data})=>{
                        if(data.errno === 0 ){
                            console.log(this.$message)
                            this.$message.success(data.msg)
                            // 方法一 更改$store中的username
                            // this.$store.commit('updateUsername',username)
                            // 方法二 重新登录
                            return location.reload()
                        }
                        this.$message.error(data.msg)
                    })
                    }
            })
            
        }
    },
    // created(){
    //      console.log(this)

    // }
}
</script>