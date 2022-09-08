<template>
  <div class="form__costs">
    <button class="show__form__btn" @click="showAddForm = !showAddForm">add new form</button>
    <div v-show="showAddForm" class="add__form" >
      <input type="text" placeholder="date" v-model="newDate">
      <select v-model="newCategory" placeholder="category">
        <option disabled value="">category</option>
        <option
          v-for="category of categoryList"
          :key="category"
          :value="category"
        >{{ category }}</option>
      </select>
      <input type="text" placeholder="value" v-model="newValue">
      <button class="add__form__btn" @click="addPayment">ADD</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddPaymentForm',
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      newDate: '',
      newCategory: '',
      newValue: '',
      showAddForm: false
    }
  },
  methods: {
    addPayment () {
      const { newDate, newCategory, newValue, currenDate } = this
      if (newCategory === '' || newValue === '') {
        return
      }
      const data = {
        value: newValue,
        category: newCategory,
        date: newDate || currenDate
      }
      this.$emit('add-payment', data)
    }
  },
  computed: {
    currenDate () {
      const currentDate = new Date()
      let day = currentDate.getDate()
      let month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()
      if (day < 10) {
        day = `${'0' + day}`
      }
      if (month < 10) {
        month = `${'0' + month}`
      }
      return `${day}.${month}.${year}`
    }
  }
}
</script>

<style scoped>
.form__costs {
  display: flex;
  flex-direction: column;
  margin-left: 90px;
}

.show__form__btn {
  width: 200px;
  padding: 12px 26px;
  border-radius: 3px;
  background: #18C2B3 ;
  border: 1px solid #62F4E7;
  text-transform: uppercase;
  color: #fff;
}

.add__form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: 30px 0;
}

.add__form input,
.add__form select {
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #999;
  box-shadow: 0 0 6px 1px #ccc;
  outline: none;
  border-radius: 3px;
}

.add__form input:focus {
  outline: 1px solid #18C2B3;
}

.add__form__btn {
  width: 200px;
  padding: 12px 26px;
  border-radius: 3px;
  background: #18C2B3 ;
  border: 1px solid #62F4E7;
  align-self: flex-end;
  color: #fff;
}
</style>
