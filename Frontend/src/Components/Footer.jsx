
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">

      <div className="footer-box">

      <div className="promo">
        <h2> Meet your trusted patners in Zanzibar</h2>
       
      
      <ul>
        <p>We deals with 👎</p>
        <li>Electrical car diagnosis</li>
        <li>Motor and pumps maintanace</li>
        <li> Home automation</li>
      </ul>
      </div>



      <div className="contact">
        <h2>Contact</h2>


        <ul>

          <li> 
     <a
    href="https://wa.me/255679784927?text=Hello%2C%20I%20would%20like%20to%20contact%20you."
    target="_blank"
    rel="noopener noreferrer"
>
    WhatsApp +255679784927
</a> <br ></br> </li>

          <li>  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=allyfaki162@gmail.com&su=Contact%20Us"
  target="_blank"
  rel="noopener noreferrer"
>
  allyfaki162@gmail.com
</a>  </li>


          
          
        
        </ul>
        
        </div>

        <div className="quick-links">
       
          <h2>Quick Links</h2>

          
          {/* <Link to="/register">Register here</Link> */}
          {/* <a href="/">Home</a> <br></br>
          <a href="/about">About us</a> <br></br>
          <a href="/service">Services</a><br></br>
          <a href="/map">Map</a><br></br>
          <a href="/register">Register</a>  <br></br>
          <a href="/login">Login</a> */}


          <Link to="/">Home</Link>    <br></br>
          <Link to="/about">About us</Link>   <br></br>
          <Link to="/contact">Contact</Link>    <br></br>
          <Link to="/services">Services</Link>  <br></br>
          <Link to="/map">Map</Link>   <br></br>
          <Link to="/login">Login</Link>    <br></br>

    
        </div>

      </div>

      
      <div className="copyright">

      <p>© 2026 Maintanance Services &Technological solutions. All rights reserved.</p>
    </div>
    </div>

    
  );
}

export default Footer;











// import React from "react";
// import "./Footer.css";

// // React Icons import
// import { FaWhatsapp, FaTiktok } from "react-icons/fa";

// function Footer() {
//   return (
//     <Footer className="Footer">

//       {/* Logo / Title */}
//       <div className="logo">
//         My Website
//       </div>

//       {/* Social Icons */}
//       <div className="social-icons">

//         {/* WhatsApp */}
//         <a
//           href="https://wa.me/255627496194"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <FaWhatsapp />
//         </a>

//         {/* TikTok */}
//         <a
//           href="https://www.tiktok.com/@ally"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <FaTiktok />
//         </a>

//       </div>

//     </Footer>
//   );
// }

// export default Footer;