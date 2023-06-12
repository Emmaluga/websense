const express = require('express')
const contactroute = express.Router()
const contactcontrl = require('../controller/contactcontrl')
const {body, validationResult} = require('express-validator')


contactroute.post('/', 
[
   body("fullname").isLength({min: 3})
   .withMessage("The name must have minimum length of 3"),
   body("email").isEmail()
   .normalizeEmail()
   .withMessage("invalid Email"),
   body("message").isLength({min:3})
   .withMessage("Messages should be more than three characters"),

   (req,res,next) => {
     const errors = validationResult(req)
     if(!errors.isEmpty()){
        res.json({
            success: false,
            message: errors.array()
        })
    }
    next()
   }
   
],  

contactcontrl)
    
module.exports = contactroute