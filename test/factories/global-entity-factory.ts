import { GlobalEntity } from '@shared/global/entities/global-entity';
import { randomUUID } from 'crypto';

export function makeGlobalEntity() {
  return new GlobalEntity({
    id: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
  });
}
