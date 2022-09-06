<template>
  <div v-if="show">
    <div class="payments__table">
      <div class="payments__title">
        <h3 v-for="title in titleTable" :key="title"> {{ title }}</h3>
      </div>
      <div class="payments__list" v-for="(paymen, index) in paymentsList" :key="index">
        <p>{{ index + 1 }}</p>
        <p>{{ paymen.date }}</p>
        <p>{{ paymen.category }}</p>
        <p>{{ paymen.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaymentsDisplay',
  props: {
    paymentsList: {
      type: Array,
      default: () => ([])
    },
    show: Boolean
  },
  data () {
    return {
      titleTable: ['#', 'Date', 'Category', 'Value']
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.payments__table {
  max-width: 600px;
  width: 100%;
  margin: 40px 60px;
}

.payments__title,
.payments__list {
  display: grid;
  grid-template-columns: 10% 35% 35% 20%;
  padding: 16px 10px;
  border-bottom: 1px solid #ccc;
}

.payments__title h3:nth-child(1) {
  justify-self: start;
}

.payments__list p:nth-child(1) {
  justify-self: start;
}

</style>
