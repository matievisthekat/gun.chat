<!-- App.svelte -->
<script>
  import {Router, Route} from 'svelte-routing';
  import Index from './pages/Index.svelte';
  import User from './pages/User.svelte';

  export let url = '';
</script>

<Router {url}>
  <Route path="/"><Index /></Route>
  <Route path="/@:pub" let:params><User /></Route>
</Router>
