<template>
  <div class="mine_header">
    <span>格子：{{ w }}*{{ w }}</span>
    <span>雷：{{ leiNumber }} </span>
    <span>标记：{{ signNum }}</span>
  </div>
  <div class="box">
    <div class="list" v-for="(item, index) in buttonArr" :key="index">
      <div
        v-for="(ite, ind) in item"
        class="list_row"
        :key="index + '' + ind"
        :class="{
          active: ite.num === 10 && ite.isShow,
          bgc1: ite.isShow,
          bgc3: ite.isSign,
        }"
        @click="handClick(ite, index, ind)"
        @contextmenu.prevent="signClick(ite, index, ind)"
      >
        <span v-if="ite.num > 0">{{ ite.num }}</span>
        <!-- <span v-if="ite.num > 0 && ite.isShow">{{ ite.num }}</span> -->
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, onMounted, watch } from "vue";
export default defineComponent({
  name: "mineGame",

  setup() {
    let w = ref(10);
    let buttonArr = ref([]);
    let checkArr = ref([]);
    let index = ref(0);
    let leiNumber = ref(10);
    let signNum = ref(0);

    //生成地雷
    const renderLei = () => {
      const lei = () => {
        let leiArr = [];
        function fn() {
          let num = leiNumber.value;
          //获取随机坐标
          const x = Math.floor(Math.random() * num);
          const y = Math.floor(Math.random() * num);
          leiArr.push([y, x]);
          if (leiArr.length == num) {
            //数组去重
            let obj = {};
            leiArr.forEach((item) => (obj[item] = item));
            leiArr = Object.values(obj);
          }
          if (leiArr.length == num) {
            return;
          }
          fn();
        }
        fn();
        return leiArr;
      };
      let leiArr = lei();
      //渲染地雷
      leiArr.forEach((item) => {
        buttonArr.value[item[0]][item[1]].num = 10;
      });
    };
    //获取格子周围一圈格子的函数
    const getBox = (x, y) => {
      //第一排的格子只需要选中前两排
      let getNumArr = [];
      let minx = x - 1 >= 0 ? x - 1 : 0;
      let maxx = x + 1 > w.value - 1 ? w.value - 1 : x + 1;
      for (let i = minx; i <= maxx; i++) {
        //如果两个格子y坐标相减的绝对值小于或等于1，那么这两个格子就是相邻的
        let getNumArr02 = buttonArr.value[i].filter(
          (item, index) => Math.abs(item.y - y) <= 1
        );
        //加入数组
        getNumArr.push(...getNumArr02);
      }
      return getNumArr;
    };
    //获取格子数字函数
    const getNum = (x, y) => {
      //建立一个存放目标格子周围一圈格子的数组
      //调用获取格子周围一圈格子的函数，将格子的坐标传入参数
      let getNumArr = getBox(x, y);
      //遍历这个格子周围一圈的格子，有地雷的话num就+1
      getNumArr.forEach((item) => {
        if (item.num == 10) {
          buttonArr.value[x][y].num++;
        }
      });
    };
    //渲染格子数字
    const renderNum = () => {
      buttonArr.value.forEach((item, i) => {
        item.forEach((item02, j) => {
          if (item02.num !== 10) {
            //获取不是地雷的标签
            // let ul = document.querySelectorAll(".list")[i];
            // let btn = ul.querySelectorAll("button")[i02];
            //调用获取格子数字的函数，传入3个参数，当前格子对应的数组元素，当前行，和当前格子
            getNum(i, j);
            //判断这个格子是否带有数字
            // if (item02.num < 10 && item02.num > 0) {
            //   //给有数字的格子添加一个自定义属性，便于识别
            //   btn.dataset.z = 1;
            //   const span = document.createElement("span");
            //   //将数字渲染到格子中
            //   span.innerText = item02.num;
            //   span.style.display = "none";
            //   btn.appendChild(span);
            // }
          }
        });
      });
    };
    // 初始化
    const init = () => {
      buttonArr.value = new Array(w.value);
      let index = 1;
      for (let i = 0; i < w.value; i++) {
        buttonArr.value[i] = new Array(w.value);
        for (let j = 0; j < w.value; j++) {
          buttonArr.value[i][j] = {
            num: 0,
            isShow: false,
            x: i,
            y: j,
            index: index++,
            isSign: false,
          };
        }
      }
      renderLei();
      renderNum();
    };
    // 显示周围的白色格子
    const showWhiteGrid = (x, y) => {
      //空白格子的周围一圈一定没有地雷，直接让这些格子显示类容
      //再次调用获取周围一圈格子的函数
      let getNumArr = getBox(x, y);
      let arr = [];
      getNumArr.forEach((item, index) => {
        //点击空白格，就会自动把周围一圈的格子都显示
        if (item.num != 10) {
          if (
            !buttonArr.value[item.x][item.y].isShow &&
            !buttonArr.value[item.x][item.y].isSign
          ) {
            buttonArr.value[item.x][item.y].isShow = true;
          }
          if (
            buttonArr.value[item.x][item.y].num == 0 &&
            !buttonArr.value[item.x][item.y].isSign &&
            checkArr.value.findIndex((check) => check.index === item.index) ===
              -1
          ) {
            //如果空白格周围一圈格子里面还有空白格，就将他们加入这个num0数组中，稍后再次循环一次这个点击事件
            arr.push(item);
          } else if (
            checkArr.value.findIndex((check) => check.index === item.index) ===
            -1
          ) {
            checkArr.value.push(item);
          }
        }
      });
      // console.log(arr, "llla");
      arr.forEach((item) => {
        handClick(item, item.x, item.y);
      });
    };
    const handClick = (data, x, y) => {
      // getNum(x, y);
      if (
        checkArr.value.findIndex((check) => check.index === data.index) !== -1
      )
        return;

      index.value++;
      checkArr.value.push(data);
      if (buttonArr.value[x][y].num === 10) {
        buttonArr.value[x][y].isShow = true;
        // setTimeout(function () {
        //   alert("游戏失败");
        //   init();
        // }, 200);
      } else {
        if (!buttonArr.value[x][y].isShow) {
          buttonArr.value[x][y].isShow = true;
        }
        //判断如果点击的是空白格子
        if (buttonArr.value[x][y].num === 0) {
          showWhiteGrid(x, y);
        }
      }
    };
    const signClick = (data, x, y) => {
      if (buttonArr.value[x][y].isShow) return;
      if (buttonArr.value[x][y].isSign) {
        buttonArr.value[x][y].isSign = false;
        signNum.value--;
        let index = checkArr.value.findIndex(
          (item) => item.index === data.index
        );
        checkArr.value.splice(index, 1);
      } else {
        checkArr.value.push(data);
        signNum.value++;
        buttonArr.value[x][y].isSign = true;
      }
    };

    init();

    watch(checkArr.value, () => {
      console.log("first");
      if (Math.pow(w.value, 2) === checkArr.value.length) {
        alert("游戏胜利！");
      }
    });
    return {
      buttonArr,
      w,
      index,
      checkArr,
      signNum,
      leiNumber,
      handClick,
      signClick,
    };
  },
});
</script>
<style lang="scss" scoped>
.box {
  display: inline-block;
  margin: 0 auto;
  padding: 5px;
  border: 5px solid black;
}

.list {
  display: flex;
  height: 30px;
}

.list_row {
  width: 30px;
  height: 30px;
  background-color: #c0c0c0;
  border: solid 1px #000;
  text-align: center;
  line-height: 2;
}

.bgc1 {
  background-color: #fff;
}

.bgc2 {
  background-color: #000;
}

.bgc3 {
  background: url(@/assets/sign-icon.png) no-repeat;
  background-color: #c0c0c0;
  background-size: 100%;
}

.active {
  background: url(@/assets/mine-icon.png) no-repeat;
  background-size: 100%;
}

p {
  position: absolute;
  top: 200px;
  right: 200px;
  font-size: 20px;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>
