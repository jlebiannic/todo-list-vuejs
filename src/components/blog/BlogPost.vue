<script setup lang="ts">
interface IBlogPostProps {
  text: string;
}

interface IBlogPostEmits {
  (e: "enlarge-text"): void;
}

const props = defineProps<IBlogPostProps>();

const emit = defineEmits<IBlogPostEmits>();
</script>

<template>
  <div>{{ props.text }}</div>
  <button @click="emit('enlarge-text')">Agrandissement texte</button>
  <div>
    <slot></slot>
  </div>
</template>
