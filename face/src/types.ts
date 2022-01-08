export type AuthType = 'create' | 'authenticate';

export interface User {
  alias: string;
  pass: string;
}