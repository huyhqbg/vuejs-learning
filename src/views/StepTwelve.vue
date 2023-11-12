<script setup lang="ts">
import ChildComponentVue from './ChildComponent.vue'
</script>

<template>
  <h3>Props</h3>
  <div>
    A child component can accept input from the parent via <code class="highlight">props</code>.
  </div>
  <div>
    It needs to declare the props it accepts by using
    <a href="https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits">defineProps</a>
  </div>
  <ChildComponentVue msg="A text is passed to child component using props" />
  <div>
    Note
    <code class="highlight">defineProps()</code>
    is a compile-time macro and doesn't need to be imported. Once declared, the
    <code class="highlight">msg</code>
    prop can be used in the child component's template.
  </div>
</template>

<style scoped></style>
