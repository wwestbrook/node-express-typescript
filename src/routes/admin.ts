import express from 'express';
import path from 'path';
import rootDir from '../utils/path';
import products from '../mocks/mock-products';

const router = express.Router();
router.get('/products', (req, res) => {
	res.sendFile(path.join(rootDir, 'src', 'views', 'product.html'));
});

router.post('/products', (req, res) => {
	products.push({ title: req.body.title })
	console.log(products);
	res.redirect('/');
});

export default router;
