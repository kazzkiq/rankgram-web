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

<ul>
  <li class:active={filterType === "followers"}><button on:click={() => setType("followers")}>Seguidores</button></li>
  <li class:active={filterType === "growth"}><button on:click={() => setType("growth")}>Crescimento</button></li>
  <li class:active={filterType === "loss"}><button on:click={() => setType("loss")}>Perda</button></li>
</ul>

<style>
  ul {
    display: flex;
    margin: 25px 0;
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
    background: #f3f3f3;
    font-size: 12px;
    transition: all 0.1s linear;
  }

  ul li.active button {
    background-color: #3B72FE;
    color: #fff;
    font-weight: bold;
  }
</style>