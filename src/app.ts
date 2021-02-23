import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import adminRouter from './routes/admin';
import itemsRouter from './routes/items';

const app = express();

// ejs set up
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/admin', adminRouter);
app.use(itemsRouter);

app.use((req, res) => {
	res.status(404).render('404', { pageTitle: '404 Invalid Page', addItemClass: '', listItemClass: '' });
});

app.listen(3000);
