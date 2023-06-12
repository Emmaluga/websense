import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image1 from '../images/web-1.jpg'


const Content =()=> {

  return (
    <div className="content">
    <Container>
    <Row className='d-flex justify-content-around'>
   
    <Col md={4} className=''>

    <div className="image mt-5 mb-5"> 
    <img src= {Image1} alt="" className=' img-fluid'  />
     </div>  
     
    </Col>

    <Col md={5}> 
    <div className="point mt-5 mb-5"> 
    <h3 className='text-center'>We turn your content to code.</h3>
    <p className='p-text mt-5'>At Websense, we turn your content into code! Using the best of single page application 
    frameworks and the computer science concept of MVC structure, we put your websites ahead of the pack.</p>
  
     </div>  
         
    </Col>
    
    </Row>
    </Container>
    </div>
  )
}

export default Content