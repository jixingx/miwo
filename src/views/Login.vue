<template>
    <Box>
        <div class="login">
            <!-- 头部 -->
            <van-nav-bar
                title=""
                :border="false"
                right-text="立即注册"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
            />
            <!-- logo -->
            <div class="logo">
                <img src="../assets/image/logo.png">
            </div>
            <!-- 表单 -->
            <form-box>
                <van-tabs v-model="active" line-width="40%" color="#040054" title-active-color="#333333" title-inactive-color="#333333" @click="onClick">
                    <van-tab title="手机号快捷登录">
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
                            <van-button slot="button" size="small" type="primary">获取验证码</van-button>
                        </van-field>
                        <p class="explain">未注册的手机号也将自动创建蜜窝优品APP账号</p>
                        <van-button type="info" size="large" class="login-btn">登 录</van-button>
                    </van-tab>
                    
                    <van-tab title="账号密码登录">
                        <van-field
                            v-model="phone2"
                            placeholder="请输入您的邮箱账号/手机号"
                            error-message=""
                        />
                        <van-field
                            v-model="password"
                            type="password"
                            placeholder="请输入您的密码"
                        />
                        <p class="explain">未注册的手机号也将自动创建蜜窝优品APP账号</p>
                        <van-button type="info" size="large" class="login-btn">登 录</van-button>
                    </van-tab>
                </van-tabs>
            </form-box>
            <p class="jump">
                <router-link to="/onekeylogin" v-if="tz">一键免验证码登录</router-link>
                <router-link to="/forgetpsd" v-else>忘记密码</router-link>
            </p>
            <div class="other-login">
                <p class="other"><span>其他方式登录</span></p>
                <p class="wqw">
                    <router-link to="/" class="a1"><img src="../assets/image/qq_1.png"></router-link>
                    <router-link to="/" class="a2"><img src="../assets/image/weixin.png"></router-link>
                    <router-link to="/"><img src="../assets/image/weibo.png"></router-link>
                </p>
            </div>
        </div>
    </Box>
</template>
<script>
import Box from '../components/LR/Box'
import FormBox from '../components/LR/FormBox'
export default {
    data() {
        return {
            active:0,
            phone:'',
            sms:'',
            phone2:'',
            password:'',
            tz:true
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push('/onekeylogin');
        },
        onClickRight() {
            // Toast('按钮');
            this.$router.push('/register')
        },
        onClick(name, title) {
            //console.log(name,title)
            if(name==0){
                this.tz=true
            }else if(name==1){
                this.tz=false
            }
        }
    },
    components:{
        Box,
        FormBox
    }
}
</script>
<style lang="less" scoped>
    .login{
        padding-top: 1.875rem;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        .van-nav-bar{
            background-color: transparent !important;
            height: 21px;
            line-height: 21px;
            // margin-bottom: 3.375rem;
            // margin-top:30px;
            .van-icon{
                color: #FFF;
                font-size: 17.74px;
            }
            .van-nav-bar__text{
                color: #FFF;
                font-size: 15px;
                font-family:"PingFang SC";
            }
        }
        .logo{
            text-align: center;
            margin-top: 0.1875rem;
            margin-bottom: 2.071875rem;
            img{
                width: 5.5625rem;
                height: 4.834375rem;
            }
        }
        .van-tab__pane{
            margin-top: 20px !important;
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
                
                
            }
            .explain{
                height:14px;
                font-size:10px;
                font-family:PingFang SC;
                line-height: 14px;
                color: #CCCCCC;
                margin-top: -2px;
                padding-left: 6px;
                margin-bottom: 18.5px;
            }
            .login-btn{
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                color: #CCCCCC;
                background: none;
                border: 0px;
                background:linear-gradient(180deg,rgba(4,0,84,1) 0%,rgba(28,21,143,1) 100%);
            }
        }
        .jump{
            margin: 0;
            padding: 0;
            text-align: center;
            a{
                margin-top: 0.4375rem;
                display: inline-block;
                height:18px;
                line-height: 18px;
                font-size:13px;
                font-family:PingFang SC;
                color: #CCCCCC;
            }
        }
        .other-login{
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 20px;
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
        }
    }
</style>