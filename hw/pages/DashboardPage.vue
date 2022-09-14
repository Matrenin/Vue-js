<template>
  <div class="my__costs">
    <header>
      <div class="header">
        <p class="title__costs">My personal costs: {{ totalCosts }}</p>
      </div>
    </header>
    <main>
      <AddPaymentForm @add-payment="addPayment"/>
      <PaymentsDisplay/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from '../src/components/PaymentsDisplay.vue'
import AddPaymentForm from '../src/components/AddPaymentForm.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'DashboardPage',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(['ADD_PAYMENT']),
    addPayment (data) {
      this.ADD_PAYMENT(data)
    }
  },
  computed: {
    ...mapGetters(['paymentsList', 'totalCosts'])
  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
.title__costs {
  text-align: start;
  margin: 20px 90px;
}
</style>
