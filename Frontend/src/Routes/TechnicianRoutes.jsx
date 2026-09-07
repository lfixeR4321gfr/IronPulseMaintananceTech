import { Routes,Route } from "react-router-dom";
import TechnicianLayout from "../Layouts/TechnicianLayout/TechnicianLayout";
import TechnicianDashboard from "../Pages/Technician/TechnicianDashboard";
import TaskRequests from "../Pages/Technician/TaskRequests";
import ServiceHistory from "../Pages/Technician/ServicesHistory";

function TechnicianRoutes() {
    return (
        <Routes>
            <Route path="/*" element={<TechnicianLayout />}>
                <Route path="dashboard" element={<TechnicianDashboard />} />
                <Route path="requests" element={<TaskRequests />} />
                <Route path="history" element ={<ServiceHistory/>}/>
            </Route>
        </Routes>
    );
}
export default TechnicianRoutes;
