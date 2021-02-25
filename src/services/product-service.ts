import * as fs from 'fs';
import path from 'path';
import ProductModel from '../models/product';

export function add(item: ProductModel): void {
  const p = path.join(path.dirname(getPath()), '..', 'src', 'data', 'products.json');
  fs.readFile(p, (error, data) => {
    if (!error) {
      //products = JSON.parse(data.toString());
    }
    // products.push(item);
    // fs.writeFile(p, JSON.stringify(products), (error) => {
    //   console.log(error);
    // })
  })
}
export function get(callback: Function): ProductModel[] {
  const products: ProductModel[] = [];
  const p = path.join(path.dirname(getPath()), '..', 'src', 'data', 'products.json');
  fs.readFile(p, (error, data) => {
    if (!error) {
      const jsonProducts = JSON.parse(data.toString());
      jsonProducts.forEach((x: { id:number, title: string; price: number; description: string; imgUrl: string; }) => {
        products.push(new ProductModel(x.id, x.title, x.price, x.description, x.imgUrl));
      });
      console.log('inside, should be first');
    } else {
      console.log(error);
    }
    callback(products);
  })
  console.log('outside, should be last');
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
