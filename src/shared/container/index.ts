import { container } from 'tsyringe';

import IErrorsRepository from '@modules/errors/repositories/IErrorsRepository';
import ErrorsRepository from '@modules/errors/infra/typeorm/repositories/ErrorsRepository';
import IUsersRepository from '@modules/products/repositories/IUsersRepository';
import UsersRepository from '@modules/products/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IErrorsRepository>(
  'ErrorsRepository',
  ErrorsRepository,
);
