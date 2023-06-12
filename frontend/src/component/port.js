import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'


const Port =()=> {

  return (
    <div className="port">
    <Container>
    <Row className='d-flex justify-content-around mt-5'>

    <Col md={5} className='m-auto'>
         <div className="wrap">      
    <div className="img-t  ">   
    <Link to='/portfolio'><button className='port1'>View Portfolio Here</button></Link>
   
     </div> 

        </div> 
    </Col>

        

    
    </Row>
    </Container>
    </div>
  )
}

export default Port