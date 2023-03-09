<script setup lang="ts">
import type { Todo } from "@/model/Todo";
import TodoItem from "./TodoItem.vue";

interface IListPourTodoListProps {
  todos: Todo[];
  onSuppressionTodo: (id: number) => void;
  onCocheTodo: (id: number) => void;
}

const props = withDefaults(defineProps<IListPourTodoListProps>(), { todos: () => [] });
</script>

<template>
  <ul>
    <li v-for="todo in props.todos" :key="todo.texte">
      <TodoItem
        :on-coche-todo="props.onCocheTodo"
        :on-suppression-todo="props.onSuppressionTodo"
        :todo="todo"
      />
    </li>
  </ul>
</template>
