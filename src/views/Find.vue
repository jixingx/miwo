<template>
    <div class="find">
        <div class="heared">
            <van-nav-bar
                :border="false"
                title="课堂"
                :fixed="true"
            >
                <van-icon :name="icon1" slot="right"></van-icon>
            </van-nav-bar>
        </div>
        <div class="find-dispel">
            <van-tabs 
            v-model="active"
            color="#333333"
            line-width="38%"
            title-active-color="#333333"
            title-inactive-color="#999999"
            :border="false"
            >
                <van-tab title="解答疑惑">
                    <van-cell title="单元格" value="内容" />
                    <van-cell title="单元格" value="内容" />
                </van-tab>
                <van-tab title="交流分享">
                    内容 2
                </van-tab>
            </van-tabs>
        </div>
        <Tab></Tab>
    </div>
</template>

<script>
import Tab from '../components/Tab'
export default {
    name:"Find",
    data() {
        return {
            icon1:require("../assets/image/home/serach.png"),
            active:0
        }
    },
    components:{
        Tab
    }
}
</script>

<style lang="less" scoped>
    .find{
        height: 100%;
        box-sizing: border-box;
        background:#F0F0F0;
        padding-top: 64px;
        .van-nav-bar{
            padding-top: 20px;
            background: #FFFFFF;
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
        .find-dispel{
            height: 7.375rem;
            background-color: #fff;
            .van-tabs{
                /deep/ .van-tabs__wrap{
                    width: 40%;
                }
                /deep/ .van-tab{
                    font-weight:400;
                    font-size:13px;
                }
                /deep/ .van-tab--active{
                    font-size:15px;
                    font-weight:500;
                }
                /deep/ .van-tabs__line{
                    bottom: 25px;
                }
            }
        }
    }
</style>