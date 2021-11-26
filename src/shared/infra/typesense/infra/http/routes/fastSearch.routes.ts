import { Router } from 'express';
import FastSearchController from '../controllers/FastSearchController';

const fastSearchController = new FastSearchController();

const fastSearchRouter = Router({ mergeParams: true });

fastSearchRouter.get('/collections', fastSearchController.index);

export default fastSearchRouter;
