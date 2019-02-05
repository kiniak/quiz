<template>
    <div class="quiz" text-center>
      <template v-if="questions">
        <h1 class="question">{{question.question}}{{question.length}}</h1>
        <button class="btn btn-back btn-success" v-on:click="decrement" :disabled="currentQuestion===1">back</button>
        <button class="btn btn-next btn-error"  v-on:click="increment" :disabled="currentQuestion===questions.length- 1">next</button>
        <div class="answers"></div>
      </template>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { mapGetters, mapMutations } from 'vuex'
Vue.use(VueAxios, axios)
export default {
  name: 'Quiz',
  data () {
    return {
      questions: null
    }
  },
  mounted () {
    axios.get('https://opentdb.com/api.php?amount=10').then((response) => {
      this.questions = response.data.results;
    })
      .catch((e) => {
        console.error(e)
      })
  },
  computed: {
    ...mapGetters([
      'currentQuestion'
    ]),
    question () {
      let question = this.questions[this.currentQuestion - 1]
      return question
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
  .question{
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
  .btn:active {
    position:relative;
    top:1px;
}
  .btn:disabled{
    background: grey;

  }
</style>
