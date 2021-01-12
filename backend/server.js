const express = require('express')
const { products } = require('./data/products.js')

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
  res.send({ products })
})

app.get('/:id', function (req, res) {
  const product_id = req.params.id
  const res_product = products.find((product) => {
    return product._id === product_id
  })
  res.send({ product: res_product })
})

app.listen(5555, console.log('listening on port 5555'))
