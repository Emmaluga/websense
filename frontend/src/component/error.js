import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Error = ()=> {

     return(
         
         <div className="error">
            <Container>
            <Row className = 'd-flex justfiy-content-around ' >
            <Col md={8} className='m-auto text-center'>
            <div className="in ">

            <h1 className=''> Error page 404</h1>
            <h3 className=''>page not found</h3>
            <Link to= '/portfolio' className='errorlink'>back to portfolio page</Link>
            
            </div>
            </Col>
            </Row>   
            </Container>
           
         </div>
     )
  
}
 export default Error