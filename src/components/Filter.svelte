<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let filterType = "followers"; // followers|growth|loss

  function setType(type) {
    if (filterType === type) {
      return;
    }
    
    filterType = type;
    dispatch("change", type);
  }
</script>

<h5>Filtrar por</h5>

<ul>
  <li class:active={filterType === "followers"}><button on:click={() => setType("followers")}>Seguidores</button></li>
  <li class:active={filterType === "growth"}><button on:click={() => setType("growth")}>Crescimento</button></li>
  <li class:active={filterType === "loss"}><button on:click={() => setType("loss")}>Perda</button></li>
</ul>

<style>
  h5 {
    margin-top: 25px;
    font-weight: bold;
    opacity: 0.5;
    text-transform: uppercase;
    font-size: 11px;
  }
  ul {
    display: flex;
    margin: 5px 0 25px 0;
  }

  ul li {
    flex: 1;
    padding: 0 5px;
  }

  ul li:first-child {
    padding-left: 0;
  }

  ul li:last-child {
    padding-right: 0;
  }

  ul li button {
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 100px;
    background: var(--color-grey-1);
    font-size: 12px;
    transition: all 0.1s linear;
    color: var(--color-text);
  }

  ul li.active button {
    background-color: var(--color-blue);
    color: #fff;
    font-weight: bold;
  }
</style>