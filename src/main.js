import Vue from "vue";
//导入 整个 App组件
import App from "./App.vue";
import "./assets/glocal.css";
import "./assets/element-variables.scss";
import store from "./store";
import router from "./router";
import "./assets/swiper.min.css";
import { Public } from "./proto";

Vue.prototype.$public = Public;
import {
  Button,
  Carousel,
  CarouselItem,
  Pagination,
  Dialog,
  Popover,
  Tooltip,
  Select
} from "element-ui";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Select);
//框架写得是 虚拟 dom
//将App 组件内的虚拟dom结构
//获取后台数据 通过原声或者js操作真实dom去页面并写上交互效果。直接操作dom节点可能会引起浏览器得重绘（重渲）
new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
