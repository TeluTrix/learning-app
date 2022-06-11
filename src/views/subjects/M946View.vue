<template>
  <div>
    <div class="w-full">
      <div @click="goToRoute('/')" class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8">
        <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Back to Overview</button>
      </div>
      <div href="#" class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">An Overview of all Abu Learn Sets</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 text-center"></p>
        <div class="flex justify-center">
          <div v-for="lset in learnSets" :key="lset.id" v-if="!setsEmpty">
            <a @click="redirectToSet(lset.id)" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mr-3 ml-3 mt-3">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ lset.title }}</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">Learn more about "{{ lset.title }}".</p>
            </a>
          </div>
          <div v-if="setsEmpty">
            <p class="font-normal text-gray-700 dark:text-gray-400">No sets for this study subject (yet).</p>
          </div>
        </div>
      </div>
      <div class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8">
        <p class="font-normal text-gray-700 dark:text-gray-400">School Resources:
          <button type="button"  class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-3">
            <a href="https://quizlet.com/442382155/949-unit-5-communication-systems-flash-cards/">Unit 5</a></button>
          <button type="button"  class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mr-3">
            <a href="https://quizlet.com/85168519/946-unit-6-graphics-webdesign-flash-cards/">Unit 6</a></button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "EnglishView",
  data() {
    return {
      routePrefix: "/m946/",
      learnSets: [],
      setsEmpty: false
    }
  },
  methods: {
    redirectToSet(id){
      //console.log(this.routePrefix + this.learnSets[id].route)
      router.push(this.routePrefix + this.learnSets[id].route);
    },
    goToRoute(route){
      router.push(route);
    }
  },
  beforeMount() {
    if(this.learnSets.length === 0){
      this.setsEmpty = true;
    }
  }
}
</script>

<style scoped>

</style>