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
                >
                    <van-tab title="通知"></van-tab>
                    <van-tab title="消息" info="1"></van-tab>
                </van-tabs>
            </van-nav-bar>
        </div>
        <div class="notice-content">
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
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active:0,
            icon:require("../assets/image/home/serach.png"),
            //icon2:require("../assets/image/home/miwoyoupin.png"),
            list1:[
                // {title:'蜜窝优品',desc:'恭喜你获得1张新人免费券，将于2019-11-30日过期 请立即使用！',status:'2019-09-26',icon2:require("../assets/image/home/miwoyoupin.png")},
                // {title:'蜜窝优品',desc:'恭喜你获得1张新人免费券，将于2019-11-30日过期 请立即使用！',status:'2019-09-26',icon2:require("../assets/image/home/miwoyoupin.png")},
            ]
        }
    },
    methods: {
        onClickLeft(){

        },
        onClickRight(){

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
        .notice-notify{
            .van-search{
                .van-search__content{
                    background-color: #F0F0F0;
                }
                /deep/ .van-field__control[type=search]{
                    font-size: 14px;
                }
            }
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
}
</style>