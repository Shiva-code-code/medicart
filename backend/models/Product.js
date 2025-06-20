import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  desc: String,
  dosage: String,
  price: String,
  benefits: [String]
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
