<template>
<div>
  <div class="boxcon">
    <button type="button" @click="turnCard" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 w-full">
      {{ displayedText }}
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: "Card",
  props: ['question', 'answer'],
  data() {
    return {
      displayedText: "",
    }
  },
  methods: {
    turnCard(){
      if(this.displayedText === this.question){
        this.displayedText = this.answer;
      }else if(this.displayedText === this.answer){
        this.displayedText = this.question;
      }
    }
  },
  beforeMount() {
    this.displayedText = this.question;
  }
}
</script>

<style scoped>
.boxcon{
  width: 30em;
}
</style>