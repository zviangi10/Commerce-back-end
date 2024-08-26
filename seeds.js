// seeds/seed.js
const sequelize = require('../config/connection');
const seedCategories = require('./models/category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCategories();
  await seedProducts();
  await seedTags();
  console.log('All seeds planted!');
  process.exit(0);
};

seedAll();
