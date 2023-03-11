const express = require('express');
const createProduct = require('../controllers/product.controller')
const auth = require('../Middlewares/auth')

const productRouter = express.Router();

productRouter.route('/product')
    .post(auth, createProduct)

module.exports = productRouter
