import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Mission from './Components/Mission';
import Facts from './Components/Facts';
import CTA from './Components/CTA';
import Donate from './Components/Donate';
import Footer from './Components/Footer';
import {Auth} from './Components/Auth';
import Slider from './Components/Slider';
import Stop from './Components/Stop';

function App() {
  return(
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Facts />
      <Slider />
   
      <CTA />
      <Donate />
      <Footer />
    </>
  );
}

export default App
