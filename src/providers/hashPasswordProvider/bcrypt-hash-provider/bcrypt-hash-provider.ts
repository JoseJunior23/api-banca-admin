import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';

import { HashPasswordProvider } from '../models/hash-password-provider';

@Injectable()
export class BcryptHashProvider implements HashPasswordProvider {
  async hashGenerate(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  async hashCompare(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
