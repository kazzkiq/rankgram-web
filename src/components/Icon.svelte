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

  {#if name === "graph"}
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="none" width="18px" height="18px">
      <g>
        <rect fill="none" height="24" width="24"/>
      </g>
      <g>
        <g>
          <path d="M21,8c-1.45,0-2.26,1.44-1.93,2.51l-3.55,3.56c-0.3-0.09-0.74-0.09-1.04,0l-2.55-2.55C12.27,10.45,11.46,9,10,9 c-1.45,0-2.27,1.44-1.93,2.52l-4.56,4.55C2.44,15.74,1,16.55,1,18c0,1.1,0.9,2,2,2c1.45,0,2.26-1.44,1.93-2.51l4.55-4.56 c0.3,0.09,0.74,0.09,1.04,0l2.55,2.55C12.73,16.55,13.54,18,15,18c1.45,0,2.27-1.44,1.93-2.52l3.56-3.55 C21.56,12.26,23,11.45,23,10C23,8.9,22.1,8,21,8z"/>
          <polygon points="15,9 15.94,6.93 18,6 15.94,5.07 15,3 14.08,5.07 12,6 14.08,6.93"/>
          <polygon points="3.5,11 4,9 6,8.5 4,8 3.5,6 3,8 1,8.5 3,9"/>
        </g>
      </g>
    </svg>
  {/if}
</i>