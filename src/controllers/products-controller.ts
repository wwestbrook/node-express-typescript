import * as service from '../services/product-service';
import { Request, Response } from 'express';
import Product from '../models/product';

export function get(req: Request, res: Response): void {
	service.get((data: Product[]) => {
		res.render('shop/index', {
			pageTitle: 'Products',
			products: data,
			menuClass: 'shop',
			isAdmin: false
		});
	});
}

export function getById(req: Request, res: Response): void {
	const id = +req.params.id;
	console.log(id);
	res.render('shop/details', { pageTitle: 'Product Detail', menuClass: '' });
}
