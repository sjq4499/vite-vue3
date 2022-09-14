<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-31 09:29:10
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-14 10:47:15
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
      {{ $filters.tabZN(item.name) }}
    </el-button>
    <component :is="activeName"></component>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, onMounted } from 'vue';
import { getallComponents } from '@/utils/index';

// const allComponents = import.meta.glob("../css/*.vue");
let res_components = getallComponents(import.meta.globEager('../css/*.vue'));

export default defineComponent({
  components: { ...res_components },
  name: 'Css',
  setup() {
    let activeName = ref('');
    onMounted(() => {
      activeName.value = res_components[Object.keys(res_components)[0]].name;
    });
    let handleClick = (data) => {
      activeName.value = data.name;
    };
    return { res_components, activeName, handleClick };
  },
});
</script>
<style lang="scss" scoped></style>
