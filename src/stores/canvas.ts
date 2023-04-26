import {defineStore} from 'pinia';

export const useCanvas = defineStore('canvas',() => {
  const canvasUtilities:Record<string, (...args:any) => any> = {};
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

    const virtualCanvas = (() => {
      const canvas = document.createElement('canvas');
      canvas.height = 1200;
      canvas.width = 1200;
      const context = canvas.getContext('2d');
      if (!context) return;
      const numCircles = canvas.width / 50;
      const maxRadius = 4;
      const minRadius = 1;
      for (let n = 0; n < numCircles; n++) {
        const xPos = Math.random() * (canvas.width - (maxRadius * 7 * 3));
        const yPos = Math.random() * (canvas.height - (maxRadius * 7 * 3));
        const radius = minRadius + (Math.random() * (maxRadius - minRadius));
        const [v1, v2, v3] = [0, 50, 50];
        const color = `rgb(${255 - (Math.random() * v1)},${255 - (Math.random() * v2)},${255 - (Math.random() * v3)})`;
        drawCircle(context, xPos, yPos, radius, color);
      }
      return canvas;
    })();

    (() => {
      const body = document.body;
      const html = document.documentElement;
      let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      let width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

      const canvas = document.getElementsByTagName('canvas')[0];
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      if (!(context && virtualCanvas)) return;
      const pattern = context.createPattern(virtualCanvas, 'repeat');
      if (!pattern) return;
      context.fillStyle = pattern;
      context.fillRect(0, 0, width, height);

      function throttle2(callback:any, limit:number) {
        let wait = false;
        return function() {
          if (!wait) {
            callback.call();
            wait = true;
            setTimeout(() => {wait = false;}, limit);
          }
        };
      }
      function debounce(this:any, callback:(...args:any) => any, wait:number) {
        let timeout:number;
        return (...args:any[]) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => callback.apply(this, args), wait);
        };
      }

      const wrapElement = document.getElementsByClassName('parallax-wrapper').item(0) as HTMLElement;
      if (!wrapElement) return;

      const refill = () => requestAnimationFrame(() => {
        height = Math.max(wrapElement.scrollHeight, wrapElement.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        width = Math.max(wrapElement.scrollWidth, wrapElement.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
        canvas.width = width;
        canvas.height = height;
        context.fillStyle = pattern;
        context.fillRect(0, 0, width, height);
      });

      canvasUtilities.refill = refill;
      window.addEventListener('resize', debounce(refill, 16));
      const resizeObserver = new ResizeObserver(throttle2(refill, 16));
      resizeObserver.observe(wrapElement);
    })();
  }

  return {activateCanvas};
});