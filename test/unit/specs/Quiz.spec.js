import Vue from 'vue'
import Quiz from '@/components/Quiz'

describe('Quiz.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Quiz)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
