<template>
  <div class="home">
    <HeaderBar :count="count"/>
    <img alt="Vue logo" src="../assets/logo.png">
    <TodoList :tasks="list"/>
    <TodoFormCreation @review-submitted="addTask"></TodoFormCreation> 
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TodoFormCreation from '@/components/TodoFormCreation.vue'
import TodoList from '@/components/TodoList.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import store from '@/store'

export default defineComponent({
  name: 'Home',
  components: {
    TodoList,
    TodoFormCreation,
    HeaderBar
  },
  computed: {
    count() {
        return store.state.count;
    }
},
  data () {
    return {
      list: store.state.listTask,
    }
  },
  methods:{
    addTask(productReview: { id:number; description: string; completed: boolean }) {
      store.commit('addTask', productReview)
    },
  }
})
</script>
