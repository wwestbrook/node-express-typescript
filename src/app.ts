// import * as fs from 'fs';
// fs.writeFileSync('_hello.txt', 'hello from node.js!');
// import * as http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import adminRouter from './routes/admin';
import shopRouter from './routes/shop';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRouter);
app.use(shopRouter);

app.use((req, res) => {
	res.status(404).send('<h2>Page Not Found - 404</h2>');
});

app.listen(3000);
