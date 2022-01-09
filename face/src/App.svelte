<!-- App.svelte -->
<script>
  import {Router, Route} from 'svelte-routing';
  import Index from './pages/Index.svelte';
  import User from './pages/User.svelte';

  export let url = '';
</script>

<Router {url}>
  <Route path="/" component={Index} />
  <Route path="/:pub" let:params component={User} />
</Router>
