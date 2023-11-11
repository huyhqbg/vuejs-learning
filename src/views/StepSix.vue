<script setup lang="ts">
import { ref } from 'vue'

const awesome = ref(true)

const toggle = () => (awesome.value = !awesome.value)
</script>

<template>
  <h3>Conditional Rendering</h3>
  <div>
    We can use the <a href="https://vuejs.org/api/built-in-directives.html#v-if">v-if</a>
    directive to conditionally render an element:
  </div>
  <h1 v-if="awesome">Vue is awesome</h1>
  <h1 v-else>Oh no 😢</h1>
  <button @click="toggle">Toggle</button>
  <div style="margin-top: 50px;">
    We can also use
    <a href="https://vuejs.org/api/built-in-directives.html#v-else">v-else</a>
    and
    <a href="https://vuejs.org/api/built-in-directives.html#v-else-if">v-else-if</a>
    to denote other branches of the condition.
  </div>
</template>

<style scoped></style>
