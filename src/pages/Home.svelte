<script>
  import Cards from "../components/Cards.svelte";
  import Filter from "../components/Filter.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

  let filterType = "followers";

  function handleFilter(type) {
    filterType = type.detail;
  }
</script>

<Header />

<h1>Rankgram.me</h1>

<Footer />