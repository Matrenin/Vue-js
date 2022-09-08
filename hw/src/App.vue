<template>
  <div id="app">
    <header>
      <div class="header">
        <h1>My personal costs</h1>
      </div>
    </header>
    <main>
      <AddPaymentForm @add-payment="addPayment" :categoryList="categoryList"/>
      <PaymentsDisplay :paymentsList="paymentsList" show/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData']),
    ...mapMutations(['ADD_PAYMENT', 'SET_CATEGORY_LIST']),
    addPayment (data) {
      this.ADD_PAYMENT(data)
    }
  },
  computed: {
    ...mapGetters(['paymentsList', 'categoryList'])
  },
  created () {
    this.fetchData()
    this.fetchCategoryData()
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
