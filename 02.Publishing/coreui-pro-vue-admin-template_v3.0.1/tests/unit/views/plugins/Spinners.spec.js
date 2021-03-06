import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Spinners from '@/views/plugins/Spinners'

Vue.use(CoreuiVue)

describe('Spinners.vue', () => {
  it('has a name', () => {
    expect(Spinners.name).toMatch('spinners')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Spinners)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Spinners', () => {
    const wrapper = shallowMount(Spinners)
    expect(wrapper.is(Spinners)).toBe(true)
  })
})
