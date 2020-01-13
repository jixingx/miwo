<template>
    <div class="news-details">
        <div class="heared">
            <van-nav-bar
                left-arrow
                :border="false"
                title="蜜窝优品"
                @click-left="onClickLeft"
                :fixed="true"
            />
        </div>
        <div class="nd-content">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功" pulling-text="已无更多数据">
                <div class="nd-box">
                    <p class="nd-box-p">09-04 上午8：04</p>
                    <div class="nd-box-plan">
                        <img src="../assets/image/home/twjs1.png">
                        <h5>蜜窝优品</h5>
                        <p>点击领取新来一个月的礼物哦！</p>
                    </div>
                </div>
                <div class="nd-box">
                    <p class="nd-box-p">09-04 上午8：04</p>
                    <div class="nd-box-plan">
                        <img src="../assets/image/home/twjs2.png">
                        <h5>蜜窝优品</h5>
                        <p>点击领取新来一个月的礼物哦！</p>
                    </div>
                </div>
            </van-pull-refresh>
        </div>
        <div class="foot-from">
            <van-nav-bar
                right-text="取消"
                @click-left="onClickLeft"
                @click-right="onClickRight"
            >
                <van-icon :name="icon1" slot="left" size="28" />
                <van-field
                    v-model="value1"
                    right-icon="warning-o"
                    placeholder=""
                    
                    slot="title"
                >
                    <van-icon :name="icon2" slot="right-icon" size="26" />
                </van-field>
            </van-nav-bar>
        </div>
    </div>
</template>

<script>
export default {
    name:"NewsDetails",
    data() {
        return {
            count: 0,
            isLoading: false,
            icon1:require("../assets/image/home/xiangce.png"),
            icon2:require("../assets/image/home/biaoqing.png"),
            value1:''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push('/notice')
        },
        onRefresh() {
            setTimeout(() => {
                //this.$toast('刷新成功');
                this.isLoading = false;
                this.count++;
            }, 1000);
        },
        onClickRight(){

        }
    },
}
</script>

<style lang="less" scoped>
    .news-details{
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
        .nd-content{
            height: 100%;
            box-sizing: border-box;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            .van-pull-refresh{
                height: 100%;
                .nd-box{
                    margin-top:1.5625rem;
                    display: flex;
                    flex-wrap:wrap;
                    justify-content: center;
                    align-items: center;
                    .nd-box-p{
                        height:14px;
                        font-size:10px;
                        line-height: 14px;
                        padding: 0;
                        margin: 0;
                        color: #999999;
                        margin-bottom: 0.875rem;
                    }
                    .nd-box-plan{
                        display: flex;
                        flex-wrap:wrap;
                        background:rgba(255,255,255,1);
                        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
                        border-radius:8px;
                        img{
                            width: 100%;
                            vertical-align: middle;
                        }
                        h5{
                            width: 100%;
                            margin: 0;
                            padding: 0;
                            height:21px;
                            font-size:15px;
                            line-height: 21px;
                            color: #333333;
                            font-weight: 400;
                            margin-top: 0.6785rem;
                            margin-bottom: 0.5625rem;
                            padding-left: 0.6785rem;
                        }
                        p{
                            margin: 0;
                            padding: 0;
                            color: #666666;
                            height:18px;
                            font-size:13px;
                            line-height: 18px;
                            padding-left: 0.6785rem;
                            margin-bottom: 0.6785rem;
                        }
                    }
                }
            }
        }
        .foot-from{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            .van-cell{
                // padding: 8px 16px;
                margin-top: 7px;
                height: 34px;
                line-height: 34px;
                padding: 0;
                
            }
            /deep/ .van-nav-bar__title{
                max-width: 70%;
                 .van-cell__value--alone{
                    border-radius: 17px;
                    background: #f5f5f5;
                    .van-field__control{
                        padding-left: 10px;
                        color: #333;
                    }
                }
                .van-field__right-icon{
                    margin-right: 0 
                }
            }
            .van-nav-bar__right{
                font-size: 15px;
                .van-nav-bar__text{
                    color: #040054;
                    font-size: 15px;
                }
                
            }
        }
    }
</style>