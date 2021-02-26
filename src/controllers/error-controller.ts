import {Request, Response} from 'express';

export function get404Error(req: Request, res: Response): void {
  res.status(404).render('404', {pageTitle: '404 Invalid Page', menuClass: ''});
}
