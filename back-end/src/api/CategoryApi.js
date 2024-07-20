const express = require('express');
const router = express.Router();
const categoryService = require('../services/CategoryService');

// Ruta para crear una nueva categoría
router.post('/', async (req, res) => {
    try {
        const status = await categoryService.createCategory(req.body);
        if (!status.success) {
            return res.status(400).json({ message: status.message });
        }
        return res.status(200).json({ message: status.message });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al intentar crear la categoría' });
    }
});

// Ruta para obtener todas las categorías
router.get('/list', async (req, res) => {
    try {
        const categories = await categoryService.getCategories();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al intentar obtener las categorías' });
    }
});

module.exports = router;
