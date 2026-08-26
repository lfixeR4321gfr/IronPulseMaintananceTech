import { Outlet } from "react-router-dom";
import AdminSidebar from "../../Components/Admin/AdminSidebar";

import { useState } from "react";


function AdminLayout() {
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
        <div className="client-layout">
            {sidebarOpen && <AdminSidebar /> }
            <main className="client-main" onClick ={closeSidebar}>

                <button className="sidebar-toggle" onClick={()=> setSidebarOpen(!sidebarOpen)}>
                    =
                </button>
            
                <Outlet />
            </main>
        </div>
   
    );
}

export default AdminLayout;

;

