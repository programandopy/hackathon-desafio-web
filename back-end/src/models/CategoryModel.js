const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    imagen: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Categories", CategorySchema);

module.exports = Category;
