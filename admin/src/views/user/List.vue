<template>
    <div class="page-userList">
        <h2 class="main-title">用户列表</h2>
             <el-table :data="data" style="width: 100%">
               

                <el-table-column
                  prop="username"
                  label="姓名"
                  >
                </el-table-column>

                <el-table-column
                  prop="password"
                  label="密码">
                </el-table-column>
                
                <el-table-column
                  prop="telephone"
                  label="电话">
                </el-table-column>

                <el-table-column
                  prop="sex"
                  label="性别">
                </el-table-column>
                 <el-table-column
                  prop="profile"
                  label="简介">
                </el-table-column>
                <!-- 操作 编辑 删除  -->
                <el-table-column
                  label="操作">
                  <!-- 获取每一行的信息 -->
                   <template slot-scope="scope">
                       <!-- scope.row -->
                        <router-link tag="el-button" class="el-button--primary el-button--mini" :to="'/user/edit/'+scope.row._id" @click="edit(scope.row)">编辑</router-link>
                        
                        <el-button type="danger" size="mini" @click="remove(scope.row._id,scope.row.username)">删除</el-button>
                  </template>
                </el-table-column>
            </el-table>
            <!-- 上一页 下一页 -->
            <div class="btns">
                <my-button :page="['/user/list/'+(page>1?page-1:1),'/user/list/'+(page+1)]" :title="['上一页','下一页']"></my-button>
            </div>
    </div>
</template>
<style lang="scss" scoped>
    .page-userList{
        .btns{
        margin-top: 20px;
        text-align: center;
    }
    }
    
</style>
<script>
import MyButton from '@c/MyButton';

export default {
    components:{ MyButton },
    props:['page'],
    data(){
        return{
            data:[],
        }
    },
    methods:{
        getData(){
            let {params} = this.$route;
            if(params.page>0){
                this.$http.get('/admin/user/list',{params})
                    .then(({data})=>{
                        if(data.errno===0){
                            this.data=data.data;
                            return;
                        }
                        this.$message.error('当前为最后一页')
                        this.$router.back()
                    })
            }else{
                //当page不是数字时跳转第一页 
                this.$router.replace('/user/list/1')
            }

        },
      
        // 删除用户
        remove(id,username){
            this.$confirm(`是否删除用户${username}`)
                .then(res=>{
                    console.log(777,res)
                      this.$http.post('/admin/user/remove',{id})
                        .then(({data})=>{
                        if(data.errno===0){
                            this.$message.success('删除成功');
                        // 刷新页面
                        location.reload();
                        }else{
                            this.$message.error(data.msg);
                        }

                    })
                })
                .catch(res=>console.log(res))
          
        },
        
    },
    created(){
            this.getData()
    },
    watch:{
        $route(){
            this.getData()
        }
    }
}
</script>