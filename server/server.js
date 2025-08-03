const express = require('express');
const cors = require('cors');
const path = require('path');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/doctors', doctorRoutes);

// Serve profile images (from frontend's public folder)
app.use('/images', express.static(path.join(__dirname, '../frontend/public/images')));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
  