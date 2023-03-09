<script setup lang="ts">
import type { Todo } from "@/model/Todo";

interface ITodoItemProps {
  todo: Todo;
  onSuppressionTodo: (index: number) => void;
}
const props = defineProps<ITodoItemProps>();
</script>

<template>
  <input type="checkbox" /><span
    @click="() => props.onSuppressionTodo(todo.id)"
    style="cursor: pointer"
    >&#128465;</span
  >
</template>
