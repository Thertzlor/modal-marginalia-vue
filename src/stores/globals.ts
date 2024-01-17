import {defineStore} from 'pinia';
import slugify from 'slugify';
import {UploadFile,TagEntity, CategoryEntity} from '@/graphql/api';

export const useGlobals = defineStore('globals',() => {
  const scrollOption:ScrollIntoViewOptions ={behavior:'smooth'};
  const maxResults = 100;
  const perPage = 10;
  const perComment = 20;
  const refreshRate = 30000;
  const searchSurround = 150;
  const daysNew = 12;
  const newTime = daysNew * 24 * 60 * 60 * 1000;
  const defaultNote ='<olstyle="list-style-type:decimal;"><li>#</li></ol>';
  const apiBase = 'http://192.168.0.35:1337';
  const apiURL=`${apiBase}/api`;
  const graphqlURL=`${apiBase}/graphql`;
  const gerDate = (date:Date):string => new Date(date).toLocaleString('de-DE', {month: '2-digit',day: '2-digit',year: 'numeric'});
  const col = new Intl.Collator('en');
  const taxoSort = (l:(TagEntity | CategoryEntity)[]) => l.sort((a,b) => col.compare(a.attributes?.name ?? '', b.attributes?.name ?? '')).sort((a,b) => (((a.attributes && 'tier' in a.attributes)? a.attributes.tier ?? 0 : 0) > ((b.attributes && 'tier' in b.attributes)? b.attributes.tier ?? 0 : 0) ? -1 : 1));
  type SimpleImg = {url:string;width:number;height:number};
  const getImageData = (imgData:UploadFile):SimpleImg[] => ['thumbnail', 'small', 'medium', 'large', ''].map(s => (s ? imgData.formats[s] : {url: imgData.url, width: imgData.width, height: imgData.height})).filter(f => f);
  const getSrcSet = (imgs:SimpleImg[]):string => imgs.filter(i => i.url).map(({url, width}) => `${url} ${width}w`).join(',');
  const unRay = <T>(x:T):T extends any[] ? T[0] : T => (Array.isArray(x) ? x[0] : x);
  const antiNull = <T>(arr:T):T extends any[]?Exclude<T[number],null|undefined>[]:T => (Array.isArray(arr)?arr.filter(f => f) as any:arr);
  const pipe = <T>(something:T,other?:any):T => (console.log(...[something,other].filter(f => f)),something);
  const hist = (url:string):void => window.history.pushState({}, '',url);
  const isEmpty = (obj:Record<any,any>):obj is {} => !Object.keys(obj).length;

  const ct = '4b14c42a63fb8f0c62e816faf32c5ed5578bd3ec9a5b46eced32f66d47d1430cc54896eeecec06f87a1a355fd4921097c387556930b6527616ba1d8dc1f3da2d790d2a745365f8f73eaeba07d69fbea98c065f00b04a3e170f57fdfce054504d7e15dcc266c70c7ca3edba0b6023840c82380f5d4849d58bb7b15c930220b40b';
  const imgload = (e:Event,parSelect=0):void => {
    let targ = e.target as HTMLElement;
    for (let i = 0; i < parSelect; i++) {
      if (!targ.parentElement) break;
      targ = targ.parentElement;
    }
    targ.classList.remove('invisible');
  };

  const wrap = (el:HTMLElement, wrapper:HTMLElement) => (el.parentNode?.insertBefore(wrapper, el) && wrapper.appendChild(el));
  const selectKey = <T extends Record<string,any>, K extends keyof T>(obj:T,...keys:K[]) => keys.reduce((p,k) => ((p[k] = obj[k]),p) ,{} as Pick<T,K>);


  const codeWrapper = () => {
    [...document.getElementsByTagName('pre')].filter(f => !f.getElementsByTagName('code').length).forEach(pr => {
      const coder = document.createElement('code');
      coder.className = pr.className;
      pr.className = '';
      coder.innerHTML = pr.innerHTML;
      pr.innerHTML = '';
      pr.appendChild(coder);
    });

    [...document.getElementsByTagName('code')].
      forEach((el) => (el?.parentElement?.tagName !== 'PRE') && wrap(el, document.createElement('pre')));
  };
  const unHash = (l:Location) => l.href.slice(0,-l.hash.length);

  function tocGenerator(main:HTMLElement,art:HTMLElement,redo=false) {
    const posty = main.getElementsByClassName('post_text')[0] as HTMLElement;
    if (!posty) return;
    const headers = [...posty.querySelectorAll('h1, h2, h3, h4, h5, h6')] as HTMLElement[];
    if (!headers.length) return;
    const enclosure = redo? document.getElementById('tabcont'):document.createElement('div');
    if (!enclosure) return;
    if (redo) enclosure.innerHTML ='';
    else enclosure.id='tabcont';
    const tocBut = art.insertBefore(document.createElement('input'),art.getElementsByTagName('main').item(0));
    tocBut.type = 'checkbox';
    tocBut.id = 'tocButton';
    const tocLabel = art.insertBefore(document.createElement('label'),art.getElementsByTagName('main').item(0));
    console.log(main.tagName);
    tocLabel.setAttribute('for', 'tocButton');
    tocLabel.title = 'table of contents';
    tocLabel.innerHTML='⩸';
    const toctainer = enclosure.appendChild(document.createElement('div'));
    toctainer.classList.add('toc');
    const listType = 'UL';
    const tocTargetOrig = toctainer.appendChild(document.createElement(listType));
    let tocTarget = tocTargetOrig;

    headers.forEach((e, i, a) => {
      e.id = e.id || slugify(e.innerText,{lower:true,replacement:'_',strict:true,trim:true});
      const next = a[i + 1];
      const currentEntry = tocTarget.appendChild(document.createElement('li'));
      const currentLink = currentEntry.appendChild(document.createElement('a'));
      currentLink.href = `#${e.id}`;
      currentLink.addEventListener('click', ev => (ev.preventDefault(),history.pushState({}, '',`${unHash(window.location)}#${e.id}`),(tocBut.checked = false), e.scrollIntoView(scrollOption)));

      currentLink.innerHTML = e.innerHTML;
      if (next && next.tagName !== e.tagName) {
        const [currentNum, nextNum] = [e.tagName[1], next.tagName[1]].map(t => parseInt(t,10));
        if (currentNum + 1 === nextNum) tocTarget = currentEntry.appendChild(document.createElement(listType));
        else if (currentNum > nextNum) {
          for (let ii = 0; ii < currentNum - nextNum; ii++) {
            const upValue = tocTarget.parentElement?.parentElement as HTMLOListElement;
            if (upValue && upValue.tagName === listType) tocTarget = upValue;
            if (!upValue || tocTarget.isSameNode(tocTargetOrig)) break;
          }
        }
      }
    });
    if (!redo) main.insertBefore(enclosure, main.getElementsByTagName('main').item(0));
  }
  function processContent(doToc:boolean|null=true,redo=false):void {
    const loadedFocus = document.hasFocus();
    const mainArt =document.getElementById('main_article');
    const main = mainArt?.getElementsByTagName('main').item(0);
    const redoing = main?.classList.contains('processed');
    if (!redoing) main?.classList.add('processed');
    const foot = main && document.getElementById('footnote_container');
    const toe = foot && document.getElementById('toenote_container');
    codeWrapper();
    doToc && main && tocGenerator(main,mainArt!,redoing);

    const linkNotes = (origin:HTMLElement|null, notes:HTMLElement, term:string) => {
      [...origin?.getElementsByTagName('sup') ?? []].filter(s => /\[\d+\]/.test(s.innerHTML.trim())).forEach((el, i) => {
        const footLink = `_${term}_${i+1}`;
        const headLink = `_${term}_${i+1}_head`;
        const element = document.createElement('a');
        element.id = headLink;
        element.href = `#${footLink}`;
        wrap(el, element);
        const scroller = (f:HTMLTableCellElement|undefined|null) => f && [element, f].forEach((eli, ii, a) => {
          const first = ii === 0;
          const opposing = a[first ? 1 : 0];
          const opposeLink = first? opposing.getElementsByTagName('a').item(0) : opposing;
          const thisLink = !first? eli.getElementsByTagName('a').item(0) : eli;
          eli.addEventListener('click', e => (e.preventDefault(), opposing.classList.add('highlight'),history.pushState({}, '',`${unHash(window.location)}#${opposeLink?.id??''}`), opposing.scrollIntoView(scrollOption), opposeLink?.focus({preventScroll: true})));
          thisLink?.addEventListener('blur', () => eli.classList.remove('highlight'));
        });
        const counterpart = notes.getElementsByTagName('li').item(i);
        if (!counterpart) return;
        element.setAttribute('title', counterpart.innerText.trim());
        if (redoing) return scroller(counterpart.getElementsByTagName('td').item(0));
        //counterpart.innerHTML = " " + counterpart.innerHTML;
        const counterHTML = counterpart.innerHTML;
        counterpart.textContent='';
        const countertable = counterpart.appendChild(document.createElement('table'));
        countertable.classList.add('footnotable');
        const counterbod = countertable.appendChild(document.createElement('tbody')).appendChild(document.createElement('tr'));
        const [f,s] = [0,1].map(() => counterbod.appendChild(document.createElement('td')));
        s.innerHTML = counterHTML;
        const counterLink = f.appendChild(document.createElement('a'));
        counterLink.appendChild(document.createElement('sup')).innerHTML = '^';
        counterLink.href = `#${headLink}`;
        counterLink.id = footLink;
        scroller(f);
      });
    };

    if (main?.parentElement && foot) linkNotes(main.parentElement.getElementsByTagName('main').item(0), foot, 'ref');
    if (foot && toe) linkNotes(foot, toe, 'toe');

    ([...document.querySelectorAll('[id^="_"],[href^="#_"]')] as HTMLAnchorElement[]).forEach(el => {
      if (el.href?.includes('#_')) {el.href = el.href.replace('#_', '#');}
      const sliceJump = () => {
        if (el.id.startsWith('_')) el.id = el.id.slice(1);
        if (window.location.hash === `#${el.id}` && !redo) el.scrollIntoView(scrollOption);
      };
      if (loadedFocus) sliceJump();
      else {// eslint-disable-next-line @typescript-eslint/no-unused-vars
        const jumper = () => (sliceJump(), window.removeEventListener('focus', jumper));
      }
      el.addEventListener('click', e => (e.preventDefault(), false));
    });
  }

  return {maxResults,perComment,perPage,refreshRate,searchSurround,newTime,defaultNote,apiURL,graphqlURL,gerDate,taxoSort,getImageData,getSrcSet,unRay,antiNull,pipe,hist,ct,imgload,processContent,isEmpty,scrollOption,selectKey};
});