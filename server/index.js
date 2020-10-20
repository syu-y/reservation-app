const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const SampleDb = require('./sample-db');

mongoose.connect(config.DB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    const sampleDb = new SampleDb();
    sampleDb.seeDb();
});

const app = express();

app.get('/products', (req, res) => {
  res.json({ 'success': true });
});

const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
  console.log('I am listening.')
});
