import * as adminController from '../controllers/admin-controller';
import * as cartController from '../controllers/cart-controller';
import * as productsController from '../controllers/products-controller';
import express from 'express';

const router = express.Router();

// Cart Routes
router.get('/cart', cartController.get);

// Products / Items Routs
router.get('/', productsController.getProductList);
router.get('/products', productsController.getProductList);

// Admin Routes
router.use('/admin', router.get('/add-item', adminController.getAddProduct));
router.use('/admin', router.post('/add-item', adminController.postAddProduct));

export default router;
