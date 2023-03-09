<script setup lang="ts">
import { ref, reactive } from "vue";
import { Todo } from "../../model/Todo";
import ListPourTodoList from "./ListPourTodoList.vue";

const nouveauTexteTodo = ref("");

let todos: Todo[] = reactive([]);

function ajouteTodo() {
  todos.push(Todo.createTodo(nouveauTexteTodo.value, todos.length));
}

function supprimeTodo(id: number) {
  const index = todos.findIndex((todo) => todo.id === id);
  todos.splice(index, 1);
}
</script>

<template>
  <input type="text" v-model="nouveauTexteTodo" />
  <button @click="ajouteTodo">Ajouter un ToDo</button>
  <ListPourTodoList :on-suppression-todo="supprimeTodo" :todos="todos"></ListPourTodoList>
</template>
