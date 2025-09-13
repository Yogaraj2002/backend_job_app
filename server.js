const express = require('express');
const cors = require('cors');
const app = express();
const jobsRouter = require('./routes/jobs');

// Middleware
app.use(express.json());

// ✅ Only allow localhost:5173 (React dev server)
app.use(cors({ origin: 'http://localhost:5173' }));

// Routes
app.use('/api/jobs', jobsRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
