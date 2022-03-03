<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-02-23 10:31:38
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-03 10:40:22
-->
<template>
  <div class="">
    <el-input
      type="textarea"
      :autosize="{ minRows: 6 }"
      v-model="value"
      placeholder="请输入数据"
    ></el-input>
    <div style="margin: 20px 0">
      <el-button type="primary" @click="importFun">导入 </el-button>
    </div>
    <h1>列表 <el-button type="primary" @click="exportFun">导出 </el-button></h1>
    <el-table border :data="data" style="width: 100%">
      <el-table-column
        :prop="value"
        :label="key"
        v-for="(value, key) in dataProp"
        :key="value"
      />
    </el-table>
  </div>
</template>
<script>
import { formDate } from "@/utils/index.js";
export default {
  name: "table",
  data() {
    return {
      value:
        "日期：2022.1.19 \n单名：企鹅互助 \n姓名：xxxx \n手机号：15951379999 \n我的群昵称：柠萌 小易组 冷易",
      data: [],
      dataProp: {
        日期: "date",
        单名: "appName",
        姓名: "name",
        手机号: "mobile",
        我的群昵称: "nickname",
      },
    };
  },
  created() {
    console.log(parseInt(49));
  },
  computed: {
    total() {
      return function (n) {
        return this.value;
      };
    },
  },
  methods: {
    importFun() {
      let arr = this.value.split("\n").filter((item) => item !== "");
      let obj = {};
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("：");
        obj[this.dataProp[arr2[0]]] = arr2[1];
      }
      this.data.push(obj);
      console.log(this.data);
    },
    exportFun() {
      if (this.data.length === 0) {
        this.$message({ type: "error", message: "没有数据" });
      }
      import("@/vendor/Export2Excel").then((excel) => {
        const tHeader = Object.keys(this.dataProp);
        const data = this.data.map((item) => Object.values(item));
        let filename = formDate({}, "md") + this.data[0].appName;
        excel.export_json_to_excel({
          header: tHeader, //表头 必填
          data, //具体数据 必填
          filename, //非必填
          autoWidth: true, //非必填
          bookType: "xlsx", //非必填
        });
      });
    },
  },
};
</script>
<style scoped>
.btns {
  border: solid 1px #ccc;
  width: 100px;
  text-align: center;
  line-height: 24px;
}
</style>
