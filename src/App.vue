<script lang="ts" setup>
import SidebarMobile from './components/navigation/SidebarMobile.vue';
import SidebarRegular from './components/navigation/SidebarRegular.vue';
import MessageComponent from './components/messages/MessageComponent.vue';
import BgMenu from './components/containers/BgMenu.vue';
import StyleMenu from './components/containers/StyleMenu.vue';
import ParallaxLayer from './components/containers/ParallaxLayer.vue';
import {useGlobals} from './stores/globals';
import {onBeforeMount, computed, ref, useTemplateRef} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useInitQuery, useLastPostsLazyQuery} from '@/graphql/api';
import type {PaginationArg} from '@/graphql/api';

const {refreshRate,hist,run,localCssVars} = useGlobals();
let relCount = 5;
const route = useRoute();
const router = useRouter();
const sizes = new Map<string, string>();
const pg:PaginationArg = {pageSize: 100, page: 1};
const menVis = ref(false);
const [qouteSalt] = ([1]).map(v => ref(v));
const slideVal = ref('-200vh');
let first = true;
const savedVars = JSON.parse(localStorage.getItem(localCssVars)??'{}');
const visAdjuster = ({el}:{el?:HTMLDivElement}) => {
  if (!el?.classList) return;
  el.classList.add('invisible');
  run(() => (el.classList.add('vistrans2'), el.classList.remove('invisible')));
};

const para = useTemplateRef<InstanceType<typeof ParallaxLayer>>('para');
const messenger = useTemplateRef<InstanceType<typeof MessageComponent>>('messenger');
const styler = useTemplateRef<InstanceType<typeof StyleMenu>>('styler');

const bw = ref(document.body.getBoundingClientRect().width);
const cw = ref(0);
const res = () => {
  cw.value = (document.getElementsByClassName('content')[0])?.getBoundingClientRect().width || 0;
  bw.value = document.body.getBoundingClientRect().width;
};
window.addEventListener('resize', res);
const delRes = () => window.setTimeout(res, 300);

//const afterEnter = () => CanvasService.canvasUtilities.refill();
const isMain = computed(() => ['/', '/home'].includes(route.path));
const bodyClass = () => ((menVis.value = false), document.body.classList[isMain.value ? 'add' as const : 'remove' as const]('home'));
router.beforeEach(g => {
  if (first) {
    first = false;
    return;
  }
  relCount++;
  if (['/', '/home'].includes(g.path)) qouteSalt.value = qouteSalt.value++;
  if (!para.value?.bigImgSwitch || relCount < 3 || (Math.random() * 100) <= 70) return;
  relCount = 0;
  para.value?.changeStars();
});

router.afterEach(({fullPath}) => {
  if (route.name && !['Post', 'Post List'].includes(route.name as string)) document.title = `${String(route.name)} - Modal Marginalia`;
  bodyClass();
  document.getElementsByClassName('wrapper')[0]?.scrollTo(0, 0);
  setTimeout(() => {
    const {height = '0'} = (document.getElementsByClassName('article_container')[0]?.getBoundingClientRect() || {});
    const hVal = `calc(-${height}px - 25vh)`;
    sizes.set(fullPath, hVal);
    slideVal.value = hVal;
    res();
  }, 1000);
});

const onBeforeEnter = () => (slideVal.value = (sizes.get(router.currentRoute.value.fullPath) || '-200vh'));
onBeforeMount(bodyClass);

const {result, onError, onResult,refetch} = useInitQuery({pg},{fetchPolicy: 'no-cache', nextFetchPolicy: 'no-cache'});
const {onResult:checkRes,refetch:checkFetch,load} = useLastPostsLazyQuery();

let numPosts:number|undefined;
let inVal:number|undefined;

onResult(r => {
  if (!r.data?.posts_connection?.pageInfo.total || !refreshRate) return;
  numPosts = r.data.posts_connection.pageInfo.total;
  if (!inVal) {
    inVal = 1;
    setTimeout(() => {
      void load();
      setInterval(() => {checkFetch()?.catch(e => console.log(e));},refreshRate);
    },refreshRate);
  }
});

onError(() => void router.push('/ServerError').then(() => hist('/')));
checkRes(r => void (((numPosts || numPosts === 0) && r.data?.posts_connection?.pageInfo.total !== numPosts) && refetch()));

const quote = computed(() => (qouteSalt.value !==0 && result.value?.quotes_connection?.nodes[Math.floor(Math.random() * result.value.quotes_connection.nodes.length)] || {text: ''}).text ??'');

const scrollcheck = s => {
  const toppi = s.target?.scrollTop;
  const hidi = document.getElementsByClassName('upper').item(0);
  const foli = document.getElementById('tabcont') as HTMLElement;
  const labi = document.querySelector('#tocButton + label') as HTMLElement|undefined;
  if (foli){
    const maynard = document.querySelector('#main_article main')?.getBoundingClientRect();
    if (maynard && maynard.y < 0){
      const h = foli.getBoundingClientRect().height;
      const p =foli.getElementsByTagName('input').item(0);
      if ((maynard.y+maynard.height - (h + (h/5)))>0){
        foli.style.transform=`translateY(${-maynard.y}px)`;
        labi && (labi.style.transform=`translateY(${-maynard.y}px)`);
      }
      else if (p) p.checked=false;
    } else {
      foli.style.transform='';
      labi && (labi.style.transform='');
    }
  }
  if (!toppi || !hidi) return;
  if (toppi > 500) hidi.classList.add('visi');
  else hidi.classList.remove('visi');
};

</script>

<template>
  <BgMenu
    :bw="bw" :cw="cw" :big-img-switch="para?.bigImgSwitch??true"
    @stars="para?.changeStars(true)" @res="delRes()" />
  <input id="menucheck" v-model="menVis" type="checkbox">
  <SidebarMobile v-if="result?.categories_connection" :cat-list="result.categories_connection.nodes" />
  <StyleMenu
    ref="styler" :inital-data="savedVars" :route="route"
    @msg="d=> messenger?.addMessage(d)" @abort="(k,c)=>messenger?.removeMessage(k,c)" />
  <MessageComponent ref="messenger" />
  <label class="menu_label" title="Show Menu" for="menucheck" />
  <div class="wrapper" :style="styler?.finalStyle?? savedVars" @scroll="scrollcheck">
    <div class="parallax-wrapper">
      <ParallaxLayer ref="para" />
      <div class="content">
        <h1 class="sitename" :class="{main: isMain}"><RouterLink to="/">Modal&nbsp;<br>Marginalia</RouterLink></h1>
        <SidebarRegular :cat-list="result?.categories_connection?.nodes ?? []" :latest-posts="result?.posts_connection?.nodes ?? []" />
        <RouterView v-slot="{Component, route: compRoute}" :quote="quote">
          <Transition name="v-slide" mode="out-in" @before-enter="onBeforeEnter"><component
            :is="Component" :key="compRoute.fullPath" :style="{'--slide_height': slideVal}"
            @vue:mounted="visAdjuster" /></Transition>
        </RouterView>
      </div>
      <footer>©{{ new Date().getFullYear() }} Theigno.</footer>
    </div>
  </div>
  <a title="Scroll up" href="#" class="upper">^</a>
</template>