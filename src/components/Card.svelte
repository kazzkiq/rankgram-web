<script>
  import { toCoolNumber } from "../helpers/Transform";
  import { formatToNumber } from "brazilian-values";
  import Icon from "./Icon.svelte";
  import MiniGraph from "./MiniGraph.svelte";
  export let user;
  export let position;
  let showGraph = false;


  function toggleGraph() {
    showGraph = !showGraph;
  }
</script>

<div class="card">
  <div class="position">#{position}</div>
  <div class="avatar_data">
    <img src="https://rankgram.me/static/bbb21/{user.username}.jpg" alt={user.name}>
    <div class="data posts">
      <h3>{toCoolNumber(user.posts)}</h3>
      <p>posts</p>
    </div>
    <div class="data followers">
      <h3>{toCoolNumber(user.followers)}</h3>
      <p>seguidores</p>
    </div>
    <div class="data following">
      <h3>{toCoolNumber(user.following)}</h3>
      <p>seguindo</p>
    </div>
  </div>
  <p class="username">@{user.username}</p>
  <h2 class="name">
    {user.name}
    {#if user.is_verified}
      <span class="verified">
        <Icon name="verified" />
      </span>
    {/if}
  </h2>
  <div class="biography">
    {@html user.biography.replace("\n", "<br>")}
  </div>
  {#if user.external_url}
    <a class="link" href={user.external_url} target="_blank">{user.external_url}</a>
  {/if}
  <MiniGraph visible={showGraph} data={user.stats} />
  <div class="actions">
    <div class="percentage">
      <b class:up={user.percentage > 0} class:down={user.percentage < 0}>{formatToNumber(user.percentage)}%</b>
      <button on:click={toggleGraph}>
        <Icon name="graph" />
      </button>
    </div>
    <a href="https://instagram.com/{user.username}" target="_blank">Ver Perfil</a>
  </div>
</div>

<style>
  .card {
    position: relative;
    background: var(--color-grey-1);
    padding: 15px;
    border-radius: 15px;
    margin-bottom: 20px;
  }

  .position {
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    margin-top: -10px;
    margin-left: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: bold;
    border-radius: 50%;
    background: var(--color-grey-1);
    border: 4px solid var(--color-bg);
  }

  .avatar_data {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .avatar_data img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: var(--color-grey-2);
  }

  .avatar_data h3 {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 1px;
  }

  .avatar_data p {
    font-size: 12px;
    font-weight: bold;
  }

  .data {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .following {
    margin-right: 10px;
  }

  .username {
    margin-top: 12px;
    font-size: 12px;
    opacity: 0.5;
  }

  .name {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    margin-top: -2px;
  }

  .verified {
    margin-left: 4px;
    margin-top: 0px;
    transform: translateY(1px);
  }

  .biography {
    margin-top: 12px;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 10px;
  }

  .biography + .link {
    margin-top: -5px;
  }

  .link {
    display: block;
    font-size: 12px;
    color: var(--color-blue);
    text-decoration: none;
    margin-bottom: 10px;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 55px;
    background: var(--color-grey-3);
    margin: 0 -15px -15px -15px;
    border-radius: 0 0 15px 15px;
    padding: 0 15px;
  }

  .actions a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
    height: 28px;
    border: none;
    border-radius: 100px;
    font-size: 12px;
    background-color: var(--color-blue);
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }

  .percentage {
    display: flex;
    align-items: center;
    margin-right: auto;
    font-size: 11px;
  }
  
  .percentage b {
    padding: 3px 8px;
    border-radius: 10px;
    background: var(--color-grey-4);
    font-weight: bold;
  }

  .percentage b.up {
    background-color: #00df77;
  }

  .percentage b.down {
    background-color: #df0043;
    color: #fff;
  }

  .percentage button {
    border: none;
    padding: 10px 5px;
    background: transparent;
    margin-left: 5px;
    font-size: 11px;
    font-weight: bold;
    color: var(--color-text);
  }

  .percentage button :global(svg) {
    fill: var(--color-text);
  }
</style>