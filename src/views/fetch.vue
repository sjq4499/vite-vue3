<template>
  <div class="">
    title
    <div class="list" v-for="item in list" :key="item.dictValue">
      {{ item.dictName }}
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, onMounted } from 'vue';
export default defineComponent({
  setup() {
    let list = ref([]);
    let getList = () => {
      fetch(
        'https://api.zxzhedu.com/api/sgsf-common-interface/dicts/batch?typeNames=SUM_WATCH_CONDITION',
        {
          headers: {
            Accept: 'application/json, text/plain, */*',
          },
          method: 'get',
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(list);
          list.value = data.data.SUM_WATCH_CONDITION;
          console.log(list);
        })
        .catch((error) => console.error('Error:', error));
    };
    onMounted(() => {
      getList();
    });
    console.log(list, 'list');
    return { list };
  },
});
</script>
<style lang="scss" scoped></style>
