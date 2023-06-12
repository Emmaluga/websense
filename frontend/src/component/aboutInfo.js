import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import image1 from '../images/company-mission statement2 images.jpg'




const Aboutinfo = ()=>{

    return(

        <div className="abtinfo mt-5">
            <Container>
            <Row className="d-flex justify-content-around">
            <Col md={5}>
            <div className="aboutinfo-img">
            <img src={image1} alt="" className="img-fluid" />
            </div> 
            </Col>
            
            
            <Col sm={5}>
            <div className="aboutinfo-txt ">

             <h3 className="mt-3">Mission Statement</h3> 
             <p className="parag mb-">Web development is not just displaying information and user interactivity, it is taking the
                vision and design concept from the client and implementing it through code. <br /><br />
                My mission statement is building interactive and fast applications and making them so simple that, there are obviously no deficiences.
                From having a creative eye on images and how to structure them, understanding color theory 
                and how it affect the user's mood, and enhancing server side functionality and still, aligning all these concepts to the clients brand and mission statement.  
                Web development becomes crucial to the success of displaying information to the targeted users.<br /><br />
                </p>  
            </div>
            </Col>

            

            
            </Row>   
            </Container>
            

        </div>
    )
}

export default Aboutinfo 