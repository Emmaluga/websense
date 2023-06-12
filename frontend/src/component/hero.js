import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Carousel from 'react-bootstrap/esm/Carousel'
import image1 from '../images/portfolio-main1.jpg'
import image2 from '../images/portfolio-design.jpg'
import { Link } from 'react-router-dom'




const Hero = ()=> {

  return (

       <div className="hero ">

        <Container>
           <Row className='d-flex justify-content-around' > 
            
            <Col className='bg- text-center' md={5}>
            
            <div className="hero-text  bg-">
             <h1 className='head1 mb-4 text-center'><span style={{color:'purple', fontSize: '1.6em'}}>C</span>reate Your Presence  <br /> on the Web </h1> 
            <p className='para'>websense is a web app development company that build
            dynamic websites for corporate businesses and entrepreneurs. </p>
                <Link to='/contact'><button className='btn1 '>Create Now</button></Link> 
              </div>
    
            </Col>

              <Col className='bg- ' md={6}>
                   <div className="hero-img">
                
                <Carousel fade>
                <Carousel.Item>
                <img src={image1} className='img-fluid' alt="" />
                </Carousel.Item>


            <Carousel.Item>
                <img src={image2} className='img-fluid' alt="" />
                </Carousel.Item>

              </Carousel>
  
                   </div>
              </Col> 

            </Row>
        </Container>
           
       </div>
  )

}

export default Hero
