import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image1 from '../images/free cosult4.jfif'
import { Link } from 'react-router-dom'


const Consult =()=> {

  return (
    <div className="consult">
    <Container>
    <Row className='d-flex justify-content-around mt-5'>
   
    <Col md={4} className=''>
    <div className="point mb-4"> 

    <h3 className='text-center'>Need help?</h3>
    <p className='p-text mt-5'>From a custom landing page, to a multi-page website with full add to cart functionality suitable for your business irrespective of your size, need and products offered, we got you covered.</p>
    <Link to='/contact'><button className='btn1 '>Contact Now</button></Link> 
     </div>    
    </Col>
  


    <Col md={5}>
   
    <div className="img mt-2"> 
   
<img src= {Image1} alt="" className=' img-fluid'  />
      
     </div>  
    </Col>

    
    </Row>
    </Container>
    </div>
  )
}

export default Consult