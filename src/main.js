/*
 * @Descripttion:
 * @Author: sjq
 * @Date: 2021-12-07 13:55:53
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-21 09:53:04
 */
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style/m-public.scss";
import { router } from "@/router/index";
import tab from "@/filter/tab";
const app = createApp(App);

app.config.globalProperties.$filters = {
  tabZN: tab,
};
app.use(ElementPlus);
app.use(router);
app.mount("#app");
