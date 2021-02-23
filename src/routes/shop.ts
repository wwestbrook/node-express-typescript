import express from 'express';
// import products from '../mocks/mock-products';
import path from 'path';
import rootDir from '../utils/path';

const router = express.Router();
router.get('/', (req, res) => {
	res.sendFile(path.join(rootDir, 'src', 'views', 'item-list.html'));
});

export default router;
