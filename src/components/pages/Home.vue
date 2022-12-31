<script lang="ts" setup>
import {onMounted} from 'vue';
const props = defineProps<{quote: string}>();


onMounted(() => {
  const ins = document.getElementById("indexSVG") as any as SVGSVGElement;
  if (ins) {
    const classAdder = (e: SVGGElement) => e.classList[e.classList.contains("_t") ? "remove" : "add"]("_t");
    ins.addEventListener("mouseover", (e: any) => e?.target?.href?.baseVal === "#g1" && classAdder(e.target.parentElement)
    );
  }
})
</script>

<template>
  <div class="article_container">
    <h2 class="home_header visible">{{quote}}</h2>
    <div class="svgContainer">
      <svg id="indexSVG" viewBox="0 -2.195 894.218 602.152" style="enable-background: new 0 0 68.6 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <polyline id="p1" style="clip-path: url(#C1)" points="28.7 100 -0.2 50 28.7 0 -0.2 50"></polyline>
          <g id="g1">
            <polygon points="10.7,50 39.6,100 68.4,50 39.6,0 "></polygon>
            <g>
              <g style="pointer-events: none">
                <polygon class="st1" points="-542.7,100 -571.6,50 -0.1,50 28.8,100 "></polygon>
                <polygon class="st1" points="-542.7,0 -571.6,50 -0.1,50 28.8,0 "></polygon>
              </g>
              <g>
                <polygon class="st2" points="28.7,100 -0.2,50 10.7,50 39.6,100 "></polygon>
                <polygon class="st2" points="28.7,0 -0.2,50 10.7,50 39.6,0 "></polygon>
                <polygon class="st2" points="10.7,50 39.6,100 68.4,50 39.6,0 "></polygon>
              </g>
              <g style="pointer-events: none">
                <polygon class="st3" points="-542.7,100 -571.6,50 10.7,50 39.6,100 "></polygon>
                <polygon class="st4" points="-542.7,0 -571.6,50 10.7,50 39.6,0 "></polygon>
              </g>
            </g>
          </g>
          <mask id="C1">
            <polygon points="1,50 29,99 400,99 400,1 29,1 " transform="matrix(1, 0, 0, 1, 0, 0)" id="polly" style="fill: white"></polygon>
          </mask>
          <linearGradient id="sgrad" gradientUnits="userSpaceOnUse" x1="219.3682" y1="253.5077" x2="471.4842" y2="-183.1701" gradientTransform="matrix(6.123234e-17 1 1 -6.123234e-17 -301.1689 -270.423)">
            <stop class="stopA" offset="0"></stop>
            <stop class="stopB" offset="0.36"></stop>
            <stop class="stopC" offset="1"></stop>
          </linearGradient>
        </defs>
        <g class="cube" transform="matrix(1, 0, 0, 1, 746.391674, -1.251912)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 717.90327, 446.924628)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 717.903331, 347.786931)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 718.013133, 247.79964)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 717.753001, 147.592867)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 717.842052, 47.833783)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 689.049754, 496.973152)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 689.309947, 397.985876)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 689.41981, 297.738408)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 688.789744, 97.914247)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 660.196421, 247.539478)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 631.082773, 297.957921)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 601.900033, 348.307256)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 572.936776, 398.095617)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 544.233529, 448.22547)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 543.850655, 51.278184)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 542.861641, 250.513431)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 543.803719, 151.125094)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 514.800484, 200.683902)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 515.92878, 497.86338)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 514.717537, 101.154672)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 487.335517, 448.294593)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 486.678382, 249.878071)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 486.772285, 150.713488)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 486.313758, 51.007428)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 459.221839, 498.123604)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 458.78852, 399.02735)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 428.823828, 50.772698)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 458.180579, 200.460071)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 458.039832, 299.754521)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 457.722144, 100.472345)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 430.224341, 448.607825)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 429.542029, 349.219457)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 401.315008, 398.778296)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 400.856604, 299.813512)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 372.264959, 249.890064)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 344.131902, 300.178136)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 343.991033, 200.425174)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 344.308751, 101.307527)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 315.128667, 350.007726)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 315.128606, 150.548647)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 286.26627, 400.566504)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 286.807774, 299.448887)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 286.313206, 200.154407)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 257.356968, 450.172217)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 258.216099, 249.760166)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 229.671497, 299.54276)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 201.032916, 250.030887)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 201.397571, 150.137072)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 200.938968, 51.054368)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 173.029711, 199.742801)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 172.123553, 99.989831)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 144.214266, 250.030887)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 143.845415, 50.368813)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 115.081194, 499.048774)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 114.716532, 300.318974)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 115.357454, 99.820192)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 86.077913, 448.85456)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 86.301797, 349.37232)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 85.935632, 250.274708)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 86.624338, 50.204625)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 57.168691, 399.20188)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 57.121701, 299.589726)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 57.251588, 199.904254)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 57.513829, 0.162592)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 28.717898, 349.419286)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 28.403359, 149.862246)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, 28.828831, 50.266038)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" transform="matrix(1, 0, 0, 1, -0.018486, 100.50892)" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
        <g class="cube" mask="url(#C1)">
          <use href="#g1" class="st0" />
          <use href="#p1" />
        </g>
      </svg>
    </div>
  </div>
</template>