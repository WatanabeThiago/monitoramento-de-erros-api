import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '../../../repositories/IUsersRepository';
import ICreateProductDTO from '../../../dtos/ICreateUserDTO';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  findByPhone(phone: string): Promise<User | undefined> {
    return this.ormRepository.findOne({
      where: { phone },
    });
  }

  findByEmail(email: string): Promise<User | undefined> {
    return this.ormRepository.findOne({
      where: { email },
    });
  }

  public async index(): Promise<User[]> {
    const breeds = await this.ormRepository.find({
      order: { name: 'ASC' },
    });
    return breeds;
  }

  public async findById(id: number): Promise<User | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async findByName(name: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { name },
    });

    return user;
  }

  public create(user: ICreateProductDTO): User {
    return this.ormRepository.create(user);
  }

  public async save(data: User): Promise<User> {
    return this.ormRepository.save(data);
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default UsersRepository;
