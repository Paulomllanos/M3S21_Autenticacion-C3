const express = require('express');
const {createUser, getUsers, deleteUser, editUser, signIn} = require('../controllers/user.controller');
const auth = require('../Middlewares/auth')
const userRouter = express.Router();


userRouter.route('/user')
    .post(createUser)
    .get(getUsers)

userRouter.route('/user/:id')
    .delete(deleteUser)
    .put(auth, editUser)

userRouter.route('/user/signin')
    .post(signIn)

module.exports = userRouter;