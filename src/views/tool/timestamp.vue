<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-02 09:52:03
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-18 13:53:24
-->
<template>
  <div class="">
    <h1>时间戳转换</h1>
    <div class="list">
      <div class="item">
        <span class="lable">北京时间：</span>
        <span class="value color_red">
          {{
            formDate(
              new Date(
                new Date().getTime() +
                  (parseInt(new Date().getTimezoneOffset() / 60) + 8) *
                    3600 *
                    1000
              )
            )
          }}
        </span>
      </div>
    </div>
    <div class="list">
      <div class="item">
        <span class="lable">时间戳(ms)：</span>
        <span class="value color_red">
          {{ nowTime }}
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
        <div class="item center">
          <div class="lable">时间戳(ms)</div>
        </div>
        <div class="item center">转换</div>
        <div class="item center">时间</div>
      </div>

      <div class="list">
        <div class="item center">
          <div class="value">
            <el-input
              v-model="time"
              placeholder=""
              type="number"
              style="min-width: 100px"
            ></el-input>
          </div>
        </div>
        <div class="item center">
          <el-button type="primary">
            <el-icon><Switch /></el-icon>
          </el-button>
        </div>
        <div class="item center">
          <n-date-picker
            v-model:value="time"
            type="datetime"
            clearable
            style="min-width: 100px"
          />
          <!-- <el-date-picker
            v-model="dateTime"
            type="datetime"
            placeholder="Select date and time"
          /> -->
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
import { formDate } from "@/utils/index";
import { Switch } from "@element-plus/icons-vue";

export default defineComponent({
  name: "Timestamp",
  components: {
    Switch,
  },
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
      formDate,
    };
  },
});
</script>
<style lang="scss" scoped>
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
  padding: 0 10px;
}
</style>
