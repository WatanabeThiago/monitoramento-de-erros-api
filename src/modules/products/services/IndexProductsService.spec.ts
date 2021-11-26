import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import IndexProductsService from './IndexProductsService';

let fakeProductsRepository: FakeProductsRepository;

let indexProductsService: IndexProductsService;

describe('IndexProductsService', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();

    indexProductsService = new IndexProductsService(fakeProductsRepository);
  });

  it('1. Should be able to index products', async () => {
    const products = await indexProductsService.execute();

    expect(products).toStrictEqual([]);
  });
});
