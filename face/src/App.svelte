<script lang="ts">
  import './assets/styles/App.scss';
  import GUN from 'gun';
  import 'gun/sea';

  const gun = GUN(['http://localhost:8765/gun']);

  const submit = () => {
    if (!user) return (err = 'No username');

    gun.user().create(user, pass, (ack) => {
      if ('err' in ack) {
        err = ack.err;
      } else {
        //!todo: something i guess
      }
    });
  };

  let user: string;
  let pass: string;
  let err: string;
</script>

<main>
  <form autocomplete="off" on:submit|preventDefault={submit}>
    <label for="username">username</label>
    <input type="text" name="username" id="username" bind:value={user} />

    <label for="passphrase">passphrase</label>
    <input
      type="password"
      name="passphrase"
      id="passphrase"
      bind:value={pass} />

    <button type="submit">create</button>

    <span id="err"><strong>Error:</strong> {err ?? 'none'}</span>
  </form>
</main>
