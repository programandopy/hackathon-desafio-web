const Category = require('../models/CategoryModel');

const createCategory = async (data) => {
  try {
    const newCategory = new Category(data);
    await newCategory.save();
    return { success: true, message: 'Categoría creada exitosamente' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const getCategories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    throw new Error('Error al listar categorías');
  }
};

module.exports = {
  createCategory,
  getCategories,
};
