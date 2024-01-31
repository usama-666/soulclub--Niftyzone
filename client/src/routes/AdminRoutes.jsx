// AdminRoutes.js

import { Route, Routes } from "react-router-dom";
// import AdminLayout from "../layouts/AdminLayout"; // Import your admin layout component
import AdminApp from "../pages/Admin/AdminLayout";
import Dashboard from "../pages/Admin/scenes/dashboard";
// Import admin-specific components

function AdminRoutes() {
  return (
    <Routes>
      <Route path="admin" element={<AdminApp />}>
        <Route index element={<Dashboard />} />
        {/* Add more admin-specific routes */}
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
