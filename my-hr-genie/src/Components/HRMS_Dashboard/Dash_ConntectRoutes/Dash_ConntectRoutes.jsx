import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Imported Components
import Dash_Header from '../Dash_Header/Dash_Header';
import Dash_Layouts from '../Dash_Layouts/Dash_Layouts';
import Dash_Main from '../Dash_Pages/Dash_Main/Dash_Main';

const Dash_ConntectRoutes = () => {
  return (
    <div className="dashboard-wrapper">
     
      
      <Routes>
        <Route path="/" element={<Dash_Layouts />}>
          <Route index element={<Navigate to="main-dashboard-page" />} />
          <Route path="main-dashboard-page" element={<Dash_Main />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Dash_ConntectRoutes;
