<script setup lang="ts">
import {computed,ref} from 'vue';
import CustomLink from '../navigation/CustomLink.vue';
import VueHeader from '../navigation/VueHeader.vue';
import ImageContainer from '../containers/ImageContainer.vue';
import CodeWrapper from '../containers/CodeWrapper.vue';
import ToC from '../navigation/ToC.vue';
import type {Component} from 'vue';
const emit = defineEmits<{(arg:'activeHover',num:number)}>();
const props = defineProps<{content:string,toc?:boolean|null,main?:boolean,published?:string,words?:number|null}>();
const headerinos = ref<[number,string,string][]>([]);
const addHeader = (index:number,level:number,title:string,id:string) => props.toc && (headerinos.value[index] = [level,id,title]);
const setHover = (num:number) => emit('activeHover',num);
const dynamicComponent = computed(():Component => (
  {
    methods:{addHeader,setHover},
    template: props.content,
    components: {CustomLink, ImageContainer,VueHeader,CodeWrapper}
  }
));
</script>

<template>
  <span v-if="props.words && miscState.reading_speed" :title="`${props.words} words. You can set your reading speed in the options.`" class="timespan">{{ (props.words/miscState.reading_speed).toFixed(0) }} minute read at {{ miscState.reading_speed }} wpm</span>
  <span v-if="published" class="datespan">Posted {{ gerDate(published) }}</span>
  <ToC v-if="toc" :elements="headerinos" />
  <template v-if="main">
    <span class="post_text">
      <component :is="dynamicComponent" />
    </span>
  </template>
  <component :is="dynamicComponent" v-else />
</template>