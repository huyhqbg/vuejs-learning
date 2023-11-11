<script setup lang="ts">
import { ref } from 'vue'

const text = ref()
</script>

<template>
  <h3>Form Bindings</h3>
  <div>
    Using
    <a href="https://vuejs.org/api/sfc-css-features.html#v-bind-in-css">v-bind</a>
    and
    <a href="https://vuejs.org/guide/essentials/event-handling.html">v-on</a>
    together, we can create two-way bindings on form input elements:
  </div>
  <input style="margin-top: 20px" type="text" v-model="text" />
  <div style="height: 50px;">
    {{ text }}
  </div>
  <div>Other way which is more simple is using <a href="">v-model</a>.</div>
</template>

<style scoped>
h1 {
  font-weight: bold;
}
</style>
