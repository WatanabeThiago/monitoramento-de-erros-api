import { Router } from 'express';

import ProductsController from '../controllers/ProductsController';

import { create, update } from './validations/users.validation';

const usersController = new ProductsController();

const usersRouter = Router();

usersRouter.get('/', usersController.index);

usersRouter.post('/', create, usersController.create);

usersRouter.put('/:id', update, usersController.update);

usersRouter.delete('/:id', usersController.delete);

export default usersRouter;
