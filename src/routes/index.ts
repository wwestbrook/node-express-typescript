import * as adminController from '../controllers/admin-controller';
import * as cartController from '../controllers/cart-controller';
import * as homeController from '../controllers/home-controller';
import * as productsController from '../controllers/products-controller';
import express from 'express';

const router = express.Router();

// Admin Routes
router.get('/admin', adminController.getProductList);
router.use('/admin', router.get('/products', adminController.getProductList));
router.use('/admin', router.get('/products/add-item', adminController.getAddProduct));
router.use('/admin', router.post('/products/add-item', adminController.postAddProduct));
router.use('/admin', router.get('/products/edit-item', adminController.getEditProduct));

// Shop Routes
router.get('/shop', productsController.get);
router.use('/shop', router.get('/cart', cartController.getCart));
router.use('/shop', router.get('/check-out', cartController.getCheckOut));
router.use('/shop', router.get('/product-detail', productsController.getById));

router.get('/', homeController.get);
// router.get('/products', productsController.get);

export default router;
