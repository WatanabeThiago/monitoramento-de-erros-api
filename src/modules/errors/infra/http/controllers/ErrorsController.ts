import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import IndexErrorsService from '../../../services/IndexErrorsService';
import CreateErrorService from '../../../services/CreateErrorService';

export default class ErrorsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const createErrorService = container.resolve(CreateErrorService);

    const error = await createErrorService.execute(req.body);

    return res.status(201).json(classToClass(error));
  }

  public async index(req: Request, res: Response): Promise<void> {
    const indexErrorsService = container.resolve(IndexErrorsService);
    const { order_by, environment_id, project_id, ip, page, limit } = req.query;
    const errors = await indexErrorsService.execute({
      order: {
        created_at: (order_by as 'ASC' | 'DESC') || 'ASC',
      },
      filters: {
        environment_id: environment_id as number | undefined,
        project_id: project_id as number | undefined,
        ip: ip as string | undefined,
      },
      page: page as number | undefined,
      limit: limit as number | undefined,
    });

    res.json(errors);
  }
}
