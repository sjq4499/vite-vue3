<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2022-06-22 10:49:45
 * @LastEditors: sjq
 * @LastEditTime: 2022-06-22 14:22:19
-->
<template>
  <div class="">
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
          :key="ite.index"
          :class="{
            active: ite.num === 10 && ite.isShow,
            bgc1: ite.isShow,
            bgc3: ite.isSign,
          }"
          @click="handClick(ite, index, ind)"
        >
          <!-- @contextmenu.prevent="signClick(ite, index, ind)" -->
          <!-- <span v-if="ite.num > 0" :class="'lei' + ite.num">{{ ite.num }}</span> -->
          <span
            v-if="ite.num !== 10 && ite.num > 0 && ite.isShow"
            :class="'lei' + ite.num"
            >{{ ite.num }}</span
          >
        </div>
      </div>
      <div v-if="gameProgress > 1" class="progress">
        <div class="succed" v-if="gameProgress === 2">游戏胜利！</div>
        <div class="error" v-else-if="gameProgress === 3">游戏失败！</div>
      </div>
    </div>
    <div class="fn_box">
      <div
        @click="changeFn(1)"
        :class="{ fn_active: fnActiveName === 1 }"
        class="fn"
      >
        排雷
      </div>
      <div
        @click="changeFn(2)"
        :class="{ fn_active: fnActiveName === 2 }"
        class="fn"
      >
        插旗
      </div>
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
      w: 10,
      index: 0,
      checkArr: [],
      signNum: 0,
      leiNumber: 10,
      gameProgress: 0, //0未开始 1进行中 2成功 3失败
      fnActiveName: 1, //1排雷 2插旗
    };
  },
  computed: {},
  watch: {
    checkArr() {
      if (Math.pow(this.w, 2) === this.checkArr.length) {
        this.gameProgress = 2;
      }
    },
  },
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    //生成地雷
    renderLei() {
      const lei = () => {
        let leiArr = [];
        let num = this.leiNumber;
        function fn() {
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
        this.buttonArr[item[0]][item[1]].num = 10;
      });
    },
    //获取格子周围一圈格子的函数
    getBox(x, y) {
      //第一排的格子只需要选中前两排
      let getNumArr = [];
      let minx = x - 1 >= 0 ? x - 1 : 0;
      let maxx = x + 1 > this.w - 1 ? this.w - 1 : x + 1;
      for (let i = minx; i <= maxx; i++) {
        //如果两个格子y坐标相减的绝对值小于或等于1，那么这两个格子就是相邻的
        let getNumArr02 = this.buttonArr[i].filter(
          (item, index) => Math.abs(item.y - y) <= 1
        );
        //加入数组
        getNumArr.push(...getNumArr02);
      }
      return getNumArr;
    },
    //获取格子数字函数
    getNum(x, y) {
      //建立一个存放目标格子周围一圈格子的数组
      //调用获取格子周围一圈格子的函数，将格子的坐标传入参数
      let getNumArr = this.getBox(x, y);
      //遍历这个格子周围一圈的格子，有地雷的话num就+1
      getNumArr.forEach((item) => {
        if (item.num == 10) {
          this.buttonArr[x][y].num++;
        }
      });
    },
    //渲染格子数字
    renderNum() {
      this.buttonArr.forEach((item, i) => {
        item.forEach((item02, j) => {
          if (item02.num !== 10) {
            this.getNum(i, j);
          }
        });
      });
    },
    // 初始化
    init() {
      this.buttonArr = new Array(this.w);
      let index = 1;
      for (let i = 0; i < this.w; i++) {
        this.buttonArr[i] = new Array(this.w);
        for (let j = 0; j < this.w; j++) {
          this.buttonArr[i][j] = {
            num: 0,
            isShow: false,
            x: i,
            y: j,
            index: index++,
            isSign: false,
          };
        }
      }
      this.renderLei();
      this.renderNum();
    },
    // 显示周围的白色格子
    showWhiteGrid(x, y) {
      //空白格子的周围一圈一定没有地雷，直接让这些格子显示类容
      //再次调用获取周围一圈格子的函数
      let getNumArr = this.getBox(x, y);
      let arr = [];
      getNumArr.forEach((item, index) => {
        //点击空白格，就会自动把周围一圈的格子都显示
        if (item.num != 10) {
          if (
            !this.buttonArr[item.x][item.y].isShow &&
            !this.buttonArr[item.x][item.y].isSign
          ) {
            this.buttonArr[item.x][item.y].isShow = true;
          }
          if (
            this.buttonArr[item.x][item.y].num == 0 &&
            !this.buttonArr[item.x][item.y].isSign &&
            this.checkArr.findIndex((check) => check.index === item.index) ===
              -1
          ) {
            //如果空白格周围一圈格子里面还有空白格，就将他们加入这个num0数组中，稍后再次循环一次这个点击事件
            arr.push(item);
          } else if (
            this.checkArr.findIndex((check) => check.index === item.index) ===
            -1
          ) {
            this.checkArr.push(item);
          }
        }
      });
      // console.log(arr, "llla");
      arr.forEach((item) => {
        this.handClick(item, item.x, item.y);
      });
    },
    // 排雷
    handClick(data, x, y) {
      this.gameProgress = 1;
      if (this.fnActiveName === 2) {
        this.signClick(data, x, y);
        return;
      }
      // getNum(x, y);
      if (this.checkArr.findIndex((check) => check.index === data.index) !== -1)
        return;

      this.index++;
      this.checkArr.push(data);
      if (this.buttonArr[x][y].num === 10) {
        this.buttonArr[x][y].isShow = true;
        this.gameProgress = 3;
        // setTimeout(function () {
        //   alert("游戏失败");
        //   init();
        // }, 200);
      } else {
        if (!this.buttonArr[x][y].isShow) {
          this.buttonArr[x][y].isShow = true;
        }
        //判断如果点击的是空白格子
        if (this.buttonArr[x][y].num === 0) {
          this.showWhiteGrid(x, y);
        }
      }
    },
    // 标雷
    signClick(data, x, y) {
      this.gameProgress = 1;
      if (this.buttonArr[x][y].isShow) return;
      if (this.buttonArr[x][y].isSign) {
        this.buttonArr[x][y].isSign = false;
        this.signNum--;
        let index = this.checkArr.findIndex(
          (item) => item.index === data.index
        );
        this.checkArr.splice(index, 1);
      } else {
        this.checkArr.push(data);
        this.signNum++;
        this.buttonArr[x][y].isSign = true;
      }
    },
    // 切换
    changeFn(type) {
      this.fnActiveName = type;
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  display: inline-block;
  margin: 0 auto;
  padding: 5px;
  border: 5px solid black;
  position: relative;
  .progress {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    .succed {
      color: rgb(255, 220, 0);
    }
    .error {
      color: #000;
    }
  }
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
  background: url(../static/sign-icon.png) no-repeat;
  background-color: #c0c0c0;
  background-size: 100%;
}

.active {
  background: url(../static/mine-icon.png) no-repeat;
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
.lei1 {
  color: rgb(3, 2, 238);
}
.lei2 {
  color: rgb(15, 121, 13);
}
.lei3 {
  color: rgb(215, 16, 16);
}
.lei4 {
  color: rgb(2, 0, 126);
}
.lei5 {
  color: rgb(120, 4, 4);
}
.lei6 {
  color: rgb(6, 125, 126);
}
.mine_header {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 24px;
}
.fn_box {
  margin-top: 24px;
  display: flex;
  justify-content: space-evenly;
  .fn {
    padding: 5px 20px;
    border-radius: 5px;
    border: solid 1px #c0c0c0;
  }
  .fn:hover {
    color: #1890ff;
  }
  .fn_active {
    background: #1890ff;
    border: solid 1px #1890ff;
    color: #fff;
  }
  .fn_active:hover {
    color: #fff;
  }
}
</style>
