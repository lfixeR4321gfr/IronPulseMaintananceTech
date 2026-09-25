
// import API_URL from Api.js
import API_URL from "./Api";


/*Register a new client. This function sends registration data from React to Spring Boot. */
export const registerClient = async (userData) => {

    /* Send POST request to Spring Boot. through this url http://localhost:8080/api/auth/registe */
    const response = await fetch(`${API_URL}/api/auth/register`,
        {
            method: "POST",

            /* Tell Spring Boot that we are sending JSON.*/
            headers: {"Content-Type": "application/json" },

            //  Convert JavaScript object into JSON.
            body: JSON.stringify(userData)
        }
    );

    // Convert Spring Boot's JSON response back into a JavaScript object
    const data = await response.json();

    //this for error message if spring boot fail en registrations
    if (!response.ok) {
        throw new Error(data.message || "Registration failed.");
    }

    //Return the successful response back to Register.jsx.
    return data;
};