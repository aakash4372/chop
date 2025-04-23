import React from 'react'
import NavbarSection from './components/Navbar'
import HomeSection from './components/Home'
import AboutSection from './components/About'
import './App.css';
import ServiceSection from './components/Service';
import Certificate from './components/Certificate';
import AwardSection from './components/Awards';
import Reviewsection from './components/Review';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavbarSection/>
      <HomeSection/>
      <AboutSection/>
      <ServiceSection/>
      <Certificate/>
      <AwardSection/>
      <Reviewsection/>
      <Footer/>
      
    </div>
  )
}

export default App
