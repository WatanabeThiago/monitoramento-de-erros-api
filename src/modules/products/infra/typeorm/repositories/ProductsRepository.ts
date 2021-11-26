import { getRepository, Repository } from 'typeorm';

import IProductsRepository from '../../../repositories/IProductsRepository';
import ICreateProductDTO from '../../../dtos/ICreateProductDTO';

import Product from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async index(): Promise<Product[]> {
    const breeds = await this.ormRepository.find({
      order: { name: 'ASC' },
    });
    return breeds;
  }

  public async findById(id: number): Promise<Product | undefined> {
    const user = await this.ormRepository.findOne({
      where: { id },
    });

    return user;
  }

  public async findByName(name: string): Promise<Product | undefined> {
    const user = await this.ormRepository.findOne({
      where: { name },
    });

    return user;
  }

  public async create({ name }: ICreateProductDTO): Promise<Product> {
    const breed = this.ormRepository.create({
      name,
    });
    await this.ormRepository.save(breed);

    return breed;
  }

  public async save(data: Product): Promise<Product> {
    return this.ormRepository.save(data);
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default ProductsRepository;
