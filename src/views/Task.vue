<template>
    <div class="task">
        <div class="task-header">
            <van-nav-bar
                :border="false"
                title="任务"
                :fixed="true"
            >
                <van-icon :name="icon1" slot="right"></van-icon>
            </van-nav-bar>
        </div>
        <div class="task-content">
            <van-tabs v-model="active"
                background="transparent"
                :border="false"
                color="#FFF"
                title-inactive-color="#CCCCCC"
                title-active-color="#FFFFFF"
            >
                <van-tab title="待测姿">
                    
                </van-tab>
                <van-tab title="待下单">内容 2</van-tab>
                <van-tab title="待发货">内容 3</van-tab>
                <van-tab title="全部任务">
                    <div class="task-item">
                        <div class="task-item-left">
                            <img src="../assets/image/rw/rw1.png" class="img-opt" />
                        </div>
                        <div class="task-item-right">
                            <div class="task-item-right-first">
                                <h4>客户：张三</h4>
                                <van-button type="danger" round size="small">待测姿</van-button>
                            </div>
                            <p class="task-item-right-second">地址：武侯区红牌楼竹园小区18号</p>
                            <p class="task-item-right-third">联系电话：13345626622</p>
                            <div class="task-item-right-fourth">
                                <span class="task-item-right-fourth-span1">预约时间：2019.10.14</span>
                                <span class="task-item-right-fourth-span2">客户需求</span>
                            </div>
                        </div>
                    </div>
                    <div class="task-item">
                        <div class="task-item-left">
                            <img src="../assets/image/rw/rw1.png" class="img-opt" />
                        </div>
                        <div class="task-item-right">
                            <div class="task-item-right-first">
                                <h4>客户：张三</h4>
                                <van-button type="danger" round size="small">待测姿</van-button>
                            </div>
                            <p class="task-item-right-second">地址：武侯区红牌楼竹园小区18号</p>
                            <p class="task-item-right-third">联系电话：13345626622</p>
                            <div class="task-item-right-fourth">
                                <span class="task-item-right-fourth-span1">预约时间：2019.10.14</span>
                                <span class="task-item-right-fourth-span2">客户需求</span>
                            </div>
                        </div>
                    </div>
                    <div class="task-item">
                        <div class="task-item-left">
                            <img src="../assets/image/rw/rw2.png" />
                        </div>
                        <div class="task-item-right">
                            <div class="task-item-right-first">
                                <h4>客户：王大陆</h4>
                                <van-button type="danger" round size="small" color="#E04193">待下单</van-button>
                            </div>
                            <p class="task-item-right-second">地址：武侯区红牌楼竹园小区18号</p>
                            <p class="task-item-right-third">联系电话：13345626622</p>
                            <div class="task-item-right-fourth">
                                <span class="task-item-right-fourth-span1">预约时间：2019.10.14</span>
                                <span class="task-item-right-fourth-span2">客户需求</span>
                            </div>
                        </div>
                    </div>
                    <div class="task-item">
                        <div class="task-item-left">
                            <img src="../assets/image/rw/rw3.png" />
                        </div>
                        <div class="task-item-right">
                            <div class="task-item-right-first">
                                <h4>客户：毛晨曦</h4>
                                <van-button type="danger" round size="small" color="#433FE4">已下单</van-button>
                            </div>
                            <p class="task-item-right-second">地址：武侯区红牌楼竹园小区18号</p>
                            <p class="task-item-right-third">联系电话：13345626622</p>
                            <div class="task-item-right-fourth">
                                <span class="task-item-right-fourth-span1">预约时间：2019.10.14</span>
                                <span class="task-item-right-fourth-span2">客户需求</span>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <Tab></Tab>
    </div>

</template>

<script>
import Tab from '../components/Tab'
export default {
    name:"Task",
    data() {
        return {
            icon1:require("../assets/image/home/serach.png"),
            active:3
        }
    },
    components:{
        Tab
    }
}
</script>

<style lang="less" scoped>
.task{
    height: 100%;
    box-sizing: border-box;
    .task-header{
        height: 12.1875rem;
        // padding-left: 0.75rem;
        // padding-right: 0.75rem;
        box-sizing: border-box;
        background-image: url('../assets/image/bg.png');
        background-repeat: no-repeat;
        background-size: 100%;
        .van-nav-bar{
            padding-top: 1.875rem;
            background: transparent;
            .van-nav-bar__title{
                font-size:18px;
                color: #FFFFFF;
            }
            .van-nav-bar__right{
                font-size: 19.32px;
                .van-icon{
                    color: #666666;
                }
            }
        }
    }
    .task-content{
        // padding-left: 0.75rem;
        // padding-right: 0.75rem;
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 4.9375rem;
        width: 100%;
        /deep/ .van-tab{
            font-size: 13px;
        }
        /deep/ .van-tab--active{
            font-size: 15px;
        }
        /deep/ .van-tabs__line{
            bottom: 24px;
        } 
        /deep/ .van-tabs__content{
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            .task-item{
                height: 7.5rem;
                background: #FFFFFF;
                border-radius: 7px;
                box-sizing: border-box;
                padding: 0.75rem 0.625rem;
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.75rem;
                .task-item-left{
                    margin-right: 0.75rem;
                    flex: 1;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .task-item-right{
                    flex: 2;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    .task-item-right-first{
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        h4{
                            margin: 0;
                            padding: 0;
                            height:21px;
                            font-size:15px;
                            font-family:PingFang SC;
                            font-weight:500;
                            line-height:21px;
                            color:rgba(51,51,51,1);
                        }
                    }
                    .task-item-right-second{
                        margin: 0;
                        padding: 0;
                        height:17px;
                        font-size:12px;
                        font-family:PingFang SC;
                        font-weight:400;
                        line-height:17px;
                        color:rgba(102,102,102,1);
                    }   
                    .task-item-right-third{
                        margin: 0;
                        padding: 0;
                        height:17px;
                        font-size:12px;
                        font-family:PingFang SC;
                        font-weight:400;
                        line-height:17px;
                        color:rgba(153,153,153,1);
                    }
                    .task-item-right-fourth{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .task-item-right-fourth-span1{
                            height:16px;
                            font-size:11px;
                            font-family:PingFang SC;
                            font-weight:400;
                            line-height:16px;
                            color:rgba(204,204,204,1);
                        }
                        .task-item-right-fourth-span2{
                            height:16px;
                            font-size:11px;
                            font-family:PingFang SC;
                            font-weight:400;
                            line-height:16px;
                            color:rgba(4,0,84,1);
                        }
                    }
                    .van-button--round{
                        border-radius: 3px;
                    }
                    .van-button--small{
                        min-width: 51px;
                        height: 18px;
                        font-size: 11px;
                        line-height: 16px;
                    }
                }
            }
        }
    }
    .img-opt{
         filter: blur(2px);
    }
}
</style>