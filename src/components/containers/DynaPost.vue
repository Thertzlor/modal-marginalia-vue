<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import {type Component, computed,ref} from 'vue';
import CustomLink from '../navigation/CustomLink.vue';
import VueHeader from '../navigation/VueHeader.vue';
import ImageContainer from '../containers/ImageContainer.vue';
import ToC from '../navigation/ToC.vue';
const props = defineProps<{content:string,toc?:boolean|null,main?:boolean}>();
const headerinos = ref<[number,string,string][]>([]);
const addHeader = (index:number,level:number,title:string,id:string) => props.toc && (headerinos.value[index] = [level,id,title]);
const dynamicComponent = computed(():Component => (
  {
    methods:{addHeader},
    template: props.content,
    components: {CustomLink, ImageContainer,VueHeader}
  }
));
</script>

<template>
  <ToC v-if="toc" :elements="headerinos" />
  <template v-if="main">
    <span class="post_text">
      <component :is="dynamicComponent" />
    </span>
  </template>
  <component :is="dynamicComponent" v-else />
</template>