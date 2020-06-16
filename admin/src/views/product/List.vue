<template>
    <div class="page-productList">
        <!-- app中定义了main-page样式 -->
        <h2 class="main-title">商品列表</h2>
        <div class="card-list">
            <el-card v-for="item in data" :key="item._id">
                <img :src="item.img" alt="">
                <h3>{{item.title}}</h3>
                <p>
                    <span class="price">￥{{item.price}}</span>
                    <!-- 1 开始请求到的数据处理 -->
                    <!-- <span class="type">{{item.type}}</span> -->
                    <!-- 2 方法 替换types -->
                    <!-- <span class="type">{{getTypes(item.type)}}</span> -->
                    <!-- 3 过滤器 -->
                    <span class="type">{{item.type|type}}</span>
                </p>
                <p>已销售{{item.sales}}份</p>
                <div class="btns">
                    <router-link tag="el-button" :to="'/product/edit/'+item._id"
                        class="el-button--success el-button--small">修改</router-link>
                    <el-button type="danger" size="small" @click="deleteItem(item._id,item.title,item.img)">删除
                    </el-button>
                </div>
            </el-card>
        </div>

        <!-- 自定义分页按钮 -->
        <div class="my-pagination">
            <!-- <router-link tag="el-button" class="is-round" :to="'/product/list/'+($route.params.page>1?$route.params.page-1:1)"> -->
            <my-button :page="['/product/list/'+(page>1?page-1:1),'/product/list/'+(page+1)]" :title="['上一页','下一页']">
            </my-button>


            <!-- page是字符串 1在模版中转换 2在router.js中转换 -->
            <!-- <router-link tag="el-button" class="is-round" :to="'/product/list/'+(+page+1)"> -->

        </div>
    </div>
</template>
<style lang="scss" scoped>
    .page-productList {
        .card-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

            h3 {
                text-align: center;
                font-size: 20px;
                padding-top: 10px;
            }

            .el-card {
                width: 300px;
                margin: 10px 10px 20px;

                img {
                    width: 100%;
                }

                p {
                    padding-top: 20px;
                    display: flex;
                    justify-content: space-between;

                    .price {
                        color: red;

                    }
                }

                .btns {
                    padding-top: 20px;
                }
            }
        }

        .my-pagination {
            text-align: center;
            margin-top: 20px;
        }

    }
</style>
<script>
    import { types } from '@t/conf';
    import MyButton from '@c/MyButton';
    export default {
        props: ['page'],
        components: { MyButton },
        data() {
            return {
                data: [],
                timer: null,
                lock: false
            }
        },
        filters: {
            type(typeId) {
                // console.log(typeId)
                let type = types.find(item => item.id == typeId);
                return type ? type.text : '其他'
            }
        },
        methods: {
            getData() {
                let { params } = this.$route;
                if (params.page > 0) {

                    this.$http
                        .get('/admin/product/list', { params })
                        .then(({ data }) => {
                            // console.log(data)
                            if (data.errno === 0) {
                                // 整体修改type不采用此方法 可用过滤    器或者methods
                                // data.data = data.data.map    (item=>{
                                //         types.forEach(element    => {
                                //         //item.type是字符串
                                //             if(element.  id==item.type){
                                //                 item.    type=element.text;
                                //             }
                                //         });
                                //             return item
                                //     })
                                return this.data = data.data
                            }
                            if (this.lock) {
                                clearTimeout(this.timer)
                                this.timer = setTimeout(() => {
                                    this.lock = false
                                }, 1000)
                            } else {
                                this.lock = true
                                this.$message.error('当前是最后一页 ')
                            }
                            
                            this.$router.replace('/product/list/' + (params.page - 1));
                        })
                } else {
                    //当page不是数字时跳转第一页 
                    this.$router.replace('/product/list/1')
                }
            },
            getTypes(typeId) {
                console.log()
                let type = types.find(item => item.id == typeId)
                return type ? type.text : '其他'
            },
            // 删除商品 向服务器发送请求
            deleteItem(id, title, img) {
                // 用户缺是否删除
                // this.$confirm('是否删除'+title)
                this.$confirm(`是否删除${title}呢`)
                    // 监听 确认删除
                    .then(res => {
                        console.log(res);//confirm
                        // 发送删除请求
                        this.$http.post('admin/product/remove', { id, img })
                            .then(({ data }) => {
                                if (data.errno === 0) {
                                    this.$message.success('删除成功')
                                    location.reload()
                                    return;
                                }
                                this.$message.error(data.msg)
                            })
                    })
                    // 监听 取消删除
                    .catch(res =>
                        console.log(res)//cancle
                    )

            }
        },
        created() {
            this.getData()
        },
        // watch:{
        //     $route(){
        //         this.getData()
        //     }
        // }
        beforeRouteUpdate(to, from, next) {
            console.log(22222, to, from, next)
            next()
            this.getData()
        }



    }
</script>