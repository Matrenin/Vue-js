<template>
  <div class="calc">
    <div class="screen">
      <input type="number" v-model.number="op1">
      <input type="number" v-model.number="op2">
      <span> = {{ result }}</span>
    </div>
    <div class="btn__box">
      <button @click="calc(operation)" v-for="operation of operations" :key="operation">{{ operation }}</button>
    </div>
    <div class="screenKeyBoard">
      <input type="checkbox" id="keyBoard" v-model="showKeyBoard">
      <label for="keyBoard">Отобразить экранную клавиатуру</label>
      <div v-show="showKeyBoard" class="box">
        <div class="screenKeyBoard__btn">
          <button @click="keyBoardClick(num)" v-for="num of numbers" :key="num">{{ num }}</button>
        </div>
        <input type="radio" id="one" value="1" v-model="picked">
        <label for="one">Операнд 1</label>
        <input type="radio" id="two" value="2" v-model="picked">
        <label for="two">Операнд 2</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcComp',
  data () {
    return {
      op1: '',
      op2: '',
      result: 0,
      operations: ['+', '-', '*', '/', '^'],
      showKeyBoard: false,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'del'],
      picked: null,
      arrOp1: [],
      arrOp2: []
    }
  },
  methods: {
    calc (operation) {
      if (operation === '+') {
        this.sum()
      } else if (operation === '-') {
        this.sub()
      } else if (operation === '*') {
        this.mult()
      } else if (operation === '/') {
        this.div()
      } else if (operation === '^') {
        this.degree()
      }
    },
    sum () {
      this.result = this.op1 + this.op2
    },
    sub () {
      this.result = this.op1 - this.op2
    },
    div () {
      this.result = this.op1 / this.op2
    },
    mult () {
      this.result = this.op1 * this.op2
    },
    degree () {
      let num = 1
      for (let i = 0; i < this.op2; i++) {
        num *= this.op1
      }
      this.result = num
    },
    keyBoardClick (num) {
      if (this.picked === '1') {
        if (num !== 'del') {
          this.arrOp1.push(num)
        } else {
          this.arrOp1.splice(-1, 1)
        }
      }
      if (this.picked === '2') {
        if (num !== 'del') {
          this.arrOp2.push(num)
        } else {
          this.arrOp2.splice(-1, 1)
        }
      }
      this.op1 = +(this.arrOp1.join(''))
      this.op2 = +(this.arrOp2.join(''))
    }
  }
}
</script>

<style scoped>
.calc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn__box {
  margin-top: 20px;
}

.screenKeyBoard {
  margin-top: 20px;
}

.screenKeyBoard__btn {
  margin: 20px 0;
}
</style>
