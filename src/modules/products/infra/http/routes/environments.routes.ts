import { Router } from 'express';

import EnvironmentsController from '../controllers/EnvironmentsController';

const environmentsController = new EnvironmentsController();

const environmentsRouter = Router();

environmentsRouter.get('/', environmentsController.index);

export default environmentsRouter;
