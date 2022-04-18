<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2021-12-07 13:55:53
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-18 15:48:35
-->

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <router-view></router-view>
  </n-config-provider>

  <!-- <n-watermark
    cross
    fullscreen
    :font-size="16"
    :line-height="16"
    :width="384"
    :height="384"
    :x-offset="12"
    :y-offset="60"
    :image-width="164"
    :image-opacity="0.2"
    :rotate="-15"
    :image="getImageUrl('watermark3.jpg')"
  /> -->

  <n-watermark
    content="冷r"
    cross
    fullscreen
    :font-size="16"
    :line-height="16"
    :width="384"
    :height="384"
    :x-offset="12"
    :y-offset="60"
    :rotate="-15"
  />
</template>
<script>
import { defineComponent } from "vue";
import { zhCN, dateZhCN } from "naive-ui";
import { getImageUrl } from "@/utils/index";

export default defineComponent({
  setup() {
    return {
      zhCN,
      dateZhCN,
      getImageUrl,
    };
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
