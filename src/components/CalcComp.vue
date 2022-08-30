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
      operations: ['+', '-', '*', '/', 'x2']
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
      } else if (operation === 'x2') {
        this.square()
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
    square () {
      this.result = this.op1 * this.op1
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
</style>
