<template>
    <div class="classroom">
        <div class="heared">
            <van-nav-bar
                left-arrow
                :border="false"
                title="课堂"
                @click-left="onClickLeft"
                :fixed="true"
            >
                <van-icon :name="icon1" slot="right"></van-icon>
            </van-nav-bar>
        </div>
        <div class="content">
            <div class="content-header">
                <van-tabs v-model="active" scrollspy sticky :offset-top="64" color="#040054" title-inactive-color="#666666" title-active-color="#333333">
                    <van-tab title='推荐'></van-tab>
                    <van-tab title='新手入门'></van-tab>
                    <van-tab title='专业提升'></van-tab>
                    <van-tab title='软件'></van-tab>
                </van-tabs>
                <div class="content-banner">
                    <van-swipe :autoplay="3000" indicator-color="white">
                        <van-swipe-item>
                            <img src="../assets/image/kt/banner.png" />
                        </van-swipe-item>
                        <van-swipe-item>
                            <img src="../assets/image/kt/banner.png" />
                        </van-swipe-item>
                        <van-swipe-item>
                            <img src="../assets/image/kt/banner.png" />
                        </van-swipe-item>
                        <van-swipe-item>
                            <img src="../assets/image/kt/banner.png" />
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <div class="Introduction">
                    <img src="../assets/image/kt/rumen.png" @click="xsrm()">
                </div>
            </div>
            
        </div>
        <div class="Recommend">
            <h4>热门推荐
                <span @click="rmtjAll">全部&nbsp;></span>
            </h4>
            <div class="plan-item">
                <div class="plan-item-left">
                    <img src="../assets/image/kt/recommend1.png" alt="" srcset="">
                </div>
                <div class="plan-item-right">
                    <p>如何快速掌握定制床垫测量 技巧</p>
                    <span>1.8万播放</span>
                </div>
            </div>
            <div class="plan-item">
                <div class="plan-item-left">
                    <img src="../assets/image/kt/recommend2.png" alt="" srcset="">
                </div>
                <div class="plan-item-right">
                    <p>定制床垫常规布局说明</p>
                    <span>1.8万播放</span>
                </div>
            </div>
            <div class="plan-item">
                <div class="plan-item-left">
                    <img src="../assets/image/kt/recommend3.png" alt="" srcset="">
                </div>
                <div class="plan-item-right">
                    <p>定制床垫常规布局说明</p>
                    <span>1.8万播放</span>
                </div>
            </div>
        </div>
        <div class="Novice">
            <h4>新手入门
                <span>全部&nbsp;></span>
            </h4>
            <div class="plan">
                <div class="plan-item">
                    <img src="../assets/image/kt/rm1.png">
                    <p>全屋硬装自由造型介绍自由造介绍自由造型介绍自绍奥术大师大所奥术大师</p>
                </div>
                <div class="plan-item">
                    <img src="../assets/image/kt/rm2.png">
                    <p>全屋硬装自由造型</p>
                </div>
                <div class="plan-item">
                    <img src="../assets/image/kt/rm3.png">
                    <p>全屋硬装自由造型介绍自由造 型介绍自由造型介绍自介绍二个人跟人尔尔二</p>
                </div>
                <div class="plan-item">
                    <img src="../assets/image/kt/rm4.png">
                    <p>全屋硬装自由造型介绍自由造 型介绍自由造型介绍自介绍萨达所大所多</p>
                </div>
            </div>
        </div>
        <div class="Novice">
            <h4>专业提升
                <span>全部&nbsp;></span>
            </h4>
            <div class="plan">
                <div class="plan-item">
                    <img src="../assets/image/kt/rm1.png">
                    <p>全屋硬装自由造型介绍自由造介绍自由造型介绍自绍奥术大师大所奥术大师</p>
                </div>
                <div class="plan-item">
                    <img src="../assets/image/kt/rm2.png">
                    <p>全屋硬装自由造型</p>
                </div>
                <div class="plan-item">
                    <img src="../assets/image/kt/rm3.png">
                    <p>全屋硬装自由造型介绍自由造 型介绍自由造型介绍自介绍二个人跟人尔尔二</p>
                </div>
                <div class="plan-item">
                    <img src="../assets/image/kt/rm4.png">
                    <p>全屋硬装自由造型介绍自由造 型介绍自由造型介绍自介绍萨达所大所多</p>
                </div>
            </div>
        </div>
        <Tab></Tab>
    </div>
</template>

<script>
import Tab from '../components/Tab'
export default {
    name:"Classroom",
    data() {
        return {
            icon1:require("../assets/image/home/serach.png"),
            active:0
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push('/home')
        },
        xsrm(){
            this.$router.push('/introduction')
        },
        rmtjAll(){
            this.$router.push('/phpre')
        }
    },
    components:{
        Tab
    }
}
</script>

<style lang="less" scoped>
.classroom{
    // position: absolute;
    height: 100%;
    box-sizing: border-box;
    background:#F0F0F0;
    padding-top: 64px;
    padding-bottom: 50px;
    .van-nav-bar{
        padding-top: 18px;
        background: #FAFAFA;
        .van-nav-bar__arrow{
            font-size: 17.74px;
            color: #666666;
        }
        .van-nav-bar__title{
            font-size:18px;
            color: #333333;
        }
        .van-nav-bar__right{
            font-size: 18px;
            .van-icon{
                color: #666666;
            }
        }
    }
    .content{
        .content-header{
            height: 17.625rem;
            background: #fff;
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
            .content-banner{
                height: 9.475rem;
                box-sizing: border-box;
                padding-left: 0.75rem;
                padding-right: 0.75rem;
                img{
                    width: 100%;
                }
            }
            .Introduction{
                margin-top: 0.5625rem;
                height: 4.25rem;
                box-sizing: border-box;
                padding-left: 0.75rem;
                padding-right: 0.75rem;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
    .Recommend{
        box-sizing: border-box;
        background: #FFFFFF;
        padding:0.75rem;
        margin-top: 0.5rem;
        h4{
            margin: 0;
            height:25px;
            font-size:18px;
            font-family:PingFang SC;
            font-weight:500;
            line-height:25px;
            color: #333333;
            padding-left: 0.5125rem;
            margin-bottom: 0.75rem;
            background-image:url("../assets/image/home/shu.png");
            background-repeat:no-repeat;
            background-size: 4px 16px;
            background-position: 0 5px;
            position: relative;
            span{
                position: absolute;
                right: 0;
                top: 3px;
                font-size:11px;
                color: #999999;
                line-height: 16px;
            }
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
    .Novice{
        box-sizing: border-box;
        background: #FFFFFF;
        padding:0.75rem;
        margin-top: 0.5625rem;
        h4{
            margin: 0;
            height:25px;
            font-size:18px;
            font-family:PingFang SC;
            font-weight:500;
            line-height:25px;
            color: #333333;
            padding-left: 0.5125rem;
            margin-bottom: 0.75rem;
            background-image:url("../assets/image/home/shu.png");
            background-repeat:no-repeat;
            background-size: 4px 16px;
            background-position: 0 5px;
            position: relative;
            span{
                position: absolute;
                right: 0;
                top: 3px;
                font-size:11px;
                color: #999999;
                line-height: 16px;
            }
        }
        .plan{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .plan-item{
                width: 48%;
                
                height: 9.4375rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-bottom: 0.875rem;
                img{
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    flex: 3
                }
                p{
                    margin: 0;
                    padding: 0;
                    margin-top: 0.625rem;
                    flex: 2;
                    height:38px;
                    font-size:13px;
                    line-height:20px;
                    color:rgba(51,51,51,1);
                    word-break: break-all;
                    text-overflow: ellipsis;
                    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
                    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
                    -webkit-line-clamp: 2; /** 显示的行数 **/
                    overflow: hidden;  /** 隐藏超出的内容 **/
                }
            }
        }
    }
    
    
}
</style>