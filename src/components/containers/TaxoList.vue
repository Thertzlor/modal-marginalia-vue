<script lang="ts" setup>
import type {TagEntity, CategoryEntity} from '@/graphql/api';
defineProps<{list: (TagEntity|CategoryEntity|null|undefined)[], taxType: string}>();
</script>

<template>
  <template v-if="list.length">
    <RouterLink v-for="{attributes: {slug, color, name}} in list.filter((f) :f is Present<NonNullable<typeof f>,'attributes'> => !!f?.attributes)" :key="slug" class="tag hoverglow taxonomy-tag" :to="`/post-list?${taxType}=${slug}`" :style="({['--glow-color']: color} as any)">{{ name}}</RouterLink>
  </template>
  <a v-else class="tag hoverglow taxonomy-tag" href="#">None</a>
</template>