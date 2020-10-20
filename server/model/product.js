const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const ObjectId = Scheme.ObjectId;

const ProductSheme = new Scheme({
  name: { type: String, required: true, max:[60,'最大60文字までです']},
  price: Number,
  description: String,
  coverImage: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingtext1: String,
  headingtext2: String,
  headingtext3: String
});

module.exports = mongoose.model('Product', ProductSheme);
