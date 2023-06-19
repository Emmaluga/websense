import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image1 from '../images/portfolio-contact.jpg'
import axios from "axios"
import { useNavigate } from 'react-router-dom'






const Contactt =()=> {
  const navigate = useNavigate()
   const [formData, setformData] = useState({
     fullname: '',
     email: '',
     message: ''
   })
   const {fullname,email, message} = formData;
    // const create = {...formData}
   const Submit = async (e)=> {
     e.preventDefault() ;
   const url = 'http://localhost:5000/contact'
    //fetch api...

      //   try {
      // await fetch(url, {
      //   method: 'POST',
      //   headers: {
      //     'content-type': 'application/json'
      //   },
      //   body: JSON.stringify(create)
      // })  
      //   } catch (error) {
      //     console.log(`${error} errors in posting data.`)
      //   }
      //    setformData(create)

      // axios.
        try {
          
          axios.post(url, {
             ...formData
          })
            
          .then((res)=> setformData(formData))
          navigate('/successForm');
        } catch (error) {
          console.log('errors in loading data')
        }

       
   }
   const onchange = (e)=> {
       //  setformData((prevState)=> ({...prevState, [e.target.name]:e.target.value}))
       setformData({...formData, [e.target.name]:e.target.value})
   }



  return (
    
    <div className="contact">
    
      <Container>
    <Row className='d-flex justify-content-around'> 
        <Col md={6} className='mb-3'>
          <div className="img">  
      <img src={Image1} alt="" className='img-fluid' />
      </div> 
    </Col>


      <Col md={6} className='form '>
        <div className="form"> 
         <form action="" onSubmit={Submit}>
          <h3 className='mt-3'>Send us a message</h3>
          

           <div className="form-row">
            <Col lg={7} className="mt-">
            <label htmlFor="fullname" className='mb-3'>Fullname</label>
            <input 
            type="text"
            name="fullname" 
            placeholder="Enter Your Fullname "
            className="form-control" 
            value={fullname }
            onChange={onchange}
            //  {...register('fullName',{required: true})}
            />
           {/* <p style={{color: "red", fontSize: '20px'}}>Please enter your fullname</p> */}

            </Col>
           </div>

           <div className="form-row">
              <Col lg={7} className="mt-4">
              <label htmlFor="email" className='mb-3'> Email </label>
              <input 
              type="email"
              name="email"
              placeholder="Enter Your Email" 
              className="form-control"
              value={email}
              onChange={onchange}  
              
         
           
              />
              {/* <p style={{color: "red", fontSize: '20px'}}>Please enter your email</p> */}
         
               </Col> 
            </div>  

             <div className="form-row">
             <Col lg={7} className="mt-4">
              <label htmlFor="message" className='mb-3'>Message</label> 
              <textarea name="message" id="" cols="30" rows="10" className='form-control' 
            
            value={message}
            onChange={onchange}
              // {...register("message", {require: true})}  
              >
              </textarea>
              {/* <p style={{color: "red", fontSize: '20px'}}>Please enter your fullname</p> */}
              
              </Col>
             </div>


          <div className="form-row">
                <Col lg={7} className= 'mt-4 ' >
             <button  className='form-control' type="submit" style={{background:'purple', color: 'white'}}>Submit</button> 
                 </Col>
                </div>
        </form>
        </div>
        </Col>
      </Row>
      </Container>
      </div>
     

  )
}
export default Contactt
          


     
          
