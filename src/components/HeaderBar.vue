<template>
    <h1>{{ listTaskNotCompleted }}</h1>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'HeaderBar',
  setup () {
    const listTaskNotCompleted = inject('listTaskNotCompleted', 'false');
    return {
      listTaskNotCompleted
    }
  }
})
</script>
