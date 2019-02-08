<template>
    <div class="quiz" text-center>
      <template v-if="questions">
        <h1 class="question">{{question.question}}</h1>
        <button class="btn btn-back btn-success" v-on:click="decrement" :disabled="currentQuestion===1">back</button>
        <button class="btn btn-next btn-error"  v-on:click="increment" :disabled="currentQuestion===questions.length- 1">next</button>
        <div class="answers"></div>
      </template>
      <template>
        <ul>
          <li v-for="answer in allAnsweres" :key="answer">
            <input type="checkbox" :id="answer" :value="answer">
            <label :for="answer">{{answer}}</label>
          </li>
        </ul>
      </template>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {mapGetters, mapMutations, mapState} from 'vuex'
Vue.use(VueAxios, axios)
export default {
  name: 'Quiz',
  data () {
    return {
    }
  },
  mounted: function () {
    this.$store.dispatch('LOAD_PROJECT_LIST')
  },
  computed: {
    ...mapState([
      'questions'
    ]),
    ...mapGetters([
      'currentQuestion'
    ]),
    question () {
      let question = this.questions[this.currentQuestion]
      return question
    },
    allAnsweres () {
      if (!this.questions) return []
      let goodAnswer = this.questions[this.currentQuestion].correct_answer
      let wrongAnswer = this.questions[this.currentQuestion].incorrect_answers
      let answeres = [goodAnswer, ...wrongAnswer].sort()
      return answeres
    }
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .quiz{
    text-align: center;
  }
  .question {
    min-height: 80px;
  }
  .btn{
    box-shadow:inset 0px 1px 0px 0px #cf866c;
    border-radius:3px;
    border:1px solid #942911;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    background:linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
    font-size:13px;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #854629;
    text-transform: uppercase;
  }
  .btn:hover{
    background:-o-linear-gradient(top, #bc3315 5%, #d0451b 100%);
    background:-ms-linear-gradient(top, #bc3315 5%, #d0451b 100%);
    background:linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bc3315', endColorstr='#d0451b',GradientType=0);
    background-color:#bc3315;
  }
  .btn:disabled{
    background: grey;

  }
</style>
