<template>
    <Box>
        <div class="register">
            <!-- 头部 -->
            <van-nav-bar
                title="注册"
                :border="false"
                left-arrow
                @click-left="onClickLeft"
            />
            <!-- 表单 -->
            <form-box>
                <van-field
                    v-model="phone"
                    placeholder="请输入您的手机号"
                    error-message=""
                />
                <van-field
                    v-model="sms"
                    center
                    clearable
                    placeholder="请输入验证码"
                >
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
                <van-field
                    v-model="password"
                    type="password"
                    right-icon="closed-eye"
                    placeholder="请输入密码(6-20数字字母组合)"
                />
                <van-field
                    v-model="password2"
                    type="password"
                    right-icon="closed-eye"
                    placeholder="再次确认密码"
                />
                <van-button type="info" size="large" class="reg-btn">立即注册</van-button>
            </form-box>
            <van-checkbox v-model="checked" checked-color="#FFFFFF" icon-size="14px">注册同意《蜜窝优品用户服务条款》</van-checkbox>
        </div>
    </Box>
    
</template>

<script>
import Box from '../components/LR/Box'
import FormBox from '../components/LR/FormBox'
export default {
    data() {
        return {
            phone:'',
            sms:'',
            password:'',
            password2:'',
            checked: true,
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push('/login')
        }
    },
    components:{
        Box,
        FormBox
    }
}
</script>

<style lang="less" scoped>
.register{
    padding-top: 1.875rem;
    .van-nav-bar{
        height: 21px;
        line-height: 21px;
        background-color: transparent !important;
        margin-bottom: 3.375rem;
        // margin-top:30px;
        .van-icon{
            color: #FFF;
            font-size: 17.74px;
        }
        .van-nav-bar__title{
            color: #FFF;
        }
    }
    .van-cell{
        padding: 0 0 0 15px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        background-color: #F0F0F0;
        margin-bottom: 10px;
        border-radius: 7px;
        .van-button--primary{
            background: transparent;
            border: 0;
            color: #040054;
        }
        .van-button--small{
            height: 40px;
            line-height: 40px;
            font-size: 13px;
        }
        
        /deep/ .van-field__right-icon{
            margin-right: 0px !important;
            padding: 0 3px !important;
        }
    }
    .reg-btn{
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #CCCCCC;
        background: none;
        border: 0px;
        background:linear-gradient(180deg,rgba(4,0,84,1) 0%,rgba(28,21,143,1) 100%);
    }
    .van-checkbox{
        padding-left: 2rem;
        margin-top: 10px;
    }
    /deep/ .van-checkbox__icon--checked .van-icon{
        color: #000000;
    }
    /deep/ .van-checkbox__label{
        font-size: 14px;
        color: #FFFFFF;
        font-family: 'PingFang SC';
    }
}
</style>