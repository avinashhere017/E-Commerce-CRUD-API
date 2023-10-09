const express = require('express')
const Product = require('./models/productModel')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send('Hello Avinash ! ')
})

app.get('/blog', (req, res) => {
  res.send('Hello Avinash Yor are in blog section! ')
})


// to fetch all products 
app.get('/products',async(req,res) =>{
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({message: error.message})
    
  }
})

// to fetch a single product by id
app.get('/products/:id',async(req,res) =>{
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message})
    
  }
})

// update a product
app.put('/products/:id', async(req, res) => {
  try {
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      // we cannot find any product in database
      if(!product){
          return res.status(404).json({message: `cannot find any product with ID ${id}`})
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
      
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

// delete a product

app.delete('/products/:id', async(req, res) =>{
  try {
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id);
      if(!product){
          return res.status(404).json({message: `cannot find any product with ID ${id}`})
      }
      res.status(200).json(product);
      
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})


app.post('/products',async(req, res) =>{
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
    
  }
})


mongoose.connect('mongodb+srv://avinash170:Avinash123@rest-api.ua6pbv5.mongodb.net/Node-API?retryWrites=true&w=majority').then(()=>{
  app.listen(port, () => {
    console.log('Connected to mongoDB')
    console.log(`Example app listenisng on port ${port}`)
  })
  
}).catch((error)=>{
  console.log(error)
})


