<template>
    <div class="phpre">
        <div class="heared">
            <van-nav-bar
                left-arrow
                :border="false"
                title="热门推荐"
                @click-left="onClickLeft"
                :fixed="true"
            />
        </div>
        <van-tabs v-model="active" color="#040054" title-inactive-color="#666666" title-active-color="#333333">
            <van-tab title='全部'>
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                >
                    <div class="plan-item" @click="cuskille">
                        <div class="plan-item-left">
                            <img src="../assets/image/kt/play.png" class="play" alt="" srcset="">
                            <img src="../assets/image/kt/rmqb.png" alt="" srcset="">
                        </div>
                        <div class="plan-item-right">
                            <p>如何快速掌握定制床垫测量 技巧</p>
                            <span>1.8万播放</span>
                        </div>
                    </div>
                    <div class="plan-item">
                        <div class="plan-item-left">
                            <img src="../assets/image/kt/play.png" class="play" alt="" srcset="">
                            <img src="../assets/image/kt/rmqb.png" alt="" srcset="">
                        </div>
                        <div class="plan-item-right">
                            <p>定制床垫常规布局说明</p>
                            <span>1.8万播放</span>
                        </div>
                    </div>
                    <div class="plan-item">
                        <div class="plan-item-left">
                            <img src="../assets/image/kt/play.png" class="play" alt="" srcset="">
                            <img src="../assets/image/kt/rmqb.png" alt="" srcset="">
                        </div>
                        <div class="plan-item-right">
                            <p>定制床垫常规布局说明</p>
                            <span>1.8万播放</span>
                        </div>
                    </div>
                </van-list>
            </van-tab>
            <van-tab title='新手入门'></van-tab>
            <van-tab title='专业提升'></van-tab>
            <van-tab title='软件'></van-tab>
        </van-tabs>
        
    </div>    
</template>
<script>
export default {
    name:"PhpRe",
    data() {
        return {
            active:0,
            loading: false,
            finished: false
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push('/classroom')
        },
        onLoad() {

        },
        cuskille(){
            this.$router.push('/cuskille')
        }
    },
    
}
</script>
<style lang="less" scoped>
.phpre{
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
    .van-tabs{
        padding-bottom: 0px;
        background:#F0F0F0;
        /deep/ .van-tab--active{
            line-height: 38px;
        }
        /deep/ .van-tabs__line{
            bottom:30px;
        }
    }
    /deep/ .van-tabs__content{
        margin-top: 0.75rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        box-sizing: border-box;
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
            position: relative;
            .play{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                width: 24px;
                height: 24px;
            }
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
            flex-wrap: wrap;
            justify-content:space-around;
            p{
                margin: 0;
                padding: 0;
                // height:21px;
                font-size:15px;
                font-family:PingFang SC;
                font-weight:400;
                line-height:21px;
                color:rgba(51,51,51,1);
            }
            span{
                // height:17px;
                font-size:12px;
                font-family:PingFang SC;
                font-weight:400;
                line-height:17px;
                color:rgba(153,153,153,1);
            }
        }
    }
}
</style>