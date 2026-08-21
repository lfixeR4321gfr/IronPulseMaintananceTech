import { Link } from "react-router-dom";
import "./Register.css";
function Register (){
    return(
<div className="Register-container"> 
    
        <form className="Register-Form">
            <h2>REGISTERATION</h2>
            
            <div className="input-group">
                <label>First name</label>
                <input type="text" id ="name" placeholder="Enter first name"/>

                <label>Last name</label>
                <input type="text" id ="name" placeholder="Enter last name"/>

                <label>Email</label>
                <input type="email" id ="email" placeholder="Example@gmail.com"/>

                <label>Address</label>
                <input type="text" id ="address" placeholder="Enter your Address"/>

                <label>Password</label>
                <input type="password" id ="password1" placeholder="Enter your password"/>

                <label>Comfirm Password</label>
                <input type="password" id ="password2" placeholder="Comfirm your password "/>
                
                
                <button onClick="Submit()">REGISTER</button>

            
                <p>
                         Already have an account?
                          <Link to="/login">LOGIN</Link>
                </p>

            

                <div id="result"></div>



            </div>
            
            </form>
            
        </div>
        


    );
}

export default Register;