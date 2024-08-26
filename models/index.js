// models/index.js
const Category = require("./category");
const Product = require("./Product");
const Tag = require("../tag");

Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Product.belongsToMany(Tag, {
  through: "ProductTag",
  foreignKey: "product_id",
});

Tag.belongsToMany(Product, {
  through: "ProductTag",
  foreignKey: "tag_id",
});

module.exports = { Category, Product, Tag };
