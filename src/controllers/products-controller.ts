import * as service from '../services/product-service';
import { Request, Response } from 'express';
import Product from '../models/product';

export function get(req: Request, res: Response): void {
	service.get((data: Product[]) => {
		res.render('shop/index', {
			pageTitle: 'Products',
			products: data,
			menuClass: 'shop'
		});
	});
}

export function getById(req: Request, res: Response): void {
	res.render('shop/product-detail', { pageTitle: 'Product Detail', menuClass: '' });
}
