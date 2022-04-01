<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-31 09:29:10
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-01 15:00:03
-->
<template>
  <div class="main">
    <el-button
      type="success"
      class="list"
      v-for="item in res_components"
      :key="item.name"
      @click="handleClick(item)"
    >
      {{ item.name }}
    </el-button>
    <component :is="activeName"></component>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";

// const allComponents = require.context("../css", false, /\.vue$/);
// const allComponents = import.meta.glob("../css/*.vue");
const allComponents = import.meta.globEager("../css/*.vue");
let res_components = {};

Object.keys(allComponents).forEach((item) => {
  let fileName = item.replace(/^\.+[\/\w+]*\/(.*)\.\w+$/, "$1");
  let comp = allComponents[item];
  if (fileName === "index") return;
  let name = comp.default.name;
  res_components[name] = comp.default;
});

export default defineComponent({
  components: { ...res_components },
  name: "css",
  setup() {
    let activeName = ref("");
    return { res_components, activeName };
  },
  methods: {
    handleClick(data) {
      this.activeName = data.name;
    },
  },
});
</script>
<style lang="scss" scoped></style>
