<template>
  <div>
    <a-row type="flex" justify="center">
      <a-col :xs="0" :sm="0" :md="0" :lg="20" :xl="20" class="swiper_box">
        <swiper
          :autoplay="swiper_options.autoplay"
          :loop="swiper_options.loop"
          :speed="swiper_options.speed"
          :pagination="swiper_options.pagination"
          :navigation="swiper_options.navigation"
          :spaceBetween="swiper_options.spaceBetween"
          :coverflowEffect="swiper_options.coverflowEffect"
          :centeredSlides="swiper_options.centeredSlides"
          :slidesPerView="swiper_options.slidesPerView"
          class="swiper"
          effect="coverflow"
        >
          <swiper-slide
            ><img class="my_swiper_imgs" src="../assets/img/xiaoyi1.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img class="my_swiper_imgs" src="../assets/img/xiaoyi2.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img class="my_swiper_imgs" src="../assets/img/xiaoyi3.jpg" alt=""
          /></swiper-slide>
        </swiper>
      </a-col>
    </a-row>
  </div>
</template>
<script>
// import './MySwiper.less';
import { reactive } from 'vue';
// 使用swiper的compositon API
import SwiperCore, {
  Autoplay,
  Pagination,
  EffectCoverflow,
  Navigation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
SwiperCore.use([Autoplay, Pagination, EffectCoverflow, Navigation]);
export default {
  name: 'MySwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // swiper相关配置属性放在swiper_options这个变量里
    let swiper_options = reactive({
      autoplay: {
        stopOnLastSlide: false,
        disableOnInteraction: true, // 鼠标滑动后继续自动播放
        delay: 1000, //4秒切换一次
      },
      speed: 500, //切换过渡速度
      loop: true,
      slidesPerView: 'auto', //解决最后一张切换到第一张中间的空白
      centeredSlides: true, //设置slide居中
      spaceBetween: 20,
      coverflowEffect: {
        // rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
        stretch: 50, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
        depth: 100, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        modifier: 1, //depth和rotate和stretch的倍率，相当于            depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        // slideShadows: false, //开启slide阴影。默认 true。
      },
      navigation: {
        nextElRef: '.swiper-button-next',
        prevElRef: '.swiper-button-prev',
      },
      pagination: {
        clickable: true,
      },
    });
    // 将swiper_options返回给模板中的swiper组件使用
    return { swiper_options };
  },
};
</script>
<style lang="scss">
.swiper {
  max-height: 600px;
}

.swiper_box {
  .swiper-slide {
    width: 600px;
    height: 400px;
    // border: 1px solid rgba(255, 255, 255,0);
    box-shadow: 0 2px 6px rgb(133, 133, 133);
  }
  .swiper-slide > img {
    width: 100%;
    height: 100%;
  }
}
</style>
