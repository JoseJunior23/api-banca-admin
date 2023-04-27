import { Employee } from './employee';

describe('Employee', () => {
  it('should be able to create a employee', () => {
    const user = new Employee({
      name: 'john doe',
      nickname: 'joh',
      phone: '9 9999 99-99',
    });

    expect(user).toBeTruthy();
  });
});
