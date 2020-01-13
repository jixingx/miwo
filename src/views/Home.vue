<template>
    <div class="home">
        <div class="header">
            <van-search 
                placeholder="搜索客户、学习资料"
                shape="round"
                input-align="center"
                background="transparent"
                show-action
                disabled
                @click="handleClick"
            >
                <van-icon :name="icon" slot="left-icon"/>
                <van-icon :name="icon2" slot="action" size="19.2px" @click="handleClick2"/>
            </van-search>
        </div>
        <!-- 搜索 -->
        
    </div>
</template>

<script>
export default {
    name:"Home",
    data() {
        return {
            icon:require("../assets/image/home/serach.png"),
            icon2:require("../assets/image/home/ld.png"),
        }
    },
    methods: {
        handleClick(){
            this.$router.push('/serach');
        },
        handleClick2(){
            this.$router.push('/notice');
        }
    }
}
</script>

<style lang="less" scoped>
.home{
    height: 100%;
    box-sizing: border-box;
    background:#F0F0F0;
    .header{
        padding-top: 1.5625rem;
        height: 12.1875rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        box-sizing: border-box;
        background-image: url('../assets/image/bg.png');
        background-repeat: no-repeat;
        background-size: 100%;
        .van-search{
            padding: 0;
            .van-search__content{
                background-color: #fff;
            }
            /deep/ .van-field__control[type=search]{
                font-size: 13px;
            }
            .van-search__action{
                font-size: 19.2px;
                line-height: normal;
            }
        }
    }
    
    
}
</style>