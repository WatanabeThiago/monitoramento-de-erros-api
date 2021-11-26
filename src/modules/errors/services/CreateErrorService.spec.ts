import FakeErrorsRepository from '../repositories/fakes/FakeErrorsRepository';
import CreateErrorService from './CreateErrorService';

let fakeErrorsRepository: FakeErrorsRepository;

let createErrorService: CreateErrorService;

describe('CreateErrorService', () => {
  beforeEach(() => {
    fakeErrorsRepository = new FakeErrorsRepository();

    createErrorService = new CreateErrorService(fakeErrorsRepository);
  });

  it('1. Should be able to register.', async () => {
    const error = await createErrorService.execute({
      environment_id: 1,
      project_id: 1,
    });

    expect(error).toHaveProperty('id');
  });
});
