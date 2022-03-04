<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-02-23 10:31:38
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-04 14:06:51
-->
<template>
  <div class="main">
    <div style="margin: 10px 0">
      地址 <el-button type="primary" @click="importFun">导入 </el-button>
    </div>
    <el-input v-model="value1" placeholder="" :clearable="true"></el-input>
    <div style="margin: 10px 0">
      app <el-button type="primary" @click="clearValue">一键清空</el-button>
      <el-button type="primary" @click="importFun">导入 </el-button>
    </div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 6 }"
      v-model="value"
      placeholder="请输入数据"
      :clearable="true"
    ></el-input>
    <div>
      表头
      <el-radio-group v-model="tableHeader" @change="headerChange">
        <el-radio :label="0">app</el-radio>
        <el-radio :label="1">地址</el-radio>
      </el-radio-group>
    </div>
    <h3>
      列表 <el-button type="primary" @click="exportFun">导出 </el-button>
      <el-button type="primary" @click="clearFun"> 清空数据</el-button>
    </h3>
    <el-table border :data="data" style="width: 100%" :key="tableHeader">
      <el-table-column
        :prop="value"
        :label="key"
        v-for="(value, key) in dataProp"
        :key="value"
      />
      <el-table-column label="操作" width="80px" fixed="right">
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
      value1: ref(
        "汪桔 。18988429684。 云南省。昆明市。官渡区。大板桥街道。小哨村。云南农业职业技术学院"
      ),
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
      tableHeader: ref(0),
    };
  },
  created() {
    let data = JSON.parse(getlocalStorage("tableData"));
    if (data) {
      this.data = data;
    }
    let tableHeader = JSON.parse(getlocalStorage("tableHeader"));
    if (tableHeader) {
      this.tableHeader = tableHeader;
      this.headerChange();
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
      let obj = {};
      if (this.tableHeader === 1) {
        let value = this.value1.split("。");
        obj = {
          date: formDate({}, "md"),
          type: "香水",
        };
        let headerObj = {
          姓名: "name",
          手机号: "mobile",
          省: "appName",
          市: "nickname",
          区: "nickname2",
          详细地址: "nickname3",
        };
        if (value.length > 6) {
          value[5] = value.slice(5).join("");
          console.log(value);
        }
        Object.values(headerObj).forEach((item, index) => {
          obj[item] = value[index];
        });
        console.log(obj);
      } else {
        let arr = this.value.split("\n").filter((item) => item !== "");
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].replace(":", "：").split("：");
          obj[this.dataProp[arr2[0]]] = arr2[1];
        }
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
        if (this.tableHeader === 1) {
          filename = formDate({}, "md") + "小易区地址表";
        }
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
    // 表头
    headerChange() {
      if (this.tableHeader === 0) {
        this.dataProp = {
          日期: "date",
          单名: "appName",
          姓名: "name",
          手机号: "mobile",
          我的群昵称: "nickname",
        };
      } else if (this.tableHeader === 1) {
        this.dataProp = {
          日期: "date",
          姓名: "name",
          手机号: "mobile",
          省: "appName",
          市: "nickname",
          区: "nickname2",
          详细地址: "nickname3",
          类型: "type",
        };
      }
      setlocalStorage("tableHeader", JSON.stringify(this.tableHeader));
      console.log(this.dataProp);
    },
    clearValue() {
      this.value = "";
    },
  },
});
</script>
<style scoped>
.main {
  padding: 20px;
  background: #fff;
}
.btns {
  border: solid 1px #ccc;
  width: 100px;
  text-align: center;
  line-height: 24px;
}
</style>
