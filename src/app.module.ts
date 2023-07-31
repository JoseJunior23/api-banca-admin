import { EmployeeModule } from '@modules/employee/employee.module';
import { WorkSectionModule } from '@modules/work-section/work-section.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [WorkSectionModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
