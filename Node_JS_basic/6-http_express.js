const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});
app.listen(1245, (err) => {
  if (err) {
    console.log(err);
  }
});

module.exports = app;
