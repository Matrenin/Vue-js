<template>
  <transition name="editModal">
    <div class="wrapper">
      <div class="content">
        <input type="text" v-model="editDate">
        <select placeholder="category" v-model="editCategory">
          <option disabled value="">category</option>
          <option
            v-for="category of categoryList"
            :key="category"
            :value="category"
          >{{ category }}</option>
        </select>
        <input type="text" v-model="editValue">
        <button class="edit__costs-btn" @click="editPayment(paymen)">Edit</button>
        <button class="modal-close" @click="closeModal">&times;</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'ModalWindowEditPayment',
  props: {
    paymen: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    editCategory: '',
    editDate: '',
    editValue: ''
  }),
  methods: {
    ...mapMutations(['ADD_PAYMENT']),
    addPayment (data) {
      this.ADD_PAYMENT(data)
    },
    closeModal () {
      this.$modal.hide()
    },
    editPayment (paymen) {
      const data = {
        id: paymen.id,
        date: this.editDate,
        category: this.editCategory,
        value: this.editValue,
        showSettingsEdit: false,
        showWindowModal: false
      }
      this.paymentsList.splice(this.paymentsList.indexOf(paymen), 1, data)
      this.$emit('edit-payment', this.paymentsList)
    }
  },
  computed: {
    ...mapGetters(['categoryList', 'paymentsList'])
  },
  created () {
    this.editDate = this.paymen.date
    this.editCategory = this.paymen.category
    this.editValue = this.paymen.value
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.content {
  padding: 28px;
  background: #fff;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px 1px;

  & input,
  & select {
    margin: 10px 0;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #999;
    box-shadow: 0 0 6px 1px #ccc;
    outline: none;
    border-radius: 3px;
    width: 100%;
  }
}

.modal-close {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 28px;
  height: 28px;
  font-size: 20px;
  background: transparent;
  border: none;
}

.edit__costs-btn {
  width: 200px;
  padding: 12px 26px;
  border-radius: 3px;
  background: #18C2B3 ;
  border: 1px solid #62F4E7;
  align-self: flex-end;
  color: #fff;
}

// Animation
.editModal-enter,
.editModal-leave-to {
  opacity: 0;
}

.editModal-enter-active {
  animation: edit-modal .4s;
}

.editModal-leave-active {
  animation: edit-modal .4s reverse;
}

@keyframes edit-modal {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: .6;
    transform: translateY(0);
  }
}
</style>
