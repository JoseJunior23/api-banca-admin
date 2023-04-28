import { WorkSection } from './work-section';

describe('Work section', () => {
  it('should be able to create a new work section', () => {
    const workSection = new WorkSection({
      name: 'new work section',
      description: 'new description',
    });

    expect(workSection).toBeTruthy();
  });
});
