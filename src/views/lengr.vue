<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-03-16 14:11:04
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-28 11:11:39
-->
<template>
  <div class="lengr_main">
    <template v-for="item in routes" :key="item.name">
      <el-button
        type="success"
        class="list"
        @click="goPage(item)"
        v-if="showAll || !item.meta.password"
      >
        {{ item.meta.activeName }}
      </el-button>
    </template>

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
import { defineComponent, ref, reactive, onMounted } from "vue";
import { routes } from "@/router/index";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const showAll = ref(false);
    const goPage = (data) => {
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
    };
    const confirmFn = () => {
      if (this.routeDetail.meta.password === this.password) {
        this.$router.push(this.routeDetail.path);
      } else {
        this.$message({
          type: "error",
          message: "密码不对哟",
        });
      }
    };
    onMounted(() => {
      let query = router.currentRoute.value.query;
      showAll.value = query.showAll === "true";
    });
    return {
      routes: routes.filter((item) => item.meta && item.meta.activeName),
      centerDialogVisible: ref(false),
      password: ref(""),
      routeDetail: reactive({}),
      showAll,
      goPage,
      confirmFn,
    };
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
