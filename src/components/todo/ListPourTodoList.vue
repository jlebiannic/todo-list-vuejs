<script setup lang="ts">
import type { Todo } from "@/model/Todo";

interface IListPourTodoListProps {
  todos: Todo[];
}

const props = withDefaults(defineProps<IListPourTodoListProps>(), { todos: () => [] });
</script>

<template>
  <ul>
    <li v-for="todo in props.todos" :key="todo.texte">
      {{ todo.texte }}
    </li>
  </ul>
</template>
