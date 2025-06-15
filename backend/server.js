
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PRODUCTS = [
  {
    id: 1,
    name: 'M-Sand',
    availability: "available",
  },
  {
    id: 2,
    name: 'Silica',
    availability: "available",
  },
  {
    id: 3,
    name: 'Greet 20mm',
    availability: "available",
  },
  {
    id: 4,
    name: 'Banas Sand',
    availability: "available",
  }
];

app.get('/api/products', (req, res) => {
  res.json(PRODUCTS);
});

// Health check
app.get('/api/health', (req, res) => {
  res.send({ status: 'ok', business: 'Shreenath Enterprises' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Shreenath Enterprises Backend running at http://localhost:${PORT}`);
});
