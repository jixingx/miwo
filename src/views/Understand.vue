<template>
    <div class="understand">
        <div class="heared">
            <van-nav-bar
                left-arrow
                :border="false"
                title="快速了解测姿APP如何帮助测量？"
                @click-left="onClickLeft"
                :fixed="true"
            >
                <van-icon :name="icon1" slot="right"></van-icon>
            </van-nav-bar>
        </div>
    </div>
</template>

<script>
export default {
    name:"Understand",
    data() {
        return {
            icon1:require("../assets/image/home/fx.png")
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push('/home')
        },
    },
}
</script>

<style lang="less" scoped>
.understand{
    height: 100%;
    box-sizing: border-box;
    background:#F0F0F0;
    .van-nav-bar{
        padding-top: 1.175rem;
        background: #FAFAFA;
        .van-nav-bar__arrow{
            font-size: 17.74px;
            color: #666666;
        }
        .van-nav-bar__title{
            font-size:15px;
            color: #333333;
        }
        .van-nav-bar__right{
            font-size: 17.25px;
            .van-icon{
                color: #666666;
            }
        }
    }
}
</style>