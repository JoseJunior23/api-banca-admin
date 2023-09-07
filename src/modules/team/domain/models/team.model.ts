import { Employee } from '@modules/employee/infra/typeorm/entities/employee.entity';

export interface TeamProps {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  employees?: Employee[];
}
