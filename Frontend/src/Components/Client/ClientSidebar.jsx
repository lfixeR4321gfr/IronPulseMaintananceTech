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

import "./ClientSidebar.css";


function ClientSidebar() {

    return (

        <aside className="client-sidebar">

            {/* =====================================================
                LOGO
            ====================================================== */}

            <div className="client-sidebar-logo">

                <div className="logo-icon">
                    CY
                </div>

                <div className="logo-text">

                    <h2>IronPulse</h2>

                    <span>Maintenance</span>

                </div>

            </div>


            

            {/* NAVIGATION */}

            <nav className="client-sidebar-nav">


                {/*  DASHBOARD */}

                <NavLink to="/client/dashboard"className={({ isActive }) =>isActive
                            ? "sidebar-link active"
                            : "sidebar-link"}>

                    <FaHome className="sidebar-icon" />

                    <span>Dashboard</span>
                    </NavLink>


                {/* SERVICES*/}

                <div className="sidebar-section">

                    <div className="sidebar-section-title">
                        SERVICES
                    </div>


                    <NavLink to="/client/services"className={({ isActive }) =>isActive
                                ? "sidebar-link active"
                                : "sidebar-link"}>

                        <FaTools className="sidebar-icon" />
                        <span>All Services</span>
                        </NavLink>
                </div>


                {/* REQUESTS */}

                <div className="sidebar-section">

                    <div className="sidebar-section-title">
                        REQUESTS
                    </div>



                    {/* My Requests */}

                    <NavLink to="/client/requests"end className={({ isActive }) =>isActive
                                ? "sidebar-link active"
                                : "sidebar-link"} >

                        <FaClipboardList className="sidebar-icon" />
                        <span>My Requests</span>

                    </NavLink>


                    {/* New Request */}

                    <NavLink to="/client/requests/new"className={({ isActive }) => isActive
                                ? "sidebar-link active"
                                : "sidebar-link"}>

                        <FaPlus className="sidebar-icon" />
                        <span>New Request</span>
                    </NavLink>


                    {/* Service History */}

                    <NavLink to="/client/history" className={({ isActive }) =>isActive
                                ? "sidebar-link active"
                                : "sidebar-link"}>

                        <FaHistory className="sidebar-icon" />
                        <span>My Service History</span>
                    </NavLink>
                </div>


                {/*  ACCOUNT*/}

                <div className="sidebar-section">
                    <div className="sidebar-section-title">
                        ACCOUNT
                    </div>

                    {/* Profile */}

                    <NavLink to="/client/profile"className={({ isActive }) =>isActive
                                ? "sidebar-link active"
                                : "sidebar-link"} >

                        <FaUser className="sidebar-icon" />
                        <span>Profile</span>
                    </NavLink>


                    {/* Settings */}

                    <NavLink to="/client/settings"className={({ isActive }) => isActive
                                ? "sidebar-link active"
                                : "sidebar-link"}>

                        <FaCog className="sidebar-icon" />
                        <span>Settings</span>
                    </NavLink>
                </div>

            





            {/*LOGOUT */}

            <button type="button"className="client-logout" >
                <FaSignOutAlt className="sidebar-icon" />

                <span>
                    Logout
                </span>

            </button>


                </nav>
        </aside>

    );
}


export default ClientSidebar;