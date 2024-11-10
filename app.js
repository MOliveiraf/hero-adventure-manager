require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const heroRoutes = require('./routes/heroRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', heroRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database connected and synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });
