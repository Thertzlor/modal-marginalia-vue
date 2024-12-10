<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import {type Component, computed,ref} from 'vue';
import CustomLink from '../navigation/CustomLink.vue';
import VueHeader from '../navigation/VueHeader.vue';

import ImageContainer from '../containers/ImageContainer.vue';
import {useGlobals} from '@/stores/globals';
const {defaultNote} = useGlobals();
const props = defineProps<{content?:string|null,toenotes?:boolean}>();
const dynamicComponent = computed(():Component => (
  {
    template: props.content??'',
    components: {CustomLink, ImageContainer,VueHeader}
  }
));
</script>

<template>
  <div v-if="content && content.replace(/\s*/g, '') !== defaultNote" :id="`${toenotes?'toenote':'footnote'}_container`" :class="{footnotes:true,toenotes}">
    <component :is="dynamicComponent" />
  </div>
</template>