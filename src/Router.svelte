<script>
  import {Route} from 'tinro'; 
  import Bbb21 from './pages/BBB21.svelte';
</script>

<Route path="/bbb21"><Bbb21 /></Route>
<Route path="*" redirect="/bbb21" />