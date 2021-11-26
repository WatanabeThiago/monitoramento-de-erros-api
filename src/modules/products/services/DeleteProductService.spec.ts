import AppError from '@shared/errors/AppError';

import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import DeleteProductService from './DeleteProductService';

let fakeProductsRepository: FakeProductsRepository;

let deleteBreedService: DeleteProductService;

describe('DeleteProductService', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();

    deleteBreedService = new DeleteProductService(fakeProductsRepository);
  });

  it('1. Should be able to delete a breed', async () => {
    const product = await fakeProductsRepository.create({
      name: 'RepFy',
    });

    const deleteSpy = jest.spyOn(fakeProductsRepository, 'delete');

    await deleteBreedService.execute({ id: product.id });

    expect(deleteSpy).toBeCalledWith(product.id);
  });

  it('2. Should not be able to delete a invalid product', async () => {
    await expect(deleteBreedService.execute({ id: 3 })).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
