<template>
  <div id="app">
    <!-- 有关路由的内容写在组件外部 防治耦合-->
    <!-- 就是你想修改一个组件内容的话，也要把其他的组建都修改，才可以使功能好使，这就是高耦合 -->
    <!-- 避免header与路由耦合在一起 -->
    <Header :clickLeft="goBack">
    <!-- <Header title="BlackPink团购网站"> -->
      <!-- header的插槽 -->
      <!-- <div slot="left"></div> -->
      <!-- 点击则路由显示home -->
      <router-link tag="h1" to="/">BP团购网站</router-link>
      <div slot="right">登录</div>
    </Header>
    <!--  <router-view/> 
        单标签形式 对应响应 #/XXX-->
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body{
  margin: 0;
  padding: 0;
  background: #efefef;
  
}
h1,h2,h3,h4,h5,h6,p{
  margin: 0;
  padding: 0;
  
}
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}


</style>

<script>
import Header from '@/components/Header'
export default {
  components:{Header},
  methods:{
    goBack(){
      // 返回上一页
      this.$router.go(-1)
    }
  },
 
}
</script>  
