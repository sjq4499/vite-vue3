<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2021-12-07 13:55:53
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-14 09:43:25
-->

<template>
  <router-view></router-view>
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
<script setup></script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
