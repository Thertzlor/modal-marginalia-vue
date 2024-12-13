<script lang="ts" setup>
import {computed, ref} from 'vue';
import {useGlobals} from '@/stores/globals';

const {getImageData, getSrcSet,getImageFile} = useGlobals();
const props = defineProps<{ className:string, customSize?:string, image?:string, caption?:string}>();
// const data = computed(() => (typeof props.imgData === 'string' ? JSON.parse(props.imgData) as UploadFile : props.imgData));
const data = computed(() => getImageFile(props.image));
const iData = computed (() => data.value && getImageData(data.value));
const sizeText = computed(() => [...(iData.value?iData.value.slice(0, -1).map(({width}) => `(min-width: ${Math.ceil(width * 1.3)}px) ${width}w`):[]), `${data.value?.width}w`].join(', '));
const iml = ref(false);
</script>


<template>
  <figure v-if="data && iData" :class="className" class="invisible">
    <a :href="image">
      <img
        :srcset="getSrcSet(iData)" :src="data.url" :alt="data.alternativeText??undefined"
        :style="{aspectRatio: `${data.width} / ${data.height}`, width: iml ? 'auto' : '', maxHeight:className.includes('banner')?undefined:`${data.height}px`}" :sizes="customSize || sizeText" :height="data.height??undefined"
        :width="data.width??undefined" @load="e => ((iml = true), imgload(e, 2))">
    </a>
    <figcaption v-if="caption?.trim() || data.caption?.trim()">{{ caption || data.caption }}</figcaption>
  </figure>
</template>
