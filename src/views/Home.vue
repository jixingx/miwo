<template>
    <div class="home">
        <div class="header">
            <!-- 搜索 -->
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
            <!-- logo -->
            <p class="header-text">为你精选</p>
            <img src="../assets/image/home/banner1.png"  class="banner" alt="" srcset="">
        </div>
        <div class="grid">
            <div class="grid-box">
                <van-grid :column-num="3" :border="false">
                    <van-grid-item :icon="icon3" text="我的学习" />
                    <van-grid-item :icon="icon4" text="我的任务" />
                    <van-grid-item :icon="icon5" text="推荐福利" />
                </van-grid>
            </div>
        </div>
        <div class="understand">
            <img src="../assets/image/home/liaojie.png" alt="" srcset="" @click="ljClick">
        </div>
        <div class="pop-curric">
            <h4>热门课程</h4>
            <div class="plan-item">
                <div class="plan-item-left">
                    <img src="../assets/image/home/plan1.png" alt="" srcset="">
                </div>
                <div class="plan-item-right">
                    <p>测量需知</p>
                    <span>1.8万播放</span>
                </div>
            </div>
            <div class="plan-item">
                <div class="plan-item-left">
                    <img src="../assets/image/home/plan1.png" alt="" srcset="">
                </div>
                <div class="plan-item-right">
                    <p>测量需知</p>
                    <span>1.8万播放</span>
                </div>
            </div>
            <div class="plan-item">
                <div class="plan-item-left">
                    <img src="../assets/image/home/plan1.png" alt="" srcset="">
                </div>
                <div class="plan-item-right">
                    <p>测量需知</p>
                    <span>1.8万播放</span>
                </div>
            </div>
        </div>
        <Tab></Tab>
    </div>
</template>

<script>
import Tab from '../components/Tab'
export default {
    name:"Home",
    data() {
        return {
            icon:require("../assets/image/home/serach.png"),
            icon2:require("../assets/image/home/ld.png"),
            icon3:require("../assets/image/home/wdxx.png"),
            icon4:require("../assets/image/home/wdrw.png"),
            icon5:require("../assets/image/home/tjfl.png"),
        }
    },
    methods: {
        handleClick(){
            this.$router.push('/serach');
        },
        handleClick2(){
            this.$router.push('/notice');
        },
        ljClick(){
            this.$router.push('/understand');
        }
    },
    components:{
        Tab
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
        position: relative;
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
        .header-text{
            margin: 0;
            padding: 0;
            height:25px;
            font-size:18px;
            font-weight:500;
            line-height:25px;
            color: #FFFFFF;
            margin-top: 0.8125rem;
            // margin-bottom: 0.5rem;
        }
        .banner{
            position: absolute;
            left: 0;
            bottom: 0;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            box-sizing: border-box;
            width: 100%;
            margin-bottom: -3.75rem;
            z-index: 99999;
        }
    }
    .grid{
        height: 9.9375rem;
        background: #FFFFFF;
        position: relative;
        .grid-box{
            position: absolute;
            left: 0.75rem;
            right: 0.75rem;
            bottom: 0;
            /deep/ .van-grid-item__content--center{
                .van-grid-item__icon{
                    font-size: 50px;
                }
                .van-grid-item__text{
                    color: #333333;
                }
            }
        }
    }
    .understand{
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        height: 6.375rem;
        background: #FFFFFF;
        padding: 0.5rem 0.75rem 0.4375rem 0.75rem;
        box-sizing: border-box;
        img{
            width: 100%;
        }
    }
    .pop-curric{
        box-sizing: border-box;
        background: #FFFFFF;
        padding:0.75rem;
        h4{
            // padding: 0;
            margin: 0;
            height:25px;
            font-size:18px;
            font-family:PingFang SC;
            font-weight:500;
            line-height:25px;
            color: #333333;
            padding-left: 0.3125rem;
            margin-bottom: 0.75rem;
            background-image:url("../assets/image/home/shu.png");
            background-repeat:no-repeat;
            background-size: 4px 16px;
            background-position: 0 5px;
        }
        .plan-item{
            height: 6.875rem;
            background: #FFFFFF;
            box-shadow:0px 3px 6px rgba(0,0,0,0.16);
            border-radius:4px;
            display: flex;
            justify-content:space-between;
            margin-bottom: 1rem;
            &:last-child{
                margin-bottom: 0rem;
            }
            // align-items: center;
            .plan-item-left{
                flex: 1;
                box-sizing: border-box;
                padding: 0.3125rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .plan-item-right{
                flex: 2;
                padding-left: 0.8125rem;
                display: flex;
                flex-direction:column;
                justify-content:space-around;
                p{
                    margin: 0;
                    padding: 0;
                    height:21px;
                    font-size:15px;
                    font-family:PingFang SC;
                    font-weight:400;
                    line-height:21px;
                    color:rgba(51,51,51,1);
                }
                span{
                    height:17px;
                    font-size:12px;
                    font-family:PingFang SC;
                    font-weight:400;
                    line-height:17px;
                    color:rgba(153,153,153,1);
                }
            }
        }
    }
}
</style>