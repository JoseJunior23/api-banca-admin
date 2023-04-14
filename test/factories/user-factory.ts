import { User, UserProps } from '@modules/user/domain/entities/user';

type Override = Partial<UserProps>;
export function makeUser(override: Override = {}) {
  return new User({
    name: 'john doe',
    email: 'johndoe@mail.com',
    password: '******',
    ...override,
  });
}
