/*
 * @Descripttion:
 * @Author: sjq
 * @Date: 2021-12-07 15:58:15
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-03 09:53:24
 */
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

const addZero = function (val) {
  if (val < 10) return "0" + val;
  else return val;
};
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
