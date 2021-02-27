import * as service from '../services/product-service';
import { Request, Response } from 'express';
import Product from '../models/product';

export function getProductList(req: Request, res: Response): void {
	service.get((data: Product[]) => {
		res.render('admin/item-list', {
			pageTitle: 'List of Items',
			products: data,
			menuClass: 'product-list'
		});
	});
}

export function getAddProduct(req: Request, res: Response): void {
	res.render('admin/add-item', { pageTitle: 'Add an Item', menuClass: 'add-item' });
}

export function postAddProduct(req: Request, res: Response): void {
	service.add(new Product(+req.body.id, req.body.title, +req.body.price, req.body.description, req.body.imgUrl));
	res.redirect('/');
}
