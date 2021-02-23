import express from 'express';
import path from 'path';
import rootDir from '../utils/path';
import products from '../mocks/mock-products';

const router = express.Router();
router.get('/add-item', (req, res) => {
	res.sendFile(path.join(rootDir, 'src', 'views', 'add-item.html'));
});

router.post('/add-item', (req, res) => {
	products.push({
		title: req.body.title,
		price: 19.99,
		description: 'something here',
		imgUrl: ''
	});
	res.redirect('/');
});

export default router;
