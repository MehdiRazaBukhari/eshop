const express = require('express')
// const { products } = require('./data/products.js')
const dotenv = require('dotenv')
const Connect_DB = require('./db/db_connect')
const Product = require('./db/models/Product')

dotenv.config()
PORT = process.env.PORT
MONGO_URI = process.env.MONGO_URI

Connect_DB(MONGO_URI)
app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/', function (req, res) {
  Product.find({}, function (err, result) {
    if (err) {
      res.send(err)
    } else {
      res.send({ products: result })
      // console.log()
    }
  })
  // res.send({ products })
})

app.get('/:id', function (req, res) {
  Product.findById(req.params.id, function (err, result) {
    if (err) {
      res.send(err)
    } else {
      res.send({ product: result })
      // console.log()
    }
  })
})

app.listen(PORT, console.log(`listening on port ${PORT}`))
