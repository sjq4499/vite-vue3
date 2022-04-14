<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-02 09:52:03
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-14 16:58:53
-->
<template>
  <div class="">
    <h1>时间戳转换</h1>
    <div class="list">
      <div class="item">
        <span class="lable">现在：</span>
        <span class="value color_red">
          {{ nowTime }}
        </span>
      </div>
      <div class="item">
        <span class="lable">控制：</span>
        <span class="value">
          <el-switch
            v-model="isTimeChange"
            inline-prompt
            active-text="停"
            inactive-text="开"
          />
        </span>
      </div>
    </div>
    <div class="time_box">
      <div class="list">
        <div class="item center">时间戳(ms)</div>
        <div class="item center"></div>
        <div class="item center">时间</div>
      </div>
      <div class="list">
        <div class="item center">
          <el-input
            v-model="time"
            placeholder=""
            style="width: 200px"
          ></el-input>
        </div>
        <div class="item center">
          <el-button type="primary">《==转换==》</el-button>
        </div>
        <div class="item center">
          <el-date-picker
            v-model="dateTime"
            type="datetime"
            placeholder="Select date and time"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  watch,
  onUnmounted,
} from "vue";

export default defineComponent({
  name: "Timestamp",
  setup() {
    const nowTime = ref(new Date() * 1);
    const time = ref(new Date() * 1);
    const dateTime = ref(new Date() * 1);
    const isTimeChange = ref(true);
    const timeChange = ref(null);
    onMounted(() => {
      changeTime();
    });
    onUnmounted(() => {
      clearInterval(timeChange.value);
    });
    const changeTime = () => {
      if (!isTimeChange.value) {
        clearInterval(timeChange.value);
      } else {
        timeChange.value = setInterval(() => {
          nowTime.value = new Date() * 1;
        }, 500);
      }
    };
    watch(isTimeChange, (newValue, oldValue) => {
      changeTime();
    });
    return {
      nowTime,
      time,
      dateTime,
      isTimeChange,
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
.color_red {
  color: #f55;
  font-size: 16px;
  min-width: 760px;
  border-radius: 10px;
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
.time_box {
  border: 1px solid #ccc;
}
</style>
