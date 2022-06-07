<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-22 10:43:33
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-22 10:47:59
-->
<template>
  <!-- <iframe
    frameborder="no"
    border="0"
    marginwidth="0"
    marginheight="0"
    width="330"
    height="86"
    src="//music.163.com/outchain/player?type=2&id=444269135&auto=1&height=66"
  ></iframe> -->
  <audio id="audios" controls="controls" autoplay>
    <source
      src="https://webfs.ali.kugou.com/202205040902/9fa09cfe41d85dcb909202cdbc7ecddd/KGTX/CLTX001/89f83b5ad5b6b56b76a12cc8786d0b64.mp3"
      type="audio/mp3"
    />
  </audio>
  <button @click="play" id="btns">播放</button>
  <!-- <audio
    ref="audio"
    autoplay
    controls
    controlsList="nodownload"
    :src="fileUrl"
  ></audio> -->
  <!-- @ended="handleplaynext" -->
</template>
<script>
import { defineComponent, ref, reactive, onMounted } from 'vue';
export default defineComponent({
  setup() {
    const value = ref(false);
    const fileUrl = ref('');

    const play = () => {
      let audio = document.querySelector('#audios');
      if (!audio.paused) return;
      audio.play();
      // 音乐兼容微信自动播放
      document.addEventListener(
        'WeixinJSBridgeReady',
        function () {
          audio.play();
        },
        false
      );
    };

    onMounted(() => {
      // console.log(document.querySelector('#btns'));
      // document.querySelector('#btns').onclick = function () {
      //   alert(111);
      // };
      console.log(document.querySelector('#audios').paused);

      // 点击播放
      document.addEventListener('click', () => {
        play();
      });
      document.addEventListener('touchstart', () => {
        play();
      });

      fileUrl.value =
        'https://webfs.ali.kugou.com/202205040902/9fa09cfe41d85dcb909202cdbc7ecddd/KGTX/CLTX001/89f83b5ad5b6b56b76a12cc8786d0b64.mp3';
    });
    return { value, play, fileUrl };
  },
});
</script>
<style lang="scss" scoped>
#btns,
#audios {
  display: none;
}
</style>
