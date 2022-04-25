<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-04-25 09:29:19
 * @LastEditors: sjq
 * @LastEditTime: 2022-04-25 09:36:05
-->
<template>
  <div class="">
    <div class="typing">
      <div class="typing-effect">文字的打字效果</div>
    </div>

    <img
      class="drop-shadow"
      src="@/assets/watermark1.png"
      alt="drop-shadow example (transparent)"
    />
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "Others",
  setup() {
    return;
  },
});
</script>
<style lang="scss" scoped>
.typing {
  display: flex;
  align-items: center;
  justify-content: center;
}
.typing-effect {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  animation: typing 2s steps(22), effect 0.5s step-end infinite alternate;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes effect {
  50% {
    border-color: transparent;
  }
}
//
.box-shadow {
  box-shadow: 2px 4px 8px #3723a1;
}

.drop-shadow {
  filter: drop-shadow(2px 4px 8px #3723a1);
}
</style>
