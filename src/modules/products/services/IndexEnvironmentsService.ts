import { injectable, inject } from 'tsyringe';

import Product from '../infra/typeorm/entities/Product';
import IEnvironmentsRepository from '../repositories/IEnvironmentsRepository';

@injectable()
class IndexEnvironmentsService {
  constructor(
    @inject('EnvironmentsRepository')
    private environmentsRepository: IEnvironmentsRepository,
  ) {}

  public async execute(): Promise<Product[]> {
    const environments = await this.environmentsRepository.index();

    return environments;
  }
}

export default IndexEnvironmentsService;
