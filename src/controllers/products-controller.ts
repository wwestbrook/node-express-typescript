import { Request, Response, NextFunction } from 'express';
import Product from '../models/product';
import * as service from '../services/product-service'

export function getProductList(req: Request, res: Response, next: NextFunction): void {
	res.render('item-list', {
		pageTitle: 'List of Items',
		products: service.get(),
		listItemClass: 'active',
		addItemClass: ''
	});
}

export function getAddProduct(req: Request, res: Response, next: NextFunction): void {
	res.render('add-item', { pageTitle: 'Add an Item', addItemClass: 'active', listItemClass: '' });
}

export function postAddProduct(req: Request, res: Response, next: NextFunction): void {
	service.add(new Product(req.body.title, +req.body.price, req.body.description, req.body.imgUrl));
	res.redirect('/');
}