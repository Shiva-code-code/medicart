// seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const products = [
  {
    name: 'Pain Relief Tablets',
    image: 'fepanil-120.png',
    desc: 'Effective pain relief for headaches, muscle aches, and fever.',
    dosage: 'Take 1-2 tablets every 4–6 hours as needed. Max 8/day.',
    price: 45,
    benefits: [
      'Relieves pain and reduces fever',
      'Fast-acting formula',
      'Suitable for adults and children over 12'
    ]
  },
  {
    name: 'Mucolite',
    image: 'Mu.png',
    desc: 'Loosens mucus and helps clear congestion.',
    dosage: '1 tablet twice a day after meals.',
    price: 137,
    benefits: [
      'Reduces chest congestion',
      'Clears airways',
      'Non-drowsy formula'
    ]
  },
  // Add more products if needed
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('✅ Product data seeded');
    process.exit();
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedProducts();
