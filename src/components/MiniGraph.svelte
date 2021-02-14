<script>
  import { afterUpdate, onMount } from 'svelte';
  import uPlot from "uplot";

  import { slide } from 'svelte/transition';
  export let visible = false;
  export let data = [];
  let colorChartFill = getComputedStyle(document.body).getPropertyValue('--color-chart-fill');
  let colorChartStroke = getComputedStyle(document.body).getPropertyValue('--color-chart-stroke');
  let el;

  function makeGraph() {
    if (!el) {
      return;
    }

    const oldCanvas = el.querySelector("canvas");
    if (oldCanvas) {
      el.removeChild(oldCanvas);
    }

    const x = [];
    const y = [];

    data.forEach((item) => {
      x.push(item.data);
      y.push(item.value);
    });

    const opts = {
      width: el.offsetWidth,
      height: 100,
      class: "spark",
      pxAlign: false,
      cursor: {
        show: false
      },
      select: {
        show: false,
      },
      legend: {
        show: false,
      },
      scales: {
        x: {
          time: false,
        },
      },
      axes: [
        {
          show: false,
        },
        {
          show: false,
        }
      ],
      series: [
        {},
        {
          points: {
            show: false,
          },
          stroke: colorChartStroke,
          fill: colorChartFill,
        },
      ],
    };

    let can = new uPlot(opts, [x, y]).ctx.canvas;
    can.style.width = el.offsetWidth + "px";
    can.style.height = 100 + "px";

    el.appendChild(can);
  }

  onMount(() => {
    makeGraph();
  });

  afterUpdate(() => {
    makeGraph();
  });
</script>

{#if visible}
<div class="mini_graph" bind:this={el} transition:slide={{duration: 300}}></div>
{/if}

<style>
  .mini_graph {
    position: relative;
    margin: 10px -15px 0;
    background: var(--color-grey-3);
    overflow: hidden;
    height: 100px;
  }

  .mini_graph canvas {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>