<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-22 10:15:40
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-22 10:46:23
-->
<template>
  <div class="main">
    <Child :name="name"></Child>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
import Child from "@/components/child.vue";

export default defineComponent({
  components: { Child },
  setup() {
    return {
      name: ref("孙孙孙"),
    };
  },
});
</script>
<style lang="scss" scoped></style>
