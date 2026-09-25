import { useState } from "react";
import { Link } from "react-router-dom";
import { registerClient } from "../../AuthServices/AuthServices";
import "./Register.css";

function Register() {
    //   Store the user's value.
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    /* Store the password confirmation. This value is only used by React to check that both passwords match.*/
    const [confirmPassword, setConfirmPassword] = useState("");
    
    //  Store success or error messages.
    const [result, setResult] = useState("");


    /*Handle form submission*/
    const handleSubmit = async (e) => {

        /* Prevent the browser from refreshing the page after form submission.*/
        e.preventDefault();

        //  Clear the previous message.
        setResult("");

            // check password
        if (password !== confirmPassword) {
            setResult("Passwords do not match.");
            return;
        }

        /* object that will be sent to the Spring Boot backend.*/
        const userData = {
            fullName: fullName,
            email: email,
            password: password
        };

        /* Send registration data to Spring Boot. */
        try {
            const response = await registerClient(userData);


            /*
             * Display the response in the browser console. Example response:
             * {
             *   id: 3,
             *   fullName: "Ali Hamad",
             *   email: "ali@example.com",
             *   role: "CLIENT",
             *   createdAt: "...",
             *   lastLogin: null
             * }
             */
            console.log(
                "Registration successful:",
                response
            );


            /*Show success message to the user.*/
            setResult(
                "Registration successful!"
            );

            /*Clear form after successful registration.*/
            setFullName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

        } catch (error) {
            /*Display the error in the console*/
            console.error(
                "Registration error:",
                error
            );

            /* Show the error to the user.*/
            setResult(
                error.message || "Registration failed."
            );
        }
    };

    return (
        <div className="Register-container">
            <form className="Register-Form" onSubmit={handleSubmit}>

                       <h2>REGISTRATION</h2>

                {/* Display success or error message.*/}
                <div id="result">{result}</div>

                <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" id="fullName" placeholder="Enter Name" value={fullName}onChange={(e) =>
                            setFullName(e.target.value)} required />

                    <label>Email </label>
                    <input type="email" id="email" placeholder="Example@gmail.com" value={email}onChange={(e) =>
                            setEmail(e.target.value) }required />


                    <label>Password </label>
                    <input type="password" id="password1" placeholder="Enter your password" value={password} onChange={(e) =>
                            setPassword(e.target.value)} required />


                    <label> Confirm Password</label>
                    <input type="password" id="password2" placeholder="Confirm your password" value={confirmPassword} onChange={(e) =>
                            setConfirmPassword(e.target.value)} required />

                    <button type="submit"> REGISTER</button>

                    <p> Already have an account?{" "} <Link to="/login"> LOGIN </Link> </p>

                </div>
            </form>
        </div>
    );
}
export default Register;