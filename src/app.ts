// import * as fs from 'fs';
// fs.writeFileSync('_hello.txt', 'hello from node.js!');
// import * as http from 'http';
import express from 'express';

const app = express();
app.use('/add-product', (req, res) => {
	res.send('<h1>Add Product Page.</h1>');
});

app.use('/', (req, res) => {
	res.send('<h1>Express / Node / Typescript default route.</h1>');
});

// app.get('/', (req, res) => {
// 	res.send('Hello World');
// });

app.listen(3000);
