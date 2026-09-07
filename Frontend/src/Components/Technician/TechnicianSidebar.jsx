import { FaHome,FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";


function TechnicianSidebar() {

    return (

        <aside className="technician-sidebar">

            
            {/* NAVIGATION */}

            <div className="technician-nav">
                
                <NavLink to="/technician/dashboard"className={({ isActive }) =>isActive
                            ? "sidebar-link active"
                            : "sidebar-link"}>

                    <FaHome className="sidebar-icon" />
                    <h4>Dashboard</h4>
                    </NavLink>


                {/* Requests*/}

        
                    <NavLink to="/technician/requests"className={({ isActive }) =>isActive
                                ? "sidebar-link active"
                                : "sidebar-link"}>

                        <FaUser className="sidebar-icon" />
                        <h4>Task requests</h4>
                        </NavLink>



                                
                    <NavLink to="/technician/history"className={({ isActive }) =>isActive
                                ? "sidebar-link active"
                                : "sidebar-link"}>

                        <FaUser className="sidebar-icon" />
                        <h4>Services History</h4>
                        </NavLink>


                        <NavLink to="/technician/history"className={({ isActive }) =>isActive
                                ? "sidebar-link active"
                                : "sidebar-link"}>

                        <FaUser className="sidebar-icon" />
                        <h4>Services History</h4>
                        </NavLink>
        
            </div>          
        </aside>

    );
}


export default TechnicianSidebar;