<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-21 09:23:57
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-21 14:17:52
-->
<template>
  <div class="">
    <n-h1 prefix="bar" align-text>压缩图片</n-h1>
    <div>
      <div class="upload_box">
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
      </div>
      <div class="slider flexbox">
        <span>0%</span>
        <n-slider
          :step="1"
          v-model:value="progress"
          :format-tooltip="formatTooltip"
        />
        <span>100%</span>
      </div>
      <div class="flexbox">
        <div class="mr20">源文件大小：{{ fileObj.size }}kb</div>
        <div>压缩率：{{ progress }}%</div>
      </div>
      <div class="flexbox mb10">
        <div class="mr20">压缩后大小：{{ compressObj.size }}kb</div>
        <el-button type="primary" @click="saveImg('#img')" plain
          >下载图片</el-button
        >
      </div>
      <div class="img_box">
        <img id="img" :src="compressObj.url" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, watch } from "vue";
import { fileToBase64 } from "@/utils/index.js";
import Compressor from "compressorjs";

export default defineComponent({
  name: "CompressImages",
  setup() {
    let fileObj = reactive({
      url: "",
      size: 0,
      file: "",
    });
    let compressObj = reactive({
      url: "",
      size: 0,
      file: "",
    });
    let progress = ref(60);
    const compressor = ref(null);

    const customRequest = (file) => {
      let files = file.file.file;
      fileObj.file = files;
      fileObj.size = Math.round((files.size / 1024) * 100) / 100;
      fileToBase64(files, (data) => {
        fileObj.url = data;
        compressorFn();
      });
    };
    const compressorFn = () => {
      let file = fileObj.file;
      console.log(fileObj.file);
      if (!file) {
        return;
      }
      compressor.value = new Compressor(file, {
        quality: 1 - progress.value / 100,
        success(result) {
          compressObj.file = result;
          compressObj.size = Math.round((result.size / 1024) * 100) / 100;
          fileToBase64(result, (data) => {
            compressObj.url = data;
          });
        },
        error(err) {
          console.log(err.message);
        },
      });
    };
    const saveImg = (dom) => {
      let img = document.querySelector(dom);
      var a = document.createElement("a"); // 创建一个a节点插入的document
      var event = new MouseEvent("click"); // 模拟鼠标click点击事件
      a.download = compressObj.file.name || new Date() * 1; // 设置a节点的download属性值
      a.href = img.src; // 将图片的src赋值给a节点的href
      a.dispatchEvent(event); // 触发鼠标点击事件
    };
    watch(progress, () => {
      compressorFn();
    });
    return {
      fileObj,
      compressObj,
      progress,
      compressor,
      customRequest,
      formatTooltip: (value) => `${value}%`,
      saveImg,
    };
  },
});
</script>
<style lang="scss" scoped>
.upload_box {
  display: flex;
  justify-content: center;
  .n-upload {
    width: auto;
  }
}
.slider {
}
.flexbox {
  align-items: center;
}
.img_box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 5px;
  min-height: 300px;
}
</style>
