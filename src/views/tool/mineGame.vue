<template>
  <div class="box">
    <div class="list" v-for="(item, index) in buttonArr" :key="index">
      <button
        v-for="(ite, ind) in item"
        :key="ind"
        :class="{ active: ite.num === 10 && isShow, bgc1: isShow }"
        @click="handClick(index, ind)"
      >
        <span v-if="ite.num > 0 && isShow">{{ ite.num }}</span>
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
export default defineComponent({
  name: "mineGame",

  setup() {
    let buttonArr = reactive([]);
    let getNumArr = reactive([]);
    let w = ref(16);

    //生成地雷
    const renderLei = () => {
      const lei = () => {
        let leiArr = [];
        function fn() {
          //获取随机坐标
          const x = Math.floor(Math.random() * 16);
          const y = Math.floor(Math.random() * 16);
          leiArr.push([y, x]);
          if (leiArr.length == 40) {
            //数组去重
            let obj = {};
            leiArr.forEach((item) => (obj[item] = item));
            leiArr = Object.values(obj);
          }
          if (leiArr.length == 40) {
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
        buttonArr[item[0]][item[1]].num = 10;
      });
    };
    //获取格子周围一圈格子的函数
    const getBox = (x, y) => {
      //第一排的格子只需要选中前两排
      if (y == 0) {
        for (let i = 0; i < 2; i++) {
          //如果两个格子x坐标相减的绝对值小于或等于1，那么这两个格子就是相邻的
          let getNumArr02 = buttonArr[i].filter(
            (item, index) => Math.abs(index - x) <= 1
          );
          //加入数组
          getNumArr.push(...getNumArr02);
        }
      }
      //第二排至倒数第二排，需要选中自身上中下三排的格子
      else if (y >= 1 && y < w.value - 1) {
        for (let i = +y - 1; i < +y + 2; i++) {
          let getNumArr02 = buttonArr[i].filter(
            (item, index) => Math.abs(index - x) <= 1
          );
          getNumArr.push(...getNumArr02);
        }
      } else {
        //最后一排，选中两排的格子遍历
        for (let i = w.value - 2; i < w.value; i++) {
          let getNumArr02 = buttonArr[i].filter(
            (item, index) => Math.abs(index - x) <= 1
          );
          getNumArr.push(...getNumArr02);
        }
      }
    };
    //获取格子数字函数
    const getNum = (x, y) => {
      //建立一个存放目标格子周围一圈格子的数组
      getNumArr = [];
      // const y = ul.dataset.y;
      // const x = btn.dataset.x;
      //调用获取格子周围一圈格子的函数，将格子的坐标传入参数
      getBox(x, y);
      //遍历这个格子周围一圈的格子，有地雷的话num就+1
      getNumArr.forEach((item1) => {
        if (item1.num == 10) {
          buttonArr[x][y].num++;
        }
      });
    };
    //渲染格子数字
    const renderNum = () => {
      buttonArr.forEach((item, i) => {
        item.forEach((item02, j) => {
          if (item02.num == 0) {
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
      buttonArr = new Array(w.value);
      for (let i = 0; i < w.value; i++) {
        buttonArr[i] = new Array(w.value);
        for (let j = 0; j < w.value; j++) {
          buttonArr[i][j] = { num: 0, isShow: false };
        }
      }
      renderLei();
      renderNum();
    };
    const handClick = (x, y) => {
      let arr = JSON.parse(JSON.stringify(buttonArr));
      if (buttonArr[x][y].num === 10) {
        arr[x][y].isShow = true;
        // setTimeout(function () {
        //   alert("游戏失败");
        //   init();
        // }, 200);
      } else {
        arr[x][y].isShow = true;
      }
      buttonArr = JSON.parse(JSON.stringify(arr));

      console.log(buttonArr[x][y], buttonArr[x][y].isShow, buttonArr);
    };

    init();

    return {
      buttonArr,
      getNumArr,
      w,
      handClick,
    };
  },
});
</script>
<style lang="scss" scoped>
.box {
  width: 500px;
  margin: 50px auto;
  padding: 5px;
  border: 5px solid black;
}

.list {
  display: flex;
  height: 30px;
}

button {
  width: 30px;
  height: 30px;
  background-color: #c0c0c0;
}

.bgc1 {
  background-color: #fff;
}

.bgc2 {
  background-color: #000;
}

.bgc3 {
  background: url(./qq.jpg) no-repeat;
  background-color: #c0c0c0;
  background-size: 100%;
}

.active {
  background: url(./Snipaste_2022-06-12_16-24-48.jpg) no-repeat;
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
