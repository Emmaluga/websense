import React from "react";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import { useState } from "react";
import Image1 from '../images/websense-logo4.png'



const NavHead = ()=> {
  const [color, setColor] = useState(true)
  const [logo, setLogo] = useState(true)
  const [navColor, setnavColor] = useState(true)

 
  const colorFunc = ()=>{
   if(window.scrollY > 100){
      setColor(false)
      setLogo(false)
      setnavColor(false)
    }else{
      setColor(true)
      setLogo(true)
      setnavColor(true)
    }
  }
  window.addEventListener('scroll', colorFunc )

    return(
           <div className="App">  
        <Navbar className={color ? 'fixed-top' : 'nav fixed-top' } expand="lg" >
        <Container>
          <Navbar.Brand href="#home" id= 'logo'> <img src={Image1} alt="" /><span id={logo ? 'logo-span' : 'logo-span-new'}>WEBSENSE</span> </Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />  
                    
          <Navbar.Collapse id="basic-navbar-nav " >

          <Nav className="ms-auto">
          
            <Link to = '/' id={navColor ? 'navlink' : 'navLink-new' }> Home</Link>
            <Link to= '/about'  id={navColor ? 'navlink' : 'navLink-new' }>About</Link>
            <Link to= '/portfolio'  id={navColor ? 'navlink' : 'navLink-new' }>Portfolio</Link>
      
           
         
       </Nav>

          
        
            {/* <ul className="nav-menu-items d-flex">
              <li className="d-flex"> 
              <Link to = '/' id={navColor ? 'navlink' : 'navLink-new' }> Home</Link>
              <Link to= '/about'  id={navColor ? 'navlink' : 'navLink-new' }>About</Link>
              <Link to= '/portfolio'  id={navColor ? 'navlink' : 'navLink-new' }>Portfolio</Link>
               <div className="toggles">
                <Link to={'/#'} style={ {color: 'white' }}>create</Link>
               </div>
               </li>
                  
               </ul> */}
            {/* </Nav> */}
            <Nav className="ms-auto ">
              <Link to= '/contact' id='contactnav'>Contact</Link>
             
            </Nav>
        
          </Navbar.Collapse>
        
        
        
        </Container>
      </Navbar>

      </div>
   
    )
}

export default NavHead