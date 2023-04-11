import { GlobalEntity } from './global-entity';

describe('Global Entity', () => {
  it('should be able a generate new global entity', async () => {
    const globalEntity = new GlobalEntity({
      id: '15481510150105105',
      created_at: new Date(),
      updated_at: new Date(),
    });
    expect(globalEntity).toBeTruthy();
  });
});
