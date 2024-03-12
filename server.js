import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import chalk from 'chalk';
import postRoutes from './routes/post-routes.js';
import postAPIRoutes from './routes/api-post-routes.js';
import contactRoutes from './routes/contact-routes.js';
import contactAPIRoutes from './routes/api-contact-routes.js';
import createPath from './helpers/create-path.js';

const errorMsg = chalk.bgRedBright.whiteBright;
const successMsg = chalk.bgGreenBright.whiteBright;

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
const uri = "mongodb+srv://artemskakun:1373196_fF@cluster0.9p4zuje.mongodb.net/node_blog?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then((res) => console.log(successMsg('Connected to DB')))
  .catch((error) => console.error(errorMsg(error)));

app.listen(PORT, (error) => {
  error ? console.error(errorMsg(error)) : console.log(successMsg(`listening port ${PORT}`));
});

app.use(express.urlencoded({ extended: false }));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static('styles'));

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), { title });
});

app.use(postRoutes);
app.use(postAPIRoutes);
app.use(contactRoutes);
app.use(contactAPIRoutes);

app.use((req, res) => {
  const title = 'Error Page';
  res
    .status(404)
    .render(createPath('error'), { title });
});
