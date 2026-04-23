const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const records = [
  { name: 'Alice', age: 25, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Charlie', age: 22, gender: 'male' },
  { name: 'Diana', age: 28, gender: 'female' },
  { name: 'Eve', age: 35, gender: 'female' },
  { name: 'Frank', age: 40, gender: 'male' }
];

app.get('/api/random', (req, res) => {
  const idx = Math.floor(Math.random() * records.length);
  res.json(records[idx]);
});

// Serve static files (index.html, js/, css/, etc.)
app.use(express.static(path.join(__dirname, '/')));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
