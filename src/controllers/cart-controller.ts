import { Request, Response } from 'express';

export function getCart(req: Request, res: Response): void {
  res.render('shop/cart', { pageTitle: 'Your Cart', menuClass: 'cart' });
}

export function getCheckOut(req: Request, res: Response): void {
  res.render('shop/check-out', { pageTitle: 'Check Out', menuClass: 'cart' });
}
