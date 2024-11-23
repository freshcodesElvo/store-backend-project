require('dotenv').config()
require('express-async-errors');


const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const productRoutes = require('./routes/products')

const notFound = require('./middleware/not-found');
const erroMiddleWare = require('./middleware/error-handler')

//middle ware
app.use(express.json())

//rootes

app.get('/', (req, res) =>{
    res.send(`<h1>STORE API</h1> <a href="api/v1/products">Products route</a>`)

})

app.use('/api/v1/products',productRoutes)
//products route 

app.use(notFound)
app.use(erroMiddleWare)

const port = process.env.PORT || 3000

const start_server = async ()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server listening on port ${port}`))
    }catch(error){
        console.log(error)
    }
    
}
start_server()