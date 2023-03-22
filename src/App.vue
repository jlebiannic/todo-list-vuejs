<script setup lang="ts">
import BlogApp from "./components/blog/BlogApp.vue";
import TodoList from "./components/todo/TodoList.vue";
import { ref } from "vue";

const tabs: any = { TodoList, BlogApp };
const currentTab: any = ref("TodoList");
</script>

<template>
  <button v-for="(tabObject_, tabName) in tabs" :key="tabName" @click="currentTab = tabName">
    {{ tabName }}
  </button>

  <component :is="tabs[currentTab]"></component>

  <!-- <TodoList></TodoList>
  <BlogApp></BlogApp> -->
</template>
