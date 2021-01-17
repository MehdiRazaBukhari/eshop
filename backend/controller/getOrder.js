const Order = require('../db/models/Order')
const asyncHandler = require('express-async-handler')

const getOrder = asyncHandler(async (req, res) => {
  res.send(`Order id = ${req.params.id}`)
})

module.exports = getOrder
