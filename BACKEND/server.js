const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// ===== Serve static files =====
app.use(express.static(path.join(__dirname, 'public')));

// ===== Test backend connection =====
app.get('/api/test', (req, res) => {
  res.json({ message: '✅ Backend is connected successfully!' });
});

// ===== Optional: Home route =====
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'A_index.html'));
});

// ===== Start the server =====
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
