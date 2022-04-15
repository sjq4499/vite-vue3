<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-15 15:09:10
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-15 15:09:10
-->
<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-14 14:06:14
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-15 14:48:48
-->
<template>
  <h1>生成二维码</h1>
  <div>内容： <el-input v-model="value" placeholder=""></el-input></div>
  <div class="qrcode">
    <canvas id="canvas"></canvas>
  </div>
  <el-button type="primary" @click="saveQrcode('#canvas')">保存图片</el-button>
  <img :src="imgUrl" id="img" alt="" />
  <el-button type="primary" @click="saveQrcode('#img')">保存图片</el-button>
</template>
<script>
import { defineComponent, ref, reactive, onMounted, watchEffect } from "vue";
import Qrcode from "qrcode";
import domtoimage from "dom-to-image";
import { AwesomeQR } from "awesome-qr";

export default defineComponent({
  name: "Qrcode",
  setup() {
    const qrcodeUrl = ref("200");
    const value = ref("二维码内容");
    const imgUrl = ref("");
    const qrOptions = reactive({
      // errorCorrectionLevel: "H", //纠错级别 L, M, Q, H
      // type: "image/jpeg",//数据 URI 格式。可能的值为：image/png, image/jpeg, image/webp。
      // quality: 0.3, //图像质量
      // margin: 1,
      color: {
        // 必须是rgba
        // dark: "#00000000", //前背景
        // light: "#f5f5f5f5", //背景色
      },
    });
    const qrCode = (url) => {
      console.log(qrOptions);
      let canvas = document.getElementById("canvas");
      Qrcode.toCanvas(canvas, url || value.value, qrOptions, function (error) {
        if (error) console.error(error);
      });
    };
    const saveQrcode = (dom) => {
      domtoimage.toPng(document.querySelector(dom)).then((imgurl) => {
        var a = document.createElement("a"); // 创建一个a节点插入的document
        var event = new MouseEvent("click"); // 模拟鼠标click点击事件
        a.download = new Date() * 1; // 设置a节点的download属性值
        a.href = imgurl; // 将图片的src赋值给a节点的href
        a.dispatchEvent(event); // 触发鼠标点击事件
      });
    };
    const createQrcode = () => {
      new AwesomeQR({
        text: value.value,
      })
        .draw()
        .then((dataUri) => {
          imgUrl.value = dataUri;
          console.log(dataUri);
        });
    };
    onMounted(() => {
      qrCode();
      createQrcode();
    });
    watchEffect(() => {
      if (qrCode) qrCode();
      createQrcode();
    });

    return {
      qrcodeUrl,
      value,
      imgUrl,
      qrCode,
      saveQrcode,
    };
  },
});
</script>
<style lang="scss" scoped>
.qrcode {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  text-align: center;
  #canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
