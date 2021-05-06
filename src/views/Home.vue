<template>
  <div class="home">
    <HeaderBar />
    <img alt="Vue logo" src="../assets/logo.png">
    <TodoList :tasks="list"/>
    <TodoFormCreation @review-submitted="addTask"></TodoFormCreation>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, ref, reactive } from 'vue'
import TodoFormCreation from '@/components/TodoFormCreation.vue'
import TodoList from '@/components/TodoList.vue'
import HeaderBar from '@/components/HeaderBar.vue'

export default defineComponent({
  name: 'Home',
  components: {
    TodoList,
    TodoFormCreation,
    HeaderBar
  },
  computed: {
  },
  setup () {
    const counter = ref(2)
    const listTask = reactive([{ id: 0, description: 'Make Coffee', completed: false }, { id: 1, description: 'Feed Dragons', completed: false }])
    provide('listTask', listTask)
    provide('listTaskNotCompleted', counter)
  }
})
</script>
