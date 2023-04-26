<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {computed} from 'vue';
import {useTagListQuery} from '@/graphql/api';
import type {PostEntity} from '@/graphql/api';
import {useGlobals} from '@/stores/globals';
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

const getMax = computed(() => (([...((tagList.value)?.tags?.data || [])]).sort((a, b) => ((a.attributes?.posts?.data.length ?? NaN) < (b.attributes?.posts?.data.length ?? NaN) ? 1 : -1))[0]?.attributes?.posts?.data.length ?? 1));

</script>

<template>
  <div class="article_container">
    <h1 class="fadeborder generic_header">Tag Cloud</h1>
    <main v-if="tagList?.tags" class="cloud">
      <ul>
        <li v-for="{attributes: {color, slug, name, posts: {data: {length}, }, }} in tagList.tags.data.filter((f): f is Present<typeof f, 'attributes'> & {attributes:{posts:{data:PostEntity[]}}} => !!f.attributes?.posts?.data.length)" :key="`post-list?tag=${slug}`" :title="`Posts: ${length}`">
          <RouterLink :style="{fontSize: `${linearTransform(length, 1, getMax, minEm, maxEm).toFixed(2)}em`,fontWeight: linearTransform(length, 1, getMax, minWeight, maxWeight).toFixed(2),color: color}" :to="`post-list?tag=${slug}`">{{ name }}</RouterLink>
        </li>
      </ul>
    </main>
  </div>
</template>