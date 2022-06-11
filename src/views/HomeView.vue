<template>
  <div>
    <div class="w-full">
      <div href="#" class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-8">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">An Overview of all different study subjects</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 text-center"></p>
        <div class="flex justify-center">
          <div v-for="lset in learnSets" :key="lset.id">
            <a @click="redirectToSet(lset.id)" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mr-3 ml-3 mt-3">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ lset.title }}</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">See all {{ lset.title }} learn sets.</p>
            </a>
          </div>
        </div>
        <!-- <Card question="are you?" answer="i am" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import Card from "../components/Card.vue";

export default {
  name: "HomeView",
  components: {Card},
  data() {
    return {
      routePrefix: "/",
      learnSets: [
        {
          "id": 0,
          "title": "Abu",
          "route": "abu"
        },
        {
          "id": 1,
          "title": "M226",
          "route": "m226"
        },
        {
          "id": 2,
          "title": "M946",
          "route": "m946"
        }
      ]
    }
  },
  methods: {
    redirectToSet(id){
      //console.log(this.routePrefix + this.learnSets[id].route)
      router.push(this.routePrefix + this.learnSets[id].route);
    }
  }
}
</script>

<style scoped>

</style>