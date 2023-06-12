const express = require('express');
const booksRoute = require('./routes');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use('/api', booksRoute);

app.listen(PORT, () => {
    console.log(`App is running on Port: ${PORT}`);
});