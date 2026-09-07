import { Routes, Route } from "react-router-dom";

//protected routess from src/Routes/ProtectedRoutes.jsx

// import ProtectedRoutes from "./ProtectedRoutes";


import ClientLayout from "../Layouts/ClientLayout/ClientLayout";
import ClientDashboard from "../Pages/Client/ClientDashboard";
import MyRequests from "../Pages/Client/MyRequests";
import NewRequest from "../Pages/Client/NewRequest";
import ServiceHistory from "../Pages/Client/ServicesHistory";


function ClientRoutes() {
    return (
        <Routes>


                //protected routess
            {/* <Route element={<ProtectedRoutes role="client" />}> */}

            <Route element={<ClientLayout />}>
                <Route path="dashboard" element={<ClientDashboard />}/>
                <Route path="requests" element={<MyRequests />}/>
                <Route path="requests/new" element={<NewRequest />}/>
                <Route path="history" element={<ServiceHistory/>}/>
                

            {/* </Route> */}
            </Route>
        </Routes>
    );
}

export default ClientRoutes;