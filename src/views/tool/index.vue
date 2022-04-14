<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-31 09:29:10
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-14 15:22:36
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
    <div class="main">
      <component :is="activeName"></component>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import { getallComponents } from "@/utils/index";
import { useRouter } from "vue-router";

let res_components = getallComponents(import.meta.globEager("../tool/*.vue"));

export default defineComponent({
  components: { ...res_components },
  name: "Tool",
  setup() {
    const activeName = ref("");
    const router = useRouter();
    onMounted(() => {
      activeName.value =
        router.currentRoute.value.query.activeName ||
        res_components[Object.keys(res_components)[0]].name;
    });
    let handleClick = (data) => {
      activeName.value = data.name;
    };
    return { res_components, activeName, handleClick };
  },
});
</script>
<style lang="scss" scoped></style>
