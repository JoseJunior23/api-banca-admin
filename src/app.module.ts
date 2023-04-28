import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IsAuthenticatedMiddleware } from '@shared/middlewares/isAuthenticated';

import { EmployeeModule } from './modules/employee/employee.module';
import { UserModule } from './modules/user/user.module';
import { WorkSectionModule } from './modules/work-section/work-section.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    EmployeeModule,
    WorkSectionModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IsAuthenticatedMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.GET });
  }
}
