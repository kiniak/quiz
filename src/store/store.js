import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    questions: null,
    currentQuestion: 1
  },
  getters: {
    currentQuestion: state => {
      return state.currentQuestion
    }
  },
  actions: {
  },
  mutations: {
    increment (state) {
      state.currentQuestion++
    },
    decrement (state) {
      if (state.currentQuestion <= 0) return state.currentQuestion
      state.currentQuestion--
    }
  }
})
