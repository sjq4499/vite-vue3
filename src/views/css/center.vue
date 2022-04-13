<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-02 09:52:03
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-07 09:50:36
-->
<template>
  <div class="main">
    <div class="box center1">
      <div class="box_content center1_content">flex</div>
    </div>
    <div class="box center5">
      <div class="box_content center5_content">flex2</div>
    </div>
    <div class="box center2">
      <div class="box_content center2_content">translate</div>
    </div>
    <div class="box center3">
      <div class="box_content center3_content">grid</div>
    </div>
    <div class="box center4">
      <div class="box_content center4_content">grid2</div>
    </div>
    <div class="box center6">
      <div class="box_content center6_content">margin + vertical-align</div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "Center",
  setup() {
    return;
  },
});
</script>
<style lang="scss" scoped>
.box {
  width: 200px;
  height: 130px;
  border-radius: 10px;
  border: 1px solid #979797;
  font-size: 18px;
  .box_content {
    background: #56d6a5;
  }
}
// flex
// IE9-浏览器不支持
// 在伸缩容器上使用主轴对齐justify-content和侧轴对齐align-items
.center1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
// 在伸缩项目上使用margin:auto
.center5 {
  display: flex;
  .center5_content {
    margin: auto;
  }
}
// 相对绝对定位
// IE9-浏览器不支持
.center2 {
  position: relative;
  .center2_content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
// grid
// IE10-浏览器不支持
// 在网格容器上设置justify-items、align-items或justify-content、align-content
.center3 {
  display: grid;
  align-items: center;
  justify-items: center;
  // align-content: center;
  // justify-content: center;
}
// 在网格项目中设置justify-self、align-self或者margin: auto
.center4 {
  display: grid;
  .center4_content {
    align-self: center;
    justify-self: center;
  }
}

.center6 {
  display: table-cell;
  vertical-align: middle;
  .center6_content {
    display: table;
    margin: 0 auto;
  }
}
</style>
