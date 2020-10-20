const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const SampleDb = require('./sample-db');

const productRouter = require('./routes/products');

mongoose.connect(config.DB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    const sampleDb = new SampleDb();
    sampleDb.initDb();
});

const app = express();

app.use('/api/v1/products', productRouter);

const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
  console.log('I am listening.')
});
