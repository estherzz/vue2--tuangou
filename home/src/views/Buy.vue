<template>
    <div class="page-buy">
        <div class="price-part">
            <span>商品总价:</span>
            <span>￥{{$store.getters.price}}</span>
        </div>
        <div class="btns-part">
            <span @touchend="$router.back()">继续挑选</span>
            <span @touchend="buyItem">立即购买</span>
        </div>
        <h2 class="list-title">购买商品</h2>
        
        <Product v-for="item in $store.state.products" :key="item._id" :data="item" :noShowSales="true">
                <order-num slot="order-num" class="order-num" :orderNum="item.orderNum" :reduce="()=>item.orderNum-=item.orderNum>0?1:0" :add="()=>item.orderNum++"></order-num>
                <span slot="remove" class="remove" @touchend.prevent="$store.commit('remove',item._id)" >删除</span>
        </Product>
    </div>
</template>
<style lang="scss" scoped>
    .page-buy{
        background: #fff;
        .price-part{
            padding-top:20px;
            height: 60px;
            display: flex;
            align-items: center;
            span{
                &:first-of-type{
                    text-align: right;
                    width: 80px;
                    margin-right: 10px;
                }
                &:last-of-type{
                    color: red;
                    font-size: 24px;
                }
            }
        }
        .btns-part{
            margin-left: 90px;
            padding-bottom: 20px;
            span{
                padding: 5px 10px;
                color:#fff;
                border-radius: 5px;
                font-size: 10px;
                &:first-of-type{
                    background: grey;
                    margin-right: 15px;
                }
                &:last-of-type{
                    background: red;
                }
            }
        }
        .list-title{
            padding: 10px;
            font-weight: normal;
            font-size: 18px;
        }
        .bp-product{
            position: relative;
            .order-num{
                        position: absolute;
                        top: 12px;
                        right: 10px;
                    }
            .remove{
                flex: 1;
                text-align: right;
            }
        }
      
    }
</style>
<script>
import Product from '@/components/Product';
import OrderNum  from "@/components/OrderNum";

    export default{
        components:{Product, OrderNum},
        created(){
            if(!this.$store.state.products.length){
                this.$router.back();
            }
            // console.log(this.$store.getters.price)
        },
        methods:{
            // 向服务器端发送购买请求 传递商品id
            buyItem(){
                // console.log(this.$store.state.products.map(item=>item._id))
                this.$http.post('/data/home',{
                    ids:this.$store.state.products.map(item=>item._id)
                })
                    .then()
            },
            
        },
      
        
    }
</script>