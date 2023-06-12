import React from 'react'
import Hero from '../component/hero'
import IntroTech from '../component/introTech'
import Tech from '../component/tech'
import Content from '../component/content'
import Consult from '../component/consult'
import Port from '../component/port'


const Home = ()=> {

  return (
    
     <div className="home">
    
          <Hero />
          <IntroTech />
          <Tech />
          <Content />
          <Consult />
          <Port />
         

     </div>
  )

}

export default Home