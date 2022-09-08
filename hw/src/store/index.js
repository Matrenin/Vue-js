import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    titleTable: ['#', 'Date', 'Category', 'Value'],
    paginationsBtn: [1, 2, 3],
    categoryList: []
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    titleTable: (state) => state.titleTable,
    paginationsBtn: (state) => state.paginationsBtn,
    categoryList: (state) => state.categoryList
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    ADD_PAYMENT (state, payment) {
      state.paymentsList.unshift(payment)
    },
    SET_CATEGORY_LIST (state, category) {
      state.categoryList = category
    }
  },
  actions: {
    fetchData ({ commit }) {
      const data = [
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
      commit('SET_PAYMENTS_LIST', data)
    },
    fetchCategoryData ({ commit }) {
      const category = ['Sport', 'Navigation', 'Food', 'Entertaiment']
      commit('SET_CATEGORY_LIST', category)
    }
  },
  modules: {
  }
})
