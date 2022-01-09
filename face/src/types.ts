import type {IGunCryptoKeyPair} from 'gun/types/types';

export type AuthType = 'create' | 'authenticate';

export interface Ack {
  ack: 2;
  get: string;
  on: (args_0: unknown, args_1: unknown, args_2: unknown) => unknown;
  put: {
    alias: string;
    auth: any;
    epub: string;
    pub: string;
  };
  sea: IGunCryptoKeyPair;
  soul: string;
}
