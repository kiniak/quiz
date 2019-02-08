import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    questions: null,
    currentQuestion: 0
  },
  getters: {
    currentQuestion: state => {
      return state.currentQuestion
    }
  },
  mutations: {
    SET_PROJECT_LIST: (state, { list }) => {
      state.questions = list.results
    },
    increment (state) {
      state.currentQuestion++
    },
    decrement (state) {
      if (state.currentQuestion <= 0) return state.currentQuestion
      state.currentQuestion--
    }
  },
  actions: {
    LOAD_PROJECT_LIST: function ({ commit }) {
      axios.get('https://opentdb.com/api.php?amount=10').then((response) => {
        commit('SET_PROJECT_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  }
})
