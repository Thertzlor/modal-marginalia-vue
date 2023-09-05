<script setup lang="ts">
import {type Component, computed} from 'vue';
import CustomLink from '../navigation/CustomLink.vue';
import ImageContainer from '../containers/ImageContainer.vue';
const props = defineProps<{content:string}>();
const dynamicComponent = computed(():Component => (
  {
    template: props.content,
    components: {CustomLink, ImageContainer}
  }
));
</script>

<template>
  <component :is="dynamicComponent" />
</template>