import {
    FaHome,
    FaTools,
    FaClipboardList,
    FaHistory,
    FaUser,
    FaCog,
    FaSignOutAlt,
    FaChevronDown,
    FaPlus
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";




function AdminSidebar() {

    return (

        <aside className="admin-sidebar">

            
            {/* NAVIGATION */}

            <nav className="admin-sidebar-nav">
                {/*  DASHBOARD */}
                
                <NavLink to="/admin/dashboard"className={({ isActive }) =>isActive
                            ? "sidebar-link active"
                            : "sidebar-link"}>

                    <FaHome className="sidebar-icon" />

                    <span>Dashboard</span>
                    </NavLink>


                {/* SERVICES*/}

                <div className="sidebar-section">

        


                    <NavLink to="/admin/users"className={({ isActive }) =>isActive
                                ? "sidebar-link active"
                                : "sidebar-link"}>

                        <FaTools className="sidebar-icon" />
                        <span>All Users</span>
                        </NavLink>
                </div>


                {/* REQUESTS */}

                <div className="sidebar-section">

                    <div className="sidebar-section-title">
                        REQUESTS
                    </div>



                    {/* My Requests */}

                    <NavLink to="/admin/request" className={({ isActive }) =>isActive
                                ? "sidebar-link active"
                                : "sidebar-link"} >

                        <FaClipboardList className="sidebar-icon" />
                        <span>Client Requests</span>

                    </NavLink>


                    {/* New Request */}

                    <NavLink to="/admin/technician"className={({ isActive }) => isActive
                                ? "sidebar-link active"
                                : "sidebar-link"}>

                        <FaPlus className="sidebar-icon" />
                        <span>Technicians</span>
                    </NavLink>


                    {/* Service History */}

                    <NavLink to="/admin/history" className={({ isActive }) =>isActive
                                ? "sidebar-link active"
                                : "sidebar-link"}>

                        <FaHistory className="sidebar-icon" />
                        <span>Service History</span>
                    </NavLink>
                </div>


                {/*  ACCOUNT*/}

                <div className="sidebar-section">
                    <div className="sidebar-section-title">
                        ACCOUNT
                    </div>

                    {/* Profile */}

                    <NavLink to="/admin/profile"className={({ isActive }) =>isActive
                                ? "sidebar-link active"
                                : "sidebar-link"} >

                        <FaUser className="sidebar-icon" />
                        <span>Profile</span>
                    </NavLink>


                    {/* Settings */}

                    <NavLink to="/admin/settings"className={({ isActive }) => isActive
                                ? "sidebar-link active"
                                : "sidebar-link"}>

                        <FaCog className="sidebar-icon" />
                        <span>Settings</span>
                    </NavLink>
                </div>

           
            {/*LOGOUT */}

            <button type="button"className="admin-logout" >
                <FaSignOutAlt className="sidebar-icon" />

                <span>
                    Logout
                </span>

            </button>
 </nav>
        </aside>

    );
}


export default AdminSidebar;