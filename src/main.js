import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//移动端点击事件300ms延迟
import fastclick from"fastclick";
fastclick.attach(document.body)

import { 
  Button,
  NavBar,
  Field,
  Checkbox,
  CheckboxGroup,
  Tab,
  Tabs,
  Search,
  Icon,
  Row, 
  Col,
  Panel,
  Cell, 
  CellGroup,
  Tag,
  PullRefresh
} from 'vant';

Vue.use(Button)
   .use(NavBar)
   .use(Field)
   .use(Checkbox)
   .use(CheckboxGroup)
   .use(Tab)
   .use(Tabs)
   .use(Search)
   .use(Icon)
   .use(Row)
   .use(Col)
   .use(Panel)
   .use(Cell)
   .use(CellGroup)
   .use(Tag)
   .use(PullRefresh);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
