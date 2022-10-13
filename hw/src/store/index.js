import Vue from 'vue'
import Vuex from 'vuex'
import categoryList from './modules/categoryList'
import titleTable from './modules/titleTable'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: []
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    totalCosts: (state) => state.paymentsList.reduce((acc, el) => acc + +(el.value), 0)
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    ADD_PAYMENT (state, paymentsList) {
      state.paymentsList.push(paymentsList)
    },
    DELETE_PAYMENT (state, payment) {
      state.paymentsList = payment
    },
    EDIT_PAYMENT (state, paymentsList) {
      state.paymentsList = paymentsList
    }
  },
  actions: {
    fetchData ({ commit }) {
      const data = [
        {
          id: 1,
          date: '28.03.2020',
          category: 'Food',
          value: 169,
          showSettingsEdit: false,
          showWindowModal: false
        },
        {
          id: 2,
          date: '24.03.2020',
          category: 'Navigation',
          value: 360,
          showSettingsEdit: false,
          showWindowModal: false
        },
        {
          id: 3,
          date: '24.03.2020',
          category: 'Entertainment',
          value: 1000,
          showSettingsEdit: false,
          showWindowModal: false
        },
        {
          id: 4,
          date: '10.04.2020',
          category: 'Food',
          value: 250,
          showSettingsEdit: false,
          showWindowModal: false
        },
        {
          id: 5,
          date: '13.04.2020',
          category: 'Navigation',
          value: 290,
          showSettingsEdit: false,
          showWindowModal: false
        },
        {
          id: 6,
          date: '19.04.2020',
          category: 'Food',
          value: 200,
          showSettingsEdit: false,
          showWindowModal: false
        },
        {
          id: 7,
          date: '22.04.2020',
          category: 'Entertainment',
          value: 800,
          showSettingsEdit: false,
          showWindowModal: false
        },
        {
          id: 8,
          date: '1.05.2020',
          category: 'Sport',
          value: 500,
          showSettingsEdit: false,
          showWindowModal: false
        },
        {
          id: 9,
          date: '10.05.2020',
          category: 'Food',
          value: 600,
          showSettingsEdit: false,
          showWindowModal: false
        },
        {
          id: 10,
          date: '9.06.2020',
          category: 'Navigation',
          value: 210,
          showSettingsEdit: false,
          showWindowModal: false
        },
        {
          id: 11,
          date: '9.06.2020',
          category: 'Food',
          value: 280,
          showSettingsEdit: false,
          showWindowModal: false
        }
      ]
      commit('SET_PAYMENTS_LIST', data)
    }
  },
  modules: {
    categoryList,
    titleTable
  }
})
