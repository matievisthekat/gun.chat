import GUN from 'gun';
import 'gun/sea';

export function loadGun() {
  return GUN(['localhost:8765/gun']);
}
