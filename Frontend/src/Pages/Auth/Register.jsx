import { useState } from "react";
import { Link } from "react-router-dom";

import "./Register.css";


function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [result, setResult] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        setResult("");


        /* CHECK PASSWORD */
        if (password !== confirmPassword) {
            setResult("Passwords do not match.");
            return;
        }


        /*
           TEMPORARY DATA
           Spring Boot API will be added later
         */

        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            password: password

        };


        console.log("Registration data:", userData);
        setResult("Registration form submitted successfully.");

    };


    return (
        <div className="Register-container">

            <form className="Register-Form" onSubmit={handleSubmit} >

                <h2>REGISTERATION</h2>


                <div id="result"> {result}</div>

                <div className="input-group">

                    <label>First name</label>
                    <input type="text" id="firstName"placeholder="Enter first name" value={firstName}onChange={(e) =>
                            setFirstName(e.target.value) }required />



                    <label> Last name </label>
                    <input type="text" id="lastName" placeholder="Enter last name"value={lastName} onChange={(e) =>
                            setLastName(e.target.value)}required />



                    <label>Email  </label>
                    <input type="email" id="email" placeholder="Example@gmail.com" value={email} onChange={(e) =>
                            setEmail(e.target.value)}required />


                    <label> Address</label>
                    <input type="text" id="address" placeholder="Enter your Address" value={address} onChange={(e) =>
                            setAddress(e.target.value)}required />


                    <label>Password </label>
                    <input type="password" id="password1" placeholder="Enter your password" value={password} onChange={(e) =>
                            setPassword(e.target.value)}required />


                    <label> Confirm Password</label>
                    <input type="password" id="password2" placeholder="Confirm your password" value={confirmPassword} onChange={(e) =>
                            setConfirmPassword(e.target.value)}required/>


                    <button type="submit">REGISTER</button>

                    <p> Already have an account? {" "} <Link to="/login"> LOGIN </Link></p>
        

                </div>

            </form>

        </div>

    );
}


export default Register;