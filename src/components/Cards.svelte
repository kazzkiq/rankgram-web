<script>
  import { onMount, afterUpdate } from "svelte";
  import Card from "./Card.svelte";
  import { UsersService } from "../services/Users";
  import Loader from "./Loader.svelte";

  export let sortBy = "followers";
  let users = [];
  let isLoading = true;

  async function loadData() {
    isLoading = true;
    users = await UsersService().getAll();
    isLoading = false;
  }

  function sortUsers() {
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
  <Loader visible={isLoading} />
  {#each users as user, index}
    <Card {user} position={index + 1} />
  {/each}
</div>