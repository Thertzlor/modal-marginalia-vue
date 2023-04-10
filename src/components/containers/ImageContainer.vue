<script lang="ts" setup>
import type {UploadFile} from '@/graphql/api';
import {computed, ref} from 'vue';
import { useGlobals } from '@/stores/globals';
const {getImageData, getSrcSet} = useGlobals()
const props = defineProps<{imgData: UploadFile | string |Record<string,any>, className: string, customSize?: string, image?:any}>();
const data = computed(() => typeof props.imgData === 'string' ? JSON.parse(atob(props.imgData)) as UploadFile : props.imgData)
const imageData = getImageData(data.value as UploadFile)
const imgSrcList = getSrcSet(imageData)
const sizeList = imageData.slice(0, -1).map(({width}) => `(min-width: ${Math.ceil(width * 1.3)}px) ${width}w`)
const sizeText = [...sizeList, `${data.value.width}w`].join(', ')
const iml = ref(false)
</script>

<template>
  <figure v-if="imgData" :class="className" class="invisible">
    <a :href="data.url">
      <img :srcset="imgSrcList" :src="data.url" :alt="data.alternativeText" @load="e => ((iml = true), imgload(e, 2))" :style="{aspectRatio: `${data.width} / ${data.height}`, width: iml ? 'auto' : ''}" :sizes="customSize || sizeText" :height="data.height" :width="data.width" />
    </a>
    <figcaption v-if="data.caption">{{ data.caption}}</figcaption>
  </figure>
</template>
