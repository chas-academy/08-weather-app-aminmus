const express = require('express');
const app = express();

app.use('/api', require('./routes/routes'));

app.get('/', function (req, res) {
  res.send('hello world')
});

app.listen(8080, () => console.log('Backend is running'));

