<template>
  <div class="my__costs">
    <header>
      <div class="header">
        <p class="title__costs">My personal costs: {{ totalCosts }}</p>
      </div>
    </header>
    <AddPaymentForm @add-payment="addNewPayment"/>
    <PaymentsDisplay/>
  </div>
</template>

<script>
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import PaymentsDisplay from '../src/components/PaymentsDisplay.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'DashboardPage',
  data: () => ({
    showModal: false,
    modalSetting: {}
  }),
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(['ADD_PAYMENT']),
    addNewPayment (data) {
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
header {
  margin: 20px 0;
}

.my__costs {
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 90px;
}

.title__costs {
  text-align: start;
  margin: 20px 0px;
}

.btn__show-modal {
  display: flex;
  justify-content: start;
}
</style>
