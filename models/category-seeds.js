// seeds/category-seeds.js
const Category = require('../models/Category');

const categoryData = [
  { category_name: 'Electronics' },
  { category_name: 'Books' },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
