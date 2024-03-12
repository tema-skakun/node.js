const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require('./routes/post-routes');
const postAPIRoutes = require('./routes/api-post-routes');
const contactRoutes = require('./routes/contact-routes');
const contactAPIRoutes = require('./routes/api-contact-routes');
const createPath = require('./helpers/create-path');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
const uri = "mongodb+srv://artemskakun:1373196_fF@cluster0.9p4zuje.mongodb.net/node_blog?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then((res) = console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
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
