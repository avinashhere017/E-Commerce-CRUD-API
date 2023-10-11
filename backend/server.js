require('dotenv').config()
const express = require('express')
const errorMiddleware = require('./middleware/errorMiddleware')
const mongoose = require('mongoose')
const app = express()
const productRoute = require('./routes/productRoute');
var cors = require('cors')
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND

app.use(express.json())
app.use(express.urlencoded({extended: false}))

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use('/api/products',productRoute)

app.get('/', (req, res) => {
  res.send('Hello Node API ')
})

app.get('/blog', (req, res) => {
  res.send('Hello Avinash Yor are in blog section! ')
})

app.use(errorMiddleware);

mongoose.connect(MONGO_URL).then(()=>{
  app.listen(PORT, () => {
    console.log('Connected to mongoDB')
    console.log(`Example app listenisng on port ${PORT}`)
  })
  
}).catch((error)=>{
  console.log(error)
})


