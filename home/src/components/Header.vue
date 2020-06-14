<template>
  <div class="bp-header">
    <div class="left" @click="clickLeft">
      <!-- <slot name="left"></slot> -->
    </div>
    <div class="title">
      <h1 v-if="title">{{title}}</h1>
      <slot v-else></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// 引入scss @import url()  css引入方式;
// 引入scss @import '' 文件引入方式;
@import '@/base.scss';
  .bp-header{
    height: 50px;
    background: $hd-color;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fff;
        cursor: pointer;

    .left,
    .right{
      width: 60px;
    }
    .left{
      &::before,
      &::after{
        content: "";
        // 使用三角形 混合
        @include arrow(10px,white,right);
        position: absolute;
        top: 15px;
        left: 10px;
      }
      &::after{
        border-right-color: $hd-color;
        left: 13px;
      }
    }
    .title{
      flex: 1;
    }
    h1{
      font-size: 23px;
      font-weight: 400;
    }
  }
</style>
<script>
export default {
  props:['title','clickLeft'],
}
</script>