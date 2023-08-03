import { EmployeeModule } from '@modules/employee/employee.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from '@shared/database/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env'] }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfig }),
    EmployeeModule,
  ],
})
export class AppModule {}
