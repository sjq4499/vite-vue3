<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-14 14:06:14
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-19 11:15:51
-->
<template>
  <h1>生成二维码</h1>
  <div>内容： <el-input v-model="value" placeholder=""></el-input></div>
  <div class="qrcode">
    <img :src="imgUrl" id="img" alt="" />
  </div>
  <el-button type="primary" @click="saveQrcode('#img')">保存图片</el-button>
  <el-form :inline="true">
    <el-form-item
      v-for="(key, index) in optionskeys"
      :key="index"
      :label="mapOptions[key]"
    >
      <el-switch
        v-if="typeof qrOptions[key] === 'boolean'"
        v-model="qrOptions[key]"
      />
      <el-color-picker
        v-else-if="/color/i.test(key)"
        v-model="qrOptions[key]"
        show-alpha
      ></el-color-picker>
      <el-upload
        v-else-if="/image/i.test(key) || key === 'gifBackground'"
        class="avatar-uploader"
        v-model="qrOptions[key]"
        :show-file-list="false"
        action=""
        :http-request="
          (res) => {
            return customRequest(res, key);
          }
        "
        :accept="key === 'gifBackground' ? '.gif' : '.png,.jpg,.jpeg'"
      >
        <div v-if="qrOptions[key]" class="flexbox">
          <img class="minimg" :src="qrOptions[key]" alt="" />
          <el-icon @click="deleteImg(key)"><delete-filled /></el-icon>
        </div>
        <el-button v-else>点击上传</el-button>
      </el-upload>

      <el-radio-group
        v-else-if="key === 'correctLevel'"
        v-model="qrOptions[key]"
      >
        <el-radio-button :label="0">低</el-radio-button>
        <el-radio-button :label="1">中</el-radio-button>
        <el-radio-button :label="2">高</el-radio-button>
      </el-radio-group>
      <el-input-number
        v-else-if="/scale/i.test(key)"
        v-model="qrOptions[key]"
        :precision="2"
        :step="0.1"
      />
      <el-input v-else v-model.number="qrOptions[key]" precision="2" />
    </el-form-item>
  </el-form>
</template>
<script>
import { defineComponent, ref, reactive, onMounted, watchEffect } from "vue";
import domtoimage from "dom-to-image";
import html2canvas from "html2canvas";
import { AwesomeQR } from "awesome-qr";
import { getImageUrl } from "@/utils/index";
import {
  fileToBase64,
  getImageDimensions,
  readAsArrayBuffer,
  fileToBuf,
} from "@/utils/index.js";
import { DeleteFilled } from "@element-plus/icons-vue";

// ck
// https://github.com/SumiMakito/Awesome-qr.js
// https://github.com/Binaryify/vue-qr
export default defineComponent({
  name: "Qrcode",
  components: {
    DeleteFilled,
  },
  setup() {
    const qrcodeUrl = ref("200");
    const value = ref(
      "https://sjq4499.github.io/vite-vue3/#/tool?activeName=qrcode"
    );
    const imgUrl = ref("");
    const qrOptions = reactive({
      gifBackground: null,
      text: null,
      size: 200, // 尺寸, 长宽一致, 包含外边距
      margin: 20, // 二维码图像的外边距, 默认 20px
      colorDark: "#000", //实点的颜色
      colorLight: "#fff", //空白区的颜色
      backgroundColor: "#fff", //背景色
      autoColor: false, //boolean 若为 true, 根据二维码背景自动计算colorDark值。
      whiteMargin: false, //boolean 若设为 true, 背景图外将绘制白色边框；使用白色边距而不是透明边距，这样可以在边距上显示 QR 码的背景。
      gifBackground: null,
      backgroundImage: null, //背景图
      backgroundDimming: null, //叠加在背景图上的颜色, 在解码有难度的时有一定帮助
      logoImage: null, //logo图
      logoScale: 0.2, //用于计算 LOGO 大小的值, 过大将导致解码失败, LOGO 尺寸计算公式 logoScale*(size-2*margin), 默认 0.2
      logoBackgroundColor: "#fff", //背景色,需要设置 logo margin
      correctLevel: 0, //容错级别 0-3
      logoMargin: 2, //LOGO 标识周围的空白边框, 默认为0
      logoCornerRadius: 0, //LOGO 标识及其边框的圆角半径, 默认为0
      // dotScale: 1, //数据区域点缩小比例,默认为1
      // binarize: true, //boolean 若为 true, 图像将被二值化处理, 未指定阈值则使用默认值
      // binarizeThreshold: 128, //阈值用于对整个图像进行二值化。 默认是128。 阈值(0 < < 255)二值化处理的阈值
      components: {
        data: {
          scale: 1.0,
        },
        timing: {
          scale: 1,
          protectors: false,
        },
        alignment: {
          scale: 1,
          protectors: false,
        },
        cornerAlignment: {
          scale: 1,
          protectors: false,
        },
      },
    });
    const mapOptions = {
      size: "大小", // 尺寸, 长宽一致, 包含外边距
      margin: "外边距", // 二维码图像的外边距, 默认 20px
      colorDark: "前背景", //实点的颜色
      colorLight: "后背景", //空白区的颜色
      whiteMargin: "背景占用边距", // //boolean 若设为 true, 背景图外将绘制白色边框；使用白色边距而不是透明边距，这样可以在边距上显示 QR 码的背景。
      // backgroundColor: "背景色", //背景色
      gifBackground: "gif图",
      backgroundImage: "背景图", //背景图
      // backgroundDimming: null, //叠加在背景图上的颜色, 在解码有难度的时有一定帮助
      logoImage: "logo图", //logo图
      logoScale: "logo大小", //用于计算 LOGO 大小的值, 过大将导致解码失败, LOGO 尺寸计算公式 logoScale*(size-2*margin), 默认 0.2
      logoBackgroundColor: "logo背景色", //背景色,需要设置 logo margin
      correctLevel: "容错级别", //容错级别 0-3
      logoMargin: "logo边框", //LOGO 标识周围的空白边框, 默认为0
      logoCornerRadius: "logo圆角", //LOGO 标识及其边框的圆角半径, 默认为0
      // whiteMargin: "背景图外将绘制白色边框", //boolean 若设为 true, 背景图外将绘制白色边框
      dotScale: "数据区域点缩小比例", //数据区域点缩小比例,默认为1
      autoColor: "根据二维码背景自动计算前背景色", //boolean 若为 true, 根据二维码背景自动计算colorDark值。
      // binarize: "二值化处理", //boolean 若为 true, 图像将被二值化处理, 未指定阈值则使用默认值
      // binarizeThreshold: "阈值", //阈值用于对整个图像进行二值化。 默认是128。 阈值(0 < < 255)二值化处理的阈值
    };
    const qrConfig = [
      {
        title: "颜色设置",
        children: ["colorDark", "colorLight"],
      },
      {
        title: "嵌入logo",
        children: ["colorDark", "colorLight"],
      },
    ];
    const saveQrcode = (dom) => {
      let img = document.querySelector(dom);
      var a = document.createElement("a"); // 创建一个a节点插入的document
      var event = new MouseEvent("click"); // 模拟鼠标click点击事件
      a.download = new Date() * 1; // 设置a节点的download属性值
      a.href = img.src; // 将图片的src赋值给a节点的href
      a.dispatchEvent(event); // 触发鼠标点击事件
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
      if (key === "gifBackground") {
        fileToBuf(file.file, (data) => {
          console.log(data);
          qrOptions[key] = data;
        });
      } else {
        fileToBase64(file.file, (data) => {
          qrOptions[key] = data;
        });
      }
    };
    const deleteImg = (key) => {
      qrOptions[key] = null;
    };
    onMounted(() => {
      createQrcode();
    });
    watchEffect(() => {
      console.log(qrOptions.gifBackground);
      console.log("重新生成二维码");
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
      deleteImg,
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
.minimg {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}
.flexbox {
  align-items: center;
}
</style>
