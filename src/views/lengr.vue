<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-16 14:11:04
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-16 14:37:03
-->
<template>
  <div class="">
    <el-button
      type="success"
      class="list"
      v-for="item in routes"
      :key="item.name"
      @click="goPage(item)"
    >
      {{ item.meta.activeName }}
    </el-button>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
import { routes } from "@/router/index";

export default defineComponent({
  setup() {
    return {
      routes: routes.filter((item) => item.meta && item.meta.activeName),
    };
  },
  methods: {
    goPage(data) {
      this.$router.push(data.path);
    },
  },
});
</script>
<style lang="scss" scoped></style>
