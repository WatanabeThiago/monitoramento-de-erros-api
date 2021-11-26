import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  id: number;
  name: string;
}

@injectable()
class UpdateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ id, name }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError(`Raça não encontrada.`, 404);
    }

    const findDuplicate = await this.productsRepository.findByName(name);

    if (findDuplicate && product.name !== findDuplicate?.name) {
      throw new AppError(`Essa raca ja foi cadastrada no sistema.`, 409);
    }

    product.name = name;

    await this.productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
