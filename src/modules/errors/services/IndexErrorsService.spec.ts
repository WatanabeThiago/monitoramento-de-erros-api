import FakeErrorsRepository from '../repositories/fakes/FakeErrorsRepository';
import IndexErrorsService from './IndexErrorsService';

let fakeErrorsRepository: FakeErrorsRepository;

let indexBreedService: IndexErrorsService;

describe('IndexErrorsService', () => {
  beforeEach(() => {
    fakeErrorsRepository = new FakeErrorsRepository();

    indexBreedService = new IndexErrorsService(fakeErrorsRepository);
  });

  it('1. Should be able to index errors.', async () => {
    const errors = await indexBreedService.execute({
      filters: {
        environment_id: 1,
        project_id: 1,
      },
      order: {
        created_at: 'DESC',
      },
    });

    expect(errors).toStrictEqual([]);
  });
});
