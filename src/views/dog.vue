<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-07 15:12:33
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-07 15:18:05
-->
<template>
  <div class="bj">
    <div class="pg1"></div>
    <div class="pg2"></div>
    <div class="st">
      <div class="ear1"></div>
      <div class="ear2"></div>
      <div class="st2"></div>
      <div class="quan"></div>
      <div class="ling"></div>
      <div class="quan2"></div>
      <div class="quan3"></div>
      <div class="quan4"></div>
      <div class="quan5"></div>
      <div class="eye1"></div>
      <div class="eye2"></div>
      <div class="bizi1"></div>
      <div class="bizi2"></div>
      <div class="bizi3"></div>
      <div class="mouth"></div>
      <div class="shetou"></div>
      <div class="xiaba"></div>
      <div class="foot1"></div>
      <div class="foot2"></div>
      <div class="weiba"></div>
      <div class="sheng"></div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({});
</script>
<style>
@keyframes dog {
  70% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1);
  }
}

@keyframes st {
  0%,
  100% {
    height: 40px;
  }

  50% {
    height: 60px;
  }
}

@keyframes wb {
  0% {
    transform: rotate(25deg);
  }

  50% {
    transform: rotate(60deg);
  }

  100% {
    transform: rotate(25deg);
  }
}

.bj {
  height: 100%;
  background-color: darkgray;
  position: relative;
  z-index: 1;
  /* overflow: hidden; */
}

.pg1 {
  width: 260px;
  height: 20px;
  background-color: peru;
  position: absolute;
  left: 89px;
  bottom: 29px;
  border-radius: 240px 240px 0 0;
}

.pg2 {
  width: 200px;
  height: 100px;
  background-color: peru;
  position: absolute;
  left: 117px;
  bottom: 30px;
  border-radius: 25px 25px 0 0;
}

.st {
  width: 160px;
  height: 400px;
  background-color: gold;
  border-radius: 70px 70px 0 0;
  position: absolute;
  left: 137px;
  bottom: 30px;
}

.st2 {
  width: 100px;
  height: 150px;
  background-color: white;
  border-radius: 70px 70px 0 0;
  position: absolute;
  left: 31px;
  bottom: -1px;
}

.quan {
  width: 160px;
  height: 30px;
  background-color: indianred;
  position: absolute;
  left: 0px;
  bottom: 228px;
}

.ling {
  width: 35px;
  height: 35px;
  background-color: goldenrod;
  border-radius: 50%;
  position: absolute;
  left: 64px;
  bottom: 217px;
}

.quan2,
.quan3,
.quan4,
.quan5 {
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
}

.quan2 {
  left: 9px;
  bottom: 241px;
}

.quan3 {
  left: 41px;
  bottom: 241px;
}

.quan4 {
  left: 112px;
  bottom: 241px;
}

.quan5 {
  left: 139px;
  bottom: 241px;
}

.ear1,
.ear2 {
  width: 50px;
  height: 30px;
  background-color: peru;
  border-radius: 50px 50px 0 0;
  position: absolute;
}

.ear1 {
  left: 134px;
  bottom: 361px;
  transform: rotate(55deg);
}

.ear2 {
  left: -26px;
  bottom: 361px;
  transform: rotate(-55deg);
}

.eye1,
.eye2 {
  width: 15px;
  height: 15px;
  background-color: chocolate;
  border-radius: 50%;
  position: absolute;
  animation: dog 1s linear 1s infinite;
}

.eye1 {
  top: 25px;
  left: 36px;
}

.eye2 {
  top: 25px;
  left: 101px;
}

.bizi1 {
  width: 30px;
  height: 40px;
  background-color: white;
  border-radius: 20px 20px 0 0;
  position: absolute;
  top: 7px;
  left: 61px;
}

.bizi2 {
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 20px 20px 20px 20px;
  position: absolute;
  top: 41px;
  left: 37px;
}

.bizi3 {
  width: 30px;
  height: 15px;
  background-color: peru;
  border-radius: 40px 40px 0 0;
  position: absolute;
  top: 41px;
  left: 61px;
  transform: rotate(180deg);
}

.mouth {
  width: 50px;
  height: 25px;
  background-color: peru;
  border-radius: 40px 40px 0 0;
  position: absolute;
  top: 72px;
  left: 52px;
  transform: rotate(180deg);
}

.shetou {
  width: 30px;
  height: 40px;
  background-color: lightcoral;
  border-radius: 5px 5px 20px 20px;
  position: absolute;
  top: 78px;
  left: 61px;
  animation: st 1s linear 3s infinite;
  z-index: 20;
}

.xiaba {
  width: 30px;
  height: 15px;
  background-color: darkgray;
  border-radius: 40px 40px 0 0;
  position: absolute;
  top: 121px;
  left: 61px;
  transform: rotate(180deg);
}

.foot1,
.foot2 {
  width: 30px;
  height: 15px;
  background-color: coral;
  border-radius: 40px 40px 0 0;
  position: absolute;
}

.foot1 {
  top: 386px;
  left: -1px;
}

.foot2 {
  top: 386px;
  left: 132px;
}

.weiba {
  width: 20px;
  height: 100px;
  background-color: peru;
  position: absolute;
  border-radius: 20px 20px 20px 20px;
  top: 222px;
  left: 173px;
  transform: rotate(45deg);
  transform-origin: left bottom;
  animation: wb 1s linear 0s infinite;
}

.sheng {
  width: 350px;
  height: 250px;
  border-left-color: red;
  border-left-width: 5px;
  border-left-style: solid;
  border-bottom: 5px solid red;
  border-radius: 0 0 0 50px;
  position: absolute;
  top: 173px;
  left: 143px;
}
</style>
