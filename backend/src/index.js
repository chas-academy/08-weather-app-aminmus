const express = require('express');
require('dotenv').config();

const app = express();

app.use('/api', require('./routes/routes'));

app.listen(8080, () => console.log('Backend is running'));
