import express from 'express';

const router = express.Router();
router.get('/add-product', (req, res) => {
	res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>');
});

router.post('/product', (req, res) => {
	console.log(req.body);
	res.redirect('/');
});

export default router;
