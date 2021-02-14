<script>
import Cards from "../components/Cards.svelte";

  import Filter from "../components/Filter.svelte";
  import Header from "../components/Header.svelte";

  let filterType = "followers";

  function handleFilter(type) {
    filterType = type;
  }
</script>

<Header />

<section class="description">
  <h1>BBB21</h1>
  <p>Confira quais participantes estão se dando melhor nas redes sociais!</p>
</section>

<section class="filter">
  <Filter on:change={handleFilter} />
</section>

<section class="cards">
  <Cards sortBy={filterType} />
</section>