const CategoryModel = require('../models/CategoryModel');

class CategoryService {

    static async createCategory(category) {
        if (!category.categoryname) {
            return { success: false, message: 'El nombre de la categoría es requerido' };
        }
        if (!category.image) {
            return { success: false, message: 'La imagen es requerida' };
        }

        // Crear una nueva categoría en la base de datos
        await CategoryModel.create(category);

        return { success: true, message: 'Categoría creada exitosamente' };
    }

    static async getCategories() {
        // Obtener todas las categorías de la base de datos
        return CategoryModel.find({});
    }
}

module.exports = CategoryService;
