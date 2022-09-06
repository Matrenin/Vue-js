<template>
  <div id="app">
    <header>
      <div class="header">
        <h1>My personal costs</h1>
      </div>
    </header>
    <main>
      <AddPaymentForm @add-payment="addPayment"/>
      <PaymentsDisplay :paymentsList="paymentsList" show/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data () {
    return {
      paymentsList: []
    }
  },
  methods: {
    fetchPaymentsData () {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532
        }
      ]
    },
    addPayment (data) {
      this.paymentsList.unshift(data)
    }
  },
  created () {
    this.paymentsList = this.fetchPaymentsData()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
