<script setup lang="ts">
import { ref, reactive } from "vue";
import { Todo } from "../model/Todo";
import ListPourTodoList from "./todo/ListPourTodoList.vue";

const nouveauTexteTodo = ref("");

const todos: Todo[] = reactive([]);

function ajouteTodo() {
  todos.push(Todo.createTodo(nouveauTexteTodo.value));
}
</script>

<template>
  <input type="text" v-model="nouveauTexteTodo" />
  <button @click="ajouteTodo">Ajouter un ToDo</button>
  <ListPourTodoList :todos="todos"></ListPourTodoList>
</template>
