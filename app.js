// app.js
const express = require('express');
const sequelize = require('./config/connection');
const { Category, Product, Tag } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
});
