<script lang="ts" setup>
defineProps<{list: Entity<Tag | Category>[], taxType: string}>();
</script>

<template>
  <template v-if="list.length">
    <RouterLink v-for="{attributes: {slug, color, name}} in list" :key="slug" class="tag hoverglow taxonomy-tag" :to="`/post-list?${taxType}=${slug}`" :style="({['--glow-color']: color} as any)">{{ name}}</RouterLink>
  </template>
  <a v-else class="tag hoverglow taxonomy-tag" href="#">None</a>
</template>