<script setup lang="ts">
import {computed, Prop} from 'vue';
import {RouterLink} from 'vue-router';
import {useGlobals} from '@/stores/globals';

const {scrollOption,unHash} = useGlobals();
const props = defineProps({...(RouterLink as any as {props:{to:Prop<string>}}).props, noBlank: Boolean, hoverIndex:{type:Number,required:false, default:-1}});
const emit = defineEmits<{(arg:'nav'),(arg:'hover',num:number)}>();
const isExt = computed(() => typeof props.to === 'string' && props.to.startsWith('http'));
const isAnchor = computed(() => !isExt.value && props.to!.startsWith('#'));
const scrolly = (anch:string) => ((d=document.getElementById(anch.slice(1))) => (d && (d?.scrollIntoView(scrollOption),d.focus(), history.pushState({}, '',`${unHash(window.location)}#${d?.id??''}`) ,emit('nav'))))();
const hl = (e:Event) => (e.target as HTMLElement).classList.add('highlight');
const dl = (e:Event) => (e.target as HTMLElement).classList.remove('highlight');

const hoverHandler = () => props.hoverIndex !== -1 && emit('hover',props.hoverIndex);
const outHandler = () => props.hoverIndex !== -1 && emit('hover',-1);
</script>

<template>
  <a
    v-if="isExt" :target="noBlank ? 'self' : '_blank'" :href="to"
    @focus="hl" @blur="dl"><slot /></a>
  <a
    v-else-if="isAnchor" :href="to" @focus="hl"
    @mouseenter="hoverHandler()" @mouseleave="outHandler()"
    @blur="dl" @click.stop.prevent="() => scrolly(to!)"><slot /></a>
  <RouterLink
    v-else v-bind="props" :to="to!"
    @focus="hl"
    @blur="dl"><slot /></RouterLink>
</template>