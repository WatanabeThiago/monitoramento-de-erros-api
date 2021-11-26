import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';

import Product from '@modules/products/infra/typeorm/entities/Product';

import productsList from '../helpers/productsList';

export default class CreateAnimals implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsList)
      .execute();
  }
}
