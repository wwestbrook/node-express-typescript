import {Request, Response} from 'express';
import Product from '../models/product';
import * as service from '../services/product-service';

export function getProductList(req: Request, res: Response): void {
	service.get((data: Product[]) => {
		res.render('item-list', {
			pageTitle: 'List of Items',
			products: data,
			listItemClass: 'active',
			addItemClass: ''
		});
	});
}

export function getAddProduct(req: Request, res: Response): void {
	res.render('add-item', {pageTitle: 'Add an Item', addItemClass: 'active', listItemClass: ''});
}

export function postAddProduct(req: Request, res: Response): void {
	service.add(new Product(req.body.title, +req.body.price, req.body.description, req.body.imgUrl));
	res.redirect('/');
}