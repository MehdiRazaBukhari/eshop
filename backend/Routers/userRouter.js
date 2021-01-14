const express = require('express')
const userRouter = express.Router()
const authUser = require('../controller/authUser')

/**
 * Route serving specific product.
 * Full path : user/login
 * @name get/
 * @function
 * @memberof module:Routers/userRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
userRouter.route('/login').post(authUser)

module.exports = userRouter
