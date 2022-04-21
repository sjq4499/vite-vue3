<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-31 09:29:10
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-21 11:23:54
-->
<template>
  <div class="main">
    <div class="tab" v-if="isHideTab">
      <el-button
        type="success"
        class="list"
        v-for="item in res_components"
        :key="item.name"
        @click="handleClick(item)"
      >
        {{ $filters.tabZN(item.name) }}
      </el-button>
    </div>
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
    const isHideTab = ref(false);
    onMounted(() => {
      let query = router.currentRoute.value.query;
      isHideTab.value = !(query.isHideTab === "true");
      activeName.value =
        query.activeName || res_components[Object.keys(res_components)[0]].name;
    });
    let handleClick = (data) => {
      activeName.value = data.name;
    };
    return { res_components, activeName, isHideTab, handleClick };
  },
});
</script>
<style lang="scss" scoped>
.tab {
  button {
    margin-bottom: 12px;
  }
}
</style>
