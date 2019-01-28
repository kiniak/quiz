import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: null
  },
  mutations: {
    saveData (state, data) {
      state.questions = data
    }
  }
})
