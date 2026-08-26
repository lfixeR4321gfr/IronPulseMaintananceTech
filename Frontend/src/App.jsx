import { Routes,Route } from "react-router-dom";

import ClientRoutes from "./Routes/ClientRoutes.jsx";
import AdminRoutes from "./Routes/AdminRoutes.jsx";


            //PUBLIC PAGE 
import Home from "./Pages/PublicPage/Home.jsx";
import About from "./Pages/PublicPage/About.jsx";
import Contact from "./Pages/PublicPage/Contact.jsx";
import Automation from "./Pages/OurServices/HomeAutomation.jsx";
import Services from "./Pages/OurServices/Services.jsx";


                   //AUTH
import Register from "./Pages/Auth/Register.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Requestform from "./Pages/Client/Requestform.jsx";


        //COMPONENTS
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx";
import Map from "./Components/Map.jsx";


import Car from "./Pages/OurServices/CarDiagnosis.jsx";
import Motor from "./Pages/OurServices/MotorMaintanance.jsx";


function App() {
  return ( 
    <>
      <Navbar />
      

    
    <Routes>
                //PUBLIC PAGES ROUTES
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />  
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />


        //OUR SERVICES
         <Route path="/car" element={<Car />} />
        <Route path="/motor" element={<Motor />} />
         <Route path="/Automation" element={<Automation />} /> 

         
          //COMPONENTS ROUTES  path
        <Route path="/map" element={<Map/>}/>
       
             //AUTH
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/requestform" element={<Requestform/>}/>
        

         //    ADMIN ROUTES
         <Route path="/admin/*" element={<AdminRoutes/>}/>


            //    CLIENT ROUTES
          <Route path="/client/*" element={<ClientRoutes />} />
        
      
    </Routes>
    <Footer/>
    </>
    
    
  );
} 

export default App;