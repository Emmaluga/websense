 const mongoose = require('mongoose')


 const productSchema = new mongoose.Schema({
     
      tittle: {
        type: String,
        require: true,
      },

       image: {
        type: String,
        require: true,
      },

      link: {
        type: String,
        require: true,
      },
       
 })

 module.exports = mongoose.model('Products', productSchema)

 