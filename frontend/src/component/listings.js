import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'



const Listings = (props)=>{
const {image, tittle, link } = props

return(

    <div className='listings'> 
    <Container>
    <Row className='d-flex '>

    <Col md={4} className= 'mt-4'>
    <div className="cardList">
    
    <Card style={{ background : '#f7f7f7', width: '300px '  }} className='m-auto' > 
     <img src= {image} alt="" className=' img-fluid'  />
    <Card.Body>
    
     <p className="card-text" style= {{ fontSize : " 1.2rem;" }}> {tittle} </p> 
    <div className="cart-icons">  
     <a href= { link } target='_blank' rel='noreferrer' className='port-link'>{link}</a>


 
    </div>

    </Card.Body>
     </Card>  
    </div>

    </Col>


    </Row>
    </Container >
    </div>

)

}

export default Listings
