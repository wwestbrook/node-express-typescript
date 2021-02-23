import express from 'express';
import handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import path from 'path';
import adminRouter from './routes/admin';
import shopRouter from './routes/shop';
// import rootDir from './utils/path';

const app = express();

// express-handlebars set up
app.engine('hbs', handlebars({
	extname: 'hbs',
	layoutsDir: 'src/views/layouts',
	defaultLayout: 'main'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req, res) => {
	// res.status(404).sendFile(path.join(rootDir, 'src', 'views', '404.html'));
	res.status(404).render('404', { docTitle: 'HBS - Page not found. 404' });
});

app.listen(3000);
