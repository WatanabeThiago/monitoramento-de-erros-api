import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import IndexEnvironmentsService from '../../../services/IndexEnvironmentsService';

export default class EnvironmentsController {
  public async index(req: Request, res: Response): Promise<void> {
    const indexEnvironmentsService = container.resolve(
      IndexEnvironmentsService,
    );

    const environments = await indexEnvironmentsService.execute();

    res.json(classToClass(environments));
  }
}
