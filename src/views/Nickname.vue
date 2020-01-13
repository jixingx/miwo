<template>
    <Box>
        <div class="nickname">
            <!-- 头部 -->
            <van-nav-bar
                title=""
                :border="false"
                right-text="跳过"
                @click-right="onClickRight"
            />
            <!-- 表单 -->
            <form-box>
                <p class="form-p"><span>您希望别人怎么称呼你？</span></p>
                <van-field
                    v-model="name"
                    placeholder=""
                    error-message=""
                />
                <van-button type="info" size="large" class="nickename-btn" @click="tz">确认</van-button>
            </form-box>
        </div>
    </Box>
</template>

<script>
import Box from '../components/LR/Box'
import FormBox from '../components/LR/FormBox'
export default {
    name:"Nickname",
    data() {
        return {
            name:"187****8650ROKY"
        }
    },
    methods: {
        onClickRight() {
            // Toast('按钮');
            this.$router.push('/home')
        },
        tz(){
            this.$router.push('/home')
        }
    },
    components:{
        Box,
        FormBox
    }
}
</script>

<style lang="less" scoped>
.nickname{
    padding-top: 2.4375rem;
    height: 100%;
    box-sizing: border-box;
    .van-nav-bar{
        background-color: transparent !important;
        height: 21px;
        line-height: 21px;
        margin-bottom: 4.0625rem;
        // margin-top:30px;
        .van-nav-bar__text{
            color: #FFF;
            font-size: 15px;
            font-family:"PingFang SC";
        }
    }
    .form-p{
        margin: 0.5rem 0 0.5625rem 0;
        padding: 0;
        text-align: center;
        height:17px;
        font-size:12px;
        line-height:17px;
        color: #999999;
    }
    .van-cell{
        padding: 0 0 0 15px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        background-color: #F0F0F0;
        margin-bottom: 10px;
        border-radius: 7px;
    }        
    .nickename-btn{
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #CCCCCC;
        background: none;
        border: 0px;
        background:linear-gradient(180deg,rgba(4,0,84,1) 0%,rgba(28,21,143,1) 100%);
        border-radius: 7px;
    }
}
</style>