<script setup lang="ts">
import {useGlobals} from '@/stores/globals';
import {computed, ref} from 'vue';
import type {ComputedRef, Ref} from 'vue';
import type {RouteLocationNormalizedLoadedGeneric} from 'vue-router';
import type {MessageDefinition} from '../messages/MessageComponent.vue';

const {localCssVars,miscState,localMiscData,initMiscData} = useGlobals();
const props = defineProps<{initalData:any,route:RouteLocationNormalizedLoadedGeneric}>();
const lCook = 'modal-marginalia-cookie-confirmation';
const bCook = 'modal-marginalia-a-sucker-is-born-every-minute';
const [cookVisible,noPriv] = ([false,!!localStorage.getItem(bCook)]).map(v => ref(v));

const scrollini = (r:Ref<number>,{deltaY}:WheelEvent) => (r.value += (1*((deltaY < 1)?1:-1)));

const emit = defineEmits<{(e:'msg',def:MessageDefinition),(e:'abort',key:string,crit?:boolean),(e:'val',key:string,val:number)}>();

const matcher = (path:RegExp) => computed(() => path.test(props.route.fullPath));
const sToN = (s:string,unit='',mult=100) => parseFloat(s?.slice(0,unit.length*-1||s?.length)??0) * mult;
const nToS = (n:number,unit='',mult=100) => `${n/mult}${unit}`;

type VarData = {name:string,unit?:string,min?:number,max?:number,mult?:number,description?:string,condition?:ComputedRef<boolean>,step?:number, defaultVal?:number, title?:string,listener?:(val:number)=>any};
type VarRef<T extends string=string> = {input:Ref<number>, output:ComputedRef<string>,name:T} & VarData;

type Cd = typeof cssData;
const cssObject = [] as any as {[K in Extract<keyof Cd,number>]:VarRef<Cd[K]['name']>} & VarRef[];
const miscObject = [] as any as {[K in Extract<keyof Cd,number>]:VarRef<Cd[K]['name']>} & VarRef[];
const cssData = [
  {name:'text_multiplier',unit:'em',min:0,max:250,description:'Font Size',condition:matcher(/\/post\/|\/search\b|\/post-list\b|\/about$/),defaultVal:98},
  {name:'side_padding', mult:1,unit:'vw',min:0,max:25,description:'Side Padding',condition:matcher(/\/post\/|\/about$/),defaultVal:3.5},
  {name:'text_weight', mult:1, min:50,max:1000,description:'Font Weight',condition:matcher(/\/post\/|\/about$/),defaultVal:320},
  {name:'text_fullwidth',unit:'vw',mult:1,min:20,max:60,description:'Article Width',condition:matcher(/\/post\/|\/about$/),defaultVal:55},
  {name:'bg_opacity',min:0,max:100,description:'BG Opacity',unit:'%',mult:1,defaultVal:86.7},
  {name:'p_opacity',min:0,max:100,description:'Nebula Opacity',unit:'',defaultVal:100},
  // {name:'p_factor',min:0,max:3,description:'Paralax factor',unit:'',mult:1,step:0.1},
  {name:'cubeTransform',min:0,max:10,mult:1,description:'Rectangle Growth',unit:'em',condition:matcher(/^\/$/),defaultVal:3.5}
] as const satisfies VarData[];

let displayed = false;

const miscData = [
  {name:'reading_speed',unit:'wpm',min:0,max:900,description:'Reading Speed',title:'Set to 0 to disable.', mult:1, defaultVal:miscState.reading_speed,listener(v) {
    if (v <= 800 || displayed) return;
    displayed = true;
    emit('msg',{message:'I doubt you can actually read this fast.\nBut don\'t let me stop you, buddy.',msgTimeout:2000,replies:['How dare you?']});
  }}
] as const satisfies VarData[];

for (const v of cssData) {
  const {name,unit,mult, defaultVal} = v as VarData;
  const input = ref(sToN(props.initalData[`--${name}`] ?? window.getComputedStyle(document.body).getPropertyValue(`--${name}`),unit,mult));
  if (isNaN(input.value)) input.value = defaultVal ?? 0;
  const output = computed(() => nToS(input.value,unit,mult));
  cssObject.push({input,output,...v});
}

for (const v of miscData) {
  const {name,unit,mult, defaultVal} = v as VarData;
  const input = ref(sToN(props.initalData[name] ?? ''));
  if (isNaN(input.value)) input.value = defaultVal ?? 0;
  const output = computed(() => nToS(input.value,unit,mult));
  miscObject.push({input,output,...v});
}

const finalStyle = computed(() => {
  const st = {} as {-readonly[K in `--${(typeof cssObject)[number]['name']}`]:string};
  for (const o of cssObject) st[`--${o.name}`] = o.output.value;
  return st;
});

const resetCss = () => {
  for (const k of cssObject) k.input.value = sToN(window.getComputedStyle(document.body).getPropertyValue(`--${k.name}`)??'',k.unit,k.mult);
  localStorage.removeItem(localCssVars);
  localStorage.removeItem(localMiscData);
  initMiscData();
};

const saveCss = async() => {
  if (cookVisible.value) return;
  if (!localStorage.getItem(lCook)){
    const userInput = await new Promise<boolean>(r => emit('msg',{message:'To save your preferences this site needs to save a COOKIE on this device.\nDo you consent?',replies:['Yes','No'], id:'letscook', reactions:{Yes:'Spoken like a true warrior.\nNow go in peace.',No:'That\'s understandable.\nOne can never be too careful these days.'},callback:x => r(x==='Yes')}));
    if (!userInput) return;
    localStorage.setItem(lCook, 'YES');
  }
  localStorage.setItem(localMiscData,JSON.stringify(miscState));
  localStorage.setItem(localCssVars,JSON.stringify(finalStyle.value));
};

const delCook = () => {
  if (![lCook,bCook].some(c => localStorage.getItem(c)))emit('msg',{message:'Can\'t delete cookies, because no cookies are set. Duh.',msgTimeout:2000,id:'uncooked'});
  localStorage.clear();
  noPriv.value=false;
};

const myPrivacyIsYourBitch = async(e:Event) => {
  if (cookVisible.value) return;
  const chk = (e.target as HTMLInputElement|undefined)?.checked;
  if (chk){
    const decision = await new Promise<boolean>(r => emit('msg',{
      id:'fuckMe',
      critical:true,
      message:`You are making a mistake.

    By confirming this message you consent that your site preferences and browsing behavior on this website may be monitored and saved on an external server.

    You have nothing to gain from this.
    All the customization and features on this site work fine with local cookies that are saved on your browser, staying on your PC without me knowing anything about you. In fact that's enough for most things and many sites/services that claim that they "need" your private data on THEIR servers to enable features are lying to you.

    But here we are... surrender your data to me and it will let me analyze user behavior such as seeing who is a big enough idiot to click the 'I hate my Privacy' switch.
    I could claim something like "Your data is essential for improving user experience in the future" but it's not. I can't guarantee anything useful and in reality all this will mostly serve to satisfy my voyeristic tendencies.
    I will still not sell your info to ad-companies.

    Do you still want this?`,
      replies:['Yes','No'],
      reactions:{Yes:'What has the world come to?', No:'A most wise decision.'},
      callback:p => r(p==='Yes')
    }));
    if (!decision) return void (noPriv.value=false);
    localStorage.setItem(lCook, 'YES');
    return localStorage.setItem(bCook, 'YES');
  }
  emit('abort','fuckMe',true);
  emit('msg',{message:'Thank goodness you came to your senses.',msgTimeout:2000});
  localStorage.removeItem(bCook);
  noPriv.value=false;
};
const cl = () => document.getElementById('options')?.click();
defineExpose({finalStyle});
</script>
<template>

  <div id="settings" :style="finalStyle" class="grayborder">
    <button id="close" @click="cl">x</button>
    <div>Style Settings</div>
    <template v-for="{input,min,max,description,condition,output,name,step,title} of cssObject" :key="name">
      <label v-if="!condition || condition.value" :title="title">
        {{ description }}
        <input
          v-model.number="input.value"
          :title="output.value"
          :step="step ?? 1" :min="min" :max="max"
          type="range" @wheel.passive="e=>scrollini(input,e)">
      </label>
    </template>
    <div>Other Settings</div>
    <template v-for="{input,min,max,description,condition,output,name,step,title,listener} of miscObject" :key="name">
      <label v-if="!condition || condition.value" :title="title">
        {{ description }}
        <input
          v-model.number="miscState[name]"
          :title="output.value"
          :step="step ?? 1" :min="min" :max="max"
          type="range"
          @change="listener?.(miscState[name])"
          @wheel.passive="e=>scrollini(input,e)">
      </label>
    </template>
    <label><input
      id="a-sucker-is-born-every-minute" v-model="noPriv" type="checkbox"
      @change="e=> myPrivacyIsYourBitch(e)">I hate my privacy.</label>
    <button class="hoverglow grayborder" @click="saveCss">Save</button>
    <button class="grayborder hoverglow" @click="resetCss">Reset</button>
    <button class="grayborder hoverglow" @click="delCook">Delete Cookies</button>
  </div>

</template>