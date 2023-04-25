import { UserToken } from '@modules/user/domain/entities/user-token';
import { UserToken as RawUserToken } from '@prisma/client';

export class PrismaUserTokenMapper {
  static toPrisma(userToken: UserToken) {
    return {
      user_id: userToken.user_id,
      token: userToken.token,
    };
  }

  static toDomain(raw: RawUserToken): UserToken {
    return new UserToken({
      id: raw.id,
      token: raw.token,
      user_id: raw.user_id,
      created_at: raw.created_at,
      updated_at: raw.updated_at,
    });
  }
}
