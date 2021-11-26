import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import IndexProductsService from '../../../services/IndexProductsService';
import CreateProductService from '../../../services/CreateProductService';
import UpdateProductService from '../../../services/UpdateProductService';
import DeleteProductService from '../../../services/DeleteProductService';

export default class ProductsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const createProductService = container.resolve(CreateProductService);

    const { name } = req.body;

    const product = await createProductService.execute({ name });

    return res.status(201).json(classToClass(product));
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name } = req.body;

    const updateProductService = container.resolve(UpdateProductService);

    const product = await updateProductService.execute({
      id: Number(id),
      name,
    });

    return res.json(classToClass(product));
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const deleteProductService = container.resolve(DeleteProductService);

    await deleteProductService.execute({ id: Number(id) });

    res.status(204).json();
  }

  public async index(req: Request, res: Response): Promise<void> {
    const indexProductsService = container.resolve(IndexProductsService);

    const products = await indexProductsService.execute();

    res.json(products);
  }
}
