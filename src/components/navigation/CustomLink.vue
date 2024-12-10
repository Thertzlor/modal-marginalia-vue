<script setup lang="ts">
import {computed} from 'vue';
import {RouterLink} from 'vue-router';
import {useGlobals} from '@/stores/globals';
const {scrollOption,unHash} = useGlobals();
const props = defineProps({...(RouterLink as any).props, noBlank: Boolean});
const emit = defineEmits<{(arg:'nav')}>();
const isExt = computed(() => typeof props.to === 'string' && props.to.startsWith('http'));
const isAnchor = computed(() => !isExt.value && props.to.startsWith('#'));
const scrolly = (anch:string) => ((d=document.getElementById(anch.slice(1))) => (d && (d?.scrollIntoView(scrollOption),d.focus(), history.pushState({}, '',`${unHash(window.location)}#${d?.id??''}`) ,emit('nav'))))();
const hl = (e:Event) => (e.target as HTMLElement).classList.add('highlight');
const dl = (e:Event) => (e.target as HTMLElement).classList.remove('highlight');
</script>

<template>
  <!-- @vue-expect-error hacky templates -->
  <a
    v-if="isExt" :target="noBlank ? 'self' : '_blank'" :href="to"
    @focus="hl" @blur="dl"><slot /></a>
  <!-- @vue-expect-error more hacky templates -->
  <a
    v-else-if="isAnchor" :href="to" @focus="hl"
    @blur="dl" @click.stop.prevent="() => scrolly(to)"><slot /></a>
  <!-- @vue-expect-error even more hacky templates -->
  <RouterLink
    v-else v-bind="props" @focus="hl"
    @blur="dl"><slot /></RouterLink>
</template>