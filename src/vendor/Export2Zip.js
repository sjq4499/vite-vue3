/*
 * @Descripttion:
 * @Author: sjq
 * @Date: 2022-03-03 09:53:03
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-18 17:24:15
 */
/* eslint-disable */
// require('script-loader!file-saver');
require("script-loader");
import JSZip from "jszip";

export function export_txt_to_zip(th, jsonData, txtName, zipName) {
  const zip = new JSZip();
  const txt_name = txtName || "file";
  const zip_name = zipName || "file";
  const data = jsonData;
  let txtData = `${th}\r\n`;
  data.forEach((row) => {
    let tempStr = "";
    tempStr = row.toString();
    txtData += `${tempStr}\r\n`;
  });
  zip.file(`${txt_name}.txt`, txtData);
  zip
    .generateAsync({
      type: "blob",
    })
    .then(
      (blob) => {
        saveAs(blob, `${zip_name}.zip`);
      },
      (err) => {
        alert("导出失败");
      }
    );
}
