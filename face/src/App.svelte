<script lang="ts">
  import './assets/styles/App.scss';
  import GUN from 'gun/gun';

  const gun = GUN(['http://localhost:8765/gun']);
</script>

<main>
  <form autocomplete="off">
    <label for="username">username</label>
    <input type="text" name="username" id="username" />

    <label for="passphrase">passphrase</label>
    <input type="password" name="passphrase" id="passphrase" />
  </form>
</main>
