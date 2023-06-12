const express = require('express')
const { allproductcontrl,  } = require('../controller/productcontrl')
const productroute = express.Router()
    
productroute.get('/', allproductcontrl)
//productroute.get('/:id', getproductcontrl)

   
module.exports = productroute



