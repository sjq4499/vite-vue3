/*
 * @Descripttion:
 * @Author: sjq
 * @Date: 2021-12-07 13:55:53
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-14 09:42:36
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  ElementPlusResolver,
  NaiveUiResolver,
} from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-vue3/",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(), NaiveUiResolver()],
    }),
  ],
  alias: {
    "@": "/src/",
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "./src/style/index.scss";',
      },
    },
  },
});
