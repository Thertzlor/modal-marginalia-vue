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
      canvas.width = 1920;
      canvas.height = 1080;
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
      return canvas.toDataURL();
    })();

    (() => {
      const paral = document.getElementsByClassName('p2').item(0) as HTMLDivElement;
      if (!paral) return;
      paral.style.background = `url(${virtualCanvas ?? ''})`
    })();
  }

  return {activateCanvas};
});