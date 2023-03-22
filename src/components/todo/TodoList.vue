<script setup lang="ts">
import { ref, reactive, provide, watch, onMounted, computed } from "vue";
import { Todo } from "../../model/Todo";
import ListPourTodoList from "./ListPourTodoList.vue";

const inputRef = ref<HTMLInputElement | null>(null);

const nouveauTexteTodo = ref("");
const nbTodosPhrase = ref("");
const todosCoches = computed(getTodoCoches);
const todosNonCoches = computed(getTodoNonCoches);

const todos: Todo[] = reactive([]);

onMounted(() => {
  setFocuOnInput();
});

watch(todos, (todos: Todo[]) => {
  if (todos.length > 0) {
    nbTodosPhrase.value = ` (${todosNonCoches.value.length} à faire et ${
      getTodoCoches().length
    } faits)`;
  }
  setFocuOnInput(); 
});

function ajouteTodo() {
  nouveauTexteTodo.value && todos.push(Todo.createTodo(nouveauTexteTodo.value, todos.length));
  nouveauTexteTodo.value = "";
}

function supprimeTodo(id: number) {
  const index = todos.findIndex((todo) => todo.id === id);
  todos.splice(index, 1);
}

function cocheTodo(id: number) {
  const index = todos.findIndex((todo) => todo.id === id);
  todos[index].coche = !todos[index].coche;
  setFocuOnInput();
}

function getTodoNonCoches() {
  return todos.filter((todo) => !todo.coche);
}

function getTodoCoches() {
  return todos.filter((todo) => todo.coche);
}

provide("onCocheTodo", cocheTodo);
provide("onSuppressionTodo", supprimeTodo);

function setFocuOnInput() {
  inputRef.value?.focus();
}
</script>

<template>
  <h1>TODOs{{ nbTodosPhrase }}</h1>
  <input ref="inputRef" type="text" v-model="nouveauTexteTodo" @keyup.enter="ajouteTodo" />
  <button @click="ajouteTodo">Ajouter un ToDo</button>
  <h2 v-if="todosNonCoches.length">A Faire</h2>
  <ListPourTodoList :todos="todosNonCoches"></ListPourTodoList>
  <h2 v-if="todosCoches.length">Fait</h2>
  <ListPourTodoList :todos="todosCoches"></ListPourTodoList>
</template>
