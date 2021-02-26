import {Request, Response} from 'express';

export function get(req: Request, res: Response): void {
  res.render('shop/cart', {pageTitle: 'Your Cart', menuClass: 'cart'});
}
