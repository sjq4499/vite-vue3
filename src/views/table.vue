<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-02-23 10:31:38
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-04 09:38:51
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
    <div>
      表头
      <el-radio-group v-model="tableTitle">
        <el-radio :label="0">app</el-radio>
        <el-radio :label="1">地址</el-radio>
      </el-radio-group>
    </div>
    <h1>
      列表 <el-button type="primary" @click="exportFun">导出 </el-button>
      <el-button type="primary" @click="clearFun"> 清空数据</el-button>
    </h1>
    <el-table border :data="data" style="width: 100%">
      <el-table-column
        :prop="value"
        :label="key"
        v-for="(value, key) in dataProp"
        :key="value"
      />
      <el-table-column label="操作" fixed="right">
        <template #default="scope">
          <el-button type="text" @click="deleteData(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { formDate } from "@/utils/index.js";
import { defineComponent, ref, reactive } from "vue";
import {
  getlocalStorage,
  setlocalStorage,
  removelocalStorage,
} from "@/utils/localStorage";

export default defineComponent({
  setup() {
    return {
      value: ref(
        "日期：2022.1.19 \n单名：企鹅互助 \n姓名：xxxx \n手机号：15951379999 \n我的群昵称：小易 小易组 冷易"
      ),
      data: ref([]),
      dataProp: reactive({
        日期: "date",
        单名: "appName",
        姓名: "name",
        手机号: "mobile",
        我的群昵称: "nickname",
      }),
      tableTitle: ref(0),
    };
  },
  created() {
    let list = JSON.parse(getlocalStorage("tableData"));
    if (list) {
      this.data = list;
    }
  },
  computed: {
    total() {
      return function (n) {
        return this.value;
      };
    },
  },
  methods: {
    // 导入
    importFun() {
      let arr = this.value.split("\n").filter((item) => item !== "");
      console.log(JSON.stringify(arr));
      let obj = {};
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].replace(":", "：").split("：");
        obj[this.dataProp[arr2[0]]] = arr2[1];
      }
      this.data.push(obj);
      setlocalStorage("tableData", JSON.stringify(this.data));
      console.log(this.data);
    },
    // 导出
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
    // 删除
    deleteData(data) {
      let index = data.$index;
      this.data.splice(index, 1);
      setlocalStorage("tableData", JSON.stringify(this.data));
    },
    // 清空
    clearFun() {
      this.data = [];
      removelocalStorage("tableData");
    },
  },
});
</script>
<style scoped>
.btns {
  border: solid 1px #ccc;
  width: 100px;
  text-align: center;
  line-height: 24px;
}
</style>
