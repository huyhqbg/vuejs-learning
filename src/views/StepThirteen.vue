<script setup lang="ts">
import { ref } from 'vue'
import ChildComponentVue from './ChildComponent.vue'

const childMsg = ref('No child msg yet')
</script>

<template>
  <h3>Emits</h3>
  <div>
    In addition to receiving props, a child component can also emit events to the parent by using
    <a href="https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits">defineEmits</a>.
  </div>
  <div>
    The parent can listen to child-emitted events using <code class="highlight">v-on</code>.
  </div>
  <ChildComponentVue msg="Child components" @response="(msg) => (childMsg = msg)" />
  <p>{{ childMsg }}</p>
</template>

<style scoped></style>
