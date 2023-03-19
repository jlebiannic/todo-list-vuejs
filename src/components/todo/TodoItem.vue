<script setup lang="ts">
import type { Todo } from "@/model/Todo";
import { inject } from "vue";

interface ITodoItemProps {
  todo: Todo;
}
const props = defineProps<ITodoItemProps>();

const onCocheTodo: ((todoId: number) => void) | undefined = inject("onCocheTodo");
const onSuppressionTodo: ((todoId: number) => void) | undefined = inject("onSuppressionTodo");
</script>

<template>
  <input type="checkbox" @click="onCocheTodo && onCocheTodo(todo.id)" :checked="todo.coche" />
  {{ props.todo.texte }}
  <!-- Icone poubelle -->
  <span @click="onSuppressionTodo && onSuppressionTodo(todo.id)" style="cursor: pointer"
    >&#128465;</span
  >
</template>
