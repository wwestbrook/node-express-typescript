import * as fs from 'fs';
import ProductModel from '../models/product';
import path from 'path';

export function add(item: ProductModel): void {
	readFile((products: ProductModel[]) => {
		// item.id = Math.random();
		products.push(item);
		const p = path.join(path.dirname(getPath()), '..', 'src', 'data', 'products.json');
		fs.writeFile(p, JSON.stringify(products), error => {
			console.log(error);
		});
	});
}
export function get(callback: Function): ProductModel[] {
	return readFile(callback);
}
export function getById(id: number, callback: Function): ProductModel | undefined {
	return find(id, callback);
}

function find(id: number, callback: Function): ProductModel | undefined {
	let product: ProductModel | undefined;
	readFile((products: ProductModel[]) => {
		product = products.find(x => x.id === id);
		callback(product);
	});
	return product;
}

function readFile(callback: Function): ProductModel[] {
	const products: ProductModel[] = [];
	const p = path.join(path.dirname(getPath()), '..', 'src', 'data', 'products.json');
	fs.readFile(p, (error, data) => {
		if (!error) {
			const jsonProducts = JSON.parse(data.toString());
			jsonProducts.forEach((x: { id: number; title: string; price: number; description: string; imgUrl: string }) => {
				products.push(new ProductModel(x.id, x.title, x.price, x.description, x.imgUrl));
			});
		} else {
			console.log(error);
		}
		callback(products);
	});
	return products;
}
function getPath(): string {
	const req = require.main;
	let rootDir: string;

	if (req) {
		rootDir = req.filename;
	} else {
		rootDir = __dirname;
	}
	return rootDir;
}
