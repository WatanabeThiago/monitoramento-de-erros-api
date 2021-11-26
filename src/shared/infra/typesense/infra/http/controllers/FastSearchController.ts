import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import IndexCollectionsService from '../../../services/IndexCollectionsService';

export default class ProductController {
  public async index(req: Request, res: Response): Promise<Response> {
    const indexCollectionsService = container.resolve(IndexCollectionsService);

    const collections = await indexCollectionsService.execute();

    return res.json(classToClass(collections));
  }
}
