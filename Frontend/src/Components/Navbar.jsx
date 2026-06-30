
import "./Navbar.css";
import{Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav">   
            <div className="title">OceanicTours</div>

            <div className="links">

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Tours</Link>
                <Link to="/map">Map</Link>

           
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