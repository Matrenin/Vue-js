<template>
  <div class="edit-costs__content">
    <div class="block-edit" @click.stop="openModalEdit(paymen)">
      <img src="../assets/edit.png" alt="edit" height="20">
      <div class="edit">Редактировать</div>
    </div>
    <div class="block-delete" @click.stop="deletePayment(paymen)">
      <img src="../assets/delete.png" alt="delete" height="20">
      <div class="delete">Удалить</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EditCosts',
  props: {
    paymen: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    openModalEdit (paymen) {
      const mod = this.paymentsList.find(el => el === paymen)
      mod.showWindowModal = true
      this.$modal.show(mod)
    },
    deletePayment (el) {
      this.paymentsList.splice(this.paymentsList.indexOf(el), 1)
      this.$emit('delete-payment', this.paymentsList)
    }
  },
  computed: {
    ...mapGetters(['paymentsList'])
  }
}
</script>

<style lang="scss">
.edit-costs__content {
  position: absolute;
  top: 20px;
  left: 15px;

  background: #fff;
  border: 1px solid black;
  box-shadow: 0 0 4px 1px;
  display: flex;
  flex-direction: column;
}

.block-delete,
.block-edit {
  display: flex;
  align-items: center;
  padding: 8px 12px;

  &:hover {
    background: #ccc;

    & .delete,
    & .edit {
      text-decoration: underline;
    }
  }

  & img {
    margin-right: 16px;
  }
}

</style>
