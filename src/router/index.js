/*
 * @Descripttion:
 * @Author: sjq
 * @Date: 2022-03-03 10:16:24
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-07 20:48:06
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/table" },
  {
    path: "/table",
    name: "table",
    component: () => import("@/views/table.vue"),
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("@/views/upload.vue"),
  },
  {
    path: "/dog",
    name: "dog",
    component: () => import("@/views/dog.vue"),
  },
  {
    path: "/scratchCard",
    name: "scratchCard",
    component: () => import("@/views/scratchCard.vue"),
  },
  {
    path: "/xiaoyi",
    name: "xiaoyi",
    component: () => import("@/views/xiaoyi.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
