require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connect')
const routesnotfound = require('./controller/notfound')
const errHandler = require('./middleware/errMiddle')
const contactroute = require('./route/contactroute')
const productroute = require('./route/productsroute')
const cors = require('cors')


 //connectDB()

const app = express()

app.use(cors({origin: true, credentials: true}))

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// app.use( errHandler)
// app.use('*', (req,res)=> {
//     res.status(404).send('roues not found')
// })

app.get('/', (req,res)=> {
  res.send('hello homepage app')
})

//route
app.use('/products', productroute)
app.use('/contact', contactroute)
 app.use( errHandler)
app.use(routesnotfound)






// app.get('/product', (req,res)=> {
//     res.json(productsdata)
// })


const port= process.env.PORT || 5000
//app.listen(port, ()=> console.log(`server running port ${port} `))

const start = async ()=> {
     try {
       
      await connectDB(process.env.MONGO_URL )
      console.log('connected to DB')
    app.listen(port, ()=> console.log(`server running on port ${port} `))
     } catch (error) {
        console.log('failed to connect DB')
     }
}

start()

