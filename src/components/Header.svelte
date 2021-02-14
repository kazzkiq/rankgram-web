<script>
  import { onMount } from "svelte";
  import Logo from "../components/Logo.svelte";

  let shrink = false;

  onMount(() => {
    window.onscroll = () => (window.scrollY > 5) ? shrink = true : shrink = false;
  });
</script>

<header class:shrink={shrink}>
  <Logo width={84} height={18} />
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 38px 0;
    background: var(--color-header);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    transition: padding 0.2s ease-in-out;
  }

  header.shrink {
    padding: 20px 0;
  }
</style>