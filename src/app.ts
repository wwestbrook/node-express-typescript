import * as errorController from './controllers/error-controller';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import router from './routes';

const app = express();

// ejs set up
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);

app.use(errorController.get404Error);

app.listen(3000);
