<script setup lang="ts">
import { reactive, ref } from 'vue'

const message = ref('Hello World!')
const counter = reactive({ count: 0 })
</script>

<template>
  <h3>Make thing reactive</h3>
  <div>
    You can make create a reactive state by using
    <a href="https://vuejs.org/api/reactivity-core.html#ref">ref</a> or
    <a href="https://vuejs.org/api/reactivity-core.html#reactive">reactive</a>
  </div>
  <h1>{{ message }}</h1>
  <p>Count is: {{ counter.count }}</p>
</template>

<style scoped>
</style>
