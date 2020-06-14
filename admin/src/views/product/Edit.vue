<script>
import Create from '@v/product/Create'
export default {
    mixins:[Create,
    {
    // 重写数据的位置一

        data(){
            return{
                title:'编辑商品',
                msg:'修改成功',
                submitUrl:''
            }
        }
    }
    ],
    // 重写数据的位置二
    // data(){
    //         return{
    //             title:'编辑商品'
    //         }
    //     }
    methods:{
        getData(){
            let { params } = this.$route;
            this.$http.get('/admin/product/detail',{params})
                .then(({data})=>{
                    console.log(data)
                    if(data.errno === 0){
                        // console.log(222)
                        this.data = data.data;  
                        // 提交时 需要删除当前图片
                        this.submitUrl = '/admin/product/edit?'+'img='+data.data.img
                        return
                        
                    }
                    this.$message.error(data.msg);
                    console.log(this.$router)
                    this.$router.back();//返回上一个页面

                })
        }
    },
    created(){
        this.getData()
        console.log(this.$route.params.id);

    },
    watch:{
        $route(){
        // this.getData()

        }
    }   
}
</script>