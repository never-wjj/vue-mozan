//放项目的路由相关配置
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Cart from "./components/Cart.vue";
import WinCart from "./components/WinCart.vue";
import Dialog from "./components/Dialog.vue";
import Order from "./components/Order.vue";
import Payment from "./components/Payment.vue";
import ShopEnd from "./components/ShopEnd.vue";
import { Public } from "./proto";
//给vue项目安装路由
Vue.use(VueRouter);

//创建路由
const routes = [
  {
    component: Home,
    path: "/"
    //子路由下的pash开头不能加斜杠/ 默认开始就是父路由的Pash
  },
  {
    component: WinCart,
    path: "/wincart"
  },
  {
    component: Cart,
    path: "/cart"
  },
  {
    component: Dialog,
    path: "/dialog"
  },
  {
    component: Order,
    path: "/order"
  },
  {
    component: Payment,
    path: "/payment"
  },
  {
    component: ShopEnd,
    path: "/shopend"
  }
  // {
  //   component: Pins,
  //   path: "/pins"
  // },
  // //更改地址名字
  // {
  //   path: "/topics",
  //   redirect: "newtopics"
  // },

  // // 文章展示路由  有很多页 有一个组件就够了  只是里边的内容不一样
  // //:加上：就是动态页面
  // {
  //   component: Post,
  //   path: "/post/:id"
  // },
  // // 当上述路由全部匹配失败 就要出404 页面
  // //所以 我们将404 路由的path写成*而且必须所有路由的最下边
  // {
  //   component: Error,
  //   path: "*"
  // }
];
//new:新创建  一个路由
const router = new VueRouter({
  routes,
  //路由的模式 默认是hash模式（通过锚点切换组件）
  //可以更改history模式 完全高仿浏览器
  //去掉网址中的#号
  mode: "history"
});

export default router;
