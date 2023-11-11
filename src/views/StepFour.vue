<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<template>
  <h3>Event Listeners</h3>
  <div>
    We can listen to DOM events using the
    <a href="https://vuejs.org/guide/essentials/event-handling.html">v-on</a> directive:
  </div>
  <h1>{{ count }}</h1>
  <button @click="increment">Increase</button>
</template>

<style scoped>
h1 {
  font-weight: bold;
}
</style>
