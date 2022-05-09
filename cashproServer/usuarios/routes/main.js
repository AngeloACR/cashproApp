const express = require('express');
const usuariosRouter = express.Router();
const usuarioController = require('../controller/main');

usuariosRouter.post('/', usuarioController.addUser);
usuariosRouter.put('/', usuarioController.updateUser);
usuariosRouter.delete('/', usuarioController.deleteUser);
usuariosRouter.delete('/many', usuarioController.deleteManyUsers);
usuariosRouter.get('/', usuarioController.getUser);
usuariosRouter.get('/all', usuarioController.getUsers);

module.exports = usuariosRouter;