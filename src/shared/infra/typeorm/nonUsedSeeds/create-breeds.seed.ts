import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';

import Breed from '@modules/pets/infra/typeorm/entities/Breed';

import breedsList from '../helpers/breedsList';

export default class CreateBreeds implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
      console.log(`seed`)
    await connection
      .createQueryBuilder()
      .insert()
      .into(Breed)
      .values(breedsList)
    .execute();
  }
}