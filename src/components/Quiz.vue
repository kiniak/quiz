<template>
    <div class="quiz" text-center>
      <template v-is="questions">
        <h1></h1>
        <button class="btn btn-error">next</button>
        <button class="btn btn-success">back</button>
      </template>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
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
      this.questions = response.data.results
    })
      .catch((e) => {
        console.error(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
