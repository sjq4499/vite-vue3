<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-16 14:11:04
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-16 16:26:29
-->
<template>
  <div class="lengr_main">
    <el-button
      type="success"
      class="list"
      v-for="item in routes"
      :key="item.name"
      @click="goPage(item)"
    >
      {{ item.meta.activeName }}
    </el-button>
    <el-dialog
      v-model="centerDialogVisible"
      title="请输入密码"
      width="300px"
      center
    >
      <el-input v-model="password" placeholder="请输入密码"> </el-input>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmFn">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
import { routes } from "@/router/index";

export default defineComponent({
  setup() {
    return {
      routes: routes.filter((item) => item.meta && item.meta.activeName),
      centerDialogVisible: ref(false),
      password: ref(""),
      routeDetail: reactive({}),
    };
  },
  methods: {
    goPage(data) {
      if (data.name === "lengr") {
        this.$message({
          message: "你已经在此页面了",
          type: "error",
        });
        return;
      }
      if (data.meta.password) {
        this.centerDialogVisible = true;
        this.routeDetail = data;
      } else {
        this.$router.push(data.path);
      }
    },
    confirmFn() {
      if (this.routeDetail.meta.password === this.password) {
        this.$router.push(this.routeDetail.path);
      } else {
        this.$message({
          type: "error",
          message: "密码不对哟",
        });
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.lengr_main {
  line-height: 50px;
  background: #fff;
  border-radius: 10px;
  padding: 5px;
}
</style>
