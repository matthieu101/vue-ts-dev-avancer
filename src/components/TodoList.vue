<template>
  <div>
    <h1>My To-Do App!</h1>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input :id="task.id" :value="task" name="task" type="checkbox" v-model="checkeds" @change="decrement($event, task.id)">
        <label><span>{{task.description}}</span></label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'

export default defineComponent({
  name: 'TodoList',
  props: {
    tasks: Object
  },
  data () {
    return {
      checked: false,
      checkeds: []
    }
  },
  updated() {

  },
  methods: {
      decrement(event: any, id: number){
          store.commit('addTaskCompleted', id)
          console.log(this.checkeds)
      }
  }
})
</script>
