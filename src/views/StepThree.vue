<script setup lang="ts">
import { ref } from 'vue'

const color = ref('red')
</script>

<template>
  <h3>Attribute Bindings</h3>
  <div>
    In Vue, mustaches are only used for text interpolation. To bind an attribute to a dynamic value,
    we use the
    <a href="https://vuejs.org/api/built-in-directives.html#v-bind">v-bind</a>
    directive:
  </div>
  <br />
  <div>Example:</div>
  <code class="highlight">
    {{ `
    <div v-bind:id="dynamicId"></div>
    ` }}
  </code>
  <div>or</div>
  <code class="highlight">
    {{ `
    <div :id="dynamicId"></div>
    ` }}
  </code>
  <h1 :class="color">This heading is bound to a state with a value of red.</h1>
</template>

<style scoped>
.red {
  color: red;
}
</style>
