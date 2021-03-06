import Vue from "vue";
import VueRouter from "vue-router";
import App from "./app.vue";
import Routers from "./router.js";
import CodeUI from "../src/index.js";
import "@/theme/index.scss";
import "highlight.js/styles/googlecode.css"; //样式文件

// 全局注册
Vue.use(VueRouter);
Vue.use(CodeUI);

/* debug */
Vue.config.debug = true;

const router = new VueRouter({
  mode: "history",
  routes: Routers,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

// 全局拦截
router.beforeEach((to, from, next) => {
  CodeUI.CLoadingBar.start();
  next();
});

router.afterEach(() => {
  CodeUI.CLoadingBar.finish(); // 页面加载完毕关闭加载
});

router.onError(() => {
  CodeUI.CLoadingBar.error(); // 页面加载完毕关闭加载
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
