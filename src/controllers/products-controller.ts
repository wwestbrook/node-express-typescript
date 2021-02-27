import * as service from '../services/product-service';
import { Request, Response } from 'express';
import Product from '../models/product';

export function getProductList(req: Request, res: Response): void {
	service.get((data: Product[]) => {
		res.render('shop/item-list', {
			pageTitle: 'List of Items',
			products: data,
			menuClass: 'product-list'
		});
	});
}
