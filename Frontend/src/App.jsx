import { Routes,Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";

//++++++++++++++++++++++++++++++++++++++++++++
import Register from "./Pages/Register.jsx";

import Login from "./Pages/Login.jsx";

import About from "./Pages/About.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Navbar from "./Components/Navbar.jsx"

import Footer from "./Components/Footer.jsx";

import Contact from "./Pages/Contact.jsx";
import Services from "./Pages/Services.jsx";

import Car from "./Pages/CarDiagnosis.jsx";
import Motor from "./Pages/MotorMaintanance.jsx";
import Automation from "./Pages/HomeAutomation.jsx";
import Map from "./Components/Map.jsx";

import Requestform from "./Pages/Requestform.jsx";





function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>

        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />  
        
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/services" element={<Services />} />

        <Route path="/map" element={<Map/>}/>
     
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/car" element={<Car />} />

        <Route path="/motor" element={<Motor />} />
        
        <Route path="/Automation" element={<Automation />} /> 
     
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/requestform" element={<Requestform/>}/>
        
        
       
     


    </Routes>


    <Footer/>
    </>
    
    
  );
} 

export default App;