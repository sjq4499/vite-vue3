/*
 * @Descripttion:
 * @Author: sjq
 * @Date: 2022-03-03 10:16:24
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-26 16:07:27
 */
import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
  { path: '/', redirect: '/lengr' },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/table.vue'),
    meta: {
      activeName: '表格',
      password: '你不需要',
    },
  },
  {
    path: '/table2',
    name: 'table2',
    component: () => import('@/views/table2.vue'),
    meta: {
      activeName: '表格2',
    },
  },
  {
    path: '/dog',
    name: 'dog',
    component: () => import('@/views/dog.vue'),
    meta: {
      activeName: '狗',
    },
  },
  {
    path: '/scratchCard',
    name: 'scratchCard',
    component: () => import('@/views/scratchCard.vue'),
    meta: {
      activeName: '瓜瓜乐',
    },
  },
  {
    path: '/xiaoyi',
    name: 'xiaoyi',
    component: () => import('@/views/xiaoyi.vue'),
    meta: {
      activeName: '小易',
      password: '小易是猪',
    },
  },
  {
    path: '/xiaoyi1',
    name: 'xiaoyi1',
    component: () => import('@/views/xiaoyi1.vue'),
    meta: {
      activeName: '小易',
      password: '小易是猪',
    },
  },
  {
    path: '/susu',
    name: 'susu',
    component: () => import('@/views/susu.vue'),
    meta: {
      activeName: '苏沐儿',
      password: '苏苏是冷易的',
    },
  },
  {
    path: '/lengr',
    name: 'lengr',
    component: () => import('@/views/lengr.vue'),
    meta: {
      activeName: '冷r',
    },
  },
  {
    path: '/vue3',
    name: 'vue3',
    component: () => import('@/views/vue3.vue'),
    meta: {
      activeName: 'vue3',
    },
  },
  {
    path: '/css',
    name: 'css',
    component: () => import('@/views/css/index.vue'),
    meta: {
      activeName: '多彩多姿css',
    },
  },
  {
    path: '/tool',
    name: 'tool',
    component: () => import('@/views/tool/index.vue'),
    meta: {
      activeName: '工具',
    },
  },
  {
    path: '/like',
    name: 'like',
    component: () => import('@/views/like.vue'),
    meta: {
      activeName: '喜欢',
    },
  },
  {
    path: '/iframe',
    name: 'iframe',
    component: () => import('@/views/iframe.vue'),
    meta: {
      activeName: 'iframe',
    },
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('@/views/swiper.vue'),
    meta: {
      activeName: '轮播',
      password: '小易是猪',
    },
  },
  {
    path: '/fetch',
    name: 'fetch',
    component: () => import('@/views/fetch.vue'),
    meta: {
      activeName: 'fetch',
    },
  },
  {
    path: '/ylyk',
    name: 'ylyk',
    component: () => import('@/views/ylyk.vue'),
    meta: {
      activeName: 'ylyk',
    },
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
