
const  errHandler = require('express-async-handler');
const contactmodel = require("../model/contactmodel");

const contactcontrl =  errHandler ( async (req,res)=> {
    const {fullname, email, message} = req.body
 

        //validate form

      //     if(!fullname || !email || !message){
      //           res.status(500)
      //           throw new Error('fill all fields')
      //     }

      const contact = await contactmodel.create({
            fullname,
            email,
            message
       
       })

       res.json(contact)


      
    
        
               
            
         
        
})

module.exports = contactcontrl