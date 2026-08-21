
import "./Navbar.css";
import{Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav"> 
          
            <div className="logo">
                <img src="src\assets\logo.png"/>
                
            </div>


            <div className="links">

                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/map">Map</Link> 
                <Link to="/services">Services</Link>
                <Link to="/login">Login</Link>
                
                {/* <Link to="/requestform">Requestform</Link> */}
                {/* <Link to="/dashboard">Dashboard</Link> */}
           
            </div>
        </nav>
    );
}

// const styles = {
//     nav: {
//         display: 'flex',    
//         justifyContent: 'space-between',
//         padding: '10px',
//         backgroundColor: '#333',
//         color: '#fff',

//     },
//     links: {
//         display: 'flex',
//         gap: '15px',
//     },
// };

export default Navbar;