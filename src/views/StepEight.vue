<script setup lang="ts">
import { computed, ref } from 'vue'

interface Todo {
  id: number
  text: string
  done: boolean
}

let id = 0

const hide = ref(false)
const newTodo = ref('')
const todos = ref<Todo[]>([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo: Todo) {
  todos.value = todos.value.filter((t) => {
    return t !== todo
  })
}

const filterTodos = computed(() => {
  if (hide.value) {
    return todos.value.filter((t) => !t.done)
  } else return todos.value
})
</script>

<template>
  <h3>List Rendering</h3>
  <div>
    We can create a
    <a href="https://vuejs.org/guide/essentials/computed.html#computed-properties">computed</a>
    ref that computes its
    <code class="highlight">.value</code>
    based on other reactive data sources:
  </div>

  <input class="input" v-model="newTodo" @keyup.enter="addTodo" />
  <button @click="addTodo">Add Todo</button>
  <ul>
    <li v-for="todo in filterTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" style="margin-right: 10px" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)" style="margin-left: 10px">X</button>
    </li>
  </ul>

  <button @click="hide = !hide" style="margin-top: 20px">
    {{ hide ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style scoped>
.input {
  margin: 40px 0 10px;
}
.done {
  text-decoration: line-through;
}
</style>
