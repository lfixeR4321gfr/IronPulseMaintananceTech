import { Routes,Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";

import About from "./Pages/About.jsx";

import Navbar from "./Components/Navbar.jsx"

import Footer from "./Components/Footer.jsx";

import Contact from "./Pages/Contact.jsx";
import Services from "./Pages/Services.jsx";



function App() {
  return (
    <>
    <Navbar/>

    <Routes>

    <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>  
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/services" element={<Services/>}/>

    </Routes>


    <Footer/>
    </>
    
    
  );
} 

export default App;