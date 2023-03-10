<script setup lang="ts">
import type { Todo } from "@/model/Todo";

interface ITodoItemProps {
  todo: Todo;
}
const props = defineProps<ITodoItemProps>();
const emits = defineEmits(["onCocheTodo", "onSuppressionTodo"]);
</script>

<template>
  <input type="checkbox" @click="emits('onCocheTodo', todo.id)" :checked="todo.coche" />
  {{ props.todo.texte }}
  <span @click="emits('onSuppressionTodo', todo.id)" style="cursor: pointer">&#128465;</span>
</template>
