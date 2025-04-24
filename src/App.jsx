// import React, { useEffect, useState } from "react";
// import NavbarSection from "./components/Navbar";
// import HomeSection from "./components/Home";
// import AboutSection from "./components/About";
// import ServiceSection from "./components/Service";
// import Certificate from "./components/Certificate";
// import AwardSection from "./components/Awards";
// import Reviewsection from "./components/Review";
// import Footer from "./components/Footer";
// import Mobile from "./components/Mobile";
// import Preloader from "./components/Preloader";
// import AOS from "aos"; 
// import "aos/dist/aos.css"; 
// import "./App.css";

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);

//     if (!isLoading) {
//       AOS.init({
//         duration: 1000,
//         once: true,
//       });
//       AOS.refresh();
//     }

//     return () => clearTimeout(timer);
//   }, [isLoading]);

//   return (
//     <div className="min-h-screen">
//       <Preloader isLoading={isLoading} />
//       {!isLoading && (
//         <>
//           <NavbarSection />
//           <HomeSection />
//           <AboutSection />
//           <ServiceSection />
//           <Certificate />
//           <AwardSection />
//           <Reviewsection />
//           <Mobile />
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;




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
import Mobile from './components/Mobile';

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
      <Mobile/>
      <Footer/>
      
    </div>
  )
}

export default App