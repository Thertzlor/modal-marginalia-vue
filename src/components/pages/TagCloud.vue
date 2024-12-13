<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {computed} from 'vue';
import {useTagListQuery} from '@/graphql/api';
import {useGlobals} from '@/stores/globals';
import type {Post} from '@/graphql/api';

const {hist} = useGlobals();
const router = useRouter();
const origRoute = router.currentRoute.value.fullPath;
const maxEm = 2.5;
const maxWeight = 600;
const minEm = .5;
const minWeight = 200;

const linearTransform = (val:number, oldMin:number, oldMax:number, newMin:number, newMax:number) => ((val - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;

const {result: tagList, onError} = useTagListQuery();
onError(() => void router.push('/ServerError').then(() => hist(origRoute)));

const getMax = computed(() => (([...((tagList.value)?.tags_connection?.nodes ?? []),...((tagList.value)?.categories_connection?.nodes ?? [])]).sort((a, b) => ((a.posts_connection?.nodes.length ?? NaN) < (b.posts_connection?.nodes.length ?? NaN) ? 1 : -1))[0]?.posts_connection?.nodes.length ?? 1));

</script>

<template>
  <div class="article_container">
    <h1 class="fadeborder generic_header tag_header">Tag Cloud</h1>
    <main v-if="tagList?.tags_connection" class="cloud">
      <ul>
        <li v-for=" {slug, isCat, name, description, posts_connection: {nodes: {length}}} in [...tagList.tags_connection.nodes.map(t=>({isCat:false,...t})),...tagList.categories_connection?.nodes.map(c=>({ isCat:true,...c })) ?? []].filter((f): f is typeof f & {posts_connection:{nodes:Post[]}} => !!f.posts_connection?.nodes.length)" :key="`${isCat?'c':'t'}=${slug}`" :title="`(Posts: ${length})${!isCat && description?` ${description}`:''}`">
          <RouterLink :style="{fontSize: `${linearTransform(length, 1, getMax, minEm, maxEm).toFixed(2)}em`,fontWeight: linearTransform(length, 1, getMax, minWeight, maxWeight).toFixed(2)}" :to="`post-list?${isCat?'category':'tag'}=${slug}`">{{ name }}</RouterLink>
        </li>
      </ul>
    </main>
  </div>
</template>