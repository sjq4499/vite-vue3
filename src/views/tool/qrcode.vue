<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-14 14:06:14
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-17 13:55:19
-->
<template>
  <h1>生成二维码111</h1>
  <div>内容： <el-input v-model="value" placeholder=""></el-input></div>
  <div class="qrcode">
    <img :src="imgUrl" id="img" alt="" />
  </div>
  <el-button type="primary" @click="saveQrcode('#img')">保存图片</el-button>
  <el-form>
    <el-form-item
      v-for="(key, index) in optionskeys"
      :key="index"
      :label="mapOptions[key]"
    >
      <el-color-picker
        v-if="/color/i.test(key)"
        v-model="qrOptions[key]"
        show-alpha
      ></el-color-picker>
      <n-upload
        v-else-if="
          key === 'backgroundImage' ||
          key === 'logoImage' ||
          key === 'logoImage'
        "
        action=""
        v-model="qrOptions[key]"
        list-type="image-card"
        :on-before-upload="uploadChange(key)"
        :customRequest="customRequest"
        accept=".png,.jpg,.jpeg"
      >
        点击上传
      </n-upload>
      <el-input v-else v-model.number="qrOptions[key]" />
    </el-form-item>
  </el-form>
</template>
<script>
import { defineComponent, ref, reactive, onMounted, watchEffect } from 'vue';
import domtoimage from 'dom-to-image';
import { AwesomeQR } from 'awesome-qr';
import { getImageUrl } from '@/utils/index';
import { fileToBase64, getImageDimensions } from '@/utils/index.js';

// https://github.com/SumiMakito/Awesome-qr.js
// https://github.com/Binaryify/vue-qr
export default defineComponent({
  name: 'Qrcode',
  setup() {
    const qrcodeUrl = ref('200');
    const value = ref('二维码内容');
    const imgUrl = ref('');
    const qrOptions = reactive({
      gifBackground: null,
      text: null,
      size: 200, // 尺寸, 长宽一致, 包含外边距
      margin: 20, // 二维码图像的外边距, 默认 20px
      colorDark: '#000', //实点的颜色
      colorLight: '#fff', //空白区的颜色
      backgroundColor: '#fff', //背景色
      backgroundImage: null, //背景图
      backgroundDimming: null, //叠加在背景图上的颜色, 在解码有难度的时有一定帮助
      logoImage: null, //logo图
      logoScale: 0.2, //用于计算 LOGO 大小的值, 过大将导致解码失败, LOGO 尺寸计算公式 logoScale*(size-2*margin), 默认 0.2
      logoBackgroundColor: '#fff', //背景色,需要设置 logo margin
      correctLevel: 0, //容错级别 0-3
      logoMargin: null, //LOGO 标识周围的空白边框, 默认为0
      logoCornerRadius: 0, //LOGO 标识及其边框的圆角半径, 默认为0
      whiteMargin: null, //boolean 若设为 true, 背景图外将绘制白色边框
      dotScale: 1, //数据区域点缩小比例,默认为1
      autoColor: '#fff', //boolean 若为 true, 背景图的主要颜色将作为实点的颜色, 即 colorDark,默认 true
      binarize: true, //boolean 若为 true, 图像将被二值化处理, 未指定阈值则使用默认值
      binarizeThreshold: 128, //阈值用于对整个图像进行二值化。 默认是128。 阈值(0 < < 255)二值化处理的阈值
      components: null,
    });
    const mapOptions = {
      size: '大小', // 尺寸, 长宽一致, 包含外边距
      margin: '外边距', // 二维码图像的外边距, 默认 20px
      colorDark: '前背景', //实点的颜色
      colorLight: '后背景', //空白区的颜色
      backgroundColor: '背景色', //背景色
      backgroundImage: '背景图', //背景图
      // backgroundDimming: null, //叠加在背景图上的颜色, 在解码有难度的时有一定帮助
      logoImage: 'logo图', //logo图
      logoScale: 'logo大小', //用于计算 LOGO 大小的值, 过大将导致解码失败, LOGO 尺寸计算公式 logoScale*(size-2*margin), 默认 0.2
      logoBackgroundColor: 'logo背景色', //背景色,需要设置 logo margin
      correctLevel: '容错级别', //容错级别 0-3
      logoMargin: 'logo边框', //LOGO 标识周围的空白边框, 默认为0
      logoCornerRadius: 'logo圆角', //LOGO 标识及其边框的圆角半径, 默认为0
      whiteMargin: '背景图外将绘制白色边框', //boolean 若设为 true, 背景图外将绘制白色边框
      dotScale: '数据区域点缩小比例', //数据区域点缩小比例,默认为1
      autoColor: '背景图的主要颜色将作为实点的颜色', //boolean 若为 true, 背景图的主要颜色将作为实点的颜色, 即 colorDark,默认 true
      binarize: '二值化处理', //boolean 若为 true, 图像将被二值化处理, 未指定阈值则使用默认值
      binarizeThreshold: '阈值', //阈值用于对整个图像进行二值化。 默认是128。 阈值(0 < < 255)二值化处理的阈值
    };
    const qrConfig = [
      {
        title: '颜色设置',
        children: ['colorDark', 'colorLight'],
      },
      {
        title: '嵌入logo',
        children: ['colorDark', 'colorLight'],
      },
    ];
    const saveQrcode = (dom) => {
      domtoimage.toPng(document.querySelector(dom)).then((imgurl) => {
        var a = document.createElement('a'); // 创建一个a节点插入的document
        var event = new MouseEvent('click'); // 模拟鼠标click点击事件
        a.download = new Date() * 1; // 设置a节点的download属性值
        a.href = imgurl; // 将图片的src赋值给a节点的href
        a.dispatchEvent(event); // 触发鼠标点击事件
      });
    };
    const createQrcode = () => {
      let options = {};
      Object.keys(qrOptions).forEach((item) => {
        if (qrOptions[item] === null) return;
        options[item] = qrOptions[item];
      });
      new AwesomeQR({
        ...options,
        text: value.value,
      })
        .draw()
        .then((dataUri) => {
          imgUrl.value = dataUri;
        });
    };
    const customRequest = (file, key) => {
      console.log(file, key);
      fileToBase64(file.file.file, (data) => {
        getImageDimensions(data).then((res) => {
          qrOptions.backgroundDimming = res;
        });
      });
    };
    const uploadChange = (key) => {
      console.log(key, ';;;;;;123');
    };
    onMounted(() => {
      createQrcode();
    });
    watchEffect(() => {
      createQrcode();
    });

    return {
      qrcodeUrl,
      value,
      imgUrl,
      qrOptions,
      mapOptions,
      optionskeys: Object.keys(mapOptions),
      saveQrcode,
      customRequest,
      uploadChange,
    };
  },
});
</script>
<style lang="scss" scoped>
.qrcode {
  width: 200px;
  height: 200px;
  border: 1px #ccc solid;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
