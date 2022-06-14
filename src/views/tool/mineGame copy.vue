<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-06-14 09:53:04
 * @LastEditors: sjq
 * @LastEditTime: 2022-06-14 18:08:08
-->
<template>
  <div class="box">
    <div class="list" v-for="(item, index) in buttonArr" :key="index">
      <button
        v-for="(ite, ind) in item"
        :key="ind"
        :class="{ active: ite.num === 10 }"
      >
        <span v-if="ite.num > 0">{{ ite.num }}</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "mineGame",
  components: {},
  data() {
    return {
      buttonArr: [],
      getNumArr: [],
      w: 16,
    };
  },
  computed: {},
  watch: {},
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      let buttonArr = new Array(this.w);
      for (let i = 0; i < this.w; i++) {
        buttonArr[i] = new Array(this.w);
        for (let j = 0; j < this.w; j++) {
          buttonArr[i][j] = { num: 0 };
        }
      }
      this.buttonArr = buttonArr;
      this.renderLei();
      this.renderNum();
    },
    //生成地雷
    renderLei() {
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
        this.buttonArr[item[0]][item[1]].num = 10;
      });
    },
    renderDiv() {
      document.querySelector("div").innerHTML = "";
      buttonArr.forEach((item, index) => {
        let ul = document.createElement(".list");
        //给ul标签添加自定义属性y
        ul.dataset.y = index;
        item.forEach((item2, index2) => {
          let button = document.createElement("button"); //遍历数组，绘制棋盘
          //给button标签添加自定义属性x，用来作为坐标使用
          button.dataset.x = index2;
          if (item2.num === 10) {
            //给地雷元素添加一个自定义属性，便于识别
            button.dataset.z = 10;
            //写的时候可以把地雷先渲染出来，写完了再注释掉
            // button.classList.add('active')
          } else {
            item2.num = 0;
          }
          ul.appendChild(button);
        });
        document.querySelector("div").appendChild(ul);
      });
    },
    //渲染格子数字
    renderNum() {
      this.buttonArr.forEach((item, i) => {
        item.forEach((item02, j) => {
          if (item02.num == 0) {
            //获取不是地雷的标签
            // let ul = document.querySelectorAll(".list")[i];
            // let btn = ul.querySelectorAll("button")[i02];
            //调用获取格子数字的函数，传入3个参数，当前格子对应的数组元素，当前行，和当前格子
            this.getNum(i, j);
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
    },
    ////获取格子数字函数
    getNum(x, y) {
      //建立一个存放目标格子周围一圈格子的数组
      this.getNumArr = [];
      // const y = ul.dataset.y;
      // const x = btn.dataset.x;
      //调用获取格子周围一圈格子的函数，将格子的坐标传入参数
      this.getBox(x, y);
      //遍历这个格子周围一圈的格子，有地雷的话num就+1
      this.getNumArr.forEach((item1) => {
        if (item1.num == 10) {
          this.buttonArr[x][y].num++;
        }
      });
    },
    //获取格子周围一圈格子的函数
    getBox(x, y) {
      //第一排的格子只需要选中前两排
      if (y == 0) {
        this.buttonArr[x + 1][y];
        this.buttonArr[x - 1][y];
        this.buttonArr[x][y + 1];
        for (let i = 0; i < 2; i++) {
          //如果两个格子x坐标相减的绝对值小于或等于1，那么这两个格子就是相邻的
          let getNumArr02 = this.buttonArr[i].filter(
            (item, index) => Math.abs(index - x) <= 1
          );
          //加入数组
          this.getNumArr.push(...getNumArr02);
        }
      }
      //第二排至倒数第二排，需要选中自身上中下三排的格子
      else if (y >= 1 && y < this.w - 1) {
        for (let i = +y - 1; i < +y + 2; i++) {
          let getNumArr02 = this.buttonArr[i].filter(
            (item, index) => Math.abs(index - x) <= 1
          );
          getNumArr.push(...getNumArr02);
        }
      } else {
        //最后一排，选中两排的格子遍历
        for (let i = this.w - 2; i < this.w; i++) {
          const allButton03 = allUl[i].querySelectorAll("button");
          let getNumArr02 = Array.from(allButton03).filter(
            (item, index) => Math.abs(index - x) <= 1
          );
          getNumArr.push(...getNumArr02);
        }
      }
    },
    handClick() {
      allUl.forEach((buttons) => {
        buttons.querySelectorAll("button").forEach((item) => {
          item.addEventListener("click", function () {
            //点击效果
            this.classList.add("bgc1");
            //如果这个格子有数字，就显示
            if (this.querySelector("span")) {
              this.querySelector("span").style.display = "block";
            }
            allArr.push(this);
            //判断，如果点击的是地雷，游戏结束
            if (item.dataset.z == 10) {
              item.classList.add("active");
              setTimeout(function () {
                alert("游戏失败");
                location.reload();
              }, 200);
            }
            //只有空白的格子没有自定义的z属性，判断如果点击的是空白格子
            if (!item.dataset.z) {
              const num0Arr = [];
              num0(item);
              //空白格子的周围一圈一定没有地雷，直接让这些格子显示类容
              function num0(item) {
                getNumArr = [];
                const buttons = item.parentNode;
                const y = buttons.dataset.y;
                const x = item.dataset.x;
                //再次调用获取周围一圈格子的函数
                getBox(x, y);
                getNumArr.forEach((itemBtn) => {
                  //点击空白格，就会自动把周围一圈的格子都显示
                  if (itemBtn.dataset.z != 10) {
                    itemBtn.classList.add("bgc1");
                  }
                  if (itemBtn.querySelector("span")) {
                    itemBtn.querySelector("span").style.display = "block";
                  }
                  //将这些格子都加入总数组中
                  allArr.push(itemBtn);
                  if (!itemBtn.dataset.z) {
                    //如果空白格周围一圈格子里面还有空白格，就将他们加入这个num0数组中，稍后再次循环一次这个点击事件
                    num0Arr.push(itemBtn);
                  }
                });
              }
              //给空白格周围的空白格也添加一个显示类容的函数
              function clickNum0() {
                //num0Arr包含了点击的空白格周围9个格子内的所有空白格子，newNum0Arr就是除掉自身的所有空白格子
                const newNum0Arr = num0Arr.filter((item2) => item2 != item);
                newNum0Arr.forEach((item02) => {
                  //再次在其他空白格身上调用显示周围一圈内容的函数，这样就形成点击一个空白格子，
                  //如果这个格子周围空白区域很多，能显示一大片区域的效果。
                  num0(item02);
                });
              }
              clickNum0();
            }
            //给总数组去重
            const newAllArr = [...new Set(allArr)];
            //筛选，排除是地雷的格子
            const newAllArr02 = newAllArr.filter(
              (item) => item.dataset.z != 10
            );
            //一共256个格子，40个地雷，如果数组长度达到216，就可以判定胜利了。
            if (newAllArr02.length == 216) {
              alert("游戏胜利！");
              location.reload();
            }
          });
          //鼠标右键点击事件，用来插棋子
          item.addEventListener("contextmenu", function () {
            if (
              !this.classList.contains("bgc3") &&
              !this.classList.contains("bgc1")
            ) {
              this.classList.add("bgc3");
            } else {
              this.classList.remove("bgc3");
            }
          });
        });
      });
    },
  },
};
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
</style>
