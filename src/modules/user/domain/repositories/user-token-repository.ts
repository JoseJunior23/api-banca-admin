import { UserToken } from '../entities/user-token';

export abstract class UserTokenRepository {
  abstract findByToken(token: string): Promise<UserToken | null>;
  abstract generate(user_id: string): Promise<UserToken>;
}
