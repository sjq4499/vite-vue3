<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-07 16:44:39
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-16 16:19:18
-->

<template>
  <div class="box">
    <ul class="minbox">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ol class="maxbox">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </div>
  <AutoAudios />
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import AutoAudios from '@/components/autoAudios.vue';

export default defineComponent({
  components: {
    AutoAudios,
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
@charset "utf-8";
* {
  margin: 0;
  padding: 0;
}
body {
  /*background: url(../img/preview.png) ;*/
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
}
li {
  list-style: none;
}
.box {
  width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  position: absolute;
  margin-left: 42%;
  margin-top: 22%;
  -webkit-transform-style: preserve-3d;
  -webkit-transform: rotateX(13deg);
  -webkit-animation: move 5s linear infinite;
}
.minbox {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50px;
  top: 30px;
  -webkit-transform-style: preserve-3d;
}
.minbox li {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  background-size: 100%;
}
.minbox li:nth-child(1) {
  background: url(@/assets/img/xiaoyi1.jpg) no-repeat 0 0;
  -webkit-transform: translateZ(50px);
  background-size: 100%;
}
.minbox li:nth-child(2) {
  background: url(@/assets/img/xiaoyi2.jpg) no-repeat 0 0;
  -webkit-transform: rotateX(180deg) translateZ(50px);
  background-size: 100%;
}
.minbox li:nth-child(3) {
  background: url(@/assets/img/xiaoyi3.jpg) no-repeat 0 0;
  -webkit-transform: rotateX(-90deg) translateZ(50px);
  background-size: 100%;
}
.minbox li:nth-child(4) {
  background: url(@/assets/img/xiaoyi4.jpg) no-repeat 0 0;
  -webkit-transform: rotateX(90deg) translateZ(50px);
  background-size: 100%;
}
.minbox li:nth-child(5) {
  background: url(@/assets/img/xiaoyi5.jpg) no-repeat 0 0;
  -webkit-transform: rotateY(-90deg) translateZ(50px);
  background-size: 100%;
}
.minbox li:nth-child(6) {
  background: url(@/assets/img/xiaoyi6.jpg) no-repeat 0 0;
  -webkit-transform: rotateY(90deg) translateZ(50px);
  background-size: 100%;
}
.maxbox li:nth-child(1) {
  background: url(@/assets/img/xiaoyi1.jpg) no-repeat 0 0;
  -webkit-transform: translateZ(50px);
  background-size: 100%;
}
.maxbox li:nth-child(2) {
  background: url(@/assets/img/xiaoyi2.jpg) no-repeat 0 0;
  -webkit-transform: translateZ(50px);
  background-size: 100%;
}
.maxbox li:nth-child(3) {
  background: url(@/assets/img/xiaoyi3.jpg) no-repeat 0 0;
  -webkit-transform: rotateX(-90deg) translateZ(50px);
  background-size: 100%;
}
.maxbox li:nth-child(4) {
  background: url(@/assets/img/xiaoyi4.jpg) no-repeat 0 0;
  -webkit-transform: rotateX(90deg) translateZ(50px);
  background-size: 100%;
}
.maxbox li:nth-child(5) {
  background: url(@/assets/img/xiaoyi5.jpg) no-repeat 0 0;
  -webkit-transform: rotateY(-90deg) translateZ(50px);
  background-size: 100%;
}
.maxbox li:nth-child(6) {
  background: url(@/assets/img/xiaoyi6.jpg) no-repeat 0 0;
  -webkit-transform: rotateY(90deg) translateZ(50px);
  background-size: 100%;
}
.maxbox {
  width: 800px;
  height: 400px;
  position: absolute;
  left: 0;
  top: -20px;
  -webkit-transform-style: preserve-3d;
}
.maxbox li {
  width: 200px;
  height: 200px;
  background: #fff;
  border: 1px solid #ccc;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.2;
  -webkit-transition: all 1s ease;
}
.maxbox li:nth-child(1) {
  -webkit-transform: translateZ(100px);
}
.maxbox li:nth-child(2) {
  -webkit-transform: rotateX(180deg) translateZ(100px);
}
.maxbox li:nth-child(3) {
  -webkit-transform: rotateX(-90deg) translateZ(100px);
}
.maxbox li:nth-child(4) {
  -webkit-transform: rotateX(90deg) translateZ(100px);
}
.maxbox li:nth-child(5) {
  -webkit-transform: rotateY(-90deg) translateZ(100px);
}
.maxbox li:nth-child(6) {
  -webkit-transform: rotateY(90deg) translateZ(100px);
}
.box:hover ol li:nth-child(1) {
  -webkit-transform: translateZ(300px);
  width: 400px;
  height: 400px;
  opacity: 0.8;
  left: -100px;
  top: -100px;
}
.box:hover ol li:nth-child(2) {
  -webkit-transform: rotateX(180deg) translateZ(300px);
  width: 400px;
  height: 400px;
  opacity: 0.8;
  left: -100px;
  top: -100px;
}
.box:hover ol li:nth-child(3) {
  -webkit-transform: rotateX(-90deg) translateZ(300px);
  width: 400px;
  height: 400px;
  opacity: 0.8;
  left: -100px;
  top: -100px;
}
.box:hover ol li:nth-child(4) {
  -webkit-transform: rotateX(90deg) translateZ(300px);
  width: 400px;
  height: 400px;
  opacity: 0.8;
  left: -100px;
  top: -100px;
}
.box:hover ol li:nth-child(5) {
  -webkit-transform: rotateY(-90deg) translateZ(300px);
  width: 400px;
  height: 400px;
  opacity: 0.8;
  left: -100px;
  top: -100px;
}
.box:hover ol li:nth-child(6) {
  -webkit-transform: rotateY(90deg) translateZ(300px);
  width: 400px;
  height: 400px;
  opacity: 0.8;
  left: -100px;
  top: -100px;
}
@keyframes move {
  0% {
    -webkit-transform: rotateX(13deg) rotateY(0deg);
  }
  100% {
    -webkit-transform: rotateX(13deg) rotateY(360deg);
  }
}
</style>
