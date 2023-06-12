import React from 'react'
import NavHead from './Navbar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'




const Home = ()=> {


  return (
   
          
           <div className="home">

               <NavHead />
               <Outlet />
               <Footer />


           </div>
        )
      
      }
      

export default Home