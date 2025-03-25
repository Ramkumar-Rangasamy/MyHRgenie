import React, { useState } from "react";
import "./Dash_Layouts.css";
import Dash_Sidebar from "../Dash_Sidebar/Dash_Sidebar";
import { Outlet } from "react-router-dom";
import Dash_Header from "../Dash_Header/Dash_Header";

const Dash_Layouts = () => {
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  return (
    <div className="hrms-dashboard-container">
      <Dash_Sidebar setHeaderTitle={setHeaderTitle} />
      <div className="hrms-layout-dashboard-main-content">
      <Dash_Header headerTitle={headerTitle} />
        <div className="hrms-layout-dashboard-content-area">
          <Outlet /> {/* Dynamic content from nested routes */}
        </div>
      </div>
    </div>
  );
};

export default Dash_Layouts;
