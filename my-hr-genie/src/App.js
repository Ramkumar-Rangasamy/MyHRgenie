import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dash_ConntectRoutes from './Components/HRMS_Dashboard/Dash_ConntectRoutes/Dash_ConntectRoutes';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to HRMS Dashboard */}
        <Route path="/" element={<Navigate to="/hrms/dashboard/main-dashboard-page" />} />

        {/* Dashboard Routes: Sidebar, Header & Content handled inside `Dash_ConntectRoutes` */}
        <Route path="/hrms/dashboard/*" element={<Dash_ConntectRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
