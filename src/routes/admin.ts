import express from 'express';
import * as productsController from '../controllers/products-controller';

const router = express.Router();

router.get('/add-item',	productsController.getAddProduct);

router.post('/add-item', productsController.postAddProduct);

export default router;
