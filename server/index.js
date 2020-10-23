const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const config = require('./config/dev');
const SampleDb = require('./sample-db');
const productRouter = require('./routes/products');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    const sampleDb = new SampleDb();
    sampleDb.initDb();
  });

const app = express();

app.use('/api/v1/products', productRouter);

const appPath = path.join(__dirname, '..', 'dist', 'reservation-app');
app.use(express.static(appPath));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(appPath, 'index.html'));
});

const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
  console.log('I am listening.')
});
