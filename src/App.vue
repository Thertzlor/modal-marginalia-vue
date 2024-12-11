<script lang="ts" setup>
import SidebarMobile from './components/navigation/SidebarMobile.vue';
import SidebarRegular from './components/navigation/SidebarRegular.vue';
import CookieWarning from './components/messages/CookieWarning.vue';
import GenericMessage from './components/messages/GenericMessage.vue';
import BgMenu from './components/containers/BgMenu.vue';
import ParallaxLayer from './components/containers/ParallaxLayer.vue';
import {useGlobals} from './stores/globals';
import {onBeforeMount, computed, ref, type Ref, type ComputedRef, useTemplateRef} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {PaginationArg, useInitQuery, useLastPostsLazyQuery} from '@/graphql/api';
const {refreshRate,hist,run} = useGlobals();
let relCount = 5;
const lVar = 'modal-marginalia-css-vars';
const lCook = 'modal-marginalia-cookie-confirmation';
const bCook = 'modal-marginalia-a-sucker-is-born-every-minute';
const route = useRoute();
const router = useRouter();
const sizes = new Map<string, string>();
const pg:PaginationArg = {pageSize: 100, page: 1};
const cookieConfirms = {} as {c?:(b:boolean) => void};
const [cookVisible,menVis,noPriv] = ([false,false,!!localStorage.getItem(bCook)]).map(v => ref(v));
const [qouteSalt] = ([1]).map(v => ref(v));
const [cookNo,cookYes,cookMsg,showMsg,slideVal] = (['','','','','-200vh']).map(v => ref(v));
let first = true;

const visAdjuster = ({el}:{el?:HTMLDivElement}) => {
  if (!el?.classList) return;
  el.classList.add('invisible');
  run(() => (el.classList.add('vistrans2'), el.classList.remove('invisible')));
};

const para = useTemplateRef<InstanceType<typeof ParallaxLayer>>('para');

const letsCook = (msg:string,yes:string,no:string) => ((cookVisible.value = true,cookMsg.value=msg,cookNo.value=no,cookYes.value=yes),new Promise<boolean>((res) => ((cookieConfirms.c = (b:boolean) => ((cookVisible.value = false),res(b))))));
const scrollini = (r:Ref<number>,{deltaY}:WheelEvent) => (r.value += (1*((deltaY < 1)?1:-1)));
const matcher = (path:RegExp) => computed(() => path.test(route.fullPath));
const sToN = (s:string,unit='',mult=100) => parseFloat(s.slice(0,unit.length*-1||s.length)) * mult;
const nToS = (n:number,unit='',mult=100) => `${n/mult}${unit}`;
const savedVars = JSON.parse(localStorage.getItem(lVar)??'{}');

type VarData = {name:string,unit?:string,min?:number,max?:number,mult?:number,description?:string,condition?:ComputedRef<boolean>,step?:number};
type VarRef<T extends string=string> = {input:Ref<number>, output:ComputedRef<string>,name:T} & VarData;

type Cd = typeof cssData;
const cssObject = [] as any as {[K in Extract<keyof Cd,number>]:VarRef<Cd[K]['name']>} & VarRef[];
const cssData = [
  {name:'text_multiplier',unit:'em',min:0,max:250,description:'Font Size',condition:matcher(/\/post\/|\/search\b|\/post-list\b|\/about$/)},
  {name:'side_padding',unit:'em',min:0,max:1400,description:'Side Padding',condition:matcher(/\/post\/|\/about$/)},
  {name:'text_weight', mult:1, min:50,max:1000,description:'Font Weight',condition:matcher(/\/post\/|\/about$/)},
  {name:'text_fullwidth',unit:'vw',mult:1,min:20,max:60,description:'Article Width',condition:matcher(/\/post\/|\/about$/)},
  {name:'bg_opacity',min:0,max:100,description:'BG Opacity',unit:'%',mult:1},
  {name:'p_opacity',min:0,max:100,description:'Nebula Opacity',unit:''},
  // {name:'p_factor',min:0,max:3,description:'Paralax factor',unit:'',mult:1,step:0.1},
  {name:'cubeTransform',min:0,max:10,mult:1,description:'Rectangle Growth',unit:'em',condition:matcher(/^\/$/)}
] as const;
const _miscData = [
  {name:'reading speed',unit:'wpm',min:0,max:800,description:'Reading Speed'}
] as const;

for (const v of cssData) {
  const {name,unit,mult} = v as VarData;
  const input = ref(sToN(savedVars[`--${name}`] ?? window.getComputedStyle(document.body).getPropertyValue(`--${name}`),unit,mult));
  const output = computed(() => nToS(input.value,unit,mult));
  cssObject.push({input,output,...v});
}

const finalStyle = computed(() => {
  const st = {} as {-readonly[K in `--${(typeof cssObject)[number]['name']}`]:string};
  for (const o of cssObject) st[`--${o.name}`] = o.output.value;
  return st;
});

const resetCss = () => {
  for (const k of cssObject) k.input.value = sToN(window.getComputedStyle(document.body).getPropertyValue(`--${k.name}`)??'',k.unit,k.mult);
  localStorage.removeItem(lVar);
};

const saveCss = async() => {
  if (cookVisible.value) return;
  if (!localStorage.getItem(lCook)){
    if (!await letsCook('To save your preferences this site needs to save a COOKIE on this device.\nDo you consent?','Spoken like a true warrior.\nNow go in peace.','That\'s understandable.\nOne can never be too careful these days.').catch(() => false)) return;
    localStorage.setItem(lCook, 'YES');
  }
  localStorage.setItem(lVar,JSON.stringify(finalStyle.value));
};

const delCook = () => {
  if (![lCook,bCook].some(c => localStorage.getItem(c)))showMsg.value='Can\'t delete cookies, because no cookies are set. Duh.';
  localStorage.clear();
  noPriv.value=false;
};

const myPrivacyIsYourBitch = async(e:Event) => {
  if (cookVisible.value) return;
  const chk = (e.target as HTMLInputElement|undefined)?.checked;
  if (chk){
    if (!await letsCook(`You are making a mistake.

    By confirming this message you consent that your site preferences and browsing behavior on this website may be monitored and saved on an external server.

    You have nothing to gain from this.
    All the customization and features on this site work fine with local cookies that are saved on your browser, staying on your PC without me knowing anything about you. In fact that's enough for most things and many sites/services that claim that they "need" your private data on THEIR servers to enable features are lying to you.

    But here we are... surrender your data to me and it will let me analyze user behavior such as seeing who is a big enough idiot to click the 'I hate my Privacy' switch.
    I could claim something like "Your data is essential for improving user experience in the future" but it's not. I can't guarantee anything useful and in reality all this will mostly serve to satisfy my voyeristic tendencies.
    I will still not sell your info to ad-companies.

    Do you still want this?`,'What has the world come to?','A most wise decision.').catch(() => false)) return void (noPriv.value=false);
    localStorage.setItem(lCook, 'YES');
    return localStorage.setItem(bCook, 'YES');
  }
  showMsg.value = 'Thank goodness you came to your senses.';
  localStorage.removeItem(bCook);
  noPriv.value=false;
};

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

const cl = () => document.getElementById('options')?.click();
onError(() => void router.push('/ServerError').then(() => hist('/')));
checkRes(r => void (((numPosts || numPosts === 0) && r.data?.posts_connection?.pageInfo.total !== numPosts) && refetch()));

const fallback = {text: ''};
const quote = computed(() => (qouteSalt.value !==0 && result.value?.quotes_connection?.nodes[Math.floor(Math.random() * result.value.quotes_connection.nodes.length)] || fallback).text ??'');

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
  <div id="settings" :style="finalStyle" class="grayborder">
    <button id="close" @click="cl">x</button>
    <div>Style Settings</div>
    <template v-for="{input,min,max,description,condition,output,name,step} of cssObject" :key="name">
      <label v-if="!condition || condition.value" :title="output.value">
        {{ description }}
        <input
          v-model.number="input.value"
          :step="step ?? 1" :min="min" :max="max"
          type="range" @wheel.passive="e=>scrollini(input,e)">
      </label>
    </template>
    <div>Other Settings</div>
    <label><input
      id="a-sucker-is-born-every-minute" v-model="noPriv" type="checkbox"
      @change="e=> myPrivacyIsYourBitch(e)">I hate my privacy.</label>
    <button class="hoverglow grayborder" @click="saveCss">Save</button>
    <button class="grayborder hoverglow" @click="resetCss">Reset</button>
    <button class="grayborder hoverglow" @click="delCook">Delete Cookies</button>
  </div>
  <CookieWarning
    v-if="cookVisible" :msg="cookMsg" :yes="cookYes"
    :no="cookNo" @confirm="c=>cookieConfirms.c?.(c)" />
  <GenericMessage v-if="showMsg" :msg="showMsg" @confirm="()=> (showMsg='')" />
  <label class="menu_label" title="Show Menu" for="menucheck" />
  <div class="wrapper" :style="finalStyle" @scroll="scrollcheck">
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