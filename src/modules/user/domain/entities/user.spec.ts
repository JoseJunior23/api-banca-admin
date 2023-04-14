import { User } from './user';

describe('User', () => {
  it('should be able to create a user', () => {
    const user = new User({
      name: 'john doe',
      email: 'johndoe@mail.com',
      password: '******',
    });

    expect(user).toBeTruthy();
  });
});
