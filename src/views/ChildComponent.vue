<script setup lang="ts">
defineProps({
  msg: String
})
const emit = defineEmits(['response'])

emit('response', 'Hello from child')
</script>

<template>
  <h1>{{ msg || 'This is a child components' }}</h1>
</template>
