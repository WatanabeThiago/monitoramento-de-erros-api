import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
  index(): Promise<User[]>;
  findByName(name: string): Promise<User | undefined>;
  findByPhone(phone: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: number): Promise<User | undefined>;
  create(data: ICreateUserDTO): User;
  save(data: User): Promise<User>;
  delete(id: number): Promise<void>;
}
