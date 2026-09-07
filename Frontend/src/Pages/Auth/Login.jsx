import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage("");


        try {

            const response = await fetch("http://localhost:8080/api/auth/login",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );


            const data = await response.json();
            if (!response.ok) {

                setMessage(
                    data.message || "Invalid email or password");

                return;
            }


            /*
            SAVE AUTHENTICATION DATA
            */

            localStorage.setItem(
                "token",
                data.token
            );

            localStorage.setItem(
                "role",
                data.role
            );


            /*
        
            REDIRECT BASED ON ROLE
            */

            if (data.role === "CLIENT") {

                navigate("/client/dashboard");

            } else if (data.role === "ADMIN") {

                navigate("/admin/dashboard");
            } else {
                setMessage("Unknown user role.");

            }


        } catch (error) {

            console.error(error);

            setMessage(
                "Unable to connect to server."
            );
        }
    };


    return (

        <div className="container">

            <form className="Login-Form" onSubmit={handleLogin}>

                <div id="message"> {message} </div>
                <h2>LOGIN</h2>  

                <div className="input-groupp">

                    <label>Email</label>

                    <input type="email" id="email" placeholder="Enter your email" value={email}onChange={(e) =>
                            setEmail(e.target.value)} required />


                    <label>Password</label>

                    <input type="password" id="password" placeholder="Enter your password"value={password} onChange={(e) =>
                            setPassword(e.target.value)}required/>


                    <button type="submit">LOGIN</button>


                    <p>
                        Don't have an account? {" "} <Link to="/register">Register here</Link>
                    </p>


                </div>
            </form>

        </div>

    );
}


export default Login;