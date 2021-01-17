const express = require('express')
const orderRouter = express.Router()
const verifyToken = require('../utils/verifyToken')
const addOrder = require('../controller/addOrder')
const myOrders = require('../controller/myOrders')
const getOrder = require('../controller/getOrder')

// orderRouter.route('/:id').post(verifyToken, getOrder)
// orderRouter.route('/myOrders').post(verifyToken, myOrders)
orderRouter.route('/addOrder').post(verifyToken, addOrder)
module.exports = orderRouter
