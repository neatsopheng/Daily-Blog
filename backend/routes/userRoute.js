const express = require('express');
const { getUser, register, deleteUser, updateUser, login, getAllUser } = require('../controllers/userController');
const userRouter = express.Router();

const {protect} = require('../middleware/authMiddleware');

userRouter.get('/', getAllUser)
userRouter.get('/me',protect, getUser)
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.delete('/:id', protect, deleteUser);
userRouter.put('/:id', protect,  updateUser);

module.exports = userRouter;