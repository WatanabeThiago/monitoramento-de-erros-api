import errorsRouter from '@modules/errors/infra/http/routes/errors.routes';
import environmentsRouter from '@modules/products/infra/http/routes/environments.routes';
import usersRouter from '@modules/products/infra/http/routes/users.routes';
import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.status(200).json({ message: 'ok' });
});

routes.use('/users', usersRouter);
routes.use('/environments', environmentsRouter);
routes.use('/errors', errorsRouter);

export default routes;
