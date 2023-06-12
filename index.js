const express = require('express');
const booskRoute = require('./routes');
const app = express();
require('dotenv').config();

app.use('/api', booskRoute);

app.listen(3000, () => {
    console.log(`App is running on Port: 3000`);
});