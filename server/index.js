const express = require('express');

const app = express();

app.get('/products', (req, res) => {
  res.json({ 'success': true });
});

const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
  console.log('I am listening.')
});
