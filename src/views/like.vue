<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-26 16:06:00
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-27 10:06:47
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
            <img class="logo" :src="child.logo" alt="" />
          </div>
          <div class="child_title">{{ child.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  setup() {
    const likeJson = reactive([
      {
        title: "vue2.x",
        children: [
          {
            title: "vue2.x",
            logo: "https://v3.cn.vuejs.org/logo.png",
            url: "https://cn.vuejs.org/v2/guide/index.html",
          },
          {
            title: "vue-cli",
            logo: "https://v3.cn.vuejs.org/logo.png",
            url: "https://cli.vuejs.org/zh/",
          },
          {
            title: "vue-router",
            logo: "https://v3.cn.vuejs.org/logo.png",
            url: "https://router.vuejs.org/zh/",
          },
          {
            title: "vueX",
            logo: "https://v3.cn.vuejs.org/logo.png",
            url: "https://vuex.vuejs.org/zh/",
          },
          {
            title: "element-ui",
            logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjMwcHgiIGhlaWdodD0iMzBweCIgdmlld0JveD0iMCAwIDM4IDQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MCAoMzM3NjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlNoYXBlIENvcHk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0idjIuMi4wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i6aaW6aG1Lem7mOiupOaViOaenC1jb3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MC4wMDAwMDAsIC0xOS4wMDAwMDApIiBmaWxsPSIjNDA5RUZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTIxMi4xMzU0NDEsNDUuMTU3ODA3NyBaIE0xMDMuNDE2NTAyLDQ2LjIxNzU1MTEgQzEwMy40MDcwMDgsNDcuNzk0NTY4MiAxMDIuNTg3ODQxLDQ4LjE0NjM0NzQgMTAyLjU4Nzg0MSw0OC4xNDYzNDc0IEMxMDIuNTg3ODQxLDQ4LjE0NjM0NzQgODguNDUyMDQ3OCw1Ni4zMTQ1MDg3IDg3LjUzMjk5NTYsNTYuODI2Mjc1MSBDODYuNjIyMzM2LDU3LjIxNzE1NjEgODYuMDEzNjcwMyw1Ni44MjYyNzUxIDg2LjAxMzY3MDMsNTYuODI2Mjc1MSBDODYuMDEzNjcwMyw1Ni44MjYyNzUxIDcxLjIyMjU3MDYsNDguMjQ3OTU3MiA3MC42ODI2OTYyLDQ3Ljg3MDg0NDQgQzcwLjE0MjY4NDMsNDcuNDkzNzMxNiA3MC4xMzAxNjQzLDQ2LjkwNjM3NzQgNzAuMTMwMTY0Myw0Ni45MDYzNzc0IEM3MC4xMzAxNjQzLDQ2LjkwNjM3NzQgNzAuMTQ1MDIzMiwyOS45MTk5MTc0IDcwLjEzMDE2NDMsMjkuMTMzMzM2NCBDNzAuMTE1MzA1MywyOC4zNDY2MTc3IDcxLjA5Njk1NzYsMjcuNzU1NTQ2MSA3MS4wOTY5NTc2LDI3Ljc1NTU0NjEgTDg1Ljg3NTUzNzMsMTkuMjEzNDM4NyBDODYuNzg1MzcxNCwxOC43MzMyMDE2IDg3LjY3MTEyODYsMTkuMjEzNDM4NyA4Ny42NzExMjg2LDE5LjIxMzQzODcgQzg3LjY3MTEyODYsMTkuMjEzNDM4NyAxMDAuNzI2NjIzLDI2LjgwMjA5MzcgMTAyLjE3MzQ0MiwyNy42MTc3MjU3IEMxMDMuNTkxNTA3LDI4LjI5MTk1NzcgMTAzLjQxNjUwMiwyOS42ODQzNDI0IDEwMy40MTY1MDIsMjkuNjg0MzQyNCBDMTAzLjQxNjUwMiwyOS42ODQzNDI0IDEwMy40MjUzMDcsNDQuNzUxOTE5MiAxMDMuNDE2NTAyLDQ2LjIxNzU1MTEgTDEwMy40MTY1MDIsNDYuMjE3NTUxMSBaIE05Ny41MTYwMTA1LDI5LjE2OTEzMzkgQzk0LjQ5MDAxNzMsMjcuNDI3NDQ4MyA4Ny4zNjE1ODQyLDIzLjI5NzEwNjMgODcuMzYxNTg0MiwyMy4yOTcxMDYzIEM4Ny4zNjE1ODQyLDIzLjI5NzEwNjMgODYuNjY2MTAzOSwyMi45MjEyMzI2IDg1Ljk1MTc3NDcsMjMuMjk3MTA2MyBMNzQuMzQ4NzQwNiwyOS45ODIxNSBDNzQuMzQ4NzQwNiwyOS45ODIxNSA3My41NzgwMDI1LDMwLjQ0NDkwMTQgNzMuNTg5Njk3LDMxLjA2MDQ4MDUgQzczLjYwMTM5MTUsMzEuNjc2MDU5NyA3My41ODk2OTcsNDQuOTY5ODcwOCA3My41ODk2OTcsNDQuOTY5ODcwOCBDNzMuNTg5Njk3LDQ0Ljk2OTg3MDggNzMuNTk5NDY1NCw0NS40Mjk1OTMyIDc0LjAyMzQ5NTEsNDUuNzI0NjQ3MiBDNzQuNDQ3Mzg3Myw0Ni4wMTk3MDExIDg2LjA2MDE4OTgsNTIuNzMzMjQ1MSA4Ni4wNjAxODk4LDUyLjczMzI0NTEgQzg2LjA2MDE4OTgsNTIuNzMzMjQ1MSA4Ni41MzgxNTIsNTMuMDM5MTc1OSA4Ny4yNTMwMzE1LDUyLjczMzI0NTEgQzg3Ljk3NDY1MjYsNTIuMzMyNzI2MiA5OS4wNzMwMzM1LDQ1Ljk0MDI1ODIgOTkuMDczMDMzNSw0NS45NDAyNTgyIEM5OS4wNzMwMzM1LDQ1Ljk0MDI1ODIgOTkuNzE2MjMyNSw0NS42NjQ4OTI5IDk5LjcyMzY2MTksNDQuNDMwNzA1NiBDOTkuNzI1NzI1Nyw0NC4wNzQ3OTU5IDk5LjcyNjU1MTIsNDIuNjkzMjg4MSA5OS43MjY2ODg3LDQwLjk1NzUyMjkgTDg2LjY2MDA1MDIsNDguODc1MjM5NCBMODYuNjYwMDUwMiw0NS44NDYyMjEgQzg2LjY2MDA1MDIsNDQuNjAyMTIwNSA4Ny42MjMxMjg5LDQzLjc4MDk4MTEgODcuNjIzMTI4OSw0My43ODA5ODExIEw5OS4xODA3NjA3LDM2LjgxNjU3OTMgQzk5LjYxNjg5NzgsMzYuMzYxMTI1MSA5OS43MDY4NzY4LDM1LjYzMTU0NDcgOTkuNzI1NDUwNSwzNS4zNTU2Mjg3IEM5OS43MjUwMzc4LDM0LjA5MDQ2MjcgOTkuNzI0NDg3NCwzMi45ODUyODQxIDk5LjcyNDA3NDcsMzIuMjg1MTY3OCBMODYuNjYwMDUwMiw0MC4yMDEyMzIxIEw4Ni42NjAwNTAyLDM3LjAzNDUzMSBDODYuNjYwMDUwMiwzNS43OTA0MzA1IDg3LjQ4NTU0NjIsMzUuMjQ0NjU2NCA4Ny40ODU1NDYyLDM1LjI0NDY1NjQgTDk3LjUxNjAxMDUsMjkuMTY5MTMzOSBaIiBpZD0iU2hhcGUtQ29weSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
            url: "https://element.eleme.cn/#/zh-CN/component/installation",
          },
          {
            title: "vant",
            logo: "https://cdn.jsdelivr.net/npm/@vant/assets/logo.png",
            url: "https://youzan.github.io/vant/#/zh-CN/home",
          },
          {
            title: "View UI",
            logo: "https://file.iviewui.com/dist/bf31433c102ed612fbe82afe000dda40.png",
            url: "https://www.iviewui.com/docs/introduce",
          },
          {
            title: "mint-ui",
            logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE3NXB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTc1IDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy44LjIgKDI5NzUzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7nu7/lj7ZAMXg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iMjU2LWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MC4wMDAwMDAsIC0yOC4wMDAwMDApIiBmaWxsPSIjMjZhMmZmIj4KICAgICAgICAgICAgPGcgaWQ9Iue7v+WPtiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAyOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4zMDQ2ODgsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTgzLjcyOTQ4OTUsMTU1LjAxMTg3NiBDODIuMTA5MzUsMTUxLjY2MDE1OSA4MC4wMzY0ODA3LDE0Ny4xMTY3MTIgNzcuOTA3NTkzMiwxNDEuNzU1NTIgQzc1Ljc3ODcwNTcsMTQ0LjUwMzU5NyA3My40NTk2MzU3LDE0Ny4yNjc0MjMgNzAuOTU3NTYsMTUwLjA2MzU0NCBMNjYuOTk0NDI4MywxNTQuNTc1MDk1IEw2MS45NzQ1Mjc5LDE1Mi40NTQzOCBDNDcuMzA0MTYyNSwxNDYuMjY2ODcxIDQuNzYyMjk2MDksMTI1LjU4MzgyOSAwLjM3NzczMjYxNyw5Mi4xNzYzMDM1IEMtMi43NTk0ODA4Niw1Ny4zNzA5MTY2IDE3LjYwNTc5MzIsMzkuMDg2NDg2MSAxMC4yNDI5MDA0LDE5LjczNzcxMTcgQzM5Ljk0MTA3MDUsMjYuODM4NjU0OSA2My4zNTY0NDA4LDM4LjMzOTkxMDQgNzguMzM2NjAwMiw1My4wNTc5MjExIEMxMDEuODM5Mjg3LDIzLjA1NzkzMDkgMTMxLjk0Mjk0LDIxLjg4MjM0OCAxMzkuOTcyNjY4LDAgQzE5NS43MzkzOTMsNzcuOTQyNzE5OSAxODYuODQzMjc5LDE0OS4xODk5OCA5My44ODgzMDM5LDE2MC42NzQ4ODkgQzg2LjAyNTIzNTQsMTc1LjEzOTEyMyA3Ny4yNjQyODIsMTg4LjU3MDExMyA2Ny43NDA4MDQ5LDIwMCBMNTQuNzA2NzI2NiwxOTEuOTA2MjggQzY1Ljg4MjIzOTUsMTgxLjE3NTUyMyA3NS40NDU1ODczLDE2OC42NDk3OTQgODMuNzI5NDg5NSwxNTUuMDExODc2IEw4My43Mjk0ODk1LDE1NS4wMTE4NzYgTDgzLjcyOTQ4OTUsMTU1LjAxMTg3NiBaIE05Mi42OTcxNzE1LDExNi4xNzk3NjQgQzk0LjYzNTI3ODUsMTIxLjM5ODAyMSA5Ni42MjEwMzA3LDEyNS42MjM1IDk3Ljg5OTg3ODMsMTI4LjE4ODc3MSBDMTExLjQzNDUzMSw5OC44MDA1OTQ1IDEyMC42NzE5MzgsNjYuNjYzOTQyMiAxMjguMTE0MzcyLDM3LjA2OTAzNjkgQzEyMC4wOTIwMjEsNDUuNDA4OTU3MiAxMDQuNjM1NDA4LDQ4LjY2NTU4MyA5Mi41MzA1MTI3LDY1LjQzMjkzOTMgQzkxLjc2ODE4NzksNjYuNTc2NjI1OCA5MS4xMDA1NTU5LDY3Ljc2MDE4MjYgOTAuNTA1Mjg4Nyw2OC45Njc0NjI3IEM5OC4wNjY3MzY1LDgyLjk3MDU5NDUgOTkuMjI2MTcxOSw5OC45NDM3Mjk3IDkyLjY5NzE3MTUsMTE2LjE3OTc2NCBMOTIuNjk3MTcxNSwxMTYuMTc5NzY0IEw5Mi42OTcxNzE1LDExNi4xNzk3NjQgWiBNNTIuNjA5NzM1NCwxMjcuNzEyMzE4IEM0Ny40NjI4NDczLDk5LjA2Mjc0MzQgNDAuNTEyODE0MSw3Mi40MzgzOTI2IDI4LjM1MjQ5ODYsNDguODgwMDg2MyBMMjguMzUyNDk4Niw0OC44ODAwODYzIEM0MS4zMzA5NTc2LDY2Ljk5NzY1ODYgNTYuNDA2NDA3Niw5My4yNjQ1Njk5IDY0LjM5Njg2MjUsMTIyLjk5NDIzOCBDOTIuNDM1MDIyNyw4OS43NjE1NDQzIDc0LjA5NTE3MjEsNTQuOTQwMjA5MiAyMi4zODc0NjcsNDIuNTg5MzEyNSBDMjcuMTkyODYzOSw1NS4yMjY0Nzk3IDEzLjg4ODY2MjcsNjcuMTcyMjkxNiAxNS45Mzc4MDksODkuOTEyNjUzNSBDMTguOTU2MDA5LDExMi44NTkzNDYgNDQuNjI3MjU0NSwxMjQuNDg3Nzg4IDUyLjYwOTczNTQsMTI3LjcxMjMxOCBMNTIuNjA5NzM1NCwxMjcuNzEyMzE4IEw1Mi42MDk3MzU0LDEyNy43MTIzMTggWiBNMTA4Ljc4MTM0NiwxMjkuNjkwMjk2IEMxNTkuNzEwNTc5LDEyMC45MjEzNjggMTY1LjQ0NTE1OSw4MC42ODMwMjIzIDEzNS44MTA3ODEsMzUuNzkwMTg5MyBDMTMyLjAyOTg1OCw2Mi45NTQ1ODY1IDEyMi41OTM4OTcsOTcuMTg4MjI5OSAxMDguNzgxMzQ2LDEyOS42OTAyOTYgTDEwOC43ODEzNDYsMTI5LjY5MDI5NiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
            url: "http://mint-ui.github.io/#!/zh-cn",
          },
          {
            title: "nuxtjs",
            logo: "https://nuxtjs.org/design-kit/colored-logo.svg",
            url: "https://nuxtjs.org/docs/get-started/installation",
          },
        ],
      },
      {
        title: "vue3.x",
        children: [
          {
            title: "vue3.x",
            logo: "https://v3.cn.vuejs.org/logo.png",
            url: "https://v3.cn.vuejs.org/guide/introduction.html",
          },

          {
            title: "Pinia",
            logo: "https://pinia.vuejs.org/logo.svg",
            url: "https://pinia.vuejs.org/introduction.html",
            comment: "Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。",
          },
          {
            title: "element-plus",
            logo: "https://element-plus.gitee.io/images/element-plus-logo.svg",
            url: "https://element.eleme.cn/#/zh-CN/component/installation",
          },
          {
            title: "naiveui",
            logo: "https://www.naiveui.com/assets/naivelogo.93278402.svg",
            url: "https://www.naiveui.com/zh-CN/light/docs/installation",
          },
        ],
      },
      {
        title: "React",
        children: [
          {
            title: "React",
            logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
            url: "https://react.docschina.org/",
          },
        ],
      },
      {
        title: "Node",
        children: [
          {
            title: "Node",
            logo: "http://img.nodejs.cn/logo.svg",
            url: "http://nodejs.cn/",
          },
        ],
      },
      {
        title: "JavaScript 库",
        children: [
          {
            title: "axios",
            logo: "http://www.axios-js.com/logo.svg",
            url: "http://www.axios-js.com/zh-cn/docs/",
          },
          {
            title: "fetch",
            logo: "https://www.w3cschool.cn/attachments/image/20180120/1516435973599983.png",
            url: "https://zh.javascript.info/fetch",
            comment:
              "https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html；https://www.w3cschool.cn/fetch_api/",
          },
          {
            title: "mockjs",
            logo: "mockjs",
            url: "http://mockjs.com/",
          },
          {
            title: "echarts",
            logo: "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/logo.png?_v_=20200710_1",
            url: "https://echarts.apache.org/zh/index.html",
          },
          {
            title: "jquery",
            logo: "https://www.jquery123.com/assets/images/jquery-logo-md.png",
            url: "https://www.jquery123.com/",
          },
          {
            title: "Bootstrap",
            logo: "https://v4.bootcss.com/bootstrap-logo.png",
            url: "https://www.bootcss.com/",
          },
          {
            title: "lodashjs",
            logo: "https://www.lodashjs.com/img/lodash.png",
            url: "https://www.lodashjs.com/",
            comment:
              "Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。",
          },
          {
            title: "momentjs",
            logo: "moment",
            url: "http://momentjs.cn/",
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
    .child_logo {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .logo {
        width: 100%;
        position: relative;
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
