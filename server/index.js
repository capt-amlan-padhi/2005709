// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Define API routes
const trainRoutes = require('./routes/trainRoutes');
app.use('/trains', trainRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
