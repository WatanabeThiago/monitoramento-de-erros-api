import { Router } from 'express';
import ErrorsController from '../controllers/ErrorsController';

const errorsController = new ErrorsController();

const errorsRouter = Router();

errorsRouter.get('/', errorsController.index);

errorsRouter.post('/', errorsController.create);

export default errorsRouter;
