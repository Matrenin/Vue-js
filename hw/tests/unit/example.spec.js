import { mount } from '@vue/test-utils'
import AddPaymentForm from '@/components/AddPaymentForm'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
Vue.prototype.$store = new Vuex.Store()

describe('AddPaymentForm testing', () => {
  test('Test value', () => {
    const wrapper = mount(AddPaymentForm)
    const inputValue = wrapper.find('.inputValue')
    inputValue.setValue(100)

    expect(wrapper.vm.newValue).toBe(100)
  })

  test('Test date', () => {
    const wrapper = mount(AddPaymentForm)
    const inputDate = wrapper.find('.inputDate')
    inputDate.setValue('24.10.2022')

    expect(wrapper.vm.newDate).toBe('24.10.2022')
  })

  test('Test show form', () => {
    const wrapper = mount(AddPaymentForm)
    const btnShowForm = wrapper.find('.show__form__btn')
    btnShowForm.trigger('click')

    expect(wrapper.vm.showAddForm).toBe(true)
  })

  test('Test selectedPage', () => {
    const wrapper = mount(AddPaymentForm)
    const selectCategory = wrapper.find('.select__category')
    selectCategory.setValue('')
    
    expect(wrapper.vm.newCategory).toBe('')
  })
})