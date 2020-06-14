<template>
    <div class="page-userCreate">
        <h2 class="main-title">{{title}}</h2>
        <el-form label-width="200px" :rules="rules" :model="data" ref="creatUser">

            <el-form-item label="用户名：" prop="username">
                <el-input type="text" placeholder="请输入用户名" v-model="data.username" ></el-input>
            </el-form-item>

            <el-form-item label="密码：" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="data.password" ></el-input>
            </el-form-item>

            <el-form-item label="电话：" prop="telephone">
                <el-input type="telephone" placeholder="请输入电话" v-model="data.telephone"></el-input>
            </el-form-item>
            <!-- 男女 -->
            <el-form-item label="性别：" prop="sex">
                <el-radio v-model="data.sex" label="男">男</el-radio>
                <el-radio v-model="data.sex" label="女">女</el-radio>
            </el-form-item>
            <!-- 内容 -->
            <el-form-item label="简介：">
                <el-input type="textarea" placeholder="请输入简介" v-model="data.profile"></el-input>
            </el-form-item>     
            
            <el-form-item>
                <el-button @click="submit" type="success" size="mini">提交</el-button>
            </el-form-item> 
        </el-form>
    </div>
</template>
<style lang="scss" scoped>
    .page-userCreate{
        .el-form-item,
        .el-radio{
            font-weight: 700;
        }
        .el-textarea,
        .el-input{
            width: 200px;
        }
    }
</style>
<script>
import {username,password,telephone} from '@t/validate'
export default {
    data(){
        return{
            data:{},
            rules:{
                username:[{required:true,trigger:'blur',validator:username}],
                password:[{required:true,trigger:'blur',validator:password}],
                telephone:[{required:true,trigger:'blur',validator:telephone}],
                sex:[{required:true,trigger:'blur',message:'选择性别'}]
            },
            submitUrl:'/admin/user/create',
            title:'创建用户',
            msg:'用户创建成功'
        }
    },
    methods:{
        submit(){
            // console.log(this.$refs.creatUser)
            this.$refs.creatUser.validate(valid=>{
                console.log(valid)
                if(valid){
                    this.$http.post(this.submitUrl,this.data)
                        .then(({data})=>{
                            if(data.errno===0){
                                this.$message.success(this.msg)
                                //进入用户列表页
                                this.$router.replace('/user/list/1') 
                            }else{
                                 this.$message.error(data.msg)
                            }
                        })
                }
            })
        }
    }

}
</script>