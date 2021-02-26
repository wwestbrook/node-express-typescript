import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
// import adminRouter from './routes/admin';
// import itemsRouter from './routes/items';
import router from './routes';
import * as errorController from './controllers/error-controller';

const app = express();

// ejs set up
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.use('/admin', adminRouter);
// app.use(itemsRouter);
app.use(router);

app.use(errorController.get404Error);

app.listen(3000);
