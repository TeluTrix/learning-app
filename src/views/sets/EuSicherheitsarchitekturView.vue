<template>
  <div>
    <div class="w-full">
      <div @click="goToRoute('/abu')" class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8">
        <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Back to Abu Overview</button>
      </div>
      <div href="#" class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Learn ABU - Europäische Sicherheitsarchitektur</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 text-center" v-if="counter < cardAmount">Practicing card {{ counter + 1 }}/{{ cardAmount }}</p>
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
            <button @click="goOneBack" type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Back</button>
          </div>
          <div>
            <button @click="clearCards" type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Clear</button>
          </div>
          <div>
            <button @click="goToNext" type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {abu01_eu_sicherheitsarchitektur} from "../../data/sets/abu01_eu_sicherheitsarchitektur";
import router from "../../router";

export default {
  name: "EuSicherheitsarchitektur",
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
      this.clicked = this.clicked !== true;
    },
    goToNext(){
      this.clicked = false;
      this.counter += 1;

      if(abu01_eu_sicherheitsarchitektur[this.counter] !== undefined){
        this.currentQuestion = abu01_eu_sicherheitsarchitektur[this.counter].question;
        this.currentAnswer = abu01_eu_sicherheitsarchitektur[this.counter].answer;
      }
    },
    goOneBack(){
      this.clicked = false;
      this.counter -= 1;

      if(abu01_eu_sicherheitsarchitektur[this.counter] !== undefined){
        this.currentQuestion = abu01_eu_sicherheitsarchitektur[this.counter].question;
        this.currentAnswer = abu01_eu_sicherheitsarchitektur[this.counter].answer;
      }
    },
    clearCards(){
      this.done = false;
      this.clicked = false;
      this.counter = 0;

      if(abu01_eu_sicherheitsarchitektur[this.counter] !== undefined){
        this.currentQuestion = abu01_eu_sicherheitsarchitektur[this.counter].question;
        this.currentAnswer = abu01_eu_sicherheitsarchitektur[this.counter].answer;
      }
    },
    goToRoute(route){
      router.push(route);
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
    this.currentQuestion = abu01_eu_sicherheitsarchitektur[this.counter].question;
    this.currentAnswer = abu01_eu_sicherheitsarchitektur[this.counter].answer;
    this.cardAmount = abu01_eu_sicherheitsarchitektur.length;
  }
}
</script>

<style scoped>

</style>