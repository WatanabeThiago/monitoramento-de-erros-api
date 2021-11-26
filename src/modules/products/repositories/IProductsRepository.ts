import Product from '../infra/typeorm/entities/Product';
import ICreateEnvironmentDTO from '../dtos/ICreateEnvironmentDTO';

export default interface IProductsRepository {
  index(): Promise<Product[]>;
  findByName(name: string): Promise<Product | undefined>;
  findById(id: number): Promise<Product | undefined>;
  create(data: ICreateEnvironmentDTO): Promise<Product>;
  save(data: Product): Promise<Product>;
  delete(id: number): Promise<void>;
}
