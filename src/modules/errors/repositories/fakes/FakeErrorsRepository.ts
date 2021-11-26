import IFindErrorDTO from '@modules/errors/dtos/IFindErrorDTO';
import IPaginatedResponse from '@shared/interfaces/IPaginatedResponse';
import IErrorsRepository from '../IErrorsRepository';
import ICreateErrorDTO from '../../dtos/ICreateErrorDTO';

import Error from '../../infra/typeorm/entities/Error';

class FakeErrorsRepository implements IErrorsRepository {
  private errors: Error[] = [];

  public async index(data: IFindErrorDTO): Promise<IPaginatedResponse<Error>> {
    return {
      limit: data.limit,
      page: data.page,
      results: this.errors,
      total: this.errors.length,
    };
  }

  public async findById(id: number): Promise<Error | undefined> {
    const error = this.errors.find(item => item.id === id);

    return error;
  }

  public create(data: ICreateErrorDTO): Error {
    const error = new Error();

    Object.assign(error, { id: this.errors.length + 1, ...data });

    return error;
  }

  public async save(error: Error): Promise<Error> {
    this.errors.push(error);
    return error;
  }

  public async delete(id: number): Promise<void> {
    const userIndex = this.errors.findIndex(item => item.id === id);

    this.errors.splice(userIndex, 1);
  }
}

export default FakeErrorsRepository;
