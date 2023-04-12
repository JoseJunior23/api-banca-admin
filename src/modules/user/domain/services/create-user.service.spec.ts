import { makeGlobalEntity } from '@test/factories/global-entity-factory';
import { makeUser } from '@test/factories/user-factory';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { CreateUserService } from './create-user.service';

describe('Create User', () => {
  it('should be able create a new user', async () => {
    const userRepository = new InMemoryUserRepository();
    const createUser = new CreateUserService(userRepository);

    const { user } = await createUser.execute(makeGlobalEntity(), makeUser());

    expect(userRepository.users).toHaveLength(1);
    expect(userRepository.users[0]).toEqual(user);
  });
});
