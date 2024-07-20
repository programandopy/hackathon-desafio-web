const express = require("express");
const multer = require("multer");
const router = express.Router();
const categoryService = require("../services/CategoryService");

// Configurar almacenamiento para Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/home/tilleria/Downloads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
  }
});

const upload = multer({ storage: storage });

router.get("/categorylist", async (request, response) => {
  try {
    const categorias = await categoryService.getCategories();
    response.status(200).json(categorias);
  } catch (error) {
    console.log(error.message);
    response
      .status(500)
      .json({ message: "Error al intentar listar las categorías" });
  }
});

router.post("/create", upload.single('imagen'), async (request, response) => {
  try {
    const categoryData = {
      nombre: request.body.nombre,
      imagen: request.file ? request.file.path : null
    };
    const res = await categoryService.createCategory(categoryData);

    if (!res.success) {
      return response.status(400).json({ message: res.message });
    }

    response.status(200).json({ message: res.message });
  } catch (error) {
    response.status(500).json({ message: "Error al intentar guardar " });
  }
});

module.exports = router;
