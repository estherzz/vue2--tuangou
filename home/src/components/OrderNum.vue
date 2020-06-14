<template>
    <div class="bp-orderNum">
            <div class="number">
               <span @touchend.prevent="reduce">-</span>
               <span class="order-number">{{orderNum}}</span>
               <span @touchend.prevent="add">+</span>
            </div>
    </div>
</template>
<style lang="scss" scoped>
 .bp-orderNum{
            span{
                font-size: 12px;
                padding: 5px 10px;
                background: #eee;
                &.order-number{
                    padding: 5px 20px;
                    margin: 0 2px;
                }
            }
        }
</style>
<script>
export default {
    props:['reduce','add','orderNum'],

}
</script>