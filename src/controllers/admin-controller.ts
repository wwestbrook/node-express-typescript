import * as service from '../services/product-service';
import { Request, Response } from 'express';
import Product from '../models/product';

export function getProductList(req: Request, res: Response): void {
	service.get((data: Product[]) => {
		res.render('admin/products/index', {
			pageTitle: 'Admin - Item List',
			products: data,
			menuClass: 'admin/products'
		});
	});
}

export function getAddProduct(req: Request, res: Response): void {
	res.render('admin/products/add-item', { pageTitle: 'Admin - Add an Item', menuClass: 'admin/add-item' });
}

export function getEditProduct(req: Request, res: Response): void {
	res.render('admin/products/edit-item', { pageTitle: 'Admin - Edit an Item', menuClass: '' });
}

export function postAddProduct(req: Request, res: Response): void {
	service.add(new Product(+req.body.id, req.body.title, +req.body.price, req.body.description, req.body.imgUrl));
	res.redirect('/admin/products');
}
