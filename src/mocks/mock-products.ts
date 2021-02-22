import Product from '../models/product';

const products: Product[] = [];
products.push({ title: 'the lord of the rings', price: 12.99, description: 'The first book in Tolkien\'s classic triology.' });
products.push({ title: 'the two towers', price: 19.99, description: 'The exciting second chapter in the Lord of the Rings saga.' });
products.push({ title: 'the return of the king', price: 15.99, description: 'The epic conclusion to the trilogy.' });

export default products;
