<template>
    <div class="tab">
        <van-tabbar v-model="active" active-color="#040054" route>
            <van-tabbar-item name="home" to="/home">
                <span>首页</span>
                <img 
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon1.active : icon1.inactive"
                >
            </van-tabbar-item>
            <van-tabbar-item name="classroom" to="/classroom">
                <span>课堂</span>
                <img 
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon2.active : icon2.inactive"
                >
            </van-tabbar-item>
            <van-tabbar-item name="task" to="/task">
                <span>任务</span>
                <img 
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon3.active : icon3.inactive"
                >
            </van-tabbar-item>
            <van-tabbar-item name="find" to="/find">
                <span>发现</span>
                <img 
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon4.active : icon4.inactive"
                >
            </van-tabbar-item>
            <van-tabbar-item name="my" to="/my">
                <span>我的</span>
                <img 
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon5.active : icon5.inactive"
                >
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:"Tab",
    data() {
        return {
            icon1:{
                active:require("../assets/image/tab/sy_active.png"),
                inactive:require("../assets/image/tab/sy_active.png")
            },
            icon2:{
                active:require("../assets/image/tab/kt.png"),
                inactive:require("../assets/image/tab/kt.png")
            },
            icon3:{
                active:require("../assets/image/tab/rw.png"),
                inactive:require("../assets/image/tab/rw.png")
            },
            icon4:{
                active:require("../assets/image/tab/fx.png"),
                inactive:require("../assets/image/tab/fx.png")
            },
            icon5:{
                active:require("../assets/image/tab/wd.png"),
                inactive:require("../assets/image/tab/wd.png")
            },
            active: 'home'
        }
    },
}
</script>

<style>

</style>