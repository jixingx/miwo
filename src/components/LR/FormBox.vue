<template>
    <div class="form-box">
        <div class="box-content">
            <span class="line"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
            <span class="line line4"></span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .form-box{
        // width: 19.4375rem;
        box-sizing: border-box;
        padding: 0 2rem;
        margin: 0 auto;
        // overflow: hidden;
        .box-content{
            // height: 20px;
            width: 100%;
            box-sizing: border-box;
            border-radius: 7px;
            background-color: #fff;
            padding: 1.3125rem 1.25rem;
            position: relative;
            // overflow: hidden;
            .line{
                position: absolute;
                left: 3.75rem;
                top: -8px;
                width: 5px;
                height: 16px;
                background: #564DFB;
                &.line2{
                    left: 5.0625rem;
                }
                &.line3{
                    left:auto;
                    right: 5.0625rem;
                }
                &.line4{
                    left:auto;
                    right: 3.75rem;
                }
            }
        }
    }
</style>