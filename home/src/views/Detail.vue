<template>
    <div class="page-detail" v-show="detail.content">
        <!-- 图片信息 -->
        <div class="image-part">
            <img :src="detail.img" alt="">
            <h1>{{detail.title}}</h1>
            <p>{{detail.description}}</p>
        </div>
        <!-- 价格信息 -->
        <div class="price-part">
            <span class="price"><strong>{{detail.price}}</strong>元</span>
            <span class="origin-price">门市价:{{detail.originPrice}}元</span>
            <span :class="{'btn-buy':true,'has-buy':detail.hasBuy}" @touchend="buyItem" >{{detail.hasBuy?'取消':'加入购物车'}}</span>
            <!-- <span class="btn-buy" @touchend="buyItem"  >立即购买{{detail.hasBuy}}</span> -->
        </div>

        <!-- 购买数量模块 -->
        <div class="orderNum-part">
            <div class="text">数量</div>
            <order-num :reduce="reduce" :add="add" :orderNum="detail.orderNum"></order-num>
        </div>
       
           

        <!-- 销售模块 -->
        <ul class="sales-part">
            <li>支持立即退货</li>
            <li>支持随时退货</li>
            <li>销量:{{detail.sales}}</li>
        </ul>

        <!-- 店家信息 -->
        <div class="store-part module">
            <div class="module-header">店家信息</div>
            <div class="module-body">
                <p>{{detail.storeName}}</p>
                <p>{{detail.storeAddress}}</p>
            </div>
            <div class="module-footer">查看其它{{detail.storeNum}}家分店</div>
        </div>

          <!-- 购买须知 -->
        <div class="notice-part module">
            <div class="module-header">购买须知</div>
            <div class="module-body" v-html="detail.content"></div>
        </div>

        <!-- 购物车 -->
        <ShoppingCar></ShoppingCar>
   </div>
</template>
<style lang="scss" scoped>
    @import '@/base.scss';
    .page-detail{
        color: #666;
        .image-part{
            position: relative;
            img{
                width: 100%;
                display: block;
            }
            h1,p{
                position: absolute;
                bottom: 50px;
                left: 10px;
                color: #fff;
            }
            h1{
                font-size: 26px;
            }
            p{
                bottom: 10px;
                font-size: 20px;
            }
        }
        .price-part{
            height: 50px;
            padding: 0 10px;
            background: #fff;
            align-items: center;
            display: flex;
            .price{
                width: 70px;
                color: $hd-color;
                // font-size: 16px;
                strong{
                    font-size: 20px;
                    font-weight: normal;
                }
            }
            .origin-price {
                font-size: 16px;
                flex:1;
            }
            .btn-buy{
                width: 100px;
                height: 24px;
                font-size: 14px;
                background-color: red;
                color: #fff;
                line-height: 24px;
                // padding: 0 8px;
                text-align: center;
                border-radius: 5px;
                &.has-buy{
                background-color: grey;
            }
            }
            
        }
        .orderNum-part{
             display: flex;
            justify-content: space-between;
            background: #fff;
            padding: 5px 10px 15px;
            border-bottom:1px solid #ccc;
        }
        .sales-part{
            background: #fff;
            display: flex;
            flex-wrap: wrap;
            padding: 10px;
            li{
                width: (100%/2);
                color: yellowgreen;
                &:last-of-type{
                    color: #666;
                    margin-top: 10px;
                }
            }
        }
      
    }
</style>
<!-- v-html中要渲染不可加scoped-->
<style lang="scss">
    .page-detail{
        .module{
            background: #fff;
            margin-top: 10px;
            padding: 0 10px;
            .module-header{
                font-size: 18px;
                padding: 20px 0 10px;   
                border-bottom: 1px solid #ccc;
            }
            .module-body{
                border-bottom: 1px solid #ccc;
                p{
                    line-height: 28px;
                    font-size: 14px;
                }
            //    color: red;
                h1,h2,h3,h4,h5,h6{
                   color: red;
                   padding: 8px 0;
                   font-weight: normal;
                   font-size: 16px;
                }
            }
            .module-footer{
                color:rgb(138, 195, 214);
                padding: 10px 0 20px;   

            }
        }
        .notice-part{
            .module-body{
               padding-bottom: 60px;   

            }
        }
    }
</style>
<script>
import ShoppingCar  from "@/components/ShoppingCar";
import OrderNum  from "@/components/OrderNum";
export default {
    components:{ ShoppingCar, OrderNum },
    data(){
        return {
            detail:[]
        }
    },
    // 路由改变 和 创建页面后获取后端数据
    methods:{
        getData(){
            let { params } = this.$route;
            // console.log('p',params)
            // {params:{添加的query数据}}
            let index = this.$store.state.products.findIndex(item=>item._id===params.id)
            
            if(index>=0){
               this.detail = this.$store.state.products[index];
               return;
            }
            this.$http.get('/data/detail',{params})
                .then(({data})=>{
                    // console.log('d',data)
                    if(data){
                        // 有数据
                        if(this.$store.state.products.find(item=>item._id===data._id)){
                            data.hasBuy=true;
                        }
                        data.orderNum =1;
                        // 存数据
                        this.detail = data;
                    }else{
                        //没有数据返回上一个页面 $router.go
                        this.$router.go(-1)
                    }
            })
          
        },
        //购买按钮
        buyItem(){
            // 提交数据
            this.$store.commit(this.detail.hasBuy?'deleteItem':'addItem',this.detail)
            // 数据丢失
            // this.detail.hasBuy = !this.detail.hasBuy;
            this.$set(this.detail,'hasBuy',!this.detail.hasBuy)
            // console.log(444,this.detail.hasBuy,this.detail);
        },
        // 购买数量加
        reduce(){
            this.detail.orderNum-=this.detail.orderNum>0?1:0
        },
        // 购买数量减
        add(){
            this.detail.orderNum++
        }
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