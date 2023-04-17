import { User } from '@modules/user/domain/entities/user';
import { UserRepository } from '@modules/user/domain/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
  findById(userId: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  remove(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(data => data.email === email);
    if (!user) {
      return null;
    }
    return user;
  }
  async findAll(): Promise<User[]> {
    return this.users.filter(user => user);
  }
}
