<script setup lang="ts">
import { ref, onMounted } from 'vue'

const element = ref<HTMLElement | null>(null)

onMounted(() => {
  if (element.value) {
    element.value.textContent = 'mounted!'
  }
})
</script>

<template>
  <h3>Lifecycle and Template Refs</h3>
  <div>
    We can request a <code class="highlight">template ref</code>
    - i.e. a reference to an element in the template - using the special
    <a href="https://vuejs.org/guide/essentials/template-refs.html#template-refs">ref</a> attribute:
  </div>
  <h1 ref="element">Hello</h1>
  <div>
    There are other hooks such as <code class="highlight">onUpdated</code> and
    <code class="highlight">onUnmounted</code>. Check out the
    <a href="https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram">
      Lifecycle Diagram
    </a>
    for more details.
  </div>
</template>

<style scoped></style>
