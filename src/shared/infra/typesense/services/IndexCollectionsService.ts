/* eslint-disable no-return-assign */
import { injectable, inject } from 'tsyringe';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';

@injectable()
class IndexCollectionsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(): Promise<any> {
    const collections = await this.productsRepository.collections();

    return collections;
  }
}

export default IndexCollectionsService;
