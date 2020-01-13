<template>
    <div class="notice">
        <div class="heared">
            <van-nav-bar
                right-text="全部已读"
                left-arrow
                :border="false"
                @click-left="onClickLeft"
                @click-right="onClickRight"
            >
                <van-tabs 
                    v-model="active"
                    slot="title"
                    background="#FAFAFA"
                    :border="false"
                    color="#333333"
                    line-width="20%"
                    title-active-color="#333333"
                    title-inactive-color="#333333"
                    @click="onClick"
                >
                    <van-tab title="通知"></van-tab>
                    <van-tab title="消息" info="1"></van-tab>
                </van-tabs>
            </van-nav-bar>
        </div>
        <div class="notice-content" v-if="contentFlag">
            <div class="notice-notify">
                <div v-if="list1.length>0">
                    <van-search 
                        placeholder="搜索"
                        shape="round"
                        input-align="center"
                        background="transparent"
                    >
                        <van-icon :name="icon" slot="left-icon"/>
                    </van-search>
                    <div class="notice-notify-list">
                        <template v-for="(item,index) in list1">
                            <van-panel :title="item.title" :desc="item.desc" :status="item.status" :icon="item.icon2" :key="index">
                            </van-panel>
                        </template>
                    </div>
                </div>
                <div class="nodata" v-else> 
                    <div class="nodata-flex">
                        <img src="../assets/image/home/wuneirong.png">
                        <span>暂时没有通知</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="news-content" v-else>
            <div class="news-tidings">
                <div v-if="list2.length>0">
                    <van-search 
                        placeholder="搜索"
                        shape="round"
                        input-align="center"
                        background="transparent"
                    >
                        <van-icon :name="icon" slot="left-icon"/>
                    </van-search>
                    <div class="news-tidings-list">
                        <van-cell-group :border="false">
                            <van-cell v-for="(item,index) in list2" :title="item.title" :label="item.label" :icon="item.icon3" :key="index" @click="xxClick">
                                <div class="right-content">
                                    <span>{{ item.value }}</span>
                                    <van-tag round type="danger" v-if="item.num!=0" >{{item.num}}</van-tag>
                                </div>
                            </van-cell>
                            <!-- <van-cell title="优品" label="武侯区红牌楼竹园小区18号张先生待测姿" :icon="icon3">
                                <div class="right-content">
                                    <span>2019-09-26</span>
                                </div>
                            </van-cell>
                            <van-cell title="优品" label="武侯区红牌楼竹园小区18号张先生待测姿" :icon="icon3">
                                <div class="right-content">
                                    <span>2019-09-26</span>
                                </div>
                            </van-cell>
                            <van-cell title="优品" label="武侯区红牌楼竹园小区18号张先生待测姿" :icon="icon3">
                                <div class="right-content">
                                    <span>2019-09-26</span>
                                </div>
                            </van-cell> -->
                        </van-cell-group>
                    </div>
                </div>
                <div class="nodata" v-else> 
                    <div class="nodata-flex">
                        <img src="../assets/image/home/wuneirong.png">
                        <span>暂时没有通知</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Notice",
    data() {
        return {
            active:0,
            icon:require("../assets/image/home/serach.png"),
            icon2:require("../assets/image/home/miwoyoupin.png"),
            icon3:require("../assets/image/home/youpin.png"),
            list1:[
                {title:'蜜窝优品',desc:'恭喜你获得1张新人免费券，将于2019-11-30日过期 请立即使用！',status:'2019-09-26',icon2:require("../assets/image/home/miwoyoupin.png")},
                {title:'蜜窝优品',desc:'恭喜你获得1张新人免费券，将于2019-11-30日过期 请立即使用！',status:'2019-09-26',icon2:require("../assets/image/home/miwoyoupin.png")},
            ],
            list2:[
                {title:'蜜窝优品',label:'点击领取新来一个月的礼物哦！',value:'2019-09-26',num:1,icon3:require("../assets/image/home/miwoyoupin.png")},
                {title:'优品',label:'武侯区红牌楼竹园小区18号张先生待测姿',value:'2019-09-26',num:0,icon3:require("../assets/image/home/youpin.png")},
                {title:'优品',label:'武侯区红牌楼竹园小区18号张先生待测姿',value:'2019-09-26',num:0,icon3:require("../assets/image/home/youpin.png")},
                {title:'优品',label:'武侯区红牌楼竹园小区18号张先生待测姿',value:'2019-09-26',num:0,icon3:require("../assets/image/home/youpin.png")}
            ],
            contentFlag:true
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push('/home')
        },
        onClickRight(){
            //this.$router.push('/newsdetails')
        },
        onClick(name, title) {
            if(name==0){
                this.contentFlag=true
            }else if(name==1){
                this.contentFlag=false
            }
        },
        xxClick(){
            this.$router.push('/newsdetails')
        }
    },
}
</script>

<style lang="less" scoped>
.notice{
    height: 100%;
    box-sizing: border-box;
    background:#FFF;
    .heared{
        height: 4rem;
        background: #FAFAFA;
        box-sizing: border-box;
        padding-top: 1.175rem;
        .van-nav-bar{
            background: #FAFAFA;
            .van-nav-bar__title{
                max-width: 40%;
            }
            .van-nav-bar__arrow{
                font-size: 17.74px;
                color: #666666;
            }
            .van-nav-bar__text{
                font-size:13px;
                color: #333333;
            }
            /deep/ .van-tab{
                font-size: 18px;
            }
        }
    }
    .notice-content{
        height: 100%;
        .notice-notify{
            height: 100%;
            
            .notice-notify-list{
                .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
                    border-width:0px;
                    .van-cell:not(:last-child)::after{
                        right: 16px;
                        
                    }
                    
                }
                /deep/ .van-cell__left-icon{
                    font-size: 58px;
                }
                .van-cell__title{
                    padding-top:16px;
                    // flex: none;
                    /deep/ span{
                        color: #333333;
                        font-size:15px;
                    }
                    .van-cell__label{
                        margin-top: 6px;
                        font-size:12px;
                        color: #666666;
                    }
                }
                .van-cell__value{
                    padding-top: 16px;
                    font-size:10px;
                    color: #999999;
                    flex:none;
                    position: absolute;
                    // top: 19px;
                    right: 0;
                    width: 30%;
                    height: 40px;
                    overflow: auto !important;
                    span{
                        position: absolute;
                        right: 17px;
                    }
                }
            }
            
        }
    }
    .news-content{
        height: 100%;
        .news-tidings{
            height: 100%;
            .news-tidings-list{
                padding-left: 0.75rem;
                padding-right: 0.75rem;
                .van-cell:last-child::after{
                    position: absolute;
                    box-sizing: border-box;
                    content: ' ';
                    pointer-events: none;
                    right: 0;
                    bottom: 0;
                    left: 16px;
                    border-bottom: 1px solid #ebedf0;
                    -webkit-transform: scaleY(.5);
                    transform: scaleY(.5);
                }
                .van-cell__left-icon{
                    font-size: 56px;
                }
                .van-cell__title{
                    padding-top: 2px;
                    flex: 8;
                    span{
                        font-size:15px;
                        color: #333333;
                    }
                    .van-cell__label{
                        font-size:12px;
                        color: #666666;
                    }
                }
                .van-cell__value{
                    flex: 4;
                    .right-content{
                        display: flex;
                        flex-direction:column;
                        justify-content: space-between;
                        align-items: flex-end;
                        span{
                            padding-top: 6px;
                            font-size:10px;
                            color: #999999;
                            
                        }
                        .van-tag{
                            height: 1rem;
                            width: 1rem;
                            padding: 0;
                            text-align: center;
                            display: inline-block;
                            font-size:11px;
                            color: #FFFFFF;
                            margin-top: 1px;
                        }
                    }
                }
            }
        }
    }
    .van-search{
        .van-search__content{
            background-color: #F0F0F0;
        }
        /deep/ .van-field__control[type=search]{
            font-size: 14px;
        }
    }
    .nodata{
                
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        .nodata-flex{
            transform: translateY(-50%);
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            span{
                font-size:11px;
                color: #999999;
            }
        }
        

    }
}
</style>