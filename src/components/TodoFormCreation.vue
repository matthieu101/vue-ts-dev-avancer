<template>
    <h1>My To-Do App!</h1>

  <form @submit.prevent="onSubmit" class="review-form">

    <input type="text" v-model="description" placeholder="Enter task...">

    <button type="submit" value="Submit">Add Task</button>

  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodoFormCreation',
  data(){
      return{
        description: '',
      }
  },
  methods: {
   onSubmit() {
     let productReview = {
       description: this.description,
       completed: false,
     }
     this.$emit('review-submitted', productReview)
     console.log(productReview);

     this.description = ''
   }
  }
})
</script>
