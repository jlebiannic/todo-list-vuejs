<script setup lang="ts">
import { ref } from "vue";
import BlogPost from "./BlogPost.vue";
import { Post } from "./Post";
const posts = ref([
  new Post(1, "Post1 blablabla"),
  new Post(2, "Post2 coucou"),
  new Post(3, "Post3 hooooooo !")
]);
const fontSizePost = ref(1);
</script>

<template>
  <div :style="{ fontSize: `${fontSizePost}rem` }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :text="post.text"
      @enlarge-text="fontSizePost += 0.2"
      >---------</BlogPost
    >
  </div>
</template>
