<script setup lang="ts">
import {computed} from 'vue';
import CustomLink from '../navigation/CustomLink.vue';
import ImageContainer from '../containers/ImageContainer.vue';
const props = defineProps<{content:string}>();
const dynamicComponent = computed(() => (
  {
    template: props.content,
    components: {CustomLink, ImageContainer}
  }
));
</script>

<template><!-- @vue-ignore -->
  <component :is="dynamicComponent" />
</template>