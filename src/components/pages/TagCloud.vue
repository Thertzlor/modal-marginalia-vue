<script lang="ts" setup>
import gql from "graphql-tag";
import {useQuery} from "@vue/apollo-composable";
import {useRouter} from 'vue-router';
import {computed} from 'vue';

const router = useRouter();
const maxEm = 2.5
const maxWeight = 600
const minEm = .5
const minWeight = 200

const linearTransform = (val: number, oldMin: number, oldMax: number, newMin: number, newMax: number) => ((val - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin

const tagQuery = gql`query TagList { tags(filters:{posts:{id:{notNull:true},publishedAt:{notNull:true}}}) { data { attributes { name slug color posts { data { id } } } } } }`;

const {result: tagList, onError} = useQuery<{tags: EntityCollection<Tag>}>(tagQuery);
onError(() => router.push('/ServerError'))

const getMax = computed(() => (([...((tagList.value)?.tags?.data || [])]).sort((a, b) => a.attributes.posts.data.length < b.attributes.posts.data.length ? 1 : -1)[0]?.attributes.posts.data.length || 1));

</script>

<template>
  <div class="article_container">
    <h1 class="fadeborder generic_header">Tag Cloud</h1>
    <main v-if="tagList?.tags" class="cloud">
      <ul>
        <li v-for="{attributes: {color, slug, name, posts: {data: {length}, }, }} in tagList.tags.data"
          :title="`Posts: ${length}`" :key="`post-list?tag=${slug}`">
          <RouterLink :style="{
            fontSize: `${linearTransform(length, 1, getMax, minEm, maxEm).toFixed(2)}em`,
            fontWeight: linearTransform(length, 1, getMax, minWeight, maxWeight).toFixed(2),
            color: color
          }" :to="`post-list?tag=${slug}`">{{ name}}</RouterLink>
        </li>
      </ul>
    </main>
  </div>
</template>