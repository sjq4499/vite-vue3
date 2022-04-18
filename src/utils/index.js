/*
 * @Descripttion:
 * @Author: sjq
 * @Date: 2021-12-07 15:58:15
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-18 14:55:38
 */
// 文件转base64
export function fileToBase64(file, callback) {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = function () {
    callback(this.result);
  };
}
// 获取url图片的宽高尺寸
export function getImageDimensions(url) {
  return new Promise(function (resolve) {
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
      const { width, height } = img;
      resolve({ width, height });
    };
    img.src = url;
  });
}
// 补0
const addZero = function (val) {
  if (val < 10) return "0" + val;
  else return val;
};
// 时间格式化
export function formDate(value, type) {
  let date = "";
  if (!value) return "";
  else if (typeof value === "object") {
    date = new Date();
  } else {
    value = value.replace(/-/g, "/");
    date = new Date(value);
  }
  const Y = date.getFullYear();
  const m = addZero(date.getMonth() + 1);
  const d = addZero(date.getDate());
  const H = addZero(date.getHours());
  const i = addZero(date.getMinutes());
  const s = addZero(date.getSeconds());
  const m0 = date.getMonth() + 1;
  const d0 = date.getDate();
  const arr = ["日", "一", "二", "三", "四", "五", "六"];
  const week = date.getDay();
  if (type === "his") {
    return H + ":" + i + ":" + s;
  } else if (type === "md") {
    return m0 + "月" + d0 + "日";
  } else if (type === "ymd") {
    return Y + "-" + m + "-" + d;
  } else if (type === "hi") {
    return "-" + H + ":" + i;
  } else if (type === "h_i") {
    return H + ":" + i;
  } else if (type === "ymdhi") {
    return Y + "-" + m + "-" + d + " " + H + ":" + i;
  } else if (type === "ymdhis") {
    return Y + "-" + m + "-" + d + " " + H + ":" + i + ":" + s;
  } else if (type === "week") {
    return "星期" + arr[week];
  } else if (type === "ymdweek") {
    return Y + "年" + m0 + "月" + d0 + "日 " + "星期" + arr[week];
  } else if (type === "ymdweekhi") {
    return (
      Y + "年" + m0 + "月" + d0 + "日 " + "星期" + arr[week] + " " + H + ":" + i
    );
  } else {
    return Y + "-" + m + "-" + d + " " + H + ":" + i + ":" + s;
  }
}

// 获取本地文件路径
// name  文件名
export const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};

// 获取文件下所有的组件
export const getallComponents = (allComponents) => {
  let res_components = {};
  Object.keys(allComponents).forEach((item) => {
    let fileName = item.replace(/^\.+[\/\w+]*\/(.*)\.\w+$/, "$1");
    let comp = allComponents[item];
    if (fileName === "index") return;
    let name = comp.default.name;
    res_components[name] = comp.default;
  });
  return res_components;
};

export const readAsArrayBuffer = function (url, callback) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "blob"; //设定返回数据类型为Blob
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsArrayBuffer(xhr.response); //xhr.response就是一个Blob，用FileReader读取
    };
    xhr.open("GET", url);
    xhr.send();
  });
};

// file转ArrayBuffer
export const fileToBuf = function (file, cb) {
  var fr = new FileReader();
  var filename = file.name;

  fr.readAsArrayBuffer(file);
  fr.addEventListener(
    "loadend",
    (e) => {
      var buf = e.target.result;
      cb(buf, filename);
    },
    false
  );
};
