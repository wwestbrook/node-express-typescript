import express from 'express';
// import path from 'path';
// import rootDir from '../utils/path';
import products from '../mocks/mock-products';

const router = express.Router();
router.get('/products', (req, res) => {
	// res.sendFile(path.join(rootDir, 'src', 'views', 'product.html'));
	res.render('product.pug', { docTitle: 'Pug-Based Add Item', isProductPath: true });
});

router.post('/products', (req, res) => {
	products.push({ title: req.body.title, price: 19.99, description: 'something here' });
	res.redirect('/');
});

export default router;
