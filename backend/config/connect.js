require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = (url)=> {
    return mongoose.connect(url)
}


// const connectDB = async ()=> {
//     try {

//          await mongoose.connect(process.env.MONGO_URL)
//          console.log('connected to DB')
//     } catch (error) {
//         console.log('fail to connect to DB')
//     }
// }

mongoose.set('strictQuery', false)

module.exports = connectDB