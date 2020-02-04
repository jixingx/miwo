<template>
    <div class="cuskille">
        <div class="header">
            <div class="header_img">
                <van-nav-bar
                    left-arrow
                    :border="false"
                    title=""
                    @click-left="onClickLeft"
                >
                    <div slot="right" class="right-img">
                        <van-icon :name="icon1"></van-icon>
                        <van-icon :name="icon2"></van-icon>
                    </div>
                </van-nav-bar>
            </div>
            <video controls  poster="../assets/image/kt/cuskille_video.png">
                <source src="movie.mp4" type="video/mp4">
            </video>
        </div>
        <van-tabs v-model="active" color="#040054" title-inactive-color="#666666" title-active-color="#333333" line-width="10%">
            <van-tab title='目录'>
                <div class="content-item">
                    <div><span>1</span></div>
                    <div class="jieshao">
                        <p>如何在自由造型里绘制造型</p>
                        <span>9800 次播放</span>
                    </div>
                    <div>
                        <img src="../assets/image/kt/xiazai.png" alt="" srcset="" @click="isPlanShow">
                    </div>
                </div>
                <div class="content-item">
                    <div><span>2</span></div>
                    <div class="jieshao">
                        <p>参数化编辑器界面介绍</p>
                        <span>9800 次播放 16:54</span>
                    </div>
                    <div>
                        <img src="../assets/image/kt/xiazai.png" alt="" srcset="" @click="isPlanShow">
                    </div>
                </div>
                <div class="content-item">
                    <div>
                        <img src="../assets/image/kt/zhengzaibofang.png">
                    </div>
                    <div class="jieshao">
                        <p>如何在自由造型里绘制造型</p>
                        <span>9800 次播放 上次学到17%</span>
                    </div>
                    <div>
                        <img src="../assets/image/kt/xiazai.png" alt="" srcset="" @click="isPlanShow">
                    </div>
                </div>
                <div class="content-item">
                    <div><span>4</span></div>
                    <div class="jieshao">
                        <p>如何在自由造型里绘制造型</p>
                        <span>9800 次播放</span>
                    </div>
                    <div>
                        <img src="../assets/image/kt/xiazai.png" alt="" srcset="" @click="isPlanShow">
                    </div>
                </div>
                <div class="content-item">
                    <div><span>5</span></div>
                    <div class="jieshao">
                        <p>如何在自由造型里绘制造型</p>
                        <span>9800 次播放</span>
                    </div>
                    <div>
                        <img src="../assets/image/kt/xiazai.png" alt="" srcset="" @click="isPlanShow">
                    </div>
                </div>
            </van-tab>
            <van-tab title='详情'>
                <div class="xq-header">
                    <p>全屋硬装三点场景之顶墙地设计</p>
                    <span>共12个课时</span>
                </div>
                <div class="xq-content1">
                    <div class="kcmb">
                        <img src="../assets/image/kt/kcmb.png" alt="" srcset="">
                    </div>
                    <div class="kcmb-list">
                        <ul>
                            <li>
                                <van-tag round color="#040054">1</van-tag>
                                <span>了解参数化方案的具体应用</span>
                            </li>
                            <li>
                                <van-tag round color="#040054">2</van-tag>
                                <span>掌握参数化编辑器的使用方法</span>
                            </li>
                            <li>
                                <van-tag round color="#040054">3</van-tag>
                                <span>掌握简单参数化辅法的创建过程</span>
                            </li>
                            <li>
                                <van-tag round color="#040054">4</van-tag>
                                <span>掌握在后台的参数化铺法管理</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="xq-content2">
                    <div class="kcmb">
                        <img src="../assets/image/kt/kcmb.png" alt="" srcset="">
                    </div>
                    <div class="xq-list-xz">
                        <div class="xq-list-xz-header">
                            <span>1</span>
                            参数化方案是什么
                        </div>
                        <div class="xq-list-ul">
                            <ul>
                                <li>1、介绍参数化方案是什么？</li>
                                <li>2、讲解参数化方案和铺贴方案的区别</li>
                                <li>3、参数化方案有什么优势</li>
                            </ul>
                        </div>
                    </div>
                    <div class="xq-list-xz">
                        <div class="xq-list-xz-header">
                            <span>2</span>
                            参数化方案是什么
                        </div>
                        <div class="xq-list-ul">
                            <ul>
                                <li>1、介绍参数化方案是什么？</li>
                                <li>2、讲解参数化方案和铺贴方案的区别</li>
                                <li>3、参数化方案有什么优势</li>
                            </ul>
                        </div>
                    </div>
                    <div class="xq-list-xz">
                        <div class="xq-list-xz-header">
                            <span>3</span>
                            参数化方案是什么
                        </div>
                        <div class="xq-list-ul">
                            <ul>
                                <li>1、介绍参数化方案是什么？</li>
                                <li>2、讲解参数化方案和铺贴方案的区别</li>
                                <li>3、参数化方案有什么优势</li>
                            </ul>
                        </div>
                    </div>
                    <div class="xq-list-xz">
                        <div class="xq-list-xz-header">
                            <span>4</span>
                            参数化方案是什么
                        </div>
                        <div class="xq-list-ul">
                            <ul>
                                <li>1、介绍参数化方案是什么？</li>
                                <li>2、讲解参数化方案和铺贴方案的区别</li>
                                <li>3、参数化方案有什么优势</li>
                            </ul>
                        </div>
                    </div>
                    <div class="xq-list-xz">
                        <div class="xq-list-xz-header">
                            <span>5</span>
                            参数化方案是什么
                        </div>
                        <div class="xq-list-ul">
                            <ul>
                                <li>1、介绍参数化方案是什么？</li>
                                <li>2、讲解参数化方案和铺贴方案的区别</li>
                                <li>3、参数化方案有什么优势</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
        <!-- 底部弹出面板 -->
        <van-action-sheet v-model="show" :overlay="false" :round="false">
            <div class="plan_content">
                <span>开始缓存，可在我的学习-我的课堂中查看</span>
                <van-button round type="info" color="#040054">去查看</van-button>
            </div>
        </van-action-sheet>
    </div>
</template>
<script>
export default {
    name:"CuSkille",
    data() {
        return {
            icon1:require("../assets/image/kt/xihuan.png"),
            icon2:require("../assets/image/kt/fenxiang.png"),
            active:0,
            show:false
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push('/phpre')
        },
        isPlanShow(){
            this.show=true
            setTimeout(()=>{
                this.show=false;
            },3000)
        }
    },
}
</script>
<style lang="less" scoped>
.cuskille{
    height: 100%;
    box-sizing: border-box;
    background: #F0F0F0;;
    // padding-top: 4rem;

    .header{
        width: 100%;
        height: 200px;
        position: relative;
        .header_img{
            position: absolute;
            left: 0;
            top: 12px;
            width: 100%;
            .van-nav-bar{
                background: transparent;
                .van-nav-bar__arrow{
                    font-size: 17.74px;
                    color: #666666;
                }
                .van-nav-bar__title{
                    font-size:18px;
                    color: #333333;
                }
                .right-img{
                    i:nth-child(1){
                        font-size:18.24px;
                        padding-right: 17px; 
                    }
                    i:nth-child(2){
                        font-size: 20.18px;
                    }
                }
            }
        }
        video{
            width: 100%;
            height: 100%;
        }
    }
    .content-item{
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        background-color: #fff;
        &::after{
            content: '';
            position: absolute;;
            height: 0;
            width: 100%;
            left: 0;
            bottom: 0;
            border: 1px solid #F0F0F0;
        }
        div:nth-child(1){
            flex: 1;
            text-align: center;
            
            span{
                color: #666666;
                font-size: 13px;
            }
            img{
                width: 14.67px;
                height: 15.54px;
            }
        }
        div:nth-child(2){
            flex: 4;
            padding-bottom: 16px;
            p{
                margin: 15px 0 7px 0;
                padding: 0;
                color: #666666;
                font-size: 15px;
                line-height:21px;
            }
            span{
                font-size: 12px;
                color: #999999;
                line-height: 17px;
            }
        }
        div:nth-child(3){
            flex: 1;
            text-align: center;
            img{
                width: 18.51px;
                height: 17.88px;
            }
        }
    }
    .van-action-sheet{
        box-shadow:0px 0px 6px rgba(0,0,0,0.16);
        background:rgba(255,255,255,1);
        .plan_content{
            padding: 16px 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            span{
                font-size:13px;
                font-family:PingFang SC;
                font-weight:400;
                // line-height:18px;
                color:rgba(51,51,51,1);
            }
            .van-button{
                height: 26px;
                line-height: 26px;
                padding: 0 11px;
                .van-button__text{
                    font-size:13px;
                    font-family:PingFang SC;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                }
            }
        }
    }
    .xq-header{
        margin-top: 0.5rem;
        height: 4.4375rem;
        background: #FFFFFF;
        p{
            height:21px;
            font-size:15px;
            font-family:PingFang SC;
            font-weight:500;
            line-height:21px;
            color:rgba(51,51,51,1);
            margin: 0rem 0 0.5rem 0;
            padding: 0;
            padding-left: 0.75rem;
            padding-top: 0.75rem;
        }
        span{
            font-size:13px;
            font-family:PingFang SC;
            font-weight:400;
            line-height:18px;
            color:rgba(153,153,153,1);
            padding-left: 0.75rem;
        }
    }
    .xq-content1{
        background: #FFFFFF;
        margin-top: 0.5rem;
        padding: 1rem 0.75rem 1.25rem;
        .kcmb{
            text-align: center;
            margin-bottom: 1.125rem;
            img{
                width: 10.625rem;
                height: 2.625rem;
            }
        }
        .kcmb-list{
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 6px rgba(0,0,0,0.16);
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            ul{
                margin: 0;
                padding: 0;
                list-style: none;
                li{
                    padding-left: 1.8125rem;
                    margin-bottom: 1.25rem;
                    &:last-child{
                        margin-bottom: 0rem;
                    }
                    .van-tag--round{
                        border-radius: 50%;
                        // height: 1.125rem;
                        // width: 1.125rem;
                        // line-height: 1.125rem;
                        padding: 0.3em 0.7em;
                        font-size: 13px;
                    }
                    span:nth-child(2){
                        padding-left: 1.25rem;
                        height:18px;
                        font-size:13px;
                        font-family:PingFang SC;
                        font-weight:400;
                        line-height:18px;
                        color:rgba(51,51,51,1)
                    }
                    
                }
            }

        }
    }
    .xq-content2{
        background: #FFFFFF;
        margin-top: 0.5rem;
        padding: 1rem 0.75rem 0.875rem;
        .kcmb{
            text-align: center;
            margin-bottom: 1.125rem;
            img{
                width: 10.625rem;
                height: 2.625rem;
            }
        }
        .xq-list-xz{
            position: relative;
            margin-bottom: 0.875rem;
            &::after{
                content: '';
                position: absolute;
                width: 100%;
                height: 0;
                left: 0;
                bottom: 0;
                border: 1px dotted #F0F0F0;
            }
            .xq-list-xz-header{
                background-image: url("../assets/image/kt/kcmubg.png");
                background-size:100% 100%;
                height: 38px;
                line-height: 38px;
                padding-left: 4.5625rem;
                position: relative;
                font-size:14px;
                color: #333333;
                font-weight: 400px;
                span{
                    position: absolute;
                    width: 28px;
                    height: 33px;
                    line-height: 33px;
                    color: #FFFFFF;
                    text-align: center;
                    left: 1.4375rem;
                    top: 0;
                    background-image: url("../assets/image/kt/kcmblg.png");
                    background-size: 100% 100%;
                }
            }
            .xq-list-ul{
                padding: 0.6875rem 0 0.8125rem 4.5rem;
                ul{
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    li{
                        line-height: 1.3125rem;
                        font-size:12px;
                        font-weight:400;
                        color: #999999;
                    }
                }
            }
        }
    }
    
}
</style>