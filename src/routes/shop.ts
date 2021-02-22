import express from 'express';
import products from '../mocks/mock-products';
// import path from 'path';
// import rootDir from '../utils/path';

const router = express.Router();
router.get('/', (req, res) => {
	// res.sendFile(path.join(rootDir, 'src', 'views', 'shop.html'));
	console.log(products);
	res.render('shop.pug', { products, docTitle: 'Pug-Based Item Shop' });
});

export default router;
