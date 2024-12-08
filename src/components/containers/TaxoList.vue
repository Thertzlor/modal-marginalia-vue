<script lang="ts" setup>
import type {Tag, Category} from '@/graphql/api';
defineProps<{list:(Partial<Tag>|SomeOf<Partial<Category>>|null|undefined)[], taxType:string}>();
</script>

<template>
  <template v-if="list.length">
    <RouterLink
      v-for="{slug, color, name, description} in list.filter((f) :f is Present<NonNullable<typeof f>,'attributes'> => !!f)" :key="slug" class="tag hoverglow taxonomy-tag"
      :to="`/post-list?${taxType}=${slug}`" :title="description" :style="({['--glow_color']: color})">{{ name }}</RouterLink>
  </template>
  <a v-else class="tag hoverglow taxonomy-tag" href="#">None</a>
</template>