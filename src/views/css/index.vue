<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-31 09:29:10
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-31 16:18:57
-->
<template>
  <div class="">
    <component :is="'GradientRadius'"></component>
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
    return;
  },
});
</script>
<style lang="scss" scoped></style>
