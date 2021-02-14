<script>
  import { onMount } from "svelte";
  import Card from "./Card.svelte";

  let users = [];

  async function loadData() {
    const rawUsers = await (await fetch("/api/bbb21/users.json")).json();
    rawUsers.sort((a, b) => (a.followers < b.followers) ? 1 : -1);
    users = rawUsers;
  }

  onMount(() => {
    loadData();
  });
</script>

<div class="cards">
  {#each users as user, index}
    <Card {user} position={index + 1} />
  {/each}
</div>