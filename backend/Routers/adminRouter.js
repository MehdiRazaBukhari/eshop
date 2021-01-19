const express = require('express')
const adminRouter = express.Router()

const isAdmin = require('../utils/isAdmin')
const getUsers = require('../controller/getUsers')
const verifyToken = require('../utils/verifyToken')
const updateProfileByAdmin = require('../controller/updateProfileByAdmin')
const getProfileByAdmin = require('../controller/getProfileByAdmin')

adminRouter.route('/users').get(verifyToken, isAdmin, getUsers)
adminRouter.route('/users/:id').get(verifyToken, isAdmin, getProfileByAdmin)
adminRouter
  .route('/users/update/:id')
  .post(verifyToken, isAdmin, updateProfileByAdmin)

module.exports = adminRouter
