import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  name: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Product> {
    const checkNameExits = await this.productsRepository.findByName(name);

    if (checkNameExits) {
      throw new AppError(
        'Produto com o mesmo nome já cadastrado no sistema',
        409,
      );
    }

    const product = await this.productsRepository.create({ name });

    return product;
  }
}

export default CreateProductService;
