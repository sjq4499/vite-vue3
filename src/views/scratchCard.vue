<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-07 15:39:13
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-19 14:48:38
-->
<template>
  <div class="container" id="scratch_card">
    <div class="title" v-if="!isScratch">刮开有奖</div>
    <div class="title" v-else>
      恭喜你获得<span class="color-red"> {{ imgObj.comment }}</span
      >一个
    </div>
    <div class="award_box">
      <div class="award" v-if="showPrize">
        <img :class="{auto_img:isScratch}" v-if="imgObj.url" :src="imgObj.url" alt="" />
        <span class="comment" v-else>啥也没有，啥也不是</span>
      </div>
      <canvas
        id="c1"
        class="canvas"
        @touchmove="touchmove"
        @touchstart="touchstart"
        @touchend="touchend"
        v-show="!isScratch"
      ></canvas>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
import { getImageUrl } from "@/utils/index.js";

export default defineComponent({
  setup() {
    return {
      c1: ref(""), //画布
      ctx: ref(""), //画笔
      ismousedown: ref(false), //标志用户是否按下鼠标或开始触摸
      fontem: ref(""), // 获取html字体大小
      isScratch: ref(false), // 是否刮过卡
      showPrize: ref(false), // 显示奖品
      getImageUrl,
      imageList: ref([
        { url: "images/1.gif", comment: "平底锅" },
        { url: null, comment: "屁" },
        { url: null, comment: "屁" },
        { url: "images/3.gif", comment: "表情" },
        { url: "images/1.jpg", comment: "美女" },
        { url: "images/2.jpg", comment: "美女" },
        { url: "images/3.jpg", comment: "美女" },
        { url: "images/4.jpg", comment: "美女" },
        { url: "images/5.jpg", comment: "美女" },
        { url: "images/6.jpg", comment: "美女" },
        { url: "images/7.jpg", comment: "美女" },
        { url: "images/8.jpg", comment: "美女" },
        { url: "images/9.jpg", comment: "美女" },
        { url: "images/10.jpg", comment: "美女" },
        { url: "images/11.jpg", comment: "美女" },
        { url: "images/12.jpg", comment: "美女" },
        { url: "images/13.jpg", comment: "美女" },
        { url: "images/14.jpg", comment: "美女" },
        { url: "images/15.jpg", comment: "檀葭老婆", time: 2000 },
        { url: "images/16.jpg", comment: "檀葭老婆", time: 2000 },
        { url: "images/17.jpg", comment: "美女" },
        { url: "images/18.jpg", comment: "美女" },
        { url: "images/19.jpg", comment: "小七姐姐", time: 2000 },
        { url: "images/20.jpg", comment: "小哥哥" },
        { url: "images/21.jpg", comment: "小哥哥" },
        { url: "images/22.jpg", comment: "美女" },
        { url: "images/7.png", comment: "美女" },
        { url: "images/6.png", comment: "美女" },
        { url: "img/xiaoyi1.jpg", comment: "小易", time: 500 },
        { url: "img/susu.jpg", comment: "苏苏", time: 500 },
      ]),
      imgObj: reactive({ url: "", comment: "" }),
    };
  },
  mounted() {
    this.fontem = parseInt(
      window.getComputedStyle(document.documentElement, null)["font-size"]
    );
    this.scratchCard = document.getElementById("scratch_card");
    //这是为了不同分辨率上配合@media自动调节刮的宽度
    this.c1 = document.getElementById("c1");
    //这里很关键，canvas自带两个属性width、height,我理解为画布的分辨率，跟style中的width、height意义不同。
    //最好设置成跟画布在页面中的实际大小一样
    //不然canvas中的坐标跟鼠标的坐标无法匹配
    this.c1.width = this.c1.clientWidth;
    this.c1.height = this.c1.clientHeight;
    this.ctx = this.c1.getContext("2d");
    this.initCanvas();
  },
  created() {
    let index = this.$route.query.index
      ? this.$route.query.index
      : parseInt(Math.random() * (this.imageList.length + 10));
    let url = this.imageList[index] || this.imageList[0];
    this.imgObj = url;
    this.imgObj.url = url.url ? getImageUrl(url.url) : null;
    console.log(url, index);
  },
  methods: {
    // 画刮刮卡
    initCanvas() {
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.fillStyle = "#e5e5e5";
      this.ctx.fillRect(0, 0, this.c1.clientWidth, this.c1.clientHeight);
      this.ctx.fill();
      this.ctx.font = "Bold 24px Arial";
      this.ctx.textAlign = "center";
      this.ctx.fillStyle = "#a0a0a0";
      //有些老的手机自带浏览器不支持destination-out,下面的代码中有修复的方法
      this.ctx.globalCompositeOperation = "destination-out";
    },
    touchstart(e) {
      e.preventDefault();
      this.ismousedown = true;
    },
    // 操作刮卡
    touchend(e) {
      sessionStorage.setItem("isScratch", true);
      e.preventDefault();
      //得到canvas的全部数据
      var a = this.ctx.getImageData(0, 0, this.c1.width, this.c1.height);
      var j = 0;
      for (var i = 3; i < a.data.length; i += 4) {
        if (a.data[i] == 0) j++;
      }
      //当被刮开的区域等于一半时，则可以开始处理结果
      if (j >= a.data.length / 8) {
        this.isScratch = true;
      }
      this.ismousedown = false;
    },
    touchmove(e) {
      this.showPrize = true;
      e.preventDefault();
      if (this.ismousedown) {
        if (e.changedTouches) {
          e = e.changedTouches[e.changedTouches.length - 1];
        }
        var topY = document.getElementById("scratch_card").offsetTop;
        var oX = this.c1.offsetLeft,
          oY = this.c1.offsetTop + topY;
        var x = (e.clientX + document.body.scrollLeft || e.pageX) - oX || 0,
          y = (e.clientY + document.body.scrollTop || e.pageY) - oY || 0;
        //画360度的弧线，就是一个圆，因为设置了ctx.globalCompositeOperation = 'destination-out';
        //画出来是透明的
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.fontem * 0.5, 0, Math.PI * 2, true); // 调整画笔的大小
        //下面3行代码是为了修复部分手机浏览器不支持destination-out
        //我也不是很清楚这样做的原理是什么
        // this.c1.style.display = 'none';
        // this.c1.offsetHeight;
        // this.c1.style.display = 'inherit';
        this.ctx.fill();
      }
    },
  },
  watch: {
    isScratch() {
      if (this.isScratch) {
        if (this.imgObj.time) {
          setTimeout(() => {
            this.imgObj = this.imageList[0];
            this.imgObj.url = getImageUrl(this.imgObj.url);
            this.isScratch = false;
            this.$message({
              type: "success",
              message: "别瞅了，没了",
            });
          }, this.imgObj.time);
        }
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 100px 0;
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .award_box {
    height: 500px;
    .award {
      width: 100%;
      height: 280px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
      }
      .auto_img {
        width: auto;
      }
      .comment {
        font-size: 14px;
      }
    }
    .canvas {
      position: relative;
      width: 100%;
      height: 280px;
    }
  }
}
</style>
