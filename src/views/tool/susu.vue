<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-22 14:04:15
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-22 15:16:43
-->
<template>
  <div id="perspective">
    <div id="wrap">
      <img src="@/assets/watermark1.jpg" />
      <img src="@/assets/watermark1.jpg" />
      <img src="@/assets/watermark1.jpg" />
      <img src="@/assets/watermark1.jpg" />
      <img src="@/assets/watermark1.jpg" />
      <img src="@/assets/watermark1.jpg" />
      <img src="@/assets/watermark1.jpg" />
      <img src="@/assets/watermark1.jpg" />
      <img src="@/assets/watermark1.jpg" />
      <img src="@/assets/watermark1.jpg" />
      <img src="@/assets/watermark1.jpg" />
      <p></p>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "Img",
  setup() {
    return;
  },
});
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  touch-action: pan-y;
}
body {
  background: #000;
  overflow: hidden;
}
#perspective {
  perspective: 800px;
}
#wrap {
  width: 120px;
  height: 180px;
  margin: 0 auto;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(-10deg) rotateY(0deg);
}
#wrap img {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 1px;
  transform: rotateY(0deg) translateZ(0px);
  /*倒影：朝向 偏移 遮盖*/ /*线性渐变(从哪里开始,开始时候的颜色,结束时候的颜色)*/
  -webkit-box-reflect: below 5px -webkit-linear-gradient(top, rgba(0, 0, 0, 0)
        40%, rgba(0, 0, 0, 0.5) 100%);
}
#wrap p {
  width: 1200px;
  height: 1200px;
  background: -webkit-radial-gradient(
    center center,
    600px 600px,
    rgba(244, 23, 234, 0.2),
    rgba(0, 0, 0, 0)
  );
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 102%;
  margin-left: -600px;
  margin-top: -600px;
  transform: rotateX(90deg);
}
</style>
