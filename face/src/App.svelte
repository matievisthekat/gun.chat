<script lang="ts">
  import type {User} from './types';
  import './assets/styles/App.scss';
  import AuthForm from './components/AuthForm.svelte';
  import GUN from 'gun';
  import 'gun/sea';

  const gun = GUN(['http://localhost:8765/gun']);
  const onAuthenticated = (usr: User) => {};
</script>

<main>
  <div class="col" id="first">
    <AuthForm authType="create" {gun} {onAuthenticated} />
  </div>
  <div class="col" id="second">
    <AuthForm authType="authenticate" {gun} {onAuthenticated} />
  </div>
</main>
