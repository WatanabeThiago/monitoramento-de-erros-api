import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IProductsRepository from '../repositories/IUsersRepository';
import Product from '../infra/typeorm/entities/User';

interface IRequest {
  id: number;
}

@injectable()
class DeleteProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Product> {
    const breed = await this.productsRepository.findById(id);

    if (!breed) {
      throw new AppError(`Produto não encontrado.`, 404);
    }

    await this.productsRepository.delete(id);

    return breed;
  }
}

export default DeleteProductService;
