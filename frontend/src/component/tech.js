import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image1 from '../images/web design image.jpg'



const Tech =()=> {

  return (
    <div className="tech">
    <Container>
    <Row className='d-flex justify-content-around mt-5 mb-5'>
   
    <Col md={4} className=''>

      <div className="point mt-5 mb-5"> 
    <h3 className='text-center'>We make Websites so simple. </h3>
    <p className='p-text mt-5'>At Websense, we make your websites so simple that there are obviously no deficiencies.
    putting you ahead of your compititors anywhere on the web.</p>
  
     </div>    
    </Col>

    <Col md={5}>
   <div className="img">
   <img src= {Image1} alt="" className=' img-fluid'  />
   </div>

   
    </Col>
    
    </Row>
    </Container>
    </div>
  )
}

export default Tech