<script setup lang="ts">
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  todoData.value = await res.json()
}

fetchData()

watch(todoId, () => {
  fetchData()
})
</script>

<template>
  <h3>Watchers</h3>
  <div>
    <a href="https://vuejs.org/guide/essentials/watchers.html#watchers">watch</a>
    can directly watch a ref, and the callback gets fired whenever ref's value changes
  </div>
  <p style="margin-top: 20px">Todo id: {{ todoId }}</p>
  <button @click="todoId++">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>
