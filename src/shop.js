const { nanoid } = require('nanoid');

const shopItems = [
  {
    id: nanoid(16),
    category: 'kendaraan',
    imageUrl: 'http://localhost:9000/image/kendaraan/sepeda.jpg',
    itemName: 'Sepeda',
    price: 1500,
  },
  {
    id: nanoid(16),
    category: 'kendaraan',
    imageUrl: 'http://localhost:9000/image/kendaraan/motor.jpg',
    itemName: 'Motor',
    price: 15000,
  },
  {
    id: nanoid(16),
    category: 'kendaraan',
    imageUrl: 'http://localhost:9000/image/kendaraan/mobil.jpeg',
    itemName: 'Mobil',
    price: 150000,
  },
  {
    id: nanoid(16),
    category: 'elektronik',
    imageUrl: 'http://localhost:9000/image/elektronik/televisi.jpeg',
    itemName: 'TV Bekas',
    price: 2500,
  },
  {
    id: nanoid(16),
    category: 'elektronik',
    imageUrl: 'http://localhost:9000/image/elektronik/handphone.jpg',
    itemName: 'Hp second',
    price: 2000,
  },
  {
    id: nanoid(16),
    category: 'elektronik',
    imageUrl: 'http://localhost:9000/image/elektronik/leptop.jpeg',
    itemName: 'Leptop second',
    price: 3000,
  },
  {
    id: nanoid(16),
    category: 'elektronik',
    imageUrl: 'http://localhost:9000/image/elektronik/kipas-angin.jpeg',
    itemName: 'Kipas second',
    price: 150,
  },
  {
    id: nanoid(16),
    category: 'elektronik',
    imageUrl: 'http://localhost:9000/image/elektronik/mesin-cuci.jpeg',
    itemName: 'Mesin cuci second',
    price: 1500,
  },
  {
    id: nanoid(16),
    category: 'pakaian',
    imageUrl: 'http://localhost:9000/image/pakaian/hoodie.jpg',
    itemName: 'Hoodie Second',
    price: 75,
  },
  {
    id: nanoid(16),
    category: 'pakaian',
    imageUrl: 'http://localhost:9000/image/pakaian/baju.jpg',
    itemName: 'Baju Second',
    price: 55,
  },
  {
    id: nanoid(16),
    category: 'pakaian',
    imageUrl: 'http://localhost:9000/image/pakaian/celana-levis.jpg',
    itemName: 'Celana levis Second',
    price: 65,
  },
  {
    id: nanoid(16),
    category: 'pakaian',
    imageUrl: 'http://localhost:9000/image/pakaian/celana-pendek.jpeg',
    itemName: 'Celana pendek Second',
    price: 35,
  },
  {
    id: nanoid(16),
    category: 'pakaian',
    imageUrl: 'http://localhost:9000/image/pakaian/jaket.jpeg',
    itemName: 'Jaket Second',
    price: 75,
  },
  {
    id: nanoid(16),
    category: 'pakaian',
    imageUrl: 'http://localhost:9000/image/pakaian/kemeja.jpg',
    itemName: 'Kemeja Second',
    price: 65,
  },
];

module.exports = shopItems;
