<script setup lang="ts">
import {useGlobals} from '@/stores/globals';
import {computed, onMounted, ref} from 'vue';

const imgList = (['', '_1', '_2'] as const).map((s => `../img/para_2${s}.png` as const));
const imgListBg = (['', '_1', '_2'] as const).map((s => `../img/para_1${s}.png` as const));
const [currentImg, currentImgBg] = ([imgList, imgListBg]).map(l => ref(l[0]));
const [backgroundImage, backgroundImageBg] = [currentImg, currentImgBg].map(b => computed(() => `url(${b.value})`));
const loadedImgs = new Set<string>();

const {activateCanvas,run,getSSG} = useGlobals();
const building = getSSG();
const [opacity,opacityBg] = ([1,1]).map(v => ref(v));
const bigImgSwitch = ref(true);
const loadLimit = 1500;
onMounted(
  () => {
    if (building) return;
    ['../img/para_2.png', '../img/para_1.png', ''].map((s) => (s ? document.location.href.split('/').slice(4).reduce(a => `../${a}`, s) : s)).forEach((u, i) => {
      const el = document.getElementsByClassName(['p1', 'p2', 'p3'][i]).item(0) as HTMLElement;
      el.classList.add('vistrans');
      const bgImg:HTMLImageElement = (u && new Image()) as HTMLImageElement;
      const t = Date.now();
      if (u) bgImg.src = u;
      if (u && !bgImg.complete) bgImg.onload = () => {
        loadedImgs.add(bgImg.src);
        if (Math.abs((t - Date.now())) > loadLimit) bigImgSwitch.value = false;
        el.classList.add('vistrans', 'visible');
        if (i === 0) opacity.value = 1;
        else if (i === 1) opacityBg.value = 1;
      };
      else run(() => el.classList.add('visible'));
    });
    activateCanvas();
  }
);

const imgLoader = (url:string, loadFunc:() => any = (() => void 0), execNoLoad = false) => new Promise<boolean>(res => {
  if (loadedImgs.has(url)) {
    execNoLoad && loadFunc();
    res(true);
  }
  const newImg = new Image();
  newImg.src = url;
  newImg.onload = () => {
    loadFunc();
    loadedImgs.add(url);
    res(true);
  };
});

const changeStars = (forceDiff = false) => {
  const targetList = forceDiff ? imgList.filter((f => f !== currentImg.value)) : imgList;
  const targetListBg = forceDiff ? imgListBg.filter((f => f !== currentImgBg.value)) : imgListBg;
  const [randomImg, randomimgBg] = [targetList, targetListBg].map(l => l[Math.floor(Math.random() * l.length)]);
  const [picEl, picElBg] = ['p3', 'p1'].map(p => document.getElementsByClassName(p)[0] as HTMLDivElement | undefined);
  if (picElBg && randomimgBg !== currentImgBg.value) {
    opacityBg.value = 0;
    setTimeout(() => {
      currentImgBg.value = randomimgBg;
      setTimeout(() => opacityBg.value = 1, 450);
    }, 2000);
  }
  if (picEl && randomImg !== currentImg.value) {
    opacity.value = 0;
    const loaded = loadedImgs.has(randomImg);
    const loady = loaded ? true : imgLoader(randomImg);
    setTimeout(async() => {
      currentImg.value = randomImg;
      await loady;
      opacity.value = 1;
    }, 2100);
  }
};


defineExpose({changeStars,bigImgSwitch});


</script>
<template>
  <div :style="{backgroundImage: backgroundImageBg, opacity: opacityBg}" class="parallax p1" />
  <div class="parallax p2" />
  <div :style="{backgroundImage, opacity:`calc(var(--p_opacity) * ${opacity})`}" class="parallax p3 invisible" />
</template>