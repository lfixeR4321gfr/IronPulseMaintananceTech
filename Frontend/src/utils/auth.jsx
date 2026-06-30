
// save login status
export const login =() =>{

    // storing token to the browser
    localStorage.setItem("token","true");
};

//save register status (kama umesha login for now, same as register)
export const register =() =>{

    //same with login
    localStorage.setItem("token","true");
};

//User logout
export const logout =() =>{

    //removing token from the browser
    localStorage.removeItem("token");
};

//check if user is logged in or not
export const isAuthentcated =() =>{
    //checking if token is in the browser, (return true if token is there, otherwise return false)
    return localStorage.getItem("token")  === "true";
}



