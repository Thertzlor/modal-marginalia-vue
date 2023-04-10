<script lang="ts" setup>
import NavMenu from "./NavMenu.vue";
import {useRouter} from 'vue-router'
import {ref} from 'vue';
import type {CategoryEntity, PostEntity} from '@/graphql/api';
defineProps<{cat_list: CategoryEntity[], latest_posts: (SomeOf<PostEntity>)[]|undefined}>();
const router = useRouter()
const searchQuery = ref('')
const searchSubmit = () => router.push("/search?q=" + encodeURIComponent(searchQuery.value));
</script>

<template>
  <label class="menu_centered menu_label" title="show Menu" for="menucheck"></label>
  <aside class="sidebar">
    <NavMenu v-if="cat_list.length" :main_categories="cat_list" />
    <form v-if="cat_list.length" id="search_form" @submit.stop.prevent="searchSubmit" enctype="text/plain">
      <input id="search_input" v-model="searchQuery" required type="search" placeholder="Search" name="searchTerm" />
      <input class="hoverglow" type="submit" value="search" />
    </form>
    <div v-if="latest_posts?.length" class="misc">
      <ul>
        <li v-for="{attributes: {slug, publishedAt, title}, id} in latest_posts?.filter((p): p is Present<typeof p,'id'|'attributes'>=>!!(p && p.attributes)) ?? []" :key="id">
          <RouterLink :to="`/post/${id}-${slug}`">{{ title}}</RouterLink><br />
          <span>{{ gerDate(publishedAt ?? new Date(0))}}</span>
        </li>
      </ul>
    </div>
  </aside>
</template>