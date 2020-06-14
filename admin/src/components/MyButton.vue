<template>
    <span class="my-button">
         <router-link tag="el-button" class="is-round" :to="page[0]">
                <i class="el-icon-back"></i>
                <span>{{title[0]}}</span>
         </router-link>
         <router-link tag="el-button" class="is-round" :to="page[1]">
                <span>{{title[1]}}</span>
                <i class="el-icon-right"></i>
         </router-link>
    </span>
</template>
<script>
export default {
    props:['page','title']
}
</script>