/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-return-assign */
import { injectable, inject } from 'tsyringe';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import IProductsORMRepository from '@modules/products/repositories/IProductsORMRepository';

@injectable()
class SynchronizeDatabasesServices {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('ProductsORMRepository')
    private productsORMRepository: IProductsORMRepository,
  ) {}

  public async execute(): Promise<any> {
    console.log(`⚡ [TypeSense] Resetando as collections...`);
    await this.productsRepository.restart();

    console.log(`⚡ [TypeSense] Collections resetadas.`);

    const allProducts = await this.productsORMRepository.index();
    console.log(allProducts[0]);
    console.log(`⚡ [TypeSense] Inserindo ${allProducts.length} no TypeSense.`);

    await this.productsRepository.insert(allProducts);
    console.log(`⚡ [TypeSense] Produtos inseridos com sucesso.`);
  }
}

export default SynchronizeDatabasesServices;
