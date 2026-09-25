
import { Routes, Route } from "react-router-dom";

//import protected root from protected  file
//import ProtectedRoutes from "./ProtectedRoutes";

import AdminLayout from "../Layouts/AdminLayout/AdminLayout";

import AdminDashboard from "../Pages/Admin/AdminDashboard";
import Users from "../Pages/Admin/Users";
import ClientRequest from "../Pages/Admin/ClientRequest";
import Technician from "../Pages/Admin/Technician"; 
import ServiceHistory from "../Pages/Admin/ServicesHistory";


function AdminRoutes() {
    return (
        <Routes>

            {/* <Route element={<ProtectedRoutes role="admin" />}> */}
            <Route element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />}/>
                <Route path="users" element={<Users />}/>
                <Route path="request" element ={<ClientRequest/>}/>
                <Route path="technician" element ={<Technician/>}/>
                <Route path="history" element ={<ServiceHistory/>}/>

            {/* </Route> */}
            </Route>
        </Routes>
    );
}

export default AdminRoutes;