// createRouter: 創建一個實體 router 配置內容, 把 router 內容丟出去給 Vue 使用
// createWebHistory: 創建一個 HTML5 的 Web History 切換頁面(需要有後端服務, http 協議提供服務)
// createWebHashHistory: 創建 hash History 來切換頁面{使用在沒有 server 的 web上面，或是當 server 不能處理 router 時可以用，只是網址後面會帶入 #)
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  // history 有兩種形式, createWebHistory / createWebHashHistory
  history: createWebHashHistory(import.meta.env.BASE_URL), // history: 表示 router 呈現形式
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // 動態載入: 用函數 return 一個 import 結果就是 dynamic import
      component: () => import("../views/AboutView.vue"),
      children: [
        {
          path: "aaa",
          name: "aaa",
          component: () => import("../views/about/a.vue"),
        },
        {
          path: "bbb",
          name: "bbb",
          component: () => import("../views/about/b.vue"),
        },
        {
          path: "ccc",
          name: "ccc",
          component: () => import("../views/about/c.vue"),
        },
      ],
    },
    {
      path: "/address",
      name: "address",
      component: () => import("../views/AddressView.vue"),
    },
    {
      path: "/:id",
      name: "userdata",
      component: () => import("../views/[id].vue"),
    },
    {
      path: "/:path(.*)*",
      name: "NotFound",
      component: () => import("../views/404.vue"),
    },
  ],
});

export default router;
