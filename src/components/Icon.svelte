<script>
  export let name;
</script>

<i class="icon">
  {#if name === "verified"}
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.5" cy="7.5" r="7.5" fill="#00B2FF"/>
      <rect x="3.96447" y="6.5" width="5" height="1" transform="rotate(45 3.96447 6.5)" fill="white"/>
      <rect x="6.08579" y="10.0355" width="7" height="1" transform="rotate(-45 6.08579 10.0355)" fill="white"/>
    </svg>  
  {/if}
</i>