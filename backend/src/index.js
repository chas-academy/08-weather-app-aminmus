const express = require('express');
require('dotenv').config();

const app = express();

app.use('/api', require('./routes/routes'));

app.listen(process.env.PORT, () => console.log('Backend is running'));
