<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-02-23 10:31:38
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-13 11:00:28
-->
<template>
  <div class="main">
    <div style="margin: 10px 0">
      按顺序 <el-button type="primary" @click="importFun(1)">导入 </el-button>
    </div>
    <el-input v-model="value1" placeholder="" :clearable="true"></el-input>
    <div style="margin: 10px 0">
      按格式 <el-button type="primary" @click="clearValue">一键清空</el-button>
      <el-button type="primary" @click="importFun(2)">导入 </el-button>
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
        <el-radio :label="0">地址</el-radio>
      </el-radio-group>
    </div>
    <h3>
      列表 <el-button type="primary" @click="exportFun">导出 </el-button>
      <el-button type="primary" @click="clearFun"> 清空数据</el-button>
    </h3>
    <el-table
      border
      :data="data"
      style="width: 100%"
      :key="tableHeader"
      ref="dragTable"
      row-key="data"
    >
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
import { defineComponent, ref, reactive, onMounted } from "vue";
import {
  getlocalStorage,
  setlocalStorage,
  removelocalStorage,
} from "@/utils/localStorage";
import Sortable from "sortablejs";

export default defineComponent({
  setup() {
    const dragTable = ref(null);
    const data = ref([]);
    const setSort = () => {
      if (!dragTable.value) return;
      const el = dragTable.value.$el.querySelectorAll("tbody")[0];
      Sortable.create(el, {
        ghostClass: "sortable-ghost", // Class name for the drop placeholder,
        setData: function (dataTransfer) {
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
          dataTransfer.setData("Text", "");
        },
        onEnd: (evt) => {
          const targetRow = data.value.splice(evt.oldIndex, 1)[0];
          data.value.splice(evt.newIndex, 0, targetRow);

          // for show the changes, you can delete in you code
          // const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          // this.newList.splice(evt.newIndex, 0, tempIndex)
        },
      });
    };
    onMounted(() => {
      setSort();
    });
    return {
      value1: ref(
        "2022.1.19。汪桔 。18988429684。 云南省。昆明市。官渡区。大板桥街道。小哨村。云南是事实上是"
      ),
      value: ref(
        "日期：2022.1.19 \n姓名：汪桔 \n手机号：18988429684\n省： 云南省\n市：昆明市\n区：官渡区\n详细地址：大板桥街道小哨村云南是事实上是\n"
      ),
      data,
      dataProp: reactive({
        日期: "data",
        姓名: "name",
        手机号: "mobile",
        省: "appName",
        市: "nickname",
        区: "nickname2",
        详细地址: "nickname3",
      }),
      tableHeader: ref(0),
      dragTable,
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
  computed: {},
  methods: {
    // 导入
    importFun(type) {
      let obj = {};
      if (type === 1) {
        let value = this.value1.split("。");
        let headerObj = this.dataProp;
        if (value.length > Object.keys(headerObj).length) {
          value[5] = value.slice(5).join("");
          console.log(value);
        }
        Object.values(headerObj).forEach((item, index) => {
          obj[item] = value[index];
        });
        this.value = "";
        Object.keys(headerObj).forEach((item, index) => {
          this.value += item + "：" + obj[headerObj[item]] + "\n";
        });
        console.log(obj, this.value);
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
      this.$nextTick(() => {
        this.setSort();
      });
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
      this.$nextTick(() => {
        this.setSort();
      });
    },
    // 清空
    clearFun() {
      this.data = [];
      removelocalStorage("tableData");
    },
    // 表头
    headerChange() {
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
