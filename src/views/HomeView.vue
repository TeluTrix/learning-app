<template>
  <div>
    <div class="w-full text-center">
      <div href="#" class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Learn ABU - Europäische Sicherheitsarchitektur</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">You can do this!</p>
        <div class="flex justify-center">
          <div v-if="clicked !== true && done !== true" href="#" class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8 w-1/2" @click="turnCard">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-8">{{ currentQuestion }}</h5>
          </div>
          <div v-if="clicked === true && done !== true" href="#" class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8 w-1/2">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-8">{{ currentAnswer }}</h5>
            <button @click="goToNext" type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Next</button>
          </div>
          <div v-if="done === true" href="#" class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8 w-1/2 text-center">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-8">You are done!</h5>
            <div>
              <img class="w-24 rounded" src="beer.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {questions} from "../data/questions";

export default {
  name: "HomeView",
  data() {
    return {
      done: false,
      clicked: false,
      counter: 0,
      currentQuestion: "",
      currentAnswer: "",
      cardAmount: 0,
    }
  },
  methods: {
    turnCard(){
      this.clicked = true;
    },
    goToNext(){
      this.clicked = false;

      this.currentQuestion = questions[this.counter].question;
      this.currentAnswer = questions[this.counter].answer;

      this.counter += 1;
    }
  },
  watch: {
    'counter'(newValue) {
      if(newValue === (this.cardAmount + 1)){
        this.done = true;
      }
    }
  },
  beforeMount() {
    this.currentQuestion = questions[this.counter].question;
    this.currentAnswer = questions[this.counter].answer;
    this.counter += 1;
    this.cardAmount = questions.length;
  }
}
</script>

<style scoped>

</style>