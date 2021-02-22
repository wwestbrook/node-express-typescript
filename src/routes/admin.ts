import express from 'express';
import products from '../mocks/mock-products';

const router = express.Router();
router.get('/products', (req, res) => {
	res.render('product.pug', { docTitle: 'Pug/Jade Add Book', isProductPath: true });
});

router.post('/products', (req, res) => {
	products.push({ title: req.body.title, price: 19.99, description: 'something here' });
	res.redirect('/');
});

export default router;
