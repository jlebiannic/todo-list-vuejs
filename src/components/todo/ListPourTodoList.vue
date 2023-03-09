<script setup lang="ts">
import type { Todo } from "@/model/Todo";

interface IListPourTodoListProps {
  todos: Todo[];
  onSuppressionTodo: (index: number) => void;
}

const props = withDefaults(defineProps<IListPourTodoListProps>(), { todos: () => [] });
</script>

<template>
  <ul>
    <li v-for="todo in props.todos" :key="todo.texte">
      {{ todo.texte }}
      <span @click="() => props.onSuppressionTodo(todo.id)" style="cursor: pointer">&#128465;</span>
    </li>
  </ul>
</template>
