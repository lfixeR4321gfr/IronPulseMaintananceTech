import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import "./MotorMaintanance.css"
function Motor() {
    const visit = useNavigate();
    return (
        <div className="title">
        
            <h2>Motor and pumps maintanance support</h2>

            <div className="request">
                <p>Click here for making maintanance request</p>
                <h4> 👇</h4>
                
                <button onClick={() => visit("/Requestform")}>Make request</button>

            </div>
            

            <div className="ServiceTitle">

                <p>Explore more Services available</p>
            </div>

            
            <div className="articles">
               

                <div className="cards">
                    <h3>Motor and water pump rewinding</h3>
                    <img src="src\assets\Rewinding.jpeg" alt="Moter troubleshooting" />
                    <p> Discriptions</p>

                    
                </div>

                <div className="cards">
                    <h3>Ceilling fan rewinding</h3>
                    <img src="src\assets\CeillingFan.jpg" alt="Moter troubleshooting" />
                    <p> Discriptions</p>
                </div>

                <div className="cards">
                    <h3>Magneto Coil rewinding</h3>
                    <img src="src\assets\Magnetor.jpeg" alt="Moter troubleshooting" />
                    <p> Discriptions</p>
                </div>

                <div className="cards">
                    <h3>Drills and Grider overall maintanance</h3>
                    <img src="src\assets\Drills.jpg" alt="Drill image" />
                    <p> Discriptions</p>
                </div>

                <div className="cards">
                    <h3>Transformer rewinding</h3>
                    <img src="src\assets\Rewinding.jpeg" alt="Moter troubleshooting" />
                    <p> Discriptions</p>
                </div>

                <div className="cards">
                    <h3>Blower and Washing machine troubleshooting</h3>
                    <img src="src\assets\Washing.jpeg" alt="Moter troubleshooting" />
                    <p> Discriptions</p>
                </div>

            </div>
        
        </div>
    );
}
export default Motor;