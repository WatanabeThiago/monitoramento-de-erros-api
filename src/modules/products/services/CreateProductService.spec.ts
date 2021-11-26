import AppError from '@shared/errors/AppError';

import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import CreateProductService from './CreateProductService';

let fakeProductsRepository: FakeProductsRepository;

let createProductService: CreateProductService;

describe('CreateProductService', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();

    createProductService = new CreateProductService(fakeProductsRepository);
  });

  it('1. Should be able to create a new product', async () => {
    const product = await createProductService.execute({
      name: 'FixFy',
    });

    expect(product).toHaveProperty('id');
    expect(product.name).toBe('FixFy');
  });

  it('2. Should not be able to create product with same name', async () => {
    await fakeProductsRepository.create({ name: 'PitBull' });

    await expect(
      createProductService.execute({
        name: 'PitBull',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
