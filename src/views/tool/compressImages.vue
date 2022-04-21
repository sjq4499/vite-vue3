<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-21 09:23:57
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-21 10:58:19
-->
<template>
  <div class="">
    <n-h1 prefix="bar" align-text>压缩图片</n-h1>
    <div>
      <n-upload
        action=""
        list-type="image-card"
        v-model="fileObj.url"
        :customRequest="customRequest"
        accept=".png,.jpg,.jpeg"
        :max="1"
      >
        点击上传
      </n-upload>
      <div class="slider">
        <n-slider
          :step="10"
          v-model:value="progress"
          :format-tooltip="formatTooltip"
        />
        {{ progress }}
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
import { fileToBase64 } from "@/utils/index.js";

export default defineComponent({
  name: "CompressImages",
  setup() {
    let fileObj = reactive({
      url: "",
      size: "",
      name: "",
      type: "",
    });
    let progress = ref(100);
    const customRequest = (file) => {
      let files = file.file.file;
      fileToBase64(files, (data) => {
        fileObj.size = Math.round((files.size / 1024) * 100) / 100;
        fileObj.name = files.name;
        fileObj.type = files.type;
        fileObj.url = data;
        console.log(fileObj);
      });
    };
    return {
      fileObj,
      progress,
      customRequest,
      formatTooltip: (value) => `${value}%`,
    };
  },
});
</script>
<style lang="scss" scoped></style>
