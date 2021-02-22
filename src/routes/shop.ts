import express from 'express';
import products from '../mocks/mock-products';

const router = express.Router();
router.get('/', (req, res) => {
	res.render('shop.pug', { products, docTitle: 'Pug/Jade BookStore', isShopPath: true });
});

export default router;
