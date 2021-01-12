const express = require('express')
const productRouter = express.Router()
const Product = require('../db/models/Product')
const asyncHandler = require('express-async-handler')

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
productRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.send({ products })
  })
)

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

productRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.send({ product })
  })
)

module.exports = productRouter
