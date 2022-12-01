<script setup lang="ts">
import CustomLink from './CustomLink.vue';
defineProps<{main_categories: Entity<Category>[] | undefined}>()

const categories = [
  {name: "About", url: "/about"},
  {name: "All Posts", url: "/post-list"},
  {name: "Tags", url: "/tag-cloud"}
] as const
</script>

<template>
  <nav>
    <ul class="menu">
      <li v-for="{name, url} in categories" :key="url">
        <CustomLink :noBlank="false" :to="url">{{ name}}</CustomLink>
      </li>
      <li v-for="{attributes: {name, slug}} in main_categories" :key="slug">
        <CustomLink :noBlank="false" :to="'/post-list?category=' + slug">{{ name}}</CustomLink>
      </li>
    </ul>
  </nav>
</template>