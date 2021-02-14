<script>
  import { onMount, afterUpdate } from "svelte";
  import Card from "./Card.svelte";
  import { UsersService } from "../services/Users";

  export let sortBy = "followers";
  let users = [];

  async function loadData() {
   users = await UsersService().getAll();
  }

  function sortUsers() {
    console.log(sortBy);
    if (sortBy === "followers") {
      users.sort((a, b) => (a.followers < b.followers) ? 1 : -1);
      users = [...users];
    }

    if (sortBy === "growth") {
      users.sort((a, b) => (a.percentage < b.percentage) ? 1 : -1);
      users = [...users];
    }

    if (sortBy === "loss") {
      users.sort((a, b) => (a.percentage > b.percentage) ? 1 : -1);
      users = [...users];
    }
  }

  afterUpdate(() => {
    sortUsers();
  });

  onMount(() => {
    loadData();
  });
</script>

<div class="cards">
  {#each users as user, index}
    <Card {user} position={index + 1} />
  {/each}
</div>