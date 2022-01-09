<script lang="ts">
  import type {User} from '../types';
  import '../assets/styles/pages/Index.scss';
  import AuthForm from '../components/AuthForm.svelte';
  import {loadGun} from '../util';

  const gun = loadGun();
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
