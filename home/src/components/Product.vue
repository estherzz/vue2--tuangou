<!-- 函数组件 有props属性-->
<template functional>
    <router-link :to="'/detail/'+props.data._id" tag="div" class="bp-product">
        <div class="inner">
           <img :src="props.data.img" alt="">
           <div class="text">
               <h3>{{props.data.title}}</h3>
               <p>
                   <span class="price">{{props.data.price}}元 </span>
                   <span  class="originPrice"> 门市价:{{props.data.originPrice}}元</span>
                   <span class="sales" v-if="!props.noShowSales">销量{{props.data.sales}}</span>
                   <slot name="remove" ></slot>
               </p>
               <slot name="order-num"></slot>
            </div>

        </div>
    </router-link>
</template>
<style lang="scss" scoped>
@import '@/base.scss';
    .bp-product{
            background: #fff;
            padding: 0 10px;
        .inner{
            display: flex;
            padding: 10px 0;
            border-bottom: 1px solid #ccc;
            img{
                width: 100px;
                // height: 60.5px;
            }
            .text{
                margin-left: 10px;
                flex: 1;
                height: 44px;
                h3{
                    font-size: 14px;
                    line-height: 30px;
                }
                p{
                    font-size: 12px;
                    display: flex;
                    padding-top: 10px;
                    .price{
                        color: $hd-color;
                        margin-right: 10px;
                    }
                    .originPrice{
                        color: #666666;
                    }   
                    .sales{
                        flex: 1;
                        text-align: right;
                    }
                }
            }
        }
    }
</style>
<script>
export default {
}
</script>

<!--<template>
    <div class="bp-product">
        <img :src="data.img" alt="">
        <h2>{{data.title}}</h2>
        <p>{{data.sales}}</p>
        <p>{{data.price}}</p>
        <p>{{data.originPrice}}</p>
    </div>
</template>
<script>
export default {
    props:['data']
}
</script>
-->