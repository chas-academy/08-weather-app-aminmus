const express = require('express');
const app = express();

app.use('/api', require('./routes/routes'));

app.listen(8080, () => console.log('Backend is running'));
