import { makeGlobalEntity } from '@test/factories/global-entity-factory';
import { makeUser } from '@test/factories/user-factory';

import { User } from './user.entity';

describe('User', () => {
  it('should be able to create a user', () => {
    const user = new User(makeGlobalEntity(), makeUser());

    expect(user).toBeTruthy();
  });
});
