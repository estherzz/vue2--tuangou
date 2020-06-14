<template>
  <div class="page-home">
    <!-- 分类列表 -->
   <ul class="types">
    <router-link tag="li" :to="'/list/'+item.id" v-for="item in types" :key="item.id">
      <img :src="'/static/img/icon/'+item.img">
      <p>{{item.name}}</p>
    </router-link>
   </ul>
   <!-- 广告列表 -->
  <ul class="ads">
    <router-link v-for="(item,index) in ad" :key="item._id" tag="li" :to="'/detail/'+item._id ">
       <h3 :class="'color-'+index">{{item.title}}</h3>
       <p>{{item.description}}</p>
     <!-- 注意关掉网路广告拦截工具 否则不可读取ad文件夹和ads文件夹 -->
       <img :src="item.url">
    </router-link>
  </ul>
  <!-- 商品列表 -->
  <div class="product">
    <div class="guess-title">
      <h2 >猜你喜欢</h2>
    </div>
    <Product v-for="item in list" :key="item._id" :data="item"></Product>
  </div>


  
  </div>
</template>
<style lang="scss" scoped>
  .page-home{
    .types{
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      padding: 15px 0 ;
    
      li{
        padding: 10px 0;
        text-align: center;
        // 满足 括号，表达式，变量|函数返回值 除法才会执行
        width: (100%/5);
        img{
          width: 60%;
        }
        p{
          font-size: 14px;
          padding-top: 10px;
        }
      }
    }
    .ads{
      display: flex;
      padding: 15px 0;
      justify-content: space-between;
      text-align: center;
      background:#fff;
      margin: 15px 0;
      li{
        width: (100%/3);
        border-right: 1.5px solid #ddd;
        //  &:first-of-type h3{
        //     color:crimson;
        // }
        // &:nth-of-type(2) h3{
        //     color:green;
        // }
        // &:last-of-type h3{
        //     color:purple;
        // }
     
        &:last-of-type{
          border-right: none;
        }
        h3{
          font-size: 16px;
          font-weight: normal;
        }
        p{
          font-size: 14px;
          color: #666666;
          padding: 10px;
        }
        img{
          width: 60%;
        }
      }
      //h3的颜色 可以用枚举循环
      $i:0;
      @each $item in crimson green purple{
          .color-#{$i}{
            color:$item
          }
          $i:$i+1;
        }
    }
    .product{
      background: #fff;
      .guess-title{
         padding:  0 10px;
        h2{
          padding:  20px 0 10px;
          font-size: 18px;
          font-weight: normal;
          border-bottom: 1px solid #ccc;;
        }
      }
      
    }
  }
</style>
<script>
import Product from '@/components/Product'
export default {
  components:{Product},
  data(){
    return{
      types:[
        {id:'1',name:'美食',img:'01.png'},
        {id:'2',name:'电影',img:'02.png'},
        {id:'3',name:'酒店',img:'03.png'},
        {id:'4',name:'休闲',img:'04.png'},
        {id:'5',name:'外卖',img:'05.png'},
        {id:'6',name:'KTV',img:'06.png'},
        {id:'7',name:'丽人',img:'07.png'},
        {id:'8',name:'周边游',img:'08.png'},
        {id:'9',name:'小吃',img:'09.png'},
        {id:'10',name:'火车票',img:'10.png'}
      ],
    list:[],
    ad:[]
    }
  },
   created(){
    // 通过配置跨域请求代理proxy 请求3003端口下的/data/home
    this.$http.get('/data/home')
      .then(({data})=>{
        // console.log(33333333333333,data)
        this.list = data.list;
        this.ad = data.ad
        })
  }

}
</script>
