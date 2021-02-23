import { Request, Response, NextFunction } from 'express';

export function get404Error(req: Request, res: Response, next: NextFunction): void {
  res.status(404).render('404', { pageTitle: '404 Invalid Page', addItemClass: '', listItemClass: '' });
}