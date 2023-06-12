 require('dotenv').config()
const connectDB = require('./backend/config/connect')
const productmodel = require('./backend/model/productmodel')
const productsdata = require('./backend/data/productsdata')


 connectDB(process.env.MONGO_URL)

const products =  async ()=> {
        
        try {
             await productmodel.deleteMany({})
             await productmodel.insertMany(productsdata)
            console.log('products connected')
            process.exit()
            
        } catch (error) {
            console.log('failed to load products ')
            process.exit(1)
        }
}

 products()


