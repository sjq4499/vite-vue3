<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-09-14 09:34:05
 * @LastEditors: sjq
 * @LastEditTime: 2022-09-14 10:07:25
-->
<template>
  <div class="iPhone">
    <div class="screen">
      <div class="datetime">
        <div class="time">12:34</div>
        <div class="date">壬寅年八月十五</div>
      </div>
      <div class="notification">
        <div class="container">
          <div class="panel" :class="panelClass">
            <div class="body" v-show="type === 1">
              <img class="appicon" src="@/assets/wechat-fill.png" />
              <div class="title">Hamm</div>
              <div class="message">我发现你昨天写了13个BUG...</div>
            </div>
            <div class="body" v-show="type === 2">
              <div class="left">
                <i class="iconfont icon-icon_qq_fill"></i> 敢爱敢做
              </div>
              <div class="right">04:38</div>
            </div>
            <div class="body" v-show="type === 3">
              <div class="left">
                <i class="iconfont icon-airpods"></i> Hamm's AirPods
              </div>
              <div class="right">已连接</div>
            </div>
            <div class="body" v-show="type === 4">
              <div class="left">
                <i class="iconfont icon-icon_airplay"></i> Apple TV
              </div>
              <div class="right">镜像中</div>
            </div>
            <div class="body" v-show="type === 5">
              <i class="iconfont icon-face_id"></i>
              <span style="margin-top: -18px">注视解锁</span>
            </div>
            <div class="body" v-show="type === 6">
              <i class="iconfont icon-weixinzhifu"></i>
              <span style="margin-top: -14px" class="result">支付成功</span>
              <span style="margin-top: -1px" class="money">￥128.55</span>
            </div>
            <div class="body" v-show="type === 7">
              <i class="iconfont icon-redpacket_fill"></i>
              <span style="margin-top: -28px" class="button">抢</span>
            </div>
            <div class="body" v-show="type === 8">
              <i class="left iconfont icon-shijian3"></i>

              <div class="right">
                <div class="time">倒计时: 38s</div>
                <div class="info">地震横波即将到达, 请注意安全</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="app"><i class="iconfont icon-flashlight_fill"></i></div>
        <div class="space"></div>
        <div class="app"><i class="iconfont icon-camera-fill"></i></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ldd',
  data() {
    return {
      show: true,
      type: 1 + parseInt(Math.random() * 6),
      debug: false,
    };
  },
  created() {
    setTimeout(() => {
      this.test();
    }, 2000);
  },
  updated() {},
  computed: {
    panelClass() {
      let panelClass = '';
      panelClass += this.show ? 'show' : '';
      switch (this.type) {
        case 1:
          panelClass += ' wechat';
          break;
        case 5:
          panelClass += ' faceid';
          break;
        case 6:
          panelClass += ' wxpay';
          break;
        case 7:
          panelClass += ' luckybag';
          break;
        case 8:
          panelClass += ' earthquake';
          break;
        default:
          panelClass += ' normal';
      }
      return panelClass;
    },
  },
  methods: {
    test() {
      this.show = true;
      setTimeout(() => {
        if (!this.debug) {
          if (this.type === 8) {
            this.type = 0;
          }
          this.type++;
        }
        this.show = false;
        setTimeout(this.test, 3000 + Math.random() * 1000);
      }, 1000);
    },
  },
};

// import { defineComponent, ref, reactive } from 'vue';
// export default defineComponent({
//   setup() {
//     return;
//   },
// });
</script>
<style lang="scss" scoped>
@import url('@/assets/font/index');
body,
html {
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}
* {
  font-family: 'Nunito', PingFang SC, Microsoft YaHei;
  font-weight: 400;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.iPhone {
  width: 100vw;
  height: 100vh;
  background: #000;
  border-radius: 35px;
  border: 4px solid #f3e7cd;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: -22px;
}
.iPhone .screen {
  background-color: black;
  position: absolute;
  left: 8px;
  top: 8px;
  bottom: 8px;
  right: 8px;
  border-radius: 25px;
  background: #000 url(@/assets/bg.jpg) no-repeat center center;
  background-size: cover;
}
.notification {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.panel {
  background-color: black;
  position: absolute;
  width: 75px;
  height: 20px;
  border-radius: 20px;
  transition: all 0.5s;
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
}
.panel * {
  display: none;
}
.panel .left,
.panel .right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.show {
  animation: show-animation 0.8s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
@keyframes show-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}
.show * {
  display: inline-block;
}
.wechat.show {
  width: 310px;
  height: 90px;
}
.faceid.show {
  width: 100px;
  height: 100px;
  font-size: 12px;
}
.faceid.show .body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.faceid.show .iconfont {
  font-size: 48px;
  margin-bottom: 10px;
}
.wxpay.show {
  width: 160px;
  height: 160px;
  font-size: 24px;
}
.wxpay.show .body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wxpay.show .iconfont {
  font-size: 48px;
  color: #63b359;
  margin-bottom: 10px;
}
.wxpay.show .result {
  font-size: 14px;
  color: #63b359;
}
.wxpay.show .money {
  font-size: 24px;
  margin-top: 15px;
  font-weight: bold;
}
.earthquake.show {
  width: 300px;
  height: 100px;
  font-size: 24px;
}
.earthquake.show .body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.earthquake.show .iconfont {
  font-size: 48px;
  color: yellow;
  margin-bottom: 10px;
}
.earthquake.show .right {
  flex-direction: column !important;
}
.earthquake.show .time {
  font-size: 32px;
  color: yellow;
}
.earthquake.show .info {
  font-size: 12px;
  color: yellow;
}
.luckybag.show {
  width: 200px;
  height: 280px;
  font-size: 24px;
}
.luckybag.show .body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.luckybag.show .iconfont {
  font-size: 128px;
  color: #d94845;
  margin-bottom: 10px;
}
.luckybag.show .button {
  font-size: 24px;
  margin-top: 10px;
  background-color: #d94845;
  color: white;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.normal.show {
  width: 210px;
}
.normal.show .body {
  font-size: 12px;
  position: absolute;
  left: 10px;
  right: 10px;
  color: white;
  top: 0;
  bottom: 0;
  margin: 0 !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.normal.show * {
  font-size: 12px;
  color: white;
}
.panel .body .left {
  flex: 1;
}
.panel .appicon {
  width: 16px;
  height: 16px;
  background-color: #29a37d;
  padding: 1px;
  border-radius: 3px;
  position: absolute;
  right: 15px;
  top: 15px;
}
.panel .icon {
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 15px;
  margin: 10px;
  position: relative;
}
.panel img {
  width: 100%;
  height: 100%;
}
.panel .body {
  margin: 15px 20px;
  opacity: 0;
}
.show .body {
  animation: body-animation 0.3s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
}
.panel .title {
  font-size: 20px;
  color: #fff;
  display: block;
}
.panel .message {
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
  display: block;
  color: #999;
}
@keyframes body-animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.datetime {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  right: 0;
  top: 120px;
}
.datetime .time {
  font-size: 64px;
  font-weight: 300;
  /*font-family: PingFang SC, Microsoft YaHei;*/
}
.datetime .date {
  font-size: 20px;
  font-weight: 300;
  /*font-family: PingFang SC, Microsoft YaHei;*/
}
.footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.footer .app .iconfont {
  font-size: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 100%;
  margin: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.footer .space {
  flex: 1;
}
</style>
