const  errHandler = require("express-async-handler")
const productmodel = require("../model/productmodel")

const allproductcontrl =  errHandler ( async  (req,res)=> {
        const products = await productmodel.find()
               if(!products){
                  res.status(500)
                  throw new Error('please reset')
               }else{
              res.json(products)
               }
})

// const getproductcontrl  = errHandler ( async (req,res)=> {
          
//     const singleproduct = await productmodel.findById(req.params.id)
//        if(!singleproduct){
          
//             res.status(500)
//             throw new Error('try again cant get single product')
//        }else{
//          res.json(singleproduct)
//        }
// })

module.exports = {

    allproductcontrl,
    // getproductcontrl

}