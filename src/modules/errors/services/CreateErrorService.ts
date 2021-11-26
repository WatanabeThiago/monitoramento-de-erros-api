import { injectable, inject } from 'tsyringe';

import { appSocketServer } from '@shared/infra/http/server';
import IErrorsRepository from '../repositories/IErrorsRepository';
import Error from '../infra/typeorm/entities/Error';
import ICreateErrorDTO from '../dtos/ICreateErrorDTO';

@injectable()
class CreateErrorService {
  constructor(
    @inject('ErrorsRepository')
    private errorsRepository: IErrorsRepository,
  ) {}

  public async execute(data: ICreateErrorDTO): Promise<Error> {
    const error = this.errorsRepository.create(data);
    appSocketServer.emit('errors', error);
    return error;
  }
}

export default CreateErrorService;
