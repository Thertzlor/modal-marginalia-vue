<script lang="ts" setup>
import SidebarMobile from "./components/navigation/SidebarMobile.vue";
import Sidebar from "./components/navigation/Sidebar.vue";
import CanvasService from "./services/CanvasService";
import {refreshRate} from "./services/GlobalDataService";
import gql from "graphql-tag";
import {useQuery,provideApolloClient} from "@vue/apollo-composable";
import {onMounted, onBeforeMount, computed, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import { apolloClient } from './main';
provideApolloClient(apolloClient)
let relCount = 5;
const route = useRoute()
const router = useRouter()
const sizes = new Map<string, string>()
const qouteSalt = ref(1)
const menVis = ref(false)
const slideVal = ref('-200vh')
const pg: PaginationArg = {pageSize: 100, page: 1}
const loadedImgs = [] as string[]
const imgList = (['', '_1', '_2'] as const).map((s => `../img/para_2${s}.png` as const));
const imgListBg = (['', '_1', '_2'] as const).map((s => `../img/para_1${s}.png` as const));
const [currentImg, currentImgBg] = ([imgList, imgListBg]).map(l => ref(l[0]))
const opacity = ref('0')
const opacityBg = ref('0')
const [backgroundImage, backgroundImageBg] = [currentImg, currentImgBg].map(b => computed(() => `url(${b.value})`))
let bigImgSwitch = true
const loadLimit = 1500
let first = true
const imgLoader = (url: string, loadFunc: () => any = (() => void 0), execNoLoad = false) => new Promise<boolean>(res => {
  if (loadedImgs.includes(url)) {
    execNoLoad && loadFunc();
    res(true)
  }
  const newImg = new Image()
  newImg.src = url
  newImg.onload = () => {
    loadFunc()
    loadedImgs.push(url);
    res(true)
  }
})

onMounted(
  () => {
    const run = (fun: () => any) => setTimeout(fun, 0);
    const art = document.getElementsByClassName("article_container")[0];

    if (art) {
      art.classList.add("invisible");
      run(() => (art.classList.add("vistrans2"), art.classList.remove("invisible")));
    }
    ["../img/para_2.png", "../img/para_1.png", ""].map((s) => s ? document.location.href.split("/").slice(4).reduce(a => `../${a}`, s) : s).forEach((u, i) => {
      const el = document.getElementsByClassName(["p1", "p2", "p3"][i]).item(0) as HTMLElement;
      el.classList.add("vistrans");
      const bgImg: HTMLImageElement = (u && new Image()) as HTMLImageElement;
      const t = Date.now()
      if (u) bgImg.src = u;
      if (u && !bgImg.complete) bgImg.onload = () => {
        loadedImgs.push(bgImg.src)
        if (Math.abs((t - Date.now())) > loadLimit) bigImgSwitch = false
        el.classList.add("vistrans", "visible")
        if (i == 0) opacity.value = '1'
        else if (i == 1) opacityBg.value = '1'
      };
      else run(() => el.classList.add("visible"));
    });
    CanvasService.activateCanvas();
  }
)

const bw = ref(document.body.getBoundingClientRect().width)
const cw = ref(0)
const res = () => {
  cw.value = (document.getElementsByClassName('content')[0])?.getBoundingClientRect().width || 0
  bw.value = document.body.getBoundingClientRect().width
}
window.addEventListener('resize', res)
const delRes = () => window.setTimeout(res, 300)

//const afterEnter = () => CanvasService.canvasUtilities.refill();
const isMain = computed(() => ['/', '/home'].includes(route.path))
const bodyClass = () => ((menVis.value = false), document.body.classList[isMain.value ? "add" as const : "remove" as const]("home"));

const changeStars = (forceDiff = false) => {
  const targetList = forceDiff ? imgList.filter((f => f !== currentImg.value)) : imgList
  const targetListBg = forceDiff ? imgListBg.filter((f => f !== currentImgBg.value)) : imgListBg
  const [randomImg, randomimgBg] = [targetList, targetListBg].map(l => l[Math.floor(Math.random() * l.length)])
  const [picEl, picElBg] = ['p3', 'p1'].map(p => document.getElementsByClassName(p)[0] as HTMLDivElement | undefined)
  if (picElBg && randomimgBg !== currentImgBg.value) {
    opacityBg.value = '0'
    setTimeout(() => {
      currentImgBg.value = randomimgBg
      setTimeout(() => opacityBg.value = '1', 450)
    }, 2000)
  }
  if (picEl && randomImg !== currentImg.value) {
    opacity.value = '0';
    let loaded = loadedImgs.includes(randomImg)
    const loady = loaded ? true : imgLoader(randomImg)
    setTimeout(async () => {
      currentImg.value = randomImg
      await loady;
      opacity.value = '1'
    }, 2100);
  }
}

router.beforeEach(g => {
  if (first) {
    first = false;
    return
  }
  relCount++
  if(['/', '/home'].includes(g.path)) qouteSalt.value = qouteSalt.value++;
  if (!bigImgSwitch || relCount < 3 || (Math.random() * 100) <= 70) return
  relCount = 0
  changeStars()
})

router.afterEach(({fullPath}) => {
  if (route.name && !['Post', 'Post List'].includes(route.name as string)) document.title = `${String(route.name)} - Modal Marginalia`
  bodyClass()
  document.getElementsByClassName('wrapper')[0]?.scrollTo(0, 0)
  setTimeout(() => {
    const {height = '0'} = (document.getElementsByClassName('article_container')[0]?.getBoundingClientRect() || {})
    const hVal = `calc(-${height}px - 25vh)`
    sizes.set(fullPath, hVal)
    slideVal.value = hVal
    res()
  }, 1000)
})

const onBeforeEnter = () => (slideVal.value = (sizes.get(router.currentRoute.value.fullPath) || '-200vh'))
onBeforeMount(bodyClass)

const quer = gql`query Init($pg: PaginationArg) { quotes(pagination: $pg) { data { id attributes { text } } } categories { data { attributes { name slug } } } posts(pagination: { start: 0, limit: 5 }, sort: "publishedAt:desc") { meta{pagination{total}} data { id attributes { publishedAt title slug } } } }`;

const positionAdjust = computed(() => {
  const same = bw.value === cw.value;
  return [
    {'--fullscr_offset_x': same ? '.5em' : '1em','--fullscr_offset_y': same ? '1em' : '.5em'},
    {'--fullscr_offset_x': same ? '4em' : '3.5em','--fullscr_offset_y': same ? '1.2em' : '.7em'}
  ]
})

const {result, onError, onResult,refetch} = useQuery<{quotes: EntityCollection<Quote>, categories: EntityCollection<Category>, posts: EntityCollection<Post>}>(quer, {pg}, {fetchPolicy: 'no-cache', nextFetchPolicy: 'no-cache'});
onError(() => router.push('/ServerError'))

let numPosts:number|undefined
let inVal: number|undefined

onResult(r=>{
  if(!r.data?.posts?.meta.pagination.total || !refreshRate) return
  numPosts = r.data.posts.meta.pagination.total;
  if(!inVal) {
    inVal = 1;
    setTimeout(()=>{
      const checkLatest = gql`query lastPosts {posts { meta{pagination{total}} }}`
      const {onResult:checkRes,refetch:checkFetch} = useQuery<MetaKey<'posts'>>(checkLatest)
      checkRes(r=>{
        if((numPosts || numPosts === 0) && r.data?.posts?.meta.pagination.total !== numPosts) refetch()
      })
      setInterval(()=>{checkFetch()},refreshRate)
  },refreshRate)
}
})

const fallback = {attributes: {text: ""}}
let quote = computed(()=>(qouteSalt.value !==0 && result.value?.quotes?.data[Math.floor(Math.random() * result.value.quotes.data.length)] || fallback).attributes.text)

</script>

<template>
  <input type="button" value="" id="starChanger" title="Change Stars" @click="changeStars(true)">
  <input @change="delRes" type="checkbox" name="fullscreen" id="fullcheck" />
  <label :style="positionAdjust[0]" title="fullscreen" for="fullcheck">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polyline points="5,30 ,5,5 30,5" />
      <polyline points="70,5 ,95,5 95,30" />
      <polyline points="95,70 ,95,95 70,95" />
      <polyline points="30,95 ,5,95 5,70" />
    </svg>
  </label>
  <label v-if="bigImgSwitch" :style="positionAdjust[1]" title="change stars" for="starChanger">
    <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.981 164.981">
      <path fill="white" class="b" d="M82.88,0l13.684,47.614,44.054-23.696,.445,.445-23.918,43.276,47.836,14.351v.89l-47.392,13.906,23.473,43.721-.445,.556-44.054-23.696-13.684,47.614h-.89l-14.351-47.614-43.276,23.696-.445-.556,23.474-43.721L0,82.88v-.89l47.392-14.351L23.918,24.363l.445-.445,43.276,23.696L81.99,0h.89Zm-26.811,93.448l26.143-11.013H16.576l39.493,11.013Zm0-21.916l26.143,10.68L36.044,35.933l20.025,35.6Zm15.463,37.379l10.68-26.255-46.168,46.279,35.488-20.024Zm0-52.843l10.902,26.143V16.576l-10.902,39.493Zm21.916,52.843l-11.014-26.255v65.637l11.014-39.382Zm0-52.843l-10.792,26.143,46.279-46.279-35.488,20.136Zm15.463,15.463l-26.255,10.902h65.637l-39.382-10.902Zm0,21.916l-26.255-10.791,46.279,46.279-20.024-35.488Z" />
    </svg>
  </label>
  <input type="checkbox" v-model="menVis" id="menucheck" />
  <SidebarMobile v-if="result?.categories" :cat_list="result.categories.data" />
  <label class="menu_label" title="Show Menu" for="menucheck"></label>
  <div class="wrapper">
    <div class="parallax-wrapper">
      <div :style="{backgroundImage: backgroundImageBg, opacity: opacityBg}" class="parallax p1"></div>
      <canvas class="parallax p2"></canvas>
      <div :style="{backgroundImage, opacity}" class="parallax p3 invisible"></div>
      <div class="content">
        <h1 class="sitename" :class="{main: isMain}">
          <RouterLink :to="result ? '/' : ''" class="nav-link">Modal<br />Marginalia</RouterLink>
        </h1>
        <Sidebar :cat_list="result?.categories.data || []" :latest_posts="result?.posts.data || []" />
        <RouterView :quote="quote" v-slot="{Component, route}">
          <Transition name="v-slide" mode="out-in" @before-enter="onBeforeEnter">
            <component :style="{'--slide_height': slideVal}" :is="Component" :key="route.fullPath" />
          </Transition>
        </RouterView>
      </div>
      <footer>©{{ new Date().getFullYear()}} Theigno.</footer>
    </div>
  </div>
</template>