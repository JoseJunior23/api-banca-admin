import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IsAuthenticatedMiddleware } from '@shared/middlewares/isAuthenticated';

import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IsAuthenticatedMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.GET });
  }
}
