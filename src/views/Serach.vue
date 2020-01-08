<template>
    <div class="serach">
        <van-search 
            placeholder="搜索客户、学习资料"
            shape="round"
            input-align="center"
            background="transparent"
            show-action
            @search="onSearch"
            @cancel="onCancel"
        >
            <van-icon :name="icon" slot="left-icon"/>
        </van-search>
        <h4>热门搜索</h4>
        <div class="btn">
            <van-row gutter="">
                <van-col span="6">
                    <van-button type="default" round>热门搜索</van-button>
                </van-col>
                <van-col span="6">
                    <van-button type="default" round>新手必学</van-button>
                </van-col>
                <van-col span="6">
                    <van-button type="default" round>色彩故事</van-button>
                </van-col>
                <van-col span="6">
                    <van-button type="default" round>吊顶</van-button>
                </van-col>
                <van-col span="6">
                    <van-button type="default" round>全屋定制</van-button>
                </van-col>
                <van-col span="6">
                    <van-button type="default" round>谈单</van-button>
                </van-col>
                <van-col span="6">
                    <van-button type="default" round>现代简约</van-button>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icon:require("../assets/image/home/serach.png")
        }
    },
    methods: {
        onSearch(){

        },
        onCancel(){
            this.$router.push('/home');
        }
    }
}
</script>

<style lang="less" scoped>
.serach{
    height: 100%;
    box-sizing: border-box;
    background: #FFFFFF;
    padding: 1.5625rem 0.8125rem 0 0.75rem;
    .van-search{
        padding: 0;
        /deep/ .van-field__control[type=search]{
            font-size: 13px;
        }
        .van-search__action{
            font-size:14px;
            color: #666666
        }
    }
    h4{
        margin: 0;
        padding: 0;
        height:20px;
        line-height:20px;
        color: #666666;
        font-weight:400;
        font-size:14px;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .btn{
        .van-button{
            
            height: 1.625rem;
            line-height: 1.625rem;
            padding: 0;
            box-shadow:0px 0px 6px rgba(0,0,0,0.16);
            border-radius:13px;
            width:4.625rem;
            border: 0px;
            font-size:11px;
            color: #666666;
            margin-bottom: 0.5rem;
        }
    }
}
</style>