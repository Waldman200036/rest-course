/* jshint esversion: 6 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// eslint-disable-next-line no-unused-vars
const db = mongoose.connect('mongodb://localhost/bookAPI', {
  useNewUrlParser: true, useUnifiedTopology: true
});
const port = process.env.PORT || 4000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, resp) => {
  resp.send('Welcome to my API!');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});
