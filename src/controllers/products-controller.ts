import { Request, Response, NextFunction } from 'express';
import products from '../mocks/mock-products';

export function getProductList(req: Request, res: Response, next: NextFunction): void {
	res.render('item-list', {
		pageTitle: 'List of Items',
		products,
		listItemClass: 'active',
		addItemClass: ''
	});
}

export function getAddProduct(req: Request, res: Response, next: NextFunction): void {
	res.render('add-item', { pageTitle: 'Add an Item', addItemClass: 'active', listItemClass: '' });
}

export function postAddProduct(req: Request, res: Response, next: NextFunction): void {
	products.push({
		title: req.body.title,
		price: req.body.price,
		description: req.body.description,
		imgUrl: req.body.imgUrl
	});
	res.redirect('/');
}