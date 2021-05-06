<template>
    <h1>My To-Do App!</h1>

  <form @submit.prevent="onSubmit" class="review-form">

    <input type="text" v-model="description" placeholder="Enter task...">

    <button type="submit" value="Submit">Add Task</button>

  </form>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'TodoFormCreation',
  data () {
    return {
      description: ''
    }
  },
  setup () {
    const listTask: any = inject('listTask')
    const counter: any = inject('listTaskNotCompleted')
    return {
      counter,
      listTask
    }
  },
  methods: {
    onSubmit () {
      this.$emit('review-submitted', this.description)
      this.listTask.push({ id: this.listTask.length, description: this.description, completed: false });
      this.counter++;
      this.description = ''
    }
  }
})
</script>
