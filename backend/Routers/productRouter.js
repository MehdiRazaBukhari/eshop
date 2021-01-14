const express = require('express')
const productRouter = express.Router()

const getProduct = require('../controller/getProduct')
const getProductById = require('../controller/getProductById')

/**
 * Route serving specific product.
 * Full path : /products
 * @name get/
 * @function
 * @memberof module:Routers/productRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
productRouter.route('/').get(getProduct)

/**
 * Route serving specific product.
 * Full path : /products/:id
 * @name get/:id
 * @function
 * @memberof module:Routers/productRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */

productRouter.route('/:id').get(getProductById)

module.exports = productRouter
