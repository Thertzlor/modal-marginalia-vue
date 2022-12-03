<script setup lang="ts">
import {computed} from 'vue';
import CustomLink from '../navigation/CustomLink.vue';
import ImageContainer from "../containers/ImageContainer.vue";
const props = defineProps<{content: string, imgs: Entity<UploadedFile>[]}>()

const findSource = imgString => (/src="([^"]+)"/.exec(imgString) || [])[1] || ''

const imageTransform = (imageStr: string) => {
  const src = findSource(imageStr)
  const file = props.imgs.map(f => f.attributes).find(({url}) => url === src)
  if (!file) return imageStr
  const percentage = /style="width:([\d.]+)/.exec(imageStr)?.[1]
  const multiplier = parseFloat(percentage || '25') / 100
  const blank = src.endsWith('png')
  const [l, r] = ['left', 'right'].map(t => imageStr.includes(`image-style-align-${t}`))
  const classText = `image${l ? ' style-align-left' : ''}${r ? ' style-align-right' : ''}${blank ? ' blank' : ''}`
  return `<ImageContainer :imgData="'${btoa(JSON.stringify(file))}'" :className="'${classText}'" custom-size="(max-width:1100px) calc(88vw * ${multiplier}) , calc(70vw * ${multiplier}) " />`
}

const linkTransform = (linkStr: string) => (linkStr[1] === '/') ? '</CustomLink>' : `<CustomLink :className="image" :noBlank="${!linkStr.includes('target="_blank"')}" to="${(/href="([^"]+)"/.exec(linkStr))?.[1]}">`

const dynamicComponent = computed(() => (
  {
    template: props.content.replace(/<\/?a[^>]*>/gmi, linkTransform).replace(/<figure class="image\b.+?<\/figure>/gm, imageTransform),
    components: {CustomLink, ImageContainer}
  }
))
</script>

<template>
  <component v-bind:is="dynamicComponent" />
</template>