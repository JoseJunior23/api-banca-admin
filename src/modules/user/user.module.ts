import { Module } from '@nestjs/common';

import { UserDatabaseModule } from './infra/database/user-database.module';
import { UserHttpModule } from './infra/http/user-http.module';

@Module({
  imports: [UserDatabaseModule, UserHttpModule],
})
export class UserModule {}
