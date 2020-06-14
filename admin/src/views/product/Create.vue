<template>
    <div class="page-productCreate">
        <h2 class="main-title">{{title}}</h2>
        <el-form label-width="200px" :rules="rules" :model="data" ref="createProduct">
            <el-form-item label="商品名称" prop="title">
                <el-input placeholder="请输入商品名称" v-model="data.title"></el-input>
            </el-form-item>
            <el-form-item label="商品描述" prop="description">
                <el-input type="textarea" placeholder="请输入商品描述" v-model="data.description"></el-input>
            </el-form-item>
             <el-form-item label="商品价格" prop="price">
                <el-input type="number" placeholder="请输入商品价格" v-model="data.price" ></el-input>
            </el-form-item>
              <el-form-item label="商品原价" prop="originPrice">
                <el-input type="number" placeholder="请输入商品原价" v-model="data.originPrice" ></el-input>
            </el-form-item>
             <el-form-item label="商品评分" prop="evaluate">
                <el-rate allow-half show-score v-model="data.evaluate" ></el-rate>
            </el-form-item>

            <!-- 商品分类 -->
            <el-form-item label="商品分类" prop="type">
                <el-select v-model="data.type" placeholder="请选择商品类别">
                    <el-option v-for="item in types" :key="item.id" :value="item.id" :label="item.text"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="商品销量" prop="sales">
                <el-input type="number" placeholder="请输入商品销量" v-model="data.sales" ></el-input>
            </el-form-item>
            <el-form-item label="商品店名" prop="storeName">
                <el-input placeholder="请输入商品店名" v-model="data.storeName" ></el-input>
            </el-form-item>
            <el-form-item label="商品地址" prop="storeAddress">
                <el-input placeholder="请输入商品地址" v-model="data.storeAddress"  ></el-input>
            </el-form-item>
            <el-form-item label="分店数量" prop="storeNum" >
                <el-input type="number" placeholder="请输入商品分店" v-model="data.storeNum" ></el-input>
            </el-form-item>

             <el-form-item label="商品图片" prop="img">
                <el-upload 
                action="/admin/product/upload" 
                :show-file-list="false"
                :on-success="uploadSuccess"
                :on-error="uploadFail"
                >
                <el-button size="mini" type="primary">点击上传</el-button>
                <span slot="tip" class="el-upload__tip">选择商品图片</span>
                </el-upload>
                <img class="upload-img"  :src="data.img" v-show="data.img">
                <!-- <img src="/static/upload/06262492858576489182.jpg" > -->
            </el-form-item>

            <el-form-item label="商品内容"  prop="content">
                <quill-editor v-model="data.content"></quill-editor>
            </el-form-item>

            <el-form-item>
                <el-button type="success" size="mini" @click="submit"> 提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style lang="scss" scoped>
.page-productCreate{
    .el-input,
    .el-textarea,
    .el-select,
    .quill-editor{
        width: 70%;
    }
    // 上传图片tip
    .el-upload__tip{
        margin-left:10px;
        color: #999999;
    }
    .upload-img{
        width: 400px;
    }
}
</style>
<script>
import {types} from '@t/conf'
export default {
    data(){
        let rules={};
        ["img","title","description","sales","price","originPrice","type","evaluate","storeName","storeAddress","storeNum","content"].forEach(item=>{
            if(item ==='img'){
                rules[item]=[{required:true,trigger:'blur',message:'请上传图片'}]
            }else if(item ==='type'){
                rules[item]=[{required:true,trigger:'blur',message:'请选择商品分类'}]
            }else if(item ==='evaluate'){
                //提交时 商品评分默认值为0
                rules[item]=[{required:true,trigger:'blur',validator:(field,val,cb)=>{
                    if(val===0){
                        return cb(new Error('请选择商品评分'))
                    }
                    cb();
                    }}]
            }else{
                rules[item]=[{required:true,trigger:'blur',message:'请输入内容'}]
            }
        }
       
        )
        return{
            types,
            rules,
            data:{},
            // mixins混合需重写的数据
            title:'创建商品',
            msg:'创建成功',
            submitUrl:'/admin/product/create'
        }
    },
    computed:{
        dealdata(){
            //将纯数字数据由字符串转为number类型
            ["sales","price","originPrice","type","evaluate","storeNum"].forEach(item=>this.data[item]=+this.data[item])
            return this.data;
        }
    },
    methods:{
        // data:后台传过来的数据 arg前端的一些数据
        uploadSuccess(data,...arg){
                console.log('图片上传成功data',data.data);
                if(data.errno===0){
                    // 后台返回的图片地址
                    this.$set(this.data,'img', data.data)
                    console.log(this.data.img)
                }else{
                    this.$message.error(data.msg)
                }
        },
        uploadFail(...arg){
            console.log(arg)
                this.$message.error('图片上传失败')
        },
        // 提交按钮
        submit(){
            this.$refs.createProduct.validate(valid=>{
                console.log
                if(valid){
                    // this.data数据均为字符串 所以使用dealdata传给后端
                    console.log(this.data)
                    this.$http.post(this.submitUrl,this.dealdata)
                    .then(({data})=>{
                        if(data.errno===0){
                            this.$message.success(this.msg)
                           //进入列表页
                            this.$router.replace('/product/list/1') 
                        }else{
                            this.$message.error(data.msg)
                        }
                    })
                }
                
            })
        }

    },
 
}
</script>