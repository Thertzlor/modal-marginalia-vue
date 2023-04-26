<script lang="ts" setup>
import type {CategoryEntity, PostEntity} from '@/graphql/api';
import NavMenu from './NavMenu.vue';
import {useRouter} from 'vue-router';
import {ref} from 'vue';
defineProps<{catList:CategoryEntity[], latestPosts:(SomeOf<PostEntity>)[]|undefined}>();
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
        <li v-for="{attributes: {slug, publishedAt, title}, id} in latestPosts?.filter((p): p is Present<typeof p,'id'|'attributes'>=>!!(p && p.attributes)) ?? []" :key="id">
          <RouterLink :to="`/post/${id}-${slug}`">{{ title }}</RouterLink><br>
          <span>{{ gerDate(publishedAt ?? new Date(0)) }}</span>
        </li>
      </ul>
    </div>
  </aside>
</template>