<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-09 16:50:12
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-09 17:59:45
-->
<template>
  <div id="perspective">
    <div id="wrap">
      <img src="@/assets/img/xiaoyi1.jpg" />
      <img src="@/assets/img/xiaoyi2.jpg" />
      <img src="@/assets/img/xiaoyi3.jpg" />
      <img src="@/assets/img/xiaoyi4.jpg" />
      <img src="@/assets/img/xiaoyi5.jpg" />
      <img src="@/assets/img/xiaoyi6.jpg" />
      <img src="@/assets/img/xiaoyi1.jpg" />
      <img src="@/assets/img/xiaoyi2.jpg" />
      <img src="@/assets/img/xiaoyi3.jpg" />
      <img src="@/assets/img/xiaoyi4.jpg" />
      <img src="@/assets/img/xiaoyi5.jpg" />
      <img src="@/assets/img/xiaoyi6.jpg" />
      <p></p>
    </div>
    <AutoAudios />
  </div>
</template>
<script>
import AutoAudios from '@/components/autoAudios.vue';

export default {
  components: { AutoAudios },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {
    var oWrap = document.getElementById('wrap');
    var oImg = oWrap.getElementsByTagName('img');
    var oImgLength = oImg.length;
    var Deg = 360 / oImgLength;
    var nowX,
      nowY,
      lastX,
      lastY,
      minusX = 0,
      minusY = 0;
    var roY = 0,
      roX = -10;
    var timer;

    for (var i = 0; i < oImgLength; i++) {
      oImg[i].style.transform = 'rotateY(' + i * Deg + 'deg) translateZ(350px)';
      oImg[i].style.transition =
        'transform 1s ' + (oImgLength - 1 - i) * 0.1 + 's';
    }

    mTop();

    window.onresize = mTop;

    function mTop() {
      var wH = document.documentElement.clientHeight;
      oWrap.style.marginTop = wH / 2 - 180 + 'px';
    }
    document.ontouchstart = function (ev) {
      ev = ev || window.event;
      lastX = ev.changedTouches[0].clientX;
      lastY = event.changedTouches[0].clientY;
      this.ontouchmove = function (ev) {
        ev = ev || window.event;
        clearInterval(timer);
        nowX = ev.changedTouches[0].clientX; // clientX 鼠标距离页面左边的距离
        nowY = ev.changedTouches[0].clientY; // clientY ………………………………顶部………………

        minusX = nowX - lastX;
        minusY = nowY - lastY;

        //更新wrap的旋转角度，拖拽越快-> minus变化大 -> roY变化大 -> 旋转快
        roY += minusX * 0.2; // roY = roY + minusX*0.2;
        roX -= minusY * 0.1;

        oWrap.style.transform =
          'rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)';

        lastX = nowX;
        lastY = nowY;
      };
      //抬起
      this.ontouchend = function () {
        this.ontouchmove = null;
        timer = setInterval(function () {
          minusX *= 0.95;
          minusY *= 0.95;
          roY += minusX * 0.2; // roY = roY + minusX*0.2;
          roX -= minusY * 0.1;
          oWrap.style.transform =
            'rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)';

          if (Math.abs(minusX) < 0.1 && Math.abs(minusY) < 0.1) {
            clearInterval(timer);
          }
        }, 13);
      };
      return false;
    };
  },
};
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
