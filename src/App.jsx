import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import MyWork from './Components/MyWork/MyWork';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Service/>
     <MyWork/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App;
