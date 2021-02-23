import express from 'express';
import products from '../mocks/mock-products';

const router = express.Router();
router.get('/', (req, res) => {
	res.render('item-list', {
		docTitle: 'HBS - Books List',
		products,
		hasItems: products.length > 0,
		shopClass: 'active'
	});
});

export default router;
