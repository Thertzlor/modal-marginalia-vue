<script setup lang="ts">
import type {Category} from '@/graphql/api';
import CustomLink from './CustomLink.vue';
defineProps<{mainCategories?:(Partial<Category>)[]}>();
const categories = [
  {name: 'About', url: '/about'},
  {name: 'All Posts', url: '/post-list'},
  {name: 'Tags', url: '/tag-cloud'}
] as const;
</script>

<template>
  <nav>
    <ul class="menu">
      <li v-for="{name, url} in categories" :key="url">
        <CustomLink :no-blank="false" :to="url">{{ name }}</CustomLink>
      </li>
      <li v-for="{name, slug} in mainCategories?.filter(e=> !!e).sort((a,b) => (a.priority ?? NaN) < (b.priority ?? NaN)?1:-1)" :key="slug">
        <CustomLink :no-blank="false" :to="'/post-list?category=' + slug">{{ name }}</CustomLink>
      </li>
    </ul>
  </nav>
</template>