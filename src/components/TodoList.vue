<template>
  <div>
    <h1>My To-Do App!</h1>
    <ul>
      <li v-for="(task,$index) in listTask" v-bind:key="$index">
        <input :id="$index" :value="task" name="task" type="checkbox" v-model="task.completed" @click="updateCounter($index)">
        <label><span>{{task.description}}</span></label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'TodoList',
  setup () {
    const listTask: Array<any> = (inject('listTask') as Array<any>)
    const counter: number = (inject('listTaskNotCompleted') as number)
    return {
      counter,
      listTask
    }
  },
  methods: {
    updateCounter (index: number) {
      if (this.listTask[index].completed === true) {
        this.counter++;
        this.listTask[index].completed = false;
      } else {
        this.counter--;
        this.listTask[index].completed = true;
      }
    }
  }
})
</script>
