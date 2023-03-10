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

function cocheTodo(id: number) {
  const index = todos.findIndex((todo) => todo.id === id);
  todos[index].coche = !todos[index].coche;
}

function getTodoNonCoches() {
  return todos.filter((todo) => !todo.coche);
}

function getTodoCoches() {
  return todos.filter((todo) => todo.coche);
}
</script>

<template>
  <input type="text" v-model="nouveauTexteTodo" />
  <button @click="ajouteTodo">Ajouter un ToDo</button>
  <ListPourTodoList
    :todos="getTodoNonCoches()"
    @on-suppression-todo="supprimeTodo"
    @on-coche-todo="cocheTodo"
  ></ListPourTodoList>

  <ListPourTodoList
    :todos="getTodoCoches()"
    @on-suppression-todo="supprimeTodo"
    @on-coche-todo="cocheTodo"
  ></ListPourTodoList>
</template>
