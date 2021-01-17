const Order = require('../db/models/Order')
const asyncHandler = require('express-async-handler')

const myOrders = asyncHandler(async (req, res) => {
  res.send('MY ORDERS HERE')
})

module.exports = myOrders
