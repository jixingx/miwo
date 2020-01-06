<template>
    <div class="box">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.box{
    width: 100%;
    height: 100%;
    background-image: url("../../assets/image/bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>