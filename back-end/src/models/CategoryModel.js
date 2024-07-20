const mongoose = require('mongoose');

// Definir el esquema para las categorías
const CategorySchema = new mongoose.Schema({
    categoryname: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

// Crear el modelo para las categorías
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
