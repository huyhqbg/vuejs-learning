<script setup lang="ts">
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const msg = ref('from parent')
</script>

<template>
  <h3>Slots</h3>
  <div>
    In addition to passing data via props, the parent component can also pass down template
    fragments to the child via
    <a href="https://vuejs.org/guide/components/slots.html#slots">slots</a>:
  </div>
  <ChildComp>Message: {{ msg }}</ChildComp>
</template>
