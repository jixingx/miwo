import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//移动端点击事件300ms延迟
import fastclick from"fastclick";
fastclick.attach(document.body)

import { Button,NavBar,Field,Checkbox,CheckboxGroup } from 'vant';

Vue.use(Button).use(NavBar).use(Field).use(Checkbox).use(CheckboxGroup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
