import { Request, Response } from 'express';

export function get(req: Request, res: Response): void {
	res.render('home', { pageTitle: 'Woodie\'s Emporium', menuClass: 'home' });
}
