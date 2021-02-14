<script>
  import { slide, scale } from 'svelte/transition';

  export let visible = false;
</script>

{#if visible}
<div class="loader-wrapper" transition:slide={{duration: 600}}>
  <div class="loader" transition:scale={{duration: 300}}>
    <div class="spinner"></div>
  </div>
</div>
{/if}

<style>
  .loader-wrapper {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    padding-bottom: 30px;
  }

  .loader {
    width: 66px;
    height: 66px;
    border-radius: 5px;
    background: #fff;
    z-index: var(--z-9);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  .spinner {
    width: 30px;
    height: 30px;
    border: 2px solid var(--color-text);
    border-top-color: rgba(0,0,0,0);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    user-select: none;
  }

  @media screen and (max-width: 480px) {
    .loader-wrapper {
      padding-right: 0;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>