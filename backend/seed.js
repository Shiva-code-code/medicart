// seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const products = [
  {
  name: 'Fepanil-120 Syrup',
  image: 'fepanil-120.png',
  desc: 'Paracetamol syrup for effective relief from fever and mild to moderate pain in children.',
  dosage: 'Children: 10-15 mg/kg every 4–6 hours. Do not exceed 5 doses in 24 hours. Use as directed by physician.',
  price: 38,
  benefits: [
    'Reduces fever quickly and effectively',
    'Gentle on the stomach, suitable for children',
    'Accurate dosing with provided dropper or cap'
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
    {
    name: 'Hop',
    image: 'cyclopam.png',
    desc: 'Loosens mucus and helps clear congestion.',
    dosage: '1 tablet twice a day after meals.',
    price: 137,
    benefits: [
      'Reduces chest congestion',
      'Clears airways',
      'Non-drowsy formula'
    ]
  },
  {
  name: 'Mefta-Spas Syrup',
  image: 'mefta-spas.png',
  desc: 'Used for relief from stomach cramps, abdominal pain, and spasms.',
  dosage: 'As prescribed by the physician. Usually 5 ml 2-3 times a day for children.',
  price: 42,
  benefits: [
    'Relieves abdominal cramps and pain',
    'Combines antispasmodic and analgesic effects',
    'Gentle on the stomach when taken with food'
  ]
},
{
  name: 'Magnatuss-A Cough Syrup',
  image: 'magnatuss-a.png',
  desc: 'Cough syrup for dry and allergic coughs, providing fast relief.',
  dosage: '5 ml every 6–8 hours or as directed by the doctor.',
  price: 58,
  benefits: [
    'Effective against dry and allergic cough',
    'Non-drowsy formula',
    'Soothes throat irritation quickly'
  ]
},
{
  name: 'Onpur-250 Syrup',
  image: 'onpur-250.png',
  desc: 'Antibiotic syrup used to treat bacterial infections in children.',
  dosage: 'As per doctor’s prescription based on weight and infection type.',
  price: 62,
  benefits: [
    'Fights a wide range of bacterial infections',
    'Fast-acting antibiotic formulation',
    'Safe for pediatric use with proper dosage'
  ]
},
{
  name: 'Wikoryl Oral Suspension',
  image: 'wikoryl-suspension.png',
  desc: 'Used for the relief of cold, cough, and fever symptoms in children.',
  dosage: '5 ml every 6–8 hours or as directed by the physician. Not more than 4 doses in 24 hours.',
  price: 55,
  benefits: [
    'Relieves nasal congestion, fever, and body ache',
    'Combination of antihistamine, analgesic, and decongestant',
    'Suitable for children with seasonal colds'
  ]
},
{
  name: 'Calpol 250 Syrup',
  image: 'calpol-250.png',
  desc: 'Paracetamol syrup for reducing fever and relieving mild to moderate pain.',
  dosage: 'Dose based on weight: typically 10–15 mg/kg every 4–6 hours. Max 4 doses/day.',
  price: 40,
  benefits: [
    'Effective fever reducer',
    'Gentle pain relief for children',
    'Well-tolerated with minimal side effects'
  ]
},
{
  name: 'Sinarest Syrup',
  image: 'sinarest.png',
  desc: 'Provides relief from cold, cough, runny nose, and sneezing in children.',
  dosage: '5 ml every 6–8 hours as advised by physician.',
  price: 48,
  benefits: [
    'Relieves cold and flu symptoms quickly',
    'Reduces nasal blockage and throat irritation',
    'Non-drowsy formula for daytime use'
  ]
},
{
  name: 'Sinarest Plus Syrup',
  image: 'sinarest-plus.png',
  desc: 'Advanced multi-symptom relief syrup for cold, fever, and body aches.',
  dosage: '5 ml every 6–8 hours. Do not exceed 4 doses in 24 hours.',
  price: 52,
  benefits: [
    'Enhanced formula for cold and fever relief',
    'Acts as a decongestant and antihistamine',
    'Soothes headache and body ache'
  ]
},
{
  name: 'Febrax Plus Syrup',
  image: 'febrax-plus.png',
  desc: 'Used for reducing fever and providing pain relief in children.',
  dosage: '5 ml every 6–8 hours or as per doctor’s guidance.',
  price: 46,
  benefits: [
    'Fast-acting relief from fever',
    'Combines paracetamol and ibuprofen',
    'Reduces inflammation and pain'
  ]
},
{
  name: 'Febrax Plus DS Syrup',
  image: 'febrax-plus-ds.png',
  desc: 'Double strength syrup for managing high fever and pain in kids.',
  dosage: '2.5 to 5 ml depending on age and weight, every 6–8 hours.',
  price: 68,
  benefits: [
    'Double strength formula for persistent fever',
    'Reduces inflammation, pain, and temperature',
    'Suitable for older children (doctor recommended)'
  ]
},
// {
//   name: 'OFM Syrup',
//   image: 'ofm.png',
//   desc: 'Antibiotic suspension used to treat gastrointestinal infections like diarrhea and dysentery.',
//   dosage: '5 ml twice daily or as prescribed by the physician. Shake well before use.',
//   price: 64,
//   benefits: [
//     'Combats bacterial and protozoal infections',
//     'Effective in treating diarrhea and stomach infections',
//     'Dual-action formula with Ofloxacin and Metronidazole'
//   ]
// },
// {
//   name: 'OFM-DS Syrup',
//   image: 'ofm-ds.png',
//   desc: 'Double strength antibiotic syrup for treating severe stomach infections in children.',
//   dosage: '2.5 to 5 ml twice daily as prescribed by doctor.',
//   price: 78,
//   benefits: [
//     'Double strength for more severe infections',
//     'Targets bacterial and parasitic infections',
//     'Fast-acting and broad-spectrum formula'
//   ]
// },
// {
//   name: 'Dropizin Syrup',
//   image: 'dropizin.png',
//   desc: 'Antihistamine syrup used to treat allergic symptoms such as sneezing, runny nose, and watery eyes.',
//   dosage: '2.5 to 5 ml once or twice daily depending on age.',
//   price: 42,
//   benefits: [
//     'Provides relief from allergic rhinitis',
//     'Non-sedating formula in recommended doses',
//     'Suitable for children above 2 years'
//   ]
// },
// {
//   name: 'Ambrodil Syrup',
//   image: 'ambrodil.png',
//   desc: 'Mucolytic syrup that helps clear chest congestion and makes cough more productive.',
//   dosage: '5 ml two to three times daily or as directed by the doctor.',
//   price: 50,
//   benefits: [
//     'Breaks down thick mucus in the lungs',
//     'Improves breathing and reduces cough',
//     'Commonly used in bronchitis and chest congestion'
//   ]
// },
// {
//   name: 'Reswas Syrup',
//   image: 'reswas.png',
//   desc: 'Combination syrup for dry cough, throat irritation, and minor cold symptoms.',
//   dosage: '5 ml twice or thrice daily as advised.',
//   price: 47,
//   benefits: [
//     'Soothes dry and irritating cough',
//     'Contains a mild bronchodilator for easier breathing',
//     'Useful during seasonal coughs and colds'
//   ]
// },
// {
//   name: 'Reswas-LS Syrup',
//   image: 'reswas-ls.png',
//   desc: 'Expectorant syrup used for wet cough with mucus, chest congestion, and difficulty breathing.',
//   dosage: '5 ml two to three times a day, or as per pediatrician’s advice.',
//   price: 53,
//   benefits: [
//     'Helps loosen and expel mucus',
//     'Reduces chest congestion effectively',
//     'Ideal for children with productive cough'
//   ]
// },
// {
//   name: 'Livoluk Kid Syrup',
//   image: 'livoluk-kid.png',
//   desc: 'Lactulose syrup used to treat constipation in children.',
//   dosage: '5 to 10 ml once or twice daily as prescribed.',
//   price: 69,
//   benefits: [
//     'Softens stool and promotes bowel movement',
//     'Gentle on children’s digestive system',
//     'Used in chronic constipation treatment'
//   ]
// },
// {
//   name: 'Drotin Syrup',
//   image: 'drotin.png',
//   desc: 'Used to relieve stomach pain, cramps, and irritable bowel symptoms.',
//   dosage: '5 ml 2–3 times daily or as advised.',
//   price: 52,
//   benefits: [
//     'Relieves smooth muscle spasms',
//     'Eases abdominal and menstrual pain',
//     'Fast onset of action'
//   ]
// },
// {
//   name: 'Drotin DS Syrup',
//   image: 'drotin-ds.png',
//   desc: 'Double strength syrup for severe abdominal cramps and pain.',
//   dosage: '2.5 to 5 ml based on severity and age.',
//   price: 75,
//   benefits: [
//     'Double strength for faster relief',
//     'Treats IBS, colic, and spasms',
//     'Pediatric-safe when prescribed'
//   ]
// },
// {
//   name: 'Crocin 240 Syrup',
//   image: 'crocin-240.png',
//   desc: 'Paracetamol syrup for fever and mild pain relief in children.',
//   dosage: '10–15 mg/kg every 4–6 hours. Max 4 doses/day.',
//   price: 43,
//   benefits: [
//     'Relieves fever and body ache',
//     'Trusted pediatric formulation',
//     'Well-tolerated with minimal side effects'
//   ]
// },
// {
//   name: 'Kufril-D Syrup',
//   image: 'kufril-d.png',
//   desc: 'Relieves dry cough and throat irritation in children.',
//   dosage: '5 ml 2–3 times a day or as prescribed.',
//   price: 59,
//   benefits: [
//     'Suppresses dry, irritating cough',
//     'Soothes throat lining',
//     'Non-drowsy cough suppressant'
//   ]
// },
// {
//   name: 'Coscopin LS Junior Syrup',
//   image: 'coscopin-ls-junior.png',
//   desc: 'Expectorant syrup for wet cough and chest congestion in kids.',
//   dosage: '2.5 to 5 ml three times daily as advised.',
//   price: 65,
//   benefits: [
//     'Thins mucus and clears airway',
//     'Eases breathing in productive cough',
//     'Kid-friendly taste and dosage'
//   ]
// },
// {
//   name: 'Tixylix Syrup',
//   image: 'tixylix.png',
//   desc: 'Used to treat dry cough, throat irritation, and cold symptoms in children.',
//   dosage: '5 ml up to 3 times daily as per doctor’s advice.',
//   price: 49,
//   benefits: [
//     'Effective for dry, persistent cough',
//     'Soothing effect on the throat',
//     'Suitable for night-time relief'
//   ]
// },
// {
//   name: 'Cyclopam Drops',
//   image: 'cyclopam-drops.png',
//   desc: 'Used for infant colic, abdominal pain, and spasms.',
//   dosage: '0.5–1 ml two to three times a day or as prescribed.',
//   price: 38,
//   benefits: [
//     'Quick relief from colic pain',
//     'Safe for infants and toddlers',
//     'Relaxes stomach muscles'
//   ]
// },
// {
//   name: 'Aristozyme Drops',
//   image: 'aristozyme-drops.png',
//   desc: 'Digestive enzyme drops for infants with indigestion, bloating, and gas.',
//   dosage: '0.5–1 ml before meals or as prescribed.',
//   price: 30,
//   benefits: [
//     'Improves digestion and appetite',
//     'Reduces bloating and discomfort',
//     'Commonly prescribed for infants'
//   ]
// },
// {
//   name: 'Tonoferon Drop',
//   image: 'tonoferon-drop.png',
//   desc: 'Iron supplement drop for infants and children to prevent anemia.',
//   dosage: '1 ml daily or as directed by physician.',
//   price: 42,
//   benefits: [
//     'Prevents and treats iron deficiency',
//     'Supports healthy growth',
//     'Pleasant taste for easy administration'
//   ]
// },
// {
//   name: 'Anafort Drops',
//   image: 'anafort-drops.png',
//   desc: 'Multivitamin and iron drops for pediatric nutritional support.',
//   dosage: '0.5 to 1 ml daily or as per doctor’s advice.',
//   price: 39,
//   benefits: [
//     'Supports overall development',
//     'Prevents vitamin deficiencies',
//     'Strengthens immunity and energy levels'
//   ]
// },
// {
//   name: 'Oxydex Drops',
//   image: 'oxydex-drops.png',
//   desc: 'Multivitamin drops with antioxidant support for children.',
//   dosage: '0.5–1 ml per day or as advised.',
//   price: 41,
//   benefits: [
//     'Boosts immunity and energy',
//     'Protects cells from oxidative stress',
//     'Ideal for growing children'
//   ]
// },
// {
//   name: 'Zincovit Drops',
//   image: 'zincovit-drops.png',
//   desc: 'Zinc and multivitamin supplement for immune health in kids.',
//   dosage: '1 ml daily or as directed by physician.',
//   price: 45,
//   benefits: [
//     'Improves immunity and appetite',
//     'Supports growth and development',
//     'Reduces frequency of infections'
//   ]
// },
// {
//   name: 'D3 Must Drops',
//   image: 'd3-must-drops.png',
//   desc: 'Vitamin D3 supplement drops for bone development in infants and kids.',
//   dosage: '1 ml daily or as prescribed.',
//   price: 44,
//   benefits: [
//     'Strengthens bones and teeth',
//     'Prevents rickets and calcium deficiency',
//     'Essential for early development'
//   ]
// }
  // {
  //   name: 'Zerodal-SP Tablet',
  //   image: 'zerodal-sp.png',
  //   desc: 'Combination of painkiller and anti-inflammatory used for body pain, fever, and swelling.',
  //   price: 25
  // },
  // {
  //   name: 'Paracetamol 500 Tablet',
  //   image: 'paracetamol-500.png',
  //   desc: 'Commonly used to treat fever and mild to moderate pain.',
  //   price: 12
  // },
  // {
  //   name: 'Dolo 650 Tablet',
  //   image: 'dolo-650.png',
  //   desc: 'High-strength paracetamol for fever, headaches, and body aches.',
  //   price: 20
  // },
  // {
  //   name: 'Omix 500 Tablet',
  //   image: 'omix-500.png',
  //   desc: 'Antibiotic used to treat bacterial infections like respiratory or urinary tract infections.',
  //   price: 48
  // },
  // {
  //   name: 'Omix 250 DT Tablet',
  //   image: 'omix-250-dt.png',
  //   desc: 'Dispersible antibiotic tablet for treating bacterial infections in children.',
  //   price: 32
  // },
  // {
  //   name: 'Spasoid 250 Tablet',
  //   image: 'spasoid-250.png',
  //   desc: 'Used to relieve abdominal pain, cramps, and muscle spasms.',
  //   price: 22
  // },
  // {
  //   name: 'Paacip 500 Tablet',
  //   image: 'paacip-500.png',
  //   desc: 'Paracetamol-based tablet for managing fever and mild pain.',
  //   price: 15
  // },
  // {
  //   name: 'Montzer-B Tablet',
  //   image: 'montzer-b.png',
  //   desc: 'Used to treat allergic rhinitis, asthma, and respiratory conditions.',
  //   price: 35
  // },
  // {
  //   name: 'Spasorida-A Tablet',
  //   image: 'spasorida-a.png',
  //   desc: 'Combination medicine for pain relief and muscle relaxation.',
  //   price: 27
  // },
  // {
  //   name: 'Cifiwok 250 DT Tablet',
  //   image: 'cifiwok-250-dt.png',
  //   desc: 'Dispersible antibiotic used in children for treating respiratory and ENT infections.',
  //   price: 38
  // }
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
