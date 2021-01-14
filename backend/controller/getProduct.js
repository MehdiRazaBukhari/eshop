const Product = require('../db/models/Product')
const asyncHandler = require('express-async-handler')

const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.send({ products })
})

module.exports = getProduct
