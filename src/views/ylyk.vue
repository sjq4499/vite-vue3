<template>
  <div class="main">
    <el-form label-width="auto">
      <el-form-item label="test">
        <el-input
          v-model="testUrl"
          placeholder="Please input"
          show-word-limit
          type="textarea"
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="ip">
        <el-input
          v-model="ip"
          placeholder="Please input"
          show-word-limit
          type="textarea"
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="localhost">
        <el-input
          v-model="localUrl"
          placeholder="Please input"
          show-word-limit
          type="textarea"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
  setup() {
    let list = reactive([]);
    let testUrl = ref(
      'https://new-wx.ylyk.com/test/ylyk/payment.html?shareCode=dXNlck5g==#/goods'
    );
    let ip = ref('http://172.18.11.72:9527');
    let localUrl = ref('');
    const handleChange = () => {
      // localUrl.value = ip.value + testUrl.value.split('?')[1];
      localUrl.value = testUrl.value.replace(
        /https?:\/\/new-wx\.ylyk\.com\/test\/ylyk/,
        ip.value
      );
    };
    handleChange();
    return {
      list,
      testUrl,
      ip,
      localUrl,
      handleChange,
    };
  },
});
</script>
<style lang="scss" scoped></style>
