<script lang="ts" setup>
import NavMenu from "./NavMenu.vue";
import {useRouter} from 'vue-router'
import {ref} from 'vue';
import {CategoryEntity} from '@/graphql/api';
const router = useRouter();
defineProps<{cat_list: CategoryEntity[]}>();
const query = ref('')
const searchSubmit = () => router.push("/search?q=" + encodeURIComponent(query.value));
</script>

<template>
  <aside class="sidebar_mobile">
    <RouterLink class="homelink" to="/">Home</RouterLink>
    <NavMenu :main_categories="cat_list" />
    <form id="search_form_mobile" enctype="text/plain" @submit.stop.prevent="searchSubmit">
      <input id="search_input_mobile" v-model="query" required type="search" placeholder="Search" name="searchTerm" />
      <label class="hoverglow"><input type="submit" value="" /></label>
    </form>
  </aside>
</template>