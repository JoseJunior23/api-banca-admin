import { User } from '@modules/user/domain/entities/user';
import { LoginResponse } from '@modules/user/domain/services/create-user-login.service';

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  static toLOGIN(data: LoginResponse) {
    return {
      user: UserViewModel.toHTTP(data.user),
      token: data.token,
    };
  }
}
