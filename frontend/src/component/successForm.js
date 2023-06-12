import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'

const SuccessForm = ()=> {

  return (
    <div className="successform">
       <Container>
    <Row className='d-flex justify-content-around mt-5'>
   
    <Col md={4} className='m-auto text-center'>
    <div className="success mb-4"> 

    <h3 className='text-center'>Thank you for contacting us, we will get back to you shortly.</h3>
    <Link to={'/'} style={{color:'pink', fontSize:'30px', textDecoration: 'none'}}>Back to home page.</Link>
    </div>

    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default SuccessForm