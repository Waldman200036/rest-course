/* jshint esversion: 6 */
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, resp) => {
  resp.send('Welcome to my API!');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});
