import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import { v4 } from 'uuid';
import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private productsRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    phone,
    email,
    password,
    profile_photo,
  }: ICreateUserDTO): Promise<User> {
    const phoneAlreadyUsed = await this.productsRepository.findByPhone(phone);

    if (phoneAlreadyUsed) {
      throw new AppError('Telefone já registrado.', 409, 'phone_already_used');
    }

    if (email) {
      const emailAreadyUsed = await this.productsRepository.findByEmail(email);
      if (emailAreadyUsed) {
        throw new AppError('Email já registrado.', 409, 'email_already_used');
      }
    }

    if (password) {
      // encriptar senha
    }

    const product = this.productsRepository.create({
      // refatorar esse UUID
      id: v4(),
      name,
      phone,
      email,
      password,
      profile_photo,
    });

    await this.productsRepository.save(product);

    return product;
  }
}

export default CreateUserService;
