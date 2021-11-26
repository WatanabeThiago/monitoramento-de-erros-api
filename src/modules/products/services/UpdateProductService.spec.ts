import AppError from '@shared/errors/AppError';
import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import UpdateProductService from './UpdateProductService';

let fakeProductsRepository: FakeProductsRepository;

let updateBreedService: UpdateProductService;

describe('UpdateProductService', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();

    updateBreedService = new UpdateProductService(fakeProductsRepository);
  });

  it('1. Should be able to update a product // Deve ser capaz de atualizar uma raca.', async () => {
    const product = await fakeProductsRepository.create({
      name: 'RepFy',
    });

    const saveSpy = jest.spyOn(fakeProductsRepository, 'save');

    const product_updated = await updateBreedService.execute({
      id: product.id,
      name: 'FixFy',
    });

    expect(saveSpy).toBeCalledTimes(1);
    expect(product_updated.name).toBe('FixFy');
  });

  it('2. Should not be able to update a invalid product.', async () => {
    const saveSpy = jest.spyOn(fakeProductsRepository, 'save');
    expect(
      updateBreedService.execute({
        id: 999,
        name: 'FixFy',
      }),
    ).rejects.toBeInstanceOf(AppError);
    expect(saveSpy).toBeCalledTimes(0);
  });
});
