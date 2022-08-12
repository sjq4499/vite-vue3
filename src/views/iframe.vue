<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2021-12-07 13:55:53
 * @LastEditors: sjq
 * @LastEditTime: 2022-08-12 17:03:27
-->

<template>
  <n-input v-model:value="value"></n-input>
  <iframe
    v-if="value"
    :src="value"
    frameborder="0"
    style="width: 100%; height: 100vh"
  ></iframe>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    let value = ref('');
    return {
      value,
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
