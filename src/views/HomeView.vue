<template>
  <div>
    <div class="w-full">
      <div href="#" class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Learn ABU - Europäische Sicherheitsarchitektur</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 text-center">Practicing card {{ counter + 1 }}/{{ cardAmount }}</p>
        <div class="flex justify-center">
          <div v-if="clicked !== true && done !== true" class="block h-56 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8 w-1/2" @click="turnCard">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-8 align-middle">{{ currentQuestion }}</h5>
          </div>
          <div v-if="clicked === true && done !== true" class="block h-56 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8 w-1/2" @click="turnCard">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-8 align-middle">{{ currentAnswer }}</h5>
          </div>
          <div v-if="done === true" class="block h-56 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8 w-1/2 text-center">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-8">You are done!</h5>
          </div>
        </div>
        <div class="flex justify-center mt-4">
          <div>
            <button @click="goOneBack" type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Back</button>
          </div>
          <div>
            <button @click="clearCards" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Clear</button>
          </div>
          <div>
            <button @click="goToNext" type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Next</button>
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
      if(this.clicked === true){
        this.clicked = false;
      }else{
        this.clicked = true;
      }
    },
    goToNext(){
      this.clicked = false;
      this.counter += 1;

      if(questions[this.counter] !== undefined){
        this.currentQuestion = questions[this.counter].question;
        this.currentAnswer = questions[this.counter].answer;
      }
    },
    goOneBack(){
      this.clicked = false;
      this.counter -= 1;

      if(questions[this.counter] !== undefined){
        this.currentQuestion = questions[this.counter].question;
        this.currentAnswer = questions[this.counter].answer;
      }
    },
    clearCards(){
      this.done = false;
      this.clicked = false;
      this.counter = 0;

      if(questions[this.counter] !== undefined){
        this.currentQuestion = questions[this.counter].question;
        this.currentAnswer = questions[this.counter].answer;
      }
    }
  },
  watch: {
    'counter'(newValue) {
      if(newValue === (this.cardAmount)){
        this.done = true;
      }
    }
  },
  beforeMount() {
    this.currentQuestion = questions[this.counter].question;
    this.currentAnswer = questions[this.counter].answer;
    this.cardAmount = questions.length;
  }
}
</script>

<style scoped>

</style>