import express from 'express';
import products from '../mocks/mock-products';

const router = express.Router();
router.get('/add-item', (req, res) => {
	res.render('add-item', { docTitle: 'HBS - Add a Book', productClass: 'active' });
});

router.post('/add-item', (req, res) => {
	products.push({
		title: req.body.title,
		price: req.body.price,
		description: req.body.description,
		imgUrl: req.body.imgUrl
	});
	res.redirect('/');
});

export default router;
