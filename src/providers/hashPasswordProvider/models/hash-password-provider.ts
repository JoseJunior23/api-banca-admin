export interface HashPasswordProvider {
  hashGenerate(payload: string): Promise<string>;
  hashCompare(payload: string, hashed: string): Promise<boolean>;
}
