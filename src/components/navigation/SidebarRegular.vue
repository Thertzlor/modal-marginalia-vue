<script lang="ts" setup>
import NavMenu from './NavMenu.vue';
import {useRouter} from 'vue-router';
import {ref} from 'vue';
import type {Category, Post} from '@/graphql/api';

defineProps<{catList:Partial<Category>[], latestPosts:(Partial<Post>)[]|undefined}>();
const router = useRouter();
const searchQuery = ref('');
const searchSubmit = () => router.push(`/search?q=${encodeURIComponent(searchQuery.value)}`);
</script>

<template>
  <label class="menu_centered menu_label" title="show Menu" for="menucheck" />
  <aside class="sidebar">
    <NavMenu v-if="catList.length" :main-categories="catList" />
    <form
      v-if="catList.length" id="search_form" enctype="text/plain"
      @submit.stop.prevent="searchSubmit">
      <input
        id="search_input" v-model="searchQuery" required
        type="search" placeholder="Search" name="searchTerm">
      <input class="hoverglow" type="submit" value="search">
    </form>
    <div v-if="latestPosts?.length" class="misc">
      <ul>
        <li v-for="{slug, pub_date, title, human_id,documentId} in latestPosts?.filter(p =>!!p) ?? []" :key="documentId">
          <RouterLink :to="`/post/${human_id}-${slug}`">{{ title }}</RouterLink><br>
          <span>{{ gerDate(pub_date as Date|string|undefined ?? new Date(0)) }}</span>
        </li>
      </ul>
    </div>
  </aside>
</template>