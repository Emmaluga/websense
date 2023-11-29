import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Listings from '../component/listings'
import portfolioData from "./portfolioData"




const PortfolioInfo = ()=> {
  // const [data, setData] = useState([])
  const [ data, setData ]= useState(portfolioData)



  // let url = "http://localhost:5000/products";

   
  //   const Fetchdata = async ()=> {

  //         try {
  //           axios
  //           .get(url)
  //           .then((res)=> {
             
  //               setData(res.data);
                
  //           })
  //         } catch (error) {
  //           console.log(error)
        
  //         }
       
  //                 // try {
                    
  //                 //   let response = await fetch(url);
                     
  //                 //   let actualdata = await response.json();
  //                 //       setData(actualdata)
  //                 // } catch (error) {
  //                 //      console.log(error)


  //                   // }  

  // }
  // useEffect(()=>{
  //   Fetchdata()
  // });

      
    return(
         
         <div className="port">

            <Container>
            <Row className =  ' bg- d-flex ' style={{justifyContent: 'space-around'}}>
            <Col md= {10} className='map m-auto' style={{justifyContent: 'space-around'}}>
               {data.map((x)=>{

                  return(
                    
                  <Listings key={x._id}  {...x} />

                  )

               })}
            </Col>



           
            </Row>   
            </Container>
           
         </div>
     )
  
}
 export default PortfolioInfo