import { Router } from 'express';

import ProductsController from '../controllers/ProductsController';

import { create, update } from './validations/products.validation';

const productsController = new ProductsController();

const productsRouter = Router();

productsRouter.get('/', productsController.index);

productsRouter.post('/', create, productsController.create);

productsRouter.put('/:id', update, productsController.update);

productsRouter.delete('/:id', productsController.delete);

export default productsRouter;
