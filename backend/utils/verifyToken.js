const jwt = require('jsonwebtoken')
const User = require('../db/models/User')
const asyncHandler = require('express-async-handler')
const dotenv = require('dotenv')
dotenv.config()
const verifyToken = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    const token = req.headers.authorization.split(' ')[1]
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const { id } = decoded
      req.user = await User.findOne({ _id: id }).select('-password')
      next()
    } catch (error) {
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  } else {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})
module.exports = verifyToken
