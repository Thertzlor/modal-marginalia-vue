<script lang="ts" setup>
defineProps<{quote:string}>();
const classAdder = (e:SVGGElement) => e.classList[e.classList.contains('_t') ? 'remove' : 'add']('_t');

const coords = [[75,5],[75,45],[75,35],[75,25],[72,20],[72,10],[72,50],[72,40],[72,30],[69,15],[69,25],[66,30],[63,35],[60,40],[57,45],[57,5],[57,25],[57,15],[54,20],[54,50],[54,10],[51,45],[51,25],[51,15],[51,5],[48,50],[48,40],[45,5],[48,20],[48,30],[48,10],[45,45],[45,35],[42,40],[42,30],[39,25],[36,30],[36,20],[36,10],[33,35],[33,15],[30,40],[30,30],[30,20],[27,45],[27,25],[24,30],[21,25],[21,15],[21,5],[18,20],[18,10],[15,25],[15,5],[12,50],[12,30],[12,10],[9,45],[9,35],[9,25],[9,5],[6,40],[6,30],[6,20],[6,0],[3,35],[3,15],[3,5],[0,10],[0,0]
] as [number,number][];

</script>

<template>
  <div class="article_container">
    <h2 class="home_header visible">{{ quote }}</h2>
    <div class="svgContainer">
      <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" @mouseover="(e:any) => e?.target?.href?.baseVal === '#g1' && classAdder(e.target.parentElement)"><defs><polyline id="p1" style="clip-path:url(#C1)" points="30 100 0 50 30 0 0 50" /><g id="g1"><polygon points="10,50 40,100 70,50 40,0" /><g><g style="pointer-events: none"><polygon class="st1" points="-540,100 -570,50 0,50 30,100" /><polygon class="st1" points="-540,0 -570,50 0,50 30,0" /></g><g><polygon class="st2" points="30,100 0,50 10,50 39,100" /><polygon class="st2" points="30,0 0,50 10,50 39,0" /><polygon class="st2" points="10,50 40,100 70,50 39,0" /></g><g style="pointer-events: none"><polygon class="st3" points="-540,100 -570,50 10,50 39,100" /><polygon class="st4" points="-540,0 -570,50 10,50 40,0" /></g></g></g><mask id="C1"><polygon
        id="polly" points="1,50 30,100 400,100 400,1 30,1" transform="translate(0,0)"
        style="fill: white" /></mask><linearGradient
          id="sgrad" gradientUnits="userSpaceOnUse" x1="220"
          y1="250" x2="470" y2="-180"
          gradientTransform="matrix(0 1 1 0 -300 -270)"><stop class="stopA" offset="0" /><stop class="stopB" offset="0.36" /><stop class="stopC" offset="1" /></linearGradient></defs><g
            v-for="[a,b],i of coords" :key="i" class="c"
            :transform="`translate(${a*10},${b*10})`" mask="url(#C1)"><use href="#g1" class="st0" /><use href="#p1" /></g>
      </svg>
    </div>
  </div>
</template>