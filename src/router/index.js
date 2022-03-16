/*
 * @Descripttion:
 * @Author: sjq
 * @Date: 2022-03-03 10:16:24
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-16 14:31:31
 */
import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  { path: "/", redirect: "/upload" },
  {
    path: "/table",
    name: "table",
    component: () => import("@/views/table.vue"),
    meta: {
      activeName: "表格",
    },
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("@/views/upload.vue"),
    meta: {
      activeName: "图片颜色反正",
    },
  },
  {
    path: "/dog",
    name: "dog",
    component: () => import("@/views/dog.vue"),
    meta: {
      activeName: "狗",
    },
  },
  {
    path: "/scratchCard",
    name: "scratchCard",
    component: () => import("@/views/scratchCard.vue"),
    meta: {
      activeName: "瓜瓜乐",
    },
  },
  {
    path: "/xiaoyi",
    name: "xiaoyi",
    component: () => import("@/views/xiaoyi.vue"),
    meta: {
      activeName: "小易",
    },
  },
  {
    path: "/susu",
    name: "susu",
    component: () => import("@/views/susu.vue"),
    meta: {
      activeName: "苏沐儿",
    },
  },
  {
    path: "/lengr",
    name: "lengr",
    component: () => import("@/views/lengr.vue"),
    meta: {
      activeName: "冷r",
    },
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
