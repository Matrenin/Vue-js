<template>
  <div class="payments__table">
    <div class="payments__title">
      <h3 v-for="title in titleTable" :key="title"> {{ title }}</h3>
    </div>
    <div class="payments__list" v-for="(paymen, index) in pageList" :key="index">
      <p>{{ paymen.id }}</p>
      <p>{{ paymen.date }}</p>
      <p>{{ paymen.category }}</p>
      <p>{{ paymen.value }}</p>
      <button class="btn__edit" @click.stop="paymen.showSettingsEdit = !paymen.showSettingsEdit">
        <img src="../assets/threeDots.png" alt="three dots" height="20">
        <EditCosts
          @delete-payment="deletePayment"
          :paymen="paymen"
          v-show="paymen.showSettingsEdit"
          class="edit-costs__content"
        />
      </button>
      <ModalWindowEditPayment
        :paymen="paymen"
        v-show="paymen.showWindowModal"
        @edit-payment="editPayment"
      />
    </div>
    <PaginationBlock
      :list-length="paymentsList.length"
      :page-size="pageSize"
      @select-page="selectPage"
    />
  </div>
</template>

<script>
import EditCosts from './EditCosts.vue'
import ModalWindowEditPayment from './ModalWindowEditPayment.vue'
import PaginationBlock from './PaginationBlock.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'PlaymentsDisplay',
  data: () => ({
    showWindowModal: false,
    pageSize: 5,
    currentPage: 1
  }),
  components: {
    EditCosts,
    ModalWindowEditPayment,
    PaginationBlock
  },
  methods: {
    ...mapActions(['addTitleTable']),
    ...mapMutations(['ADD_TITLE_TABLE', 'DELETE_PAYMENT', 'EDIT_PAYMENT']),
    showModalEditPayment () {
      // this.showWindowModal = true
      this.paymentsList.forEach(el => {
        el.showSettingsEdit = false
      })
    },
    closeModalEditPayment () {
      this.paymentsList.forEach(el => {
        el.showWindowModal = false
      })
    },
    deletePayment (data) {
      this.DELETE_PAYMENT(data)
    },
    editPayment (data) {
      this.EDIT_PAYMENT(data)
    },
    selectPage (page) {
      this.currentPage = page
    }
  },
  computed: {
    ...mapGetters(['titleTable', 'paymentsList']),
    pageList () {
      const { currentPage, pageSize } = this
      const start = (currentPage - 1) * pageSize
      const end = start + pageSize
      return this.paymentsList.slice(start, end)
    }
  },
  created () {
    this.addTitleTable()
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.showModalEditPayment)
    this.$modal.EventBus.$on('hide', this.closeModalEditPayment)
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.payments__table {
  max-width: 600px;
  width: 100%;
  margin: 40px 0;
}

.payments__title,
.payments__list {
  display: grid;
  grid-template-columns: 10% 35% 35% 15% 5%;
  padding: 16px 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
}

.payments__title h3:nth-child(1) {
  justify-self: start;
}

.payments__list p:nth-child(1) {
  justify-self: start;
}

.paginations {
  padding: 8px 26px;
  border: 1px solid #ccc;
}

.paginations__box {
  max-width: 160px;
  width: 100%;
  margin: 0 auto;
}

.paginations__box button {
  border: none;
  background: transparent;
  margin: 0 6px;
}

.btn__edit {
  width: 8px;
  height: 20px;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
