<script lang="ts">
  import type {IGunChainReference} from 'gun/types/chain';
  import type {Ack, AuthType} from 'src/types';

  export let authType: AuthType;
  export let gun: IGunChainReference<any, any, any>;
  export let onAuthenticated: (ack: Ack) => void;
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

    gun.user().auth(alias, pass, (ack) => {
      if ('err' in ack) {
        err = ack.err;
      } else {
        onAuthenticated(ack);
      }
    });
  };

  const submit = authType === 'create' ? create : authenticate;
</script>

<form autocomplete="off" on:submit|preventDefault={submit}>
  <h2>{authType} user</h2>

  <label for="{authType}-alias">alias</label>
  <input type="text" name="alias" id="{authType}-alias" bind:value={alias} />

  <label for="{authType}-pass">passphrase</label>
  <input type="password" name="pass" id="{authType}-pass" bind:value={pass} />

  <button type="submit">{authType}</button>

  <span class="err"><strong>Error:</strong> {err ?? 'none'}</span>
</form>

<style type="scss">
  form {
    display: grid;

    justify-content: space-evenly;
    align-items: center;

    row-gap: 10px;
    width: 100%;

    h2 {
      text-align: center;
      grid-column: 1 / 4;
    }

    label {
      font-weight: bold;
      grid-column: 1 / 2;
    }

    input {
      grid-column: 2 / 4;
    }

    button {
      grid-row: 5;
      grid-column: 1 / 4;
      padding: 10px 0;
    }

    .err {
      color: red;
      grid-column: 1 / 4;
    }
  }
</style>
