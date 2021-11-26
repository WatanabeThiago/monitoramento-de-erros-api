import { getRepository, Repository } from 'typeorm';

import IFindErrorDTO from '@modules/errors/dtos/IFindErrorDTO';
import IPaginatedResponse from '@shared/interfaces/IPaginatedResponse';
import IErrorsRepository from '../../../repositories/IErrorsRepository';
import ICreateErrorDTO from '../../../dtos/ICreateErrorDTO';

import Error from '../entities/Error';

class ErrorsRepository implements IErrorsRepository {
  private ormRepository: Repository<Error>;

  constructor() {
    this.ormRepository = getRepository(Error);
  }

  public async index(data: IFindErrorDTO): Promise<IPaginatedResponse<Error>> {
    const { order } = data;
    const where = JSON.parse(JSON.stringify(data.filters));
    const [results, total] = await this.ormRepository.findAndCount({
      where,
      order,
    });
    return {
      limit: data.limit,
      page: data.page,
      results,
      total,
    };
  }

  public async findById(id: number): Promise<Error | undefined> {
    const user = await this.ormRepository.findOne({
      where: { id },
    });

    return user;
  }

  public create(data: ICreateErrorDTO): Error {
    const error = this.ormRepository.create(data);

    return error;
  }

  public async save(data: Error): Promise<Error> {
    return this.ormRepository.save(data);
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default ErrorsRepository;
