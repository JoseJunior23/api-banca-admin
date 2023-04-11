import { User } from '@modules/user/domain/entities/user';

import { makeGlobalEntity } from './global-entity-factory';

export function makeUser() {
  return new User(makeGlobalEntity(), {
    name: 'john doe',
    email: 'johndoe@mail.com',
    password: '******',
  });
}
