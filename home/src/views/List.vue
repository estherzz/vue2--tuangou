<template>
    <div class="page-list">
       <Search placeholder="请输入搜索内容" :search="e=>$store.commit('search',e)"></Search>
        <ul class="orders">
            <li v-for="item in orders" :key="item.id" @touchend="orderList(item.id)">{{item.text}}</li>
        </ul>
        <!-- 前端通过计算属性数据来处理search搜索过滤 -->
       <!-- <Product v-for="item in dealList" :key="item._id" :data="item"></Product> -->
       <Product v-for="item in list" :key="item._id" :data="item"></Product>
    <!--数据即视图 绑定touchend数据 不会有点击穿透的问题-->
    <!-- touchstart具有点击穿透问题 会点到很快出现的product 所以要300ms后再显示新的product-->
       <div class="loader-more" @touchstart="showMore" v-show="others.length">
       <!-- <div class="loader-more" @touchend="showMore" v-show="others.length"> -->
           <span>查看其它{{others.length}}条商品</span>
       </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/base.scss';
    .page-list{
        .orders{
            display: flex;
            // justify-content: space-between;
            background: #fff;
            border-bottom: 1px solid #ccc;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 13px;
            li{
                width: (100%/4);
                border-left: 1px solid #ccc;
                &:first-of-type{
                    border-left-color: transparent;
                }
                &::after{
                    content: '';
                    @include arrow (5px);
                   position: relative;
                   top: -2px;
                    left: 3px;

                }
            }
        }
        .loader-more{
            color:$hd-color;
            background: #fff;
            text-align:center;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ccc;
                text-indent: -1.5em;
            span{
                position: relative;

                &::before,
                &::after{
                    content: '';
                    position: absolute;
                    right: -18px;
                    top: 8px;
                    @include arrow(7px,$hd-color)
                }
                &::after{
                    // background: orange;
                    border-top-color: #fff;
                    top: 5px;

                }
            }
            
        }
    }
</style>
<script>
import Search from '@/components/Search';
import Product from '@/components/Product';
export default {
    components:{Search,Product},
    data(){
        return{
            list:[],
            orders:[
                {text:'价格排序',id:'price'},
                {text:'销量排序',id:'sales'},
                {text:'好评排序',id:'evaluate'},
                {text:'优惠排序',id:'discount'}
            ],
            others:[]
        }
    },
    computed:{
        dealList(){
            return this.list.filter((item)=>item.title.toUpperCase().indexOf(this.$store.state.search.toUpperCase())>=0)
        },
        dealSearch(){
            return this.$store.state.search;
        }
    },
    methods:{
        getData(){
            let {params} = this.$route;
            // console.log(111111,this.$route);
            // console.log(11111,params);
              this.$http
            //   .get('/data/list?id='+params.id)
            //   .get('/data/list',{params:{id:params.id}})
              .get('/data/list',{params})
                .then(({data})=>{
                    this.list=data.slice(0,3);
                    this.others=data.slice(3);
                    
                })
        },
        showMore(){
            setTimeout(()=>{
                 this.list = this.list.concat(this.others);
                // 清空others
                this.others=[];
            },300)
           
        },
        // 商品排序
        orderList(id){
            // 前端实现
            // console.log(id)
            // if(id==='discount'){
            // this.list.sort((a,b)=>{
            //     // 升序
            //     // return (a.originPrice-a.price)-(b.originPrice-b.price)
            //     // 降序
            //      return (b.originPrice-b.price)-(a.originPrice-a.price)
            // })
            // }else{
            //     this.list.sort((a,b)=>{
            //     return a[id]-b[id]
            // })
            // }

            // 后端实现
            this.$http.get('/data/order',{
                params:{
                    // 分类
                    type:this.$route.params.id,
                    // 排序字段
                    id,
                    // -1降序，1升序
                    mode:-1
                }
            })
                .then(({data})=>{
                    if(!data.length){
                        alert('没有数据');
                        this.list = [];
                        this.others = [];
                        return;
                    }
                    this.list = data.slice(0,3);
                    this.others = data.slice(3)
                })
            
        }
    },
    watch:{
        $route(){
            this.getData()
        },
        // 监听状态数据 一般不这样写 会有不合法的语法 放在计算属性数据里监听
        // '$store.state.search'(val){
        //     console.log(33,val)
        // }
        dealSearch(val) {
            this.$http.get('/data/search',{
                params : {
                    type : this.$route.params.id,
                    // 搜索的内容
                    val,
                
                }
            })
                    .then(({data}) => {
                        if (!data.length){
                            alert('没有数据');
                            this.list = [];
                            this.others = [];
                            return
                        }
                        // 有数据更新  此为模拟数据
                        this.list = data.slice(0,3);
                        this.others = data.slice(3);
                    })
        }
    },
    created(){
        this.getData()
    }
}
</script>
