<script lang="ts">
  import type {IGunChainReference} from 'gun/types/chain';
  import type {AuthType, User} from 'src/types';

  export let authType: AuthType;
  export let gun: IGunChainReference<any, any, any>;
  export let onAuthenticated: (user: User) => void;
  let alias: string;
  let pass: string;
  let err: string;

  const create = () => {
    if (!alias) return (err = 'No alias');

    gun.user().create(alias, pass, (ack) => {
      if ('err' in ack) {
        err = ack.err;
      } else {
        authenticate();
      }
    });
  };
  
  const authenticate = () => {
    if (!alias) return (err = 'No alias');

    gun.auth(alias, pass, (ack) => {
      if ('err' in ack) {
        err = ack.err;
      } else {
        onAuthenticated({alias, pass});
      }
    });
  };

  const submit = authType === 'create' ? create : authenticate;
</script>

<form autocomplete="off" on:submit|preventDefault={submit}>
  <label for="alias">alias</label>
  <input type="text" name="alias" id="alias" bind:value={alias} />

  <label for="passphrase">passphrase</label>
  <input type="password" name="passphrase" id="passphrase" bind:value={pass} />

  <button type="submit">{authType}</button>

  <span id="err"><strong>Error:</strong> {err ?? 'none'}</span>
</form>
