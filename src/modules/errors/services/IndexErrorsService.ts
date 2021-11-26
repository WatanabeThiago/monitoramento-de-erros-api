import IPaginatedResponse from '@shared/interfaces/IPaginatedResponse';
import { injectable, inject } from 'tsyringe';

import Error from '../infra/typeorm/entities/Error';
import IErrorsRepository from '../repositories/IErrorsRepository';

interface IReq {
  filters: {
    environment_id?: number;
    project_id?: number;
    ip?: string;
  };
  order: {
    [key: string]: 'ASC' | 'DESC';
  };
  page?: number;
  limit?: number;
}

@injectable()
class IndexErrorsService {
  constructor(
    @inject('ErrorsRepository')
    private errorsRepository: IErrorsRepository,
  ) {}

  public async execute({
    order,
    filters,
    page = 1,
    limit = 10,
  }: IReq): Promise<IPaginatedResponse<Error>> {
    const errors = await this.errorsRepository.index({
      filters,
      order,
      page,
      limit,
    });

    return errors;
  }
}

export default IndexErrorsService;
