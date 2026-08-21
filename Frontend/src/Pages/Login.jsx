
import { Link } from "react-router-dom";

import { Form } from "react-router-dom";
import "./Login.css";
function Login (){
    return (
        
        <div className="container">

        <form className="Login-Form">
            <h2>LOGIN</h2>
            
            <div className="input-groupp">
                <label>User name</label>
                <input type="text" id ="name" placeholder="Enter user name"/>

                <label>Password</label>
                <input type="password" id ="password" placeholder="Enter your password"/>

                    <button type="submit">LOGIN</button>
                <p>
                    Don't have an account?
                    <Link to="/register">Register here</Link>
                </p>

                <div id="message"></div>

            </div>
            
            </form>
            
        </div>

    );
}

export default Login;