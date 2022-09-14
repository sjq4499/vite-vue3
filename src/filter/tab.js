/*
 * @Descripttion:
 * @Author: sjq
 * @Date: 2022-04-21 09:43:40
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-21 15:05:45
 */
export default function (val) {
  switch (val) {
    case 'Qrcode':
      return '生成二维码';
    case 'Timestamp':
      return '时间戳';
    case 'Json':
      return 'JSON';
    case 'CompressImages':
      return '压缩图片';
    case 'ReverseImgColor':
      return '图片颜色反转';
    case 'ldd':
      return '灵动岛';
    default:
      return val;
  }
}
