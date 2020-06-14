<script>
import Create from '@v/user/Create'
export default {
    mixins:[Create,{
        // 重写数据data
        data(){
            return{
                title:'编辑用户',
                submitUrl:'/admin/user/edit',
                msg:'用户信息修改成功'
            }
        }
    }],
    methods:{
        getData(){
            let {params} = this.$route;
            this.$http.get('/admin/user/detail',{params})
                .then(({data})=>{
                    if(data.errno===0){
                      return this.data = data.data;
                    }
                    this.$message.error(data.msg);
                    this.$router.back();
                })
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