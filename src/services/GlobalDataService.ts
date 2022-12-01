declare const hljs: any
const apiBase = 'http://192.168.0.35:1337'
export const gerDate = (date:Date):string => new Date(date).toLocaleString("de-DE", {month: "2-digit",day: "2-digit",year: "numeric"});
export const graphqlURL=`${apiBase}/graphql`
export const apiURL=`${apiBase}/api`
export const maxResults = 100
export const perPage = 10
type SimpleImg = {url: string;width: number;height: number}
export const  getImageData = (imgData:UploadedFile): SimpleImg[] => ['thumbnail', 'small', 'medium', 'large', ''].map(s => s ? imgData.formats[s] : {url: imgData.url, width: imgData.width, height: imgData.height}).filter(f => f)
export const getSrcSet = (imgs:SimpleImg[]): string => imgs.map(({url, width}) => `${url} ${width}w`).join(',')
export const searchSurround = 150
export const defaultNote =`<olstyle="list-style-type:decimal;"><li>#</li></ol>`
export const unRay = <T extends any>(x: T): T extends any[] ? T[0] : T => Array.isArray(x) ? x[0] : x;
export const antiNull = <T>(arr:T):T extends any[]?Exclude<T[number],Nullish>[]:T => Array.isArray(arr)?arr.filter(f=>f) as any:arr
export const pipe = <T>(something:T):T => (console.log(something),something)
export const hist = (url:string):void => window.history.pushState({}, '',url)
export const imgload = (e:Event,parSelect=0):void => {
  let targ = e.target as HTMLElement;
  for (let i = 0; i < parSelect; i++) {
    if(!targ.parentElement) break;
    targ = targ.parentElement
  }
  targ.classList.remove('invisible')
}

const wrap = (el: HTMLElement, wrapper: HTMLElement) => (el.parentNode?.insertBefore(wrapper, el) && wrapper.appendChild(el));

function codeWrapper() {
  [...document.getElementsByTagName("pre")].filter(f=>!f.getElementsByTagName("code").length)
  .forEach(pr => {
    const coder = document.createElement("code");
    coder.className = pr.className;
    pr.className = "";
    coder.innerHTML = pr.innerHTML;
    pr.innerHTML = "";
    pr.appendChild(coder);
  });

  [...document.getElementsByTagName("code")].
  forEach((el) => (el?.parentElement?.tagName !== "PRE") && wrap(el, document.createElement("pre")));
}
function tocGenerator(main: HTMLElement) {
  const posty = main.getElementsByClassName("post_text")[0] as HTMLElement;
  if (!posty) return;
  const headers = [...posty.querySelectorAll("h1, h2, h3, h4, h5, h6"),] as HTMLElement[];
  if (!headers.length) return;
  const enclosure = document.createElement("div");
  const tocBut = enclosure.appendChild(document.createElement("input"));
  tocBut.type = "checkbox";
  tocBut.id = "tocButton";
  const tocLabel = enclosure.appendChild(document.createElement("label"));
  tocLabel.setAttribute("for", "tocButton");
  tocLabel.title = "table of contents";
  tocLabel.innerHTML = "˄";
  const toctainer = enclosure.appendChild(document.createElement("div"));
  toctainer.classList.add("toc");
  const listType = "UL";
  const tocTargetOrig = toctainer.appendChild(document.createElement(listType));
  let tocTarget = tocTargetOrig;

  headers.forEach((e, i, a) => {
    e.id = e.id || `_toc_heading_${i+1}`;
    const next = a[i + 1];
    const currentEntry = tocTarget.appendChild(document.createElement("li"));
    const currentLink = currentEntry.appendChild(document.createElement("a"));
    currentLink.href = "#" + e.id;
    currentLink.addEventListener("click", ev => (ev.preventDefault(), e.scrollIntoView())
    );

    currentLink.innerHTML = e.innerHTML;
    if (next && next.tagName !== e.tagName) {
      const [currentNum, nextNum] = [e.tagName[1], next.tagName[1]].map(t => parseInt(t));
      if (currentNum + 1 === nextNum) tocTarget = currentEntry.appendChild(document.createElement(listType));
      else if (currentNum > nextNum) {
        for (let i = 0; i < currentNum - nextNum; i++) {
          const upValue = tocTarget.parentElement?.parentElement as HTMLOListElement;
          if (upValue && upValue.tagName === listType) tocTarget = upValue;
          if (!upValue || tocTarget.isSameNode(tocTargetOrig)) break;
        }
      }
    }
  });
  main.insertBefore(enclosure, main.getElementsByTagName("main")[0]);
}
export function processContent(doToc=true):void {
  const loadedFocus = document.hasFocus();
  const main = document.getElementById("main_article");
  if (main?.classList.contains("processed")) return;
  main?.classList.add("processed");
  const foot = main && document.getElementById("footnote_container");
  const toe = foot && document.getElementById("toenote_container");
  codeWrapper();
  doToc && main && tocGenerator(main);

  const linkNotes = (origin: HTMLElement, notes: HTMLElement, term: string) => {
    [...origin.getElementsByTagName("sup")].filter(s => /\[\d+\]/.test(s.innerHTML.trim())).forEach((el, i) => {
      const footLink = `_${term}_${i+1}`;
      const headLink = `_${term}_${i+1}_head`;
      const element = document.createElement("a");
      element.id = headLink;
      element.href = `#${footLink}`;
      wrap(el, element);
      const counterpart = notes.getElementsByTagName("li")[i];
      if (!counterpart) return;
      element.setAttribute("title", counterpart.innerText.trim());
      //counterpart.innerHTML = " " + counterpart.innerHTML;
      const counterHTML = counterpart.innerHTML
      counterpart.textContent='';
      const countertable = counterpart.appendChild(document.createElement('table'));
      countertable.classList.add('footnotable')
      const counterbod = countertable.appendChild(document.createElement('tbody')).appendChild(document.createElement('tr'));
      const [f,s] = [0,1].map(()=>counterbod.appendChild(document.createElement('td')))
      s.innerHTML = counterHTML
      const counterLink = f.appendChild(document.createElement("a"));
      counterLink.appendChild(document.createElement("sup")).innerHTML = "^";
      counterLink.href = `#${headLink}`;
      counterLink.id = footLink;
      [element, f].forEach((el, i, a) => {
        const first = i === 0;
        const opposing = a[first ? 1 : 0];
        const opposeLink = first? opposing.getElementsByTagName('a')[0] : opposing
        const thisLink = !first? el.getElementsByTagName('a')[0] : el
        el.addEventListener("click", e => (e.preventDefault(), opposing.classList.add("highlight"), opposing.scrollIntoView(), opposeLink.focus({preventScroll: true})));
        thisLink.addEventListener("blur", () => el.classList.remove("highlight"));
      });
    });
  };

  if (main && foot) linkNotes(main.getElementsByTagName("main")[0], foot, "ref");
  if (foot && toe) linkNotes(foot, toe, "toe");

  ([...document.querySelectorAll('[id^="_"],[href^="#_"]'),] as HTMLAnchorElement[]).forEach(el => {
    if (el.href && el.href.includes("#_")) {el.href = el.href.replace("#_", "#");}
    const sliceJump = () => {
      if (el.id.startsWith("_")) el.id = el.id.slice(1);
      if (window.location.hash === `#${el.id}`) el.scrollIntoView();
    };
    if (loadedFocus) sliceJump();
    else {// eslint-disable-next-line @typescript-eslint/no-unused-vars
      const jumper = () => (sliceJump(), window.removeEventListener("focus", jumper));
    }
    el.addEventListener("click", e => (e.preventDefault(), false));
  });
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();
}