import { Outlet } from "react-router-dom";
import TechnicianSidebar from "../../Components/Technician/TechnicianSidebar";

import { useState } from "react";

import "./TechnicianLayout.css";
function TechnicianLayout() {
    const[sidebarOpen,setSidebarOpen] = useState(false);
    const toggleSidbar = (event)=>{event.stopPropagation();
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        if (sidebarOpen){
            setSidebarOpen(false);
        }
    };

    return (
        <div className="technician-layout">
            {sidebarOpen && <TechnicianSidebar /> }
            <main className="client-main" onClick ={closeSidebar}>

                <button className="sidebar-toggle" onClick={()=> setSidebarOpen(!sidebarOpen)}>
                    ➡️
                </button>
            
                <Outlet />
            </main>
        </div>
   
    );
}

export default TechnicianLayout;



