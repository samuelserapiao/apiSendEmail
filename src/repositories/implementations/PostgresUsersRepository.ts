import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async create(user: User): Promise<User> {
    this.users.push(user);

    return this.users[this.users.length -1];
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  async list(): Promise<User[]> {
    return this.users;
  }

  async delete(id: string): Promise<void> {
    const index = this.users.findIndex(user => user.id === id);
    this.users.splice(index, 1);
  }
}