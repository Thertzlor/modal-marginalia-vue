<script setup lang="ts">
import {computed} from 'vue';
import CustomLink from '../navigation/CustomLink.vue';
import VueHeader from '../navigation/VueHeader.vue';
import NoteElement from '../containers/NoteElement.vue';
import ImageContainer from '../containers/ImageContainer.vue';
import CodeWrapper from '../containers/CodeWrapper.vue';
import type {Component} from 'vue';
const emit = defineEmits<{(arg:'activeHover',num:number)}>();
import {useGlobals} from '@/stores/globals';
const {defaultNote} = useGlobals();
const props = defineProps<{content?:string|null,toenotes?:boolean,hovering?:number}>();
const setHover = (num:number) => emit('activeHover',num);
const dynamicComponent = computed(():Component => (
  {
    methods:{setHover},
    props:{current:Number},
    template: props.content??'',
    components: {CustomLink, ImageContainer,VueHeader,NoteElement,CodeWrapper}
  }
));
</script>

<template>
  <div v-if="content && content.replace(/\s*/g, '') !== defaultNote" :id="`${toenotes?'toenote':'footnote'}_container`" :class="{footnotes:true,toenotes}">
    <component :is="dynamicComponent" :current="hovering" />
  </div>
</template>