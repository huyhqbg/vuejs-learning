<script setup lang="ts">
import { ref } from 'vue'

const color = ref('red')
</script>

<template>
  <h3>Attribute Bindings</h3>
  <div>Example:</div>
  <code>
    {{ `
    <div v-bind:id="dynamicId"></div>
    ` }}
  </code>
  <div>or</div>
  <code>
    {{ `
    <div :id="dynamicId"></div>
    ` }}
  </code>
  <h1 :class="color">This heading is bound to a state with a value of 'red.</h1>
</template>

<style scoped>
.red {
  color: red;
}
</style>
