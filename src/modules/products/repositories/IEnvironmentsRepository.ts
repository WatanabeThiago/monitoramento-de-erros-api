import Environment from '../infra/typeorm/entities/Environment';
import ICreateEnvironmentDTO from '../dtos/ICreateEnvironmentDTO';

export default interface IEnvironmentsRepository {
  index(): Promise<Environment[]>;
  findByName(name: string): Promise<Environment | undefined>;
  findById(id: number): Promise<Environment | undefined>;
  create(data: ICreateEnvironmentDTO): Promise<Environment>;
  save(data: Environment): Promise<Environment>;
  delete(id: number): Promise<void>;
}
