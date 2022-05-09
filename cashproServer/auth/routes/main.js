const express = require('express');
const authRouter = express.Router();
const authController = require('../controller/main');

authRouter.post('/', authController.authUser);
authRouter.post('/resetPassword', authController.requestPasswordUpdate);
authRouter.post('/recoverPassword', authController.recoverPassword);
authRouter.put('/password', authController.updatePassword);

module.exports = authRouter;