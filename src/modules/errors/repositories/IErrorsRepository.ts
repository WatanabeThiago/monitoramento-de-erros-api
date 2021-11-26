import IPaginatedResponse from '@shared/interfaces/IPaginatedResponse';
import Error from '../infra/typeorm/entities/Error';
import ICreateErrorDTO from '../dtos/ICreateErrorDTO';
import IFindErrorDTO from '../dtos/IFindErrorDTO';

export default interface IErrorsRepository {
  index(data: IFindErrorDTO): Promise<IPaginatedResponse<Error>>;
  findById(id: number): Promise<Error | undefined>;
  create(data: ICreateErrorDTO): Error;
  save(data: Error): Promise<Error>;
  delete(id: number): Promise<void>;
}
