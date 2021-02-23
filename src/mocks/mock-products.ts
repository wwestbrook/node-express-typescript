import Product from '../models/product';

const products: Product[] = [];
products.push({
	title: 'the lord of the rings',
	price: 12.99,
	description: 'The first book in Tolkiens classic triology.',
	imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrai_NUZbxQsEXlQQYrpuZO0_K8svPEF1RA&usqp=CAU'
});
products.push({
	title: 'the two towers',
	price: 19.99,
	description: 'The exciting second chapter in the Lord of the Rings saga.',
	// eslint-disable-next-line max-len
	imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_q7K1SCUldefUl1M0JSdRSzq1DZj1mr17yFrI-ggQWjKTweqLsBmTK7yzclFdMBLGVa2ToUs&usqp=CAc'
});
products.push({
	title: 'the return of the king',
	price: 15.99,
	description: 'The epic conclusion to the trilogy.',
	// eslint-disable-next-line max-len
	imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk95R0D_vpqNNnRoqP-7lTKBfeo3ixBuz8JBv4RnRPy71GE4wp6IGjt5FFq0r8NBd-WSWmfoM&usqp=CAc'
});

export default products;
