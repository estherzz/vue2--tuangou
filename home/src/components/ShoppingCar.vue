<template>
    <div class="bp-shoppingCar">
        <span>共￥{{this.$store.getters.price}}元</span>
        <span @touchend="showBuyPage">选好了</span>
        <!-- 无跳转拦截 -->
        <!-- <router-link to='/buy' tag="span">选好了</router-link> -->
    </div>
</template>
<style lang="scss" scoped>
    .bp-shoppingCar{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        color: #fff;
        line-height: 50px;
        span{
            text-align: center;
            &:first-of-type{
                background: #555;
                flex: 1;
            }
            &:last-of-type{
                width: 100px;
                background: red;
            }
        }
    }
</style>
<script>
    export default{
        methods:{
            showBuyPage(){
                if(this.$store.state.products.length){
                    // 不替换当前页跳转
                    this.$router.push('/buy');
                    // replace替换当前页跳转
                    // this.$router.replace('/buy');
                }else{
                    alert('没有选择任何商品');
                }
            }
        }
    }
</script>