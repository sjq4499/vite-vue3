<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-22 10:43:33
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-22 10:47:59
-->
<template>
  <div class="">
    子组件
    <div class="name">名字：{{ name }}</div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  props: ["name"],
  setup(props, context) {
    console.log(props, context);
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
