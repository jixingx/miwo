<template>
    <Box>
        <div class="onekey-login">
            <div class="logo">
                <img src="../assets/image/logo.png">
                欢迎登录
            </div>
            <div class="onrkey-form">
                <van-field
                    v-model="phone"
                >
                    <van-checkbox v-model="checked" checked-color="#FFFFFF" slot="right-icon" label-position="left" icon-size="13px">使用此号码登录</van-checkbox>
                </van-field>
                <p class="one-zs">中国移动提供认证服务</p>
            </div>
            <div class="btn">
                <van-button type="info" size="large" class="onekey-btn" @click="tz">本机号码一键登录</van-button>
                <router-link to="/login">手机验证或者密码登录</router-link>
            </div>
            <div class="other-login">
                <p class="other"><span>其他方式登录</span></p>
                <p class="wqw">
                    <router-link to="/" class="a1"><img src="../assets/image/qq_1.png"></router-link>
                    <router-link to="/" class="a2"><img src="../assets/image/weixin.png"></router-link>
                    <router-link to="/"><img src="../assets/image/weibo.png"></router-link>
                </p>
                <div class="clause">
                    <van-checkbox v-model="checked2" checked-color="#FFFFFF" icon-size="12px">登录即同意《中国移动认证服务条款》和《蜜窝优品用户服务条款》并使 用本机号码登录</van-checkbox>
                </div>
            </div>
        </div>
    </Box>
</template>

<script>
import Box from '../components/LR/Box'
export default {
    data() {
        return {
            phone:'187****8650',
            checked:true,
            checked2:true
        }
    },
    methods: {
        tz(){
            this.$router.push('/home')
        }
    },
    components:{
        Box
    }
}
</script>

<style lang="less" scoped>
    .onekey-login{
        padding-top: 3.875rem;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        .logo{
            box-sizing: border-box;
            padding-left: 1.1875rem;
            // height:30px;
            font-size:22px;
            font-family:PingFang SC;
            font-weight:500;
            line-height:30px;
            color: #FFFFFF;
            img{
                width: 70px;
                height: 70px;
                vertical-align: middle;
            }
        }
        .onrkey-form{
            padding: 0 1.5625rem 0 1.6875rem;
            .van-cell{
                background-color: transparent;
                border-bottom:1px solid rgba(240,240,240,1);
                height:41px;
                line-height: 41px;
                font-size:24px;
                padding: 0px;
                padding-bottom: 8px;
                color: #FFFFFF;
                /deep/ .van-cell__value--alone{
                    color: #FFFFFF;
                    .van-field__control{
                        color: #FFFFFF;
                    }
                    .van-field__right-icon{
                        margin-top: 6px;
                        .van-checkbox{
                            .van-checkbox__label{
                                font-size:13px;
                                color: #FFFFFF;
                            }
                        }
                        .van-checkbox__icon--checked .van-icon{
                            color: #000000;
                        }
                    }
                }
            }
            .one-zs{
                margin: 0;
                padding: 0;
                margin-top: 0.75rem;
                font-size:11px;
                font-family:PingFang SC;
                color: #FFFFFF;
            }
        }
        .btn{
            padding: 0 1.5625rem 0 1.6875rem;
            margin-top: 4.0625rem;
            text-align: center;
            .onekey-btn{
                height: 40px;
                line-height: 40px;
                background-color: #fff;
                color: #333333;
                font-size:14px;
                border-radius: 7px;
                border: 0px;
                margin-bottom: 0.6875rem;
            }
            a{
                font-size:14px;
                color: #FFFFFF;
            }
        }
        .other-login{
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 1.375rem;
            .other{
                padding: 0;
                margin: 0 0 22px 0;
                text-align: center;
                span{
                    display: inline-block;
                    height:17px;
                    font-size:12px;
                    font-family:PingFang SC;
                    line-height:17px;
                    color: #CCCCCC;
                    position: relative;
                    &::before{
                        content: '';
                        position: absolute;
                        top: 8px;
                        left: -52px;
                        display: inline-block;
                        width: 44px;
                        height: 1px;
                        background:linear-gradient(270deg,rgba(255,255,255,1) 0%,rgba(128,128,128,0) 100%);
                    }
                    &::after{
                        content: '';
                        position: absolute;
                        top: 8px;
                        right:-52px;
                        display: inline-block;
                        width: 44px;
                        height: 1px;
                        background:linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(128,128,128,0) 100%);
                    }
                }
            }
            .wqw{
                margin: 0;
                padding: 0;
                text-align: center;
                .a1{
                    margin-right: 38px;
                }
                .a2{
                    margin-right: 37px;
                }
            }
            .clause{
                box-sizing: border-box;
                width: 100%;
                padding: 0 1.125rem 0 1.1875rem;
                margin-top: 1.25rem;
                /deep/ .van-checkbox{
                    .van-checkbox__label{
                        font-size:10px;
                        color: #FFFFFF;
                    }
                }
                /deep/ .van-checkbox__icon--checked .van-icon{
                    color: #000000;
                }
            }
        }
        
    }
</style>