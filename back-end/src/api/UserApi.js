const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');

const JWT_SECRET = 'your_jwt_secret_key';

router.post('/register', async (request, response) => {
    try {
        const status = await userService.createUser(request.body);
        if (!status.success) {
            return response.status(400).json({ message: status.message });
        }
        return response.status(200).json({ message: status.message });
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: 'Error al intentar registrar el usuario' });
    }
});

router.post('/login', async (request, response) => {
    const { email, password } = request.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return response.status(400).json({ message: 'Usuario no encontrado' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return response.status(400).json({ message: 'Contraseña incorrecta' });
        }
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        return response.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: 'Error al intentar iniciar sesión' });
    }
});

router.get('/list', async (request, response) => {
    try {
        const users = await userService.getUsers();
        response.status(200).json({ users });
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: 'Error al intentar recuperar la lista de usuarios' });
    }
});

module.exports = router;
