<template>
    <div class="bp-search">
        <input type="text" :placeholder="placeholder" v-model="msg" @keydown.enter="showSearch">
    </div>
</template>
<style lang="scss" scoped>
    .bp-search{
        background: #fff;
        text-align: center;
        padding-top: 10px;
        input{
            // outline （轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。
            outline: none;
            background: #efefef;
            border: none;
            height: 24px;
            width: 90%;
            border-radius: 12px;
            text-indent: 2em;
        }
    }
</style>
<script>
export default {
  props:['placeholder','search'],
    data(){
        return{
            msg:''
        }
    },
    methods:{
        showSearch(){
            // 传递this.msg给search()
            this.search(this.msg);
            this.msg='';
            // console.log(this.msg);
        }
      }
    }
</script>