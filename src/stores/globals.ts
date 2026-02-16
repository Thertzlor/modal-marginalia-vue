import {defineStore} from 'pinia';
import type {UploadFile,Tag, Category, InitAllQuery} from '@/graphql/api';
import {reactive} from 'vue';

export const useGlobals = defineStore('globals',() => {
  const scrollOption:ScrollIntoViewOptions ={behavior:'smooth'};
  const maxResults = 100;
  const perPage = 10;
  const perComment = 20;
  const defaultReactionTimeout = 2000;
  const iMap = new Map<string,Partial<UploadFile>>();
  const refreshRate = 30000;
  const localCssVars = 'modal-marginalia-css-vars';
  const localMiscData = 'modal-marginalia-misc-data';
  const postRefreshRate = 0;
  const searchSurround = 150;
  const daysNew = 12;
  const newTime = daysNew * 24 * 60 * 60 * 1000;
  const defaultNote ='<olstyle="list-style-type:decimal;"><li>#</li></ol>';
  const apiBase = (import.meta as any).env.MODE === 'development'?'http://192.168.0.35:1337':'https://modal-marginalia-cms.up.railway.app';
  // const apiURL=`${apiBase}/api`;
  const graphqlURL=`${apiBase}/graphql`;
  const gerDate = (date:Date|string):string => new Date(date).toLocaleString('de-DE', {month: '2-digit',day: '2-digit',year: 'numeric'});
  const col = new Intl.Collator('en');
  const taxoSort = (l:(Partial<Tag> | Partial<Category>)[]) => l.sort((a,b) => col.compare(a?.name ?? '', b?.name ?? '')).sort((a,b) => (((a && 'tier' in a)? a.tier ?? 0 : 0) > ((b && 'tier' in b)? b.tier ?? 0 : 0) ? -1 : 1));
  type SimpleImg = {url:string;width:number;height:number};
  const getImageFile = (src?:string) => (src? iMap.get(src):undefined);
  const getImageData = (imgData:Partial<UploadFile>):SimpleImg[] => ['thumbnail', 'small', 'medium', 'large', ''].map(s => (s ? imgData.formats[s] : {url: imgData.url, width: imgData.width, height: imgData.height})).filter(f => f);
  const getSrcSet = (imgs:SimpleImg[]):string => imgs.filter(i => i.url).map(({url, width}) => `${url} ${width??1000}w`).join(',');
  const unRay = <T>(x:T) => (Array.isArray(x) ? x[0] : x) as T extends any[] ? T[0] : T;
  const antiNull = <T>(arr:T) => (Array.isArray(arr)?arr.filter(f => f) as any:arr) as T extends any[]?Exclude<T[number],null|undefined>[]:T;
  const pipe = <T>(something:T,other?:any):T => (console.log(...[something,other].filter(f => f)),something);
  const hist = (url:string):void => window.history.pushState({}, '',url);
  const isEmpty = (obj:Record<any,any>):obj is Record<any,never> => !Object.keys(obj).length;
  const run = (fun:() => any) => setTimeout(fun, 0);
  const sleep = (num:number) => new Promise<true>(r => setTimeout(() => r(true),num));

  const getSSG = () => import.meta.env.SSR;
  let ssgData = {} as any;
  const miscDefaults = {reading_speed:238};
  const miscState = reactive(JSON.parse(localStorage.getItem(localMiscData)??JSON.stringify(miscDefaults))) as Record<string,number>;
  const initMiscData = () => {
    for (const k in miscState) {
      if (!Object.prototype.hasOwnProperty.call(miscState, k)) continue;
      miscState[k] = miscDefaults[k];
    }
  };
  const setDataSSG = d => (ssgData = d.data);
  const getDataSSG = () => (ssgData) as InitAllQuery;
  const mockGraphQL = <T extends (data:InitAllQuery)=> any>(transformer:T) => (getSSG()? {result:transformer(getDataSSG()) as ReturnType<T>, onError:(...a) => void a,refetch:(...a) => void a,onResult:(...a) => void a}:undefined);

  const ct = '4b14c42a63fb8f0c62e816faf32c5ed5578bd3ec9a5b46eced32f66d47d1430cc54896eeecec06f87a1a355fd4921097c387556930b6527616ba1d8dc1f3da2d790d2a745365f8f73eaeba07d69fbea98c065f00b04a3e170f57fdfce054504d7e15dcc266c70c7ca3edba0b6023840c82380f5d4849d58bb7b15c930220b40b';
  const imgload = (e:Event,parSelect=0):void => {
    let targ = e.target as HTMLElement;
    for (let i = 0; i < parSelect; i++) {
      if (!targ.parentElement) break;
      targ = targ.parentElement;
    }
    targ.classList.remove('invisible');
  };

  const selectKey = <T extends Record<string,any>, K extends keyof T>(obj:T,...keys:K[]) => keys.reduce((p,k) => ((p[k] = obj[k]),p) ,{} as Pick<T,K>);

  const unHash = (l:Location) => l.href.slice(0,-l.hash.length);

  function activateCanvas() {
    function drawCircle(context:CanvasRenderingContext2D, xPos:number, yPos:number, radius:number, color:string) {
      context.shadowColor = color;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = radius * 7;
      context.beginPath();
      context.arc(xPos, yPos, radius, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
      context.fillStyle = color;
      context.fill();
      context.fill();
    }
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const context = canvas.getContext('2d');
    if (!context) return;
    const numCircles = canvas.width / 50;
    const maxRadius = 4;
    const minRadius = 1;
    for (let n = 0; n < numCircles; n++) {
      const radius = minRadius + (Math.random() * (maxRadius - minRadius));
      const xPos = Math.max(Math.random() * (canvas.width - radius * 7), radius*7);
      const yPos = Math.max(Math.random() * (canvas.height - radius * 7),radius*7);
      const color = `rgb(${[0, 50, 50].map(i => (255 - (Math.random() * i)).toFixed(0)).join(',')})`;
      drawCircle(context, xPos, yPos, radius, color);
    }
    const virtualCanvas = canvas.toDataURL();
    const paral = document.getElementsByClassName('p2').item(0) as HTMLDivElement;
    if (!paral) return;
    paral.style.background = `url(${virtualCanvas ?? ''})`;
  }

  return {maxResults,perComment,perPage,refreshRate,postRefreshRate,searchSurround,newTime,defaultNote,graphqlURL,gerDate,taxoSort,getImageData,getSrcSet,unRay,antiNull,pipe,hist,ct,imgload,isEmpty,scrollOption,selectKey,activateCanvas,iMap,getImageFile,unHash,run,localCssVars,sleep,defaultReactionTimeout,mockGraphQL,getSSG,setDataSSG,getDataSSG,miscState,localMiscData,initMiscData};
});