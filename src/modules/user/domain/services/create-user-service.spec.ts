import { FakeHashPassword } from '@test/factories/hash-factory';
import { makeUser } from '@test/factories/user-factory';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';

import { CreateUserService } from './create-user.service';

describe('Create User', () => {
  it('should be able to create a new user.', async () => {
    const userRepository = new InMemoryUserRepository();
    const hashRepository = new FakeHashPassword();
    const createUserService = new CreateUserService(
      userRepository,
      hashRepository,
    );

    const { user } = await createUserService.execute(makeUser());

    console.log(user);
    expect(userRepository.users).toHaveLength(1);
    expect(userRepository.users[0]).toEqual(user);
  });
});
