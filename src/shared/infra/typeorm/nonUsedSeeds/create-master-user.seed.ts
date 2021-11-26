import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';

import User from '@modules/users/infra/typeorm/entities/User';

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          name: 'Master',
          email: 'master@pandoris.com',
          cpf: '071432303354154',
          accepted_terms: true,
          password:
            '$2a$08$gfmMBc01UDYv9yUo70SKD.YbzOQPo3CEhc4OAobdnw233iCZjN4Ey',
          role_ids: [RolesEnum.Admin],
          gender: 'M',
          born_at: '2001-10-25',
        },
      ])
      .execute();
  }
}
