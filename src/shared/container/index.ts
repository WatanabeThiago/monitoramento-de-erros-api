import { container } from 'tsyringe';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import IEnvironmentsRepository from '@modules/products/repositories/IEnvironmentsRepository';
import IErrorsRepository from '@modules/errors/repositories/IErrorsRepository';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';
import ErrorsRepository from '@modules/errors/infra/typeorm/repositories/ErrorsRepository';
import EnvironmentsRepository from '@modules/products/infra/typeorm/repositories/EnvironmentsRepository';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<IEnvironmentsRepository>(
  'EnvironmentsRepository',
  EnvironmentsRepository,
);

container.registerSingleton<IErrorsRepository>(
  'ErrorsRepository',
  ErrorsRepository,
);
