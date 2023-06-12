import React from "react";
import Home from "./pages/home";
import About from './pages/about'
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import SharedLayout from "./component/sharedlayout";
import Error from './component/error'
import { Route, Routes } from "react-router-dom";
import SuccessForm from "./component/successForm";





const App = ()=> {

  return (
    <div className="App">

     
        <Routes>

          <Route path="/" element={ <SharedLayout /> }>
          <Route index element={ <Home />} />
          <Route  path="/about" element={ <About />} />
          <Route  path="/portfolio" element={ <Portfolio />} />
          <Route  path="/contact" element={ <Contact />} />
          <Route  path="/successForm" element={ <SuccessForm />} />
          <Route  path="*" element={ <Error/>} />

          </Route>

        </Routes>
       
       
    </div>
  );
}

export default App;
