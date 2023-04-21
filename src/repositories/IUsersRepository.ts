import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  create(user: User): Promise<User>;
  findById(id: string): Promise<User>;
  list(): Promise<User[]>;
  delete(id: string): Promise<void>;
}