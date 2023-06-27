import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image1 from '../images/portfolio-about.jpg'


const IntroTech =()=> {

  return (
    <div className="introtech">
    <Container>
    <Row className='d-flex justify-content-around'>
   
    <Col md={4} className=''>
      <div className="img mt-5"> 
   
<img src= {Image1} alt="" className=' img-fluid'  />
      
     </div>  
    </Col>

    <Col md={5} className='mt-3'>
   
      <div className="point  mb-5"> 
    <h3 className='text-center'>Maximize Your Presense with the power of Web Technology</h3>
    <p className='p-text mt-5'>At Websense, we make sure we create your content using the best of Technology
    putting you ahead of your compititors anywhere on the web.</p>
  
     </div>  
   
    </Col>
    
    </Row>
    </Container>
    </div>
  )
}

export default IntroTech