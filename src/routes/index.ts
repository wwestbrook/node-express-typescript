import express from 'express';
import * as cartController from '../controllers/cart-controller';
import * as productsController from '../controllers/products-controller';

const router = express.Router();

// Cart Routes
router.get('/cart', cartController.get);

// Products / Items Routs
router.get('/',	productsController.getProductList);
router.get('/products',	productsController.getProductList);

// Admin Routes
router.use('/admin', router.get('/add-item',	productsController.getAddProduct));
router.use('/admin', router.post('/add-item', productsController.postAddProduct));

export default router;
