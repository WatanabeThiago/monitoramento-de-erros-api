import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';

import AnimalSize from '@modules/pets/infra/typeorm/entities/AnimalSize';

import sizeList from '../helpers/sizeList';

export default class CreateBreeds implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(AnimalSize)
      .values(sizeList)
      .execute();
  }
}
