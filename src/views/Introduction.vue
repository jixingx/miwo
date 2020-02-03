<template>
    <div class="introduction">
        <div class="heared">
            <van-nav-bar
                left-arrow
                :border="false"
                title="新手入门介绍"
                @click-left="onClickLeft"
                :fixed="true"
            />
        </div>
    </div>
</template>

<script>
export default {
    name:"Introduction",
    methods: {
        onClickLeft(){
            this.$router.push('/classroom')
        },
    },
}
</script>

<style lang="less" scoped>
.introduction{
    height: 100%;
    box-sizing: border-box;
    background:#F0F0F0;
    padding-top: 4rem;
    .heared{
        // height: 4rem;
        // background: #FAFAFA;
        // box-sizing: border-box;
        
        .van-nav-bar{
            padding-top: 1.175rem;
            background: #FAFAFA;
            .van-nav-bar__arrow{
                font-size: 17.74px;
                color: #666666;
            }
            .van-nav-bar__title{
                font-size:18px;
                color: #333333;
            }
        }
    }
    
}
</style>