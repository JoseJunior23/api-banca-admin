import { UserToken } from '@modules/user/domain/entities/user-token';

export class UserTokenViewModel {
  static toHTTP(userToken: UserToken) {
    return {
      user_id: userToken.user_id,
      token: userToken.token,
    };
  }
}
