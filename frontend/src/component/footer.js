import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'
import Image1 from '../images/websense-logo4.png'

const Footer = ()=> {
   
    return (
      
        <div className="footer">
            <Container>
            <Row className=''>
            <Col md={3}className='m-auto mt-3'>
            <div className="info text-center mb-3">
         
          <Link to='/' className=' c-info'>Home</Link>
         
                </div>
              
          </Col>
            <Col md={3}className='m-auto mb-3'>
            <div className="info text-center ">
       
          <Link to='/about' className=' c-info'>About</Link>
         
                </div>
                
            </Col>

            <Col md={3} className= 'm-auto mb-3' >
            <div className="info text-center">
         
          <Link to='/portfolio' className=' c-info'>Portfolio</Link>
         
                </div>
            </Col>
            <Col md={3} className=' m-auto mb-3'>
            <div className="info text-center">
       
          <Link to='/contact' className=' c-info '>Contact</Link>
         
                </div>
            </Col>
            <Row className='mb-4'>
            <Col sm={12} className="text-center ">
                <div className="foot">
                <img src={Image1} className='img-fluid '  alt="" /> 
                <p className='' style={{color:'white'}}>Websense development. All right reserved.</p>
          
             
                </div>

            </Col>
            </Row>
            
            </Row>
            </Container>
        </div>
    )
  
}

export default Footer 