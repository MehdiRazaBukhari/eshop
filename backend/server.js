const express = require('express')
const dotenv = require('dotenv')
const Connect_DB = require('./db/Connect_DB')
const productRouter = require('./Routes/productRouter')
const Set_CORS = require('./config/Set_CORS')

dotenv.config()
PORT = process.env.PORT
MONGO_URI = process.env.MONGO_URI

Connect_DB(MONGO_URI)
app = express()

app.use(Set_CORS)

app.get('/', function (req, res) {
  res.send('API for e-shop app made using MERN')
})

app.use('/products', productRouter)

app.listen(PORT, console.log(`listening on port ${PORT}`))
