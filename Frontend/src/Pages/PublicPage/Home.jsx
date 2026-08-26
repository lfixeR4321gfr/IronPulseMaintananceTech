

import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
    

      <marquee> WELCOME & EXPLORE THE BEATYFUL OF MODERN TECHNOLOGICAL MAINTANANCES</marquee>


      <div className="Title">

        <h2>EXPLORE OUR SERVICES </h2>
      </div>

      <div className="article">

      <div className="Card">
          <h3>ELECTRICAL CAR DIAGNOSIS </h3>
          <img src="src\assets\diag.jpg" alt="Electrical Cars Diagnosis" />
          <p>
            We deal with ECU diagnosis ,Legal bybass,Chips programming,
            Key adding
            and entire car maintances
          </p>
          {/* <button onClick="alert('Sorry now this service not available')">Get started</button> */}


          <button onClick={() => navigate("/Car")}>Get started</button>
        
      </div>

        
      <div className="Card">
          <h3> MOTOR WATER PUMP MAINTANANCE </h3>
          <img src="src\assets\MotorTesting.jpg" alt="Moter troubleshooting" />
          <p>
            We deals with motor, waterPump,Ceilling fan troubleshooting and
            rewinging all kind of motors
          </p>
          <button onClick={() => navigate("/Motor")}>Get started</button>
        
      </div>

      <div className="Card">
          <h3>SMART HOME AUTOMATIONS SYSTEMS </h3>
          <img src="src\assets\Automation.jpeg" alt="Smart Home softlife"/>
          <p>
            We deal with IoT system and modern embeded system,
            such home appliance monitoring
            Tank water level  monitoring and management 
            different home automations
          </p>
          <button onClick={() => navigate("/Automation")}>Get started</button>
        
      </div>

    </div>
    </div>
  );
}

export default Home;