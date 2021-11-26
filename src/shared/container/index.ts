import { container } from 'tsyringe';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import FakeProductsRepository from '@modules/products/repositories/fakes/FakeProductsRepository';
import IEnvironmentsRepository from '@modules/products/repositories/IEnvironmentsRepository';
import FakeEnvironmentsRepository from '@modules/products/repositories/fakes/FakeEnvironmentsRepository';
import IErrorsRepository from '@modules/errors/repositories/IErrorsRepository';
import FakeErrorsRepository from '@modules/errors/repositories/fakes/FakeErrorsRepository';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  FakeProductsRepository,
);

container.registerSingleton<IEnvironmentsRepository>(
  'EnvironmentsRepository',
  FakeEnvironmentsRepository,
);

container.registerSingleton<IErrorsRepository>(
  'ErrorsRepository',
  FakeErrorsRepository,
);
