import { HashPasswordProvider } from '@providers/hashPasswordProvider/models/hash-password-provider';

export class FakeHashPassword implements HashPasswordProvider {
  async hashGenerate(payload: string): Promise<string> {
    return payload;
  }

  async hashCompare(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}
