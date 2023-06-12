import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import image2 from '../images/luga1.jpg'

   const Pic =()=>{

    return(
     <div className="pic">

<Container>
 <Row className="d-flex justify-content-around"> 
<Col md={5} className="">
<div className="pic">
   <img src={image2} alt="" className="img-fluid" />
</div>
</Col>

<Col md={5} className="">
<div className="txt">

<p className="parag mt-5">Emmanuel Ilegbodu, the creator of Websense Web Development is a Web App Developer, A MERN STACK specialist
  as well as a uI/UX designer. 
  Trained in the primier APtech computer education, he exhibits modern coding
 skills that help clients in creating brands and making websites that work for them. <br /><br />
 
 Emmanuel Ilegbodu is an African first and formost, an unpublished poet and an unapologetic
 fan of Manchester United since 1999. A team player who loves learning from others, and with
 a firm believe in providing quality services no matter the cost offered. <br /><br />
 Emmanuel Ilegbodu currently lives in lagos Nigeria.
 </p> 

</div>
</Col>
</Row> 
</Container>

</div>
    ) 

   }

   export default Pic