import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import adminRouter from './routes/admin';
import shopRouter from './routes/shop';

const app = express();
// pug config
app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req, res) => {
	res.render('404.pug', { docTitle: 'Pug/Jade 404 Page' });
});

app.listen(3000);
