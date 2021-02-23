import express from 'express';
import products from '../mocks/mock-products';

const router = express.Router();
router.get('/', (req, res) => {
	res.render('item-list', {
		pageTitle: 'List of Items',
		products,
		listItemClass: 'active',
		addItemClass: ''
	});
});

export default router;
