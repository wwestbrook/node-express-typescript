import express from 'express';
import path from 'path';
import rootDir from '../utils/path';

const router = express.Router();
router.get('/products', (req, res) => {
	console.log(rootDir);
	res.sendFile(path.join(rootDir, 'src', 'views', 'product.html'));
});

router.post('/products', (req, res) => {
	console.log(req.body);
	res.redirect('/');
});

export default router;
