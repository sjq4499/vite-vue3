<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-30 10:09:58
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-31 14:01:53
-->
<template>
  <div class="main">
    <div class="boder_image box">boder_image</div>
    <div class="boder_radius box">boder_radius</div>

    <div class="gradient_radius1 box out">
      <div class="in">111gradient_radius<br />两层元素</div>
    </div>
    <div class="gradient_radius2 box">222gradient_radius<br />伪类</div>
    <div class="gradient_radius3 box">333gradient_radius<br />clip-path</div>
    <div class="gradient_radius4 box">
      444gradient_radius<br />background-origin、 background-clip
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "GradientRadius",
});
</script>
<style lang="scss" scoped>
.box {
  width: 200px;
  height: 130px;
  text-align: center;
  display: inline-grid;
}
.boder_image {
  border: solid 4px;
  // 渐变
  border-image: linear-gradient(
      135deg,
      rgba(183, 40, 255, 1),
      rgba(40, 112, 255, 1)
    )
    2 2;
}
.boder_radius {
  // 圆角
  border: solid 4px;
  border-radius: 10px;
}
// 方法1
.gradient_radius1 {
  &.out {
    border-radius: 10px;
    padding: 4px;
    background: linear-gradient(
      135deg,
      rgba(183, 40, 255, 1),
      rgba(40, 112, 255, 1)
    );
  }
  .in {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 10px;
  }
}
// 方法2
.gradient_radius2 {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  padding: 4px;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid;
    border-image: linear-gradient(
        135deg,
        rgba(183, 40, 255, 1),
        rgba(40, 112, 255, 1)
      )
      1;
  }
}
// 方法3
.gradient_radius3 {
  position: relative;
  border: 4px solid;
  border-image: linear-gradient(
      135deg,
      rgba(183, 40, 255, 1),
      rgba(40, 112, 255, 1)
    )
    1;
  clip-path: inset(0 round 10px);
  // inset() : 定义一个矩形 ；inset()可以传入5个参数，分别对应top,right,bottom,left的裁剪位置,round radius（可选，圆角）
}
// 方法4
.gradient_radius4 {
  border: solid 4px transparent;
  border-radius: 10px;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(135deg, rgba(183, 40, 255, 1), rgba(40, 112, 255, 1));
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>
