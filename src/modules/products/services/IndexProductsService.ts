import { injectable, inject } from 'tsyringe';

import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

@injectable()
class IndexProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(): Promise<Product[]> {
    const product = await this.productsRepository.index();

    return product;
  }
}

export default IndexProductsService;
