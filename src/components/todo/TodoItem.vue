<script setup lang="ts">
import type { Todo } from "@/model/Todo";

interface ITodoItemProps {
  todo: Todo;
  onSuppressionTodo: (id: number) => void;
  onCocheTodo: (id: number) => void;
}
const props = defineProps<ITodoItemProps>();
</script>

<template>
  <input type="checkbox" @click="() => props.onCocheTodo(todo.id)" :checked="todo.coche" />
  {{ todo.texte }}
  <span @click="() => props.onSuppressionTodo(todo.id)" style="cursor: pointer">&#128465;</span>
</template>
