<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-02 09:52:03
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-13 18:11:25
-->
<template>
  <div class="main">
    <h1>时间戳转换</h1>
    <div class="list">
      <div class="item">
        <span class="lable">现在</span>
        <span class="value">
          {{ nowTime }}
        </span>
      </div>
      <div class="item">
        <span class="lable">控制</span>
        <span class="value">
          {{ nowTime }}
        </span>
      </div>
    </div>
    <div class="list">
      <div class="item center">时间戳</div>
      <div class="item center"></div>
      <div class="item center">时间</div>
    </div>
    <div class="list">
      <div class="item">
        <el-input v-model="time" placeholder=""></el-input>
      </div>
      <div class="item center">
        <el-button type="primary">《转换》</el-button>
      </div>
      <div class="item center">
        <el-date-picker
          v-model="time"
          type="datetime"
          placeholder="Select date and time"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "Timestamp",
  setup() {
    const nowTime = ref(new Date() * 1);
    const time = ref(new Date() * 1);
    const dateTime = ref(new Date() * 1);

    return {
      nowTime,
      time,
      dateTime,
    };
  },
});
</script>
<style lang="scss" scoped>
.flexbox {
  display: flex;
}
.center {
  text-align: center;
}
.list {
  margin: 24px 0;
  display: flex;
  .item {
    flex: 1;
    .lable {
      margin-right: 20px;
    }
  }
}
</style>
