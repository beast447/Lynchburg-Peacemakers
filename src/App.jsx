import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Mission from './Components/Mission';
import Facts from './Components/Facts';
import CTA from './Components/CTA';
import Donate from './Components/Donate';
import Footer from './Components/Footer';

function App() {
  return(
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Facts />
      <CTA />
      <Donate />
      <Footer />
    </>
  );
}

export default App
