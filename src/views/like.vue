<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-26 16:06:00
 * @LastEditors: sjq
 * @LastEditTime: 2022-05-23 16:14:24
-->

<template>
  <div class="main">
    <div v-for="(item, index) in likeJson" :key="index">
      <h1 class="title">
        {{ item.title }}
      </h1>
      <div class="child_box">
        <div
          class="child_item"
          v-for="child in item.children"
          :key="child.title"
          @click="handleClick(child)"
        >
          <div class="child_logo">
            <img
              v-if="/^http|^https |^data:image/.test(child.logo)"
              class="logo"
              :src="child.logo"
              :alt="child.title"
            />
            <div v-else>{{ child.logo }}</div>
          </div>
          <div class="child_title">{{ child.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  setup() {
    const likeJson = reactive([
      {
        title: 'vue2.x',
        children: [
          {
            title: 'vue2.x',
            logo: 'https://v3.cn.vuejs.org/logo.png',
            url: 'https://cn.vuejs.org/v2/guide/index.html',
          },
          {
            title: 'vue-cli',
            logo: 'https://v3.cn.vuejs.org/logo.png',
            url: 'https://cli.vuejs.org/zh/',
          },
          {
            title: 'vue-router',
            logo: 'https://v3.cn.vuejs.org/logo.png',
            url: 'https://router.vuejs.org/zh/',
          },
          {
            title: 'vueX',
            logo: 'https://v3.cn.vuejs.org/logo.png',
            url: 'https://vuex.vuejs.org/zh/',
          },
          {
            title: 'element-ui',
            logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjMwcHgiIGhlaWdodD0iMzBweCIgdmlld0JveD0iMCAwIDM4IDQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MCAoMzM3NjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlNoYXBlIENvcHk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0idjIuMi4wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i6aaW6aG1Lem7mOiupOaViOaenC1jb3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MC4wMDAwMDAsIC0xOS4wMDAwMDApIiBmaWxsPSIjNDA5RUZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTIxMi4xMzU0NDEsNDUuMTU3ODA3NyBaIE0xMDMuNDE2NTAyLDQ2LjIxNzU1MTEgQzEwMy40MDcwMDgsNDcuNzk0NTY4MiAxMDIuNTg3ODQxLDQ4LjE0NjM0NzQgMTAyLjU4Nzg0MSw0OC4xNDYzNDc0IEMxMDIuNTg3ODQxLDQ4LjE0NjM0NzQgODguNDUyMDQ3OCw1Ni4zMTQ1MDg3IDg3LjUzMjk5NTYsNTYuODI2Mjc1MSBDODYuNjIyMzM2LDU3LjIxNzE1NjEgODYuMDEzNjcwMyw1Ni44MjYyNzUxIDg2LjAxMzY3MDMsNTYuODI2Mjc1MSBDODYuMDEzNjcwMyw1Ni44MjYyNzUxIDcxLjIyMjU3MDYsNDguMjQ3OTU3MiA3MC42ODI2OTYyLDQ3Ljg3MDg0NDQgQzcwLjE0MjY4NDMsNDcuNDkzNzMxNiA3MC4xMzAxNjQzLDQ2LjkwNjM3NzQgNzAuMTMwMTY0Myw0Ni45MDYzNzc0IEM3MC4xMzAxNjQzLDQ2LjkwNjM3NzQgNzAuMTQ1MDIzMiwyOS45MTk5MTc0IDcwLjEzMDE2NDMsMjkuMTMzMzM2NCBDNzAuMTE1MzA1MywyOC4zNDY2MTc3IDcxLjA5Njk1NzYsMjcuNzU1NTQ2MSA3MS4wOTY5NTc2LDI3Ljc1NTU0NjEgTDg1Ljg3NTUzNzMsMTkuMjEzNDM4NyBDODYuNzg1MzcxNCwxOC43MzMyMDE2IDg3LjY3MTEyODYsMTkuMjEzNDM4NyA4Ny42NzExMjg2LDE5LjIxMzQzODcgQzg3LjY3MTEyODYsMTkuMjEzNDM4NyAxMDAuNzI2NjIzLDI2LjgwMjA5MzcgMTAyLjE3MzQ0MiwyNy42MTc3MjU3IEMxMDMuNTkxNTA3LDI4LjI5MTk1NzcgMTAzLjQxNjUwMiwyOS42ODQzNDI0IDEwMy40MTY1MDIsMjkuNjg0MzQyNCBDMTAzLjQxNjUwMiwyOS42ODQzNDI0IDEwMy40MjUzMDcsNDQuNzUxOTE5MiAxMDMuNDE2NTAyLDQ2LjIxNzU1MTEgTDEwMy40MTY1MDIsNDYuMjE3NTUxMSBaIE05Ny41MTYwMTA1LDI5LjE2OTEzMzkgQzk0LjQ5MDAxNzMsMjcuNDI3NDQ4MyA4Ny4zNjE1ODQyLDIzLjI5NzEwNjMgODcuMzYxNTg0MiwyMy4yOTcxMDYzIEM4Ny4zNjE1ODQyLDIzLjI5NzEwNjMgODYuNjY2MTAzOSwyMi45MjEyMzI2IDg1Ljk1MTc3NDcsMjMuMjk3MTA2MyBMNzQuMzQ4NzQwNiwyOS45ODIxNSBDNzQuMzQ4NzQwNiwyOS45ODIxNSA3My41NzgwMDI1LDMwLjQ0NDkwMTQgNzMuNTg5Njk3LDMxLjA2MDQ4MDUgQzczLjYwMTM5MTUsMzEuNjc2MDU5NyA3My41ODk2OTcsNDQuOTY5ODcwOCA3My41ODk2OTcsNDQuOTY5ODcwOCBDNzMuNTg5Njk3LDQ0Ljk2OTg3MDggNzMuNTk5NDY1NCw0NS40Mjk1OTMyIDc0LjAyMzQ5NTEsNDUuNzI0NjQ3MiBDNzQuNDQ3Mzg3Myw0Ni4wMTk3MDExIDg2LjA2MDE4OTgsNTIuNzMzMjQ1MSA4Ni4wNjAxODk4LDUyLjczMzI0NTEgQzg2LjA2MDE4OTgsNTIuNzMzMjQ1MSA4Ni41MzgxNTIsNTMuMDM5MTc1OSA4Ny4yNTMwMzE1LDUyLjczMzI0NTEgQzg3Ljk3NDY1MjYsNTIuMzMyNzI2MiA5OS4wNzMwMzM1LDQ1Ljk0MDI1ODIgOTkuMDczMDMzNSw0NS45NDAyNTgyIEM5OS4wNzMwMzM1LDQ1Ljk0MDI1ODIgOTkuNzE2MjMyNSw0NS42NjQ4OTI5IDk5LjcyMzY2MTksNDQuNDMwNzA1NiBDOTkuNzI1NzI1Nyw0NC4wNzQ3OTU5IDk5LjcyNjU1MTIsNDIuNjkzMjg4MSA5OS43MjY2ODg3LDQwLjk1NzUyMjkgTDg2LjY2MDA1MDIsNDguODc1MjM5NCBMODYuNjYwMDUwMiw0NS44NDYyMjEgQzg2LjY2MDA1MDIsNDQuNjAyMTIwNSA4Ny42MjMxMjg5LDQzLjc4MDk4MTEgODcuNjIzMTI4OSw0My43ODA5ODExIEw5OS4xODA3NjA3LDM2LjgxNjU3OTMgQzk5LjYxNjg5NzgsMzYuMzYxMTI1MSA5OS43MDY4NzY4LDM1LjYzMTU0NDcgOTkuNzI1NDUwNSwzNS4zNTU2Mjg3IEM5OS43MjUwMzc4LDM0LjA5MDQ2MjcgOTkuNzI0NDg3NCwzMi45ODUyODQxIDk5LjcyNDA3NDcsMzIuMjg1MTY3OCBMODYuNjYwMDUwMiw0MC4yMDEyMzIxIEw4Ni42NjAwNTAyLDM3LjAzNDUzMSBDODYuNjYwMDUwMiwzNS43OTA0MzA1IDg3LjQ4NTU0NjIsMzUuMjQ0NjU2NCA4Ny40ODU1NDYyLDM1LjI0NDY1NjQgTDk3LjUxNjAxMDUsMjkuMTY5MTMzOSBaIiBpZD0iU2hhcGUtQ29weSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
            url: 'https://element.eleme.cn/#/zh-CN/component/installation',
          },
          {
            title: 'vant',
            logo: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
            url: 'https://youzan.github.io/vant/#/zh-CN/home',
          },
          {
            title: 'View UI',
            logo: 'https://file.iviewui.com/dist/bf31433c102ed612fbe82afe000dda40.png',
            url: 'https://www.iviewui.com/docs/introduce',
          },
          {
            title: 'mint-ui',
            logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE3NXB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTc1IDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy44LjIgKDI5NzUzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7nu7/lj7ZAMXg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iMjU2LWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MC4wMDAwMDAsIC0yOC4wMDAwMDApIiBmaWxsPSIjMjZhMmZmIj4KICAgICAgICAgICAgPGcgaWQ9Iue7v+WPtiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAyOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4zMDQ2ODgsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTgzLjcyOTQ4OTUsMTU1LjAxMTg3NiBDODIuMTA5MzUsMTUxLjY2MDE1OSA4MC4wMzY0ODA3LDE0Ny4xMTY3MTIgNzcuOTA3NTkzMiwxNDEuNzU1NTIgQzc1Ljc3ODcwNTcsMTQ0LjUwMzU5NyA3My40NTk2MzU3LDE0Ny4yNjc0MjMgNzAuOTU3NTYsMTUwLjA2MzU0NCBMNjYuOTk0NDI4MywxNTQuNTc1MDk1IEw2MS45NzQ1Mjc5LDE1Mi40NTQzOCBDNDcuMzA0MTYyNSwxNDYuMjY2ODcxIDQuNzYyMjk2MDksMTI1LjU4MzgyOSAwLjM3NzczMjYxNyw5Mi4xNzYzMDM1IEMtMi43NTk0ODA4Niw1Ny4zNzA5MTY2IDE3LjYwNTc5MzIsMzkuMDg2NDg2MSAxMC4yNDI5MDA0LDE5LjczNzcxMTcgQzM5Ljk0MTA3MDUsMjYuODM4NjU0OSA2My4zNTY0NDA4LDM4LjMzOTkxMDQgNzguMzM2NjAwMiw1My4wNTc5MjExIEMxMDEuODM5Mjg3LDIzLjA1NzkzMDkgMTMxLjk0Mjk0LDIxLjg4MjM0OCAxMzkuOTcyNjY4LDAgQzE5NS43MzkzOTMsNzcuOTQyNzE5OSAxODYuODQzMjc5LDE0OS4xODk5OCA5My44ODgzMDM5LDE2MC42NzQ4ODkgQzg2LjAyNTIzNTQsMTc1LjEzOTEyMyA3Ny4yNjQyODIsMTg4LjU3MDExMyA2Ny43NDA4MDQ5LDIwMCBMNTQuNzA2NzI2NiwxOTEuOTA2MjggQzY1Ljg4MjIzOTUsMTgxLjE3NTUyMyA3NS40NDU1ODczLDE2OC42NDk3OTQgODMuNzI5NDg5NSwxNTUuMDExODc2IEw4My43Mjk0ODk1LDE1NS4wMTE4NzYgTDgzLjcyOTQ4OTUsMTU1LjAxMTg3NiBaIE05Mi42OTcxNzE1LDExNi4xNzk3NjQgQzk0LjYzNTI3ODUsMTIxLjM5ODAyMSA5Ni42MjEwMzA3LDEyNS42MjM1IDk3Ljg5OTg3ODMsMTI4LjE4ODc3MSBDMTExLjQzNDUzMSw5OC44MDA1OTQ1IDEyMC42NzE5MzgsNjYuNjYzOTQyMiAxMjguMTE0MzcyLDM3LjA2OTAzNjkgQzEyMC4wOTIwMjEsNDUuNDA4OTU3MiAxMDQuNjM1NDA4LDQ4LjY2NTU4MyA5Mi41MzA1MTI3LDY1LjQzMjkzOTMgQzkxLjc2ODE4NzksNjYuNTc2NjI1OCA5MS4xMDA1NTU5LDY3Ljc2MDE4MjYgOTAuNTA1Mjg4Nyw2OC45Njc0NjI3IEM5OC4wNjY3MzY1LDgyLjk3MDU5NDUgOTkuMjI2MTcxOSw5OC45NDM3Mjk3IDkyLjY5NzE3MTUsMTE2LjE3OTc2NCBMOTIuNjk3MTcxNSwxMTYuMTc5NzY0IEw5Mi42OTcxNzE1LDExNi4xNzk3NjQgWiBNNTIuNjA5NzM1NCwxMjcuNzEyMzE4IEM0Ny40NjI4NDczLDk5LjA2Mjc0MzQgNDAuNTEyODE0MSw3Mi40MzgzOTI2IDI4LjM1MjQ5ODYsNDguODgwMDg2MyBMMjguMzUyNDk4Niw0OC44ODAwODYzIEM0MS4zMzA5NTc2LDY2Ljk5NzY1ODYgNTYuNDA2NDA3Niw5My4yNjQ1Njk5IDY0LjM5Njg2MjUsMTIyLjk5NDIzOCBDOTIuNDM1MDIyNyw4OS43NjE1NDQzIDc0LjA5NTE3MjEsNTQuOTQwMjA5MiAyMi4zODc0NjcsNDIuNTg5MzEyNSBDMjcuMTkyODYzOSw1NS4yMjY0Nzk3IDEzLjg4ODY2MjcsNjcuMTcyMjkxNiAxNS45Mzc4MDksODkuOTEyNjUzNSBDMTguOTU2MDA5LDExMi44NTkzNDYgNDQuNjI3MjU0NSwxMjQuNDg3Nzg4IDUyLjYwOTczNTQsMTI3LjcxMjMxOCBMNTIuNjA5NzM1NCwxMjcuNzEyMzE4IEw1Mi42MDk3MzU0LDEyNy43MTIzMTggWiBNMTA4Ljc4MTM0NiwxMjkuNjkwMjk2IEMxNTkuNzEwNTc5LDEyMC45MjEzNjggMTY1LjQ0NTE1OSw4MC42ODMwMjIzIDEzNS44MTA3ODEsMzUuNzkwMTg5MyBDMTMyLjAyOTg1OCw2Mi45NTQ1ODY1IDEyMi41OTM4OTcsOTcuMTg4MjI5OSAxMDguNzgxMzQ2LDEyOS42OTAyOTYgTDEwOC43ODEzNDYsMTI5LjY5MDI5NiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
            url: 'http://mint-ui.github.io/#!/zh-cn',
          },
          {
            title: 'antdv1x',
            logo: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
            url: 'https://1x.antdv.com/components/breadcrumb-cn',
          },
          {
            title: 'nuxtjs',
            logo: 'https://nuxtjs.org/design-kit/colored-logo.svg',
            url: 'https://nuxtjs.org/docs/get-started/installation',
          },
        ],
      },
      {
        title: 'vue3.x',
        children: [
          {
            title: 'vue3.x',
            logo: 'https://v3.cn.vuejs.org/logo.png',
            url: 'https://v3.cn.vuejs.org/guide/introduction.html',
          },

          {
            title: 'Pinia',
            logo: 'https://pinia.vuejs.org/logo.svg',
            url: 'https://pinia.vuejs.org/introduction.html',
            comment: 'Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。',
          },
          {
            title: 'element-plus',
            logo: 'https://element-plus.gitee.io/images/element-plus-logo.svg',
            url: 'https://element.eleme.cn/#/zh-CN/component/installation',
          },
          {
            title: 'naiveui',
            logo: 'https://www.naiveui.com/assets/naivelogo.93278402.svg',
            url: 'https://www.naiveui.com/zh-CN/light/docs/installation',
          },
          {
            title: 'antdv3x',
            logo: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
            url: 'https://antdv.com/docs/vue/introduce-cn',
          },
        ],
      },
      {
        title: 'React',
        children: [
          {
            title: 'React',
            logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
            url: 'https://react.docschina.org/',
          },
          {
            title: 'React生命周期',
            logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
            url: ' https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/',
          },
          {
            title: 'reactrouter',
            logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
            url: ' https://reactrouter.com/docs/en/v6',
            comment:
              'http://react-guide.github.io/react-router-cn/docs/guides/basics/RouteConfiguration.html',
          },
          {
            title: 'react-redux',
            logo: 'http://cn.redux.js.org/img/redux.svg',
            url: 'https://react-redux.js.org/',
          },
          {
            title: 'redux',
            logo: 'http://cn.redux.js.org/img/redux.svg',
            url: 'http://cn.redux.js.org/',
          },
          {
            title: 'dva',
            logo: 'dva',
            url: 'https://dvajs.com/guide/',
          },
          {
            title: 'MobX',
            logo: 'MobX',
            url: 'https://cn.mobx.js.org/',
          },
          {
            title: 'antd',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            url: 'https://ant.design/docs/react/introduce-cn',
          },
          {
            title: 'antd-mobile',
            logo: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
            url: 'https://mobile.ant.design/zh',
          },
          {
            title: 'reactnative',
            logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
            url: ' https://reactnative.dev/',
          },
          {
            title: 'nextjs',
            logo: 'https://www.nextjs.cn/static/images/nextjs-logo.png',
            url: 'https://www.nextjs.cn/',
          },
        ],
      },
      {
        title: 'Node',
        children: [
          {
            title: 'Node',
            logo: 'http://img.nodejs.cn/logo.svg',
            url: 'http://nodejs.cn/',
          },
          {
            title: 'eggjs',
            logo: 'https://zos.alipayobjects.com/rmsportal/JFKAMfmPehWfhBPdCjrw.svg',
            url: 'https://www.eggjs.org/zh-CN/intro',
          },
          {
            title: 'expressjs',
            logo: 'https://www.expressjs.com.cn/images/favicon.png',
            url: 'https://www.expressjs.com.cn/',
          },
          {
            title: 'ejs',
            logo: 'https://ejs.bootcss.com/assets/images/ejs-logo.png',
            url: ' https://ejs.bootcss.com/',
          },
          {
            title: 'koa',
            logo: 'https://koa.bootcss.com/public/images/koa-logo.png',
            url: ' https://koa.bootcss.com/',
          },
        ],
      },
      {
        title: 'JavaScript 库',
        children: [
          {
            title: 'axios',
            logo: 'http://www.axios-js.com/logo.svg',
            url: 'http://www.axios-js.com/zh-cn/docs/',
          },
          {
            title: 'fetch',
            logo: 'https://www.w3cschool.cn/attachments/image/20180120/1516435973599983.png',
            url: 'https://zh.javascript.info/fetch',
            comment:
              'https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html；https://www.w3cschool.cn/fetch_api/',
          },
          {
            title: 'mockjs',
            logo: 'http://mockjs.com/assets/img/logo-2.svg',
            url: 'http://mockjs.com/',
          },
          {
            title: 'echarts',
            logo: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/logo.png?_v_=20200710_1',
            url: 'https://echarts.apache.org/zh/index.html',
          },
          {
            title: 'jquery',
            logo: 'https://www.jquery123.com/assets/images/jquery-logo-md.png',
            url: 'https://www.jquery123.com/',
          },
          {
            title: 'jquery插件库',
            logo: 'https://www.jq22.com/img/logo.png',
            url: 'https://www.jq22.com/mem9',
          },

          {
            title: 'Bootstrap',
            logo: 'https://v4.bootcss.com/bootstrap-logo.png',
            url: 'https://www.bootcss.com/',
          },
          {
            title: 'lodashjs',
            logo: 'https://www.lodashjs.com/img/lodash.png',
            url: 'https://www.lodashjs.com/',
            comment:
              'Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。',
          },
          {
            title: 'momentjs',
            logo: 'http://momentjs.cn/static/img/moment-favicon.png',
            url: 'http://momentjs.cn/',
          },
          {
            title: 'swiper',
            logo: 'https://www.swiper.com.cn/templets/default/images/logo.png',
            url: 'https://www.swiper.com.cn/',
          },
          {
            title: 'TypeScript',
            logo: 'https://www.tslang.cn/assets/images/logo_nocircle.svg',
            url: 'https://www.tslang.cn/',
          },
          {
            title: 'Fabric',
            logo: 'Fabric',
            url: 'http://www.321332211.com/thread?topicId=249',
          },
          {
            title: 'es6',
            logo: 'https://es6.ruanyifeng.com/favicon.ico',
            url: 'https://es6.ruanyifeng.com/',
          },
          {
            title: 'threejs',
            logo: 'threejs',
            url: 'http://www.webgl3d.cn/',
          },
        ],
      },
      {
        title: '构建打包',
        children: [
          {
            title: 'webpack',
            logo: 'https://www.webpackjs.com/32dc115fbfd1340f919f0234725c6fb4.png',
            url: 'https://www.webpackjs.com/concepts/',
          },
          {
            title: 'vite',
            logo: 'https://cn.vitejs.dev/logo.svg',
            url: 'https://cn.vitejs.dev/guide/',
          },
          {
            title: 'gulp',
            logo: 'https://www.gulpjs.com.cn/img/gulp-white-text.svg',
            url: 'https://www.gulpjs.com.cn/',
          },
          {
            title: 'babel',
            logo: 'https://www.babeljs.cn/img/babel.png',
            url: 'https://www.babeljs.cn/',
          },
        ],
      },
      {
        title: '小程序|公众号',
        children: [
          {
            title: '微信公众平台',
            logo: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/77df7d30-4f2d-11eb-bd01-97bc1429a9ff.png',
            url: 'https://mp.weixin.qq.com/',
          },
          {
            title: '原生小程序文档',
            logo: '',
            url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
          },
          {
            title: 'uniapp',
            logo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1ae87107-2943-4ba6-be2b-390ca27c6260.png',
            url: 'https://uniapp.dcloud.io/',
          },
          {
            title: 'taro',
            logo: 'https://img20.360buyimg.com/ling/jfs/t1/20876/36/12835/3043/5c9c2929Ed18cfb11/15b1c03ec830ab8e.png',
            url: 'https://taro-docs.jd.com/taro/docs/',
          },
          {
            title: 'wepy',
            logo: 'https://wepyjs.github.io/wepy-docs/static/img/logo-green.png',
            url: 'https://wepyjs.github.io/wepy-docs/2.x/#/',
          },
          {
            title: 'mpvue',
            logo: 'http://mpvue.com/assets/img/logo.0aaccdfd.png',
            url: 'http://mpvue.com/#_3',
          },
          {
            title: 'uviewui',
            logo: 'https://www.uviewui.com/common/logo.png',
            url: 'https://www.uviewui.com/',
            comment: 'uView是uni-app生态专用的UI框架',
          },
        ],
      },
      {
        title: '其他',
        children: [
          {
            title: '冷r',
            logo: 'https://upload.jianshu.io/users/upload_avatars/18847198/dd6f1b19-02b3-4133-87cd-be268b0fdfb9?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
            url: 'https://www.jianshu.com/u/c9de7c4688e7',
          },
          {
            title: '低代码平台',
            logo: 'NULLBUG',
            url: 'https://lc-editor.com/',
          },
          {
            title: '二维码生成',
            logo: 'qrcode',
            url: 'https://sjq4499.github.io/vite-vue3/#/tool?activeName=qrcode&isHideTab=true',
          },
          {
            title: '图片压缩',
            logo: 'Images',
            url: 'https://sjq4499.github.io/vite-vue3/#/tool?activeName=compressImages&isHideTab=true',
          },
          {
            title: 'petpet',
            logo: 'petpet',
            url: 'https://benisland.neocities.org/petpet/',
          },
          {
            title: '在线ps',
            logo: 'photoshop',
            url: 'https://www.tuyitu.com/photoshop/',
          },
          {
            title: '网易邮箱',
            logo: 'data:image/png;base64,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',
            url: 'https://mail.163.com/#return',
          },
          {
            title: 'leetcode',
            logo: 'https://static.leetcode-cn.com/cn-mono-assets/production/assets/logo-dark-cn.c42314a8.svg',
            url: 'https://leetcode-cn.com/',
          },
          {
            title: '今日诗词',
            logo: 'https://www.jinrishici.com/img/logo.png',
            url: 'https://www.jinrishici.com/#',
          },
          {
            title: '百度翻译',
            logo: '翻译',
            url: 'https://fanyi.baidu.com/?aldtype=16047#zh/en/',
          },
        ],
      },
    ]);
    const handleClick = (data) => {
      window.open(data.url);
    };
    return {
      likeJson,
      handleClick,
    };
  },
});
</script>
<style lang="scss" scoped>
.child_box {
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-row-gap: 16px;
  justify-content: space-between;
  .child_item {
    display: flex;
    flex-direction: column;
    border: solid 1px #ccc;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    min-height: 180px;
    .child_logo {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      .logo {
        width: 100%;
        position: relative;
        filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.5));
      }
    }
    .child_title {
      text-align: center;
      font-size: 18px;
    }
  }
  .child_item:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
