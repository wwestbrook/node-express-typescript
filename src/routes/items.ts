import express from 'express';
import * as productsController from '../controllers/products-controller';

const router = express.Router();
router.get('/',	productsController.getProductList);

export default router;
