<template>
    <div class="notice">
        <div class="heared">
            <van-nav-bar
                right-text="全部已读"
                left-arrow
                :border="false"
                @click-left="onClickLeft"
                @click-right="onClickRight"
            >
                <van-tabs 
                    v-model="active"
                    slot="title"
                    background="#FAFAFA"
                    :border="false"
                >
                    <van-tab title="标签 1"></van-tab>
                    <van-tab title="标签 2"></van-tab>
                </van-tabs>
            </van-nav-bar>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active:0
        }
    },
    methods: {
        onClickLeft(){

        },
        onClickRight(){

        }
    },
}
</script>

<style lang="less" scoped>
.notice{
    height: 100%;
    box-sizing: border-box;
    background:#FFF;
    .heared{
        height: 4rem;
        background: #FAFAFA;
        box-sizing: border-box;
        padding-top: 1.175rem;
        .van-nav-bar{
            background: #FAFAFA;
            .van-nav-bar__arrow{
                font-size: 17.74px;
                color: #666666;
            }
            .van-nav-bar__text{
                font-size:13px;
                color: #333333;
            }
        }
    }
}
</style>