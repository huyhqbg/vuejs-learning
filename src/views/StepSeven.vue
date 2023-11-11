<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
  id: number
  text: string
}

let id = 0

const newTodo = ref('')
const todos = ref<Todo[]>([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo: Todo) {
  todos.value = todos.value.filter((t) => {
    return t !== todo
  })
}
</script>

<template>
  <h3>List Rendering</h3>
  <div>
    We can use the <a href="https://vuejs.org/api/built-in-directives.html#v-for">v-for</a>
    directive to render a list of elements based on a source array:
  </div>
  <input class="input" v-model="newTodo" @keyup.enter="addTodo" />
  <button @click="addTodo">Add Todo</button>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

<style scoped>
.input {
  margin: 40px 0 10px;
}
</style>
