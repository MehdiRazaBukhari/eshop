const express = require('express')
const productRouter = express.Router()
const Product = require('../db/models/Product')
const asyncHandler = require('express-async-handler')

productRouter.get('/', async function (req, res) {
  const products = await Product.find({})
  res.send({ products })
})

productRouter.get('/:id', async function (req, res) {
  const product = await Product.findById(req.params.id)
  res.send({ product })
})

module.exports = productRouter
