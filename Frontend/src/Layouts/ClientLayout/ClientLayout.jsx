import { Outlet } from "react-router-dom";
import ClientSidebar from "../../Components/Client/ClientSidebar";
import "./ClientLayout.css";
import { useState } from "react";

function ClientLayout() {
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
        

            {sidebarOpen && <ClientSidebar /> }

            <main className="client-main" onClick ={closeSidebar}>

                <button className="sidebar-toggle" onClick={()=> setSidebarOpen(!sidebarOpen)}>
                    =
                </button>
            
                <Outlet />
            </main>
        </div>
    );
}

export default ClientLayout;

