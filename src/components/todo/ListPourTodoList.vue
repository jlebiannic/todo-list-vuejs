<script setup lang="ts">
import type { Todo } from "@/model/Todo";
import TodoItem from "./TodoItem.vue";

interface IListPourTodoListProps {
  todos: Todo[];
}

const props = withDefaults(defineProps<IListPourTodoListProps>(), { todos: () => [] });
</script>

<template>
  <ul>
    <li v-for="todo in props.todos" :key="todo.texte">
      <TodoItem :todo="todo" />
    </li>
  </ul>
</template>
