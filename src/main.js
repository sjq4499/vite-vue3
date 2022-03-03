/*
 * @Descripttion:
 * @Author: sjq
 * @Date: 2021-12-07 13:55:53
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-03 10:17:52
 */
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style/index.scss";
import { router } from "@/router/index";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.mount("#app");
