import {defineStore} from 'pinia';
import type hljs from 'highlight.js';

export const useHighlighting = defineStore('highlighting',() => {
  const linePlugin:Parameters<typeof hljs['addPlugin']>[0] = {
  //add line numbers and handle start & marker options
    'after:highlightElement': function(args) {
      const wrapper = ((args.el.parentNode?.nodeName === 'PRE')? args.el.parentNode : args.el) as HTMLPreElement;
      if (!wrapper.dataset.noline) {
        let ln = (wrapper.dataset?.start === undefined)? 1 : parseInt(wrapper.dataset.start,10);
        args.result.value = `<div class="lnBorder"></div><span class="ln" data-ln="${ln++}"></span>${args.result.value.replace(/\n/g, (line) => {
          return `${line}<span class="ln" data-ln="${ln++}"></span>`;
        }).replace(/\n<span class="ln[^>]*"><\/span>$/i, '\n').replace(/\n<span class="ln[^>]*"><\/span><\/span>$/i, '\n</span>')}`;
      }
    }
  };

  return {linePlugin};
});