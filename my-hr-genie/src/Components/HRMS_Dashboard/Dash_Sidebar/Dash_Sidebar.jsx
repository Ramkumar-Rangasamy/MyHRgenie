import React, { useState, useEffect } from 'react';
import './Dash_Sidebar.css';
import brandLogo from "../../../Assets/brandlogo.png";

// Sidebar icons
import { FaHome } from "react-icons/fa";
import { FaBars, FaUsersCog, FaUsers } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { PiIdentificationCardFill } from "react-icons/pi";
import { RiTimeZoneFill, RiAlarmWarningFill, RiExchangeBoxFill } from "react-icons/ri";
import { BsPersonFillGear } from "react-icons/bs";
import { BsStopwatchFill } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const Dash_Sidebar = ({ setHeaderTitle }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(localStorage.getItem('lastActiveItem') || '/admindashboardpage');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 998);
  const [activeMenu, setActiveMenu] = useState(null);  // For submenu handling

  const menuItems = [
    {
     title:"Dashboard",
     icon:<FaHome/>,
    },
    {
      title: "Employee On-Boarding",
      icon: <FaUsersCog />,
      submenu: [
        "Employee Record - Add",
        "Employee Record - Modify",
        "Employee On-boarding",
        "PF Account",
        "Reporting Change Request",
        "Reporting Change Approval",
        "Reporting Change Cancel",
      ],
    },
    {
      title: "Off Time - Setup",
      icon: <RiTimeZoneFill />,
      submenu: ["Leave Application", "Leave Approval", "Holiday List"],
    },
    {
      title: "Off Time",
      icon: <BsStopwatchFill />,
      submenu: ["Sick Leave", "Casual Leave", "Work From Home"],
    },
    {
      title: "Team",
      icon: <FaUsers />,
      submenu: ["Team Members", "Roles & Permissions", "Projects"],
    },
    {
      title: "HR Team",
      icon: <BsPersonFillGear />,
      submenu: ["HR Policies", "Recruitment", "Payroll"],
    },
    {
      title: "Onboard Pay Setup",
      icon: <PiIdentificationCardFill />,
      submenu: ["Salary Structure", "Bonuses", "Deductions"],
    },
    {
      title: "Pay Process",
      icon: <RiExchangeBoxFill />,
      submenu: ["Payslips", "Taxation", "Reimbursements"],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 998);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setActiveItem(location.pathname);
    localStorage.setItem('lastActiveItem', location.pathname);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const handleMenuClick = (title) => {
    if (!isSidebarOpen && window.innerWidth <= 998) {
      setIsSidebarOpen(true); // Expand the sidebar in mobile view
    }
    setHeaderTitle(title);
    setActiveMenu(activeMenu === title ? null : title); // Toggle submenu
  };
  

  return (
    <div className={`dash-hrms-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="dash-hrms-logo-container">
        {isSidebarOpen ? (
          <>
            <img src={brandLogo} alt="Logo" className="logo" />
            <button className="toggle-button" onClick={toggleSidebar}>
              <FiX />
            </button>
          </>
        ) : (
          <button className="toggle-button toggle-button-bar" onClick={toggleSidebar}>
            <FaBars />
          </button>
        )}
      </div>

      {/* Sidebar Menu */}
      <ul className="sidebar-menu-admin">
        {menuItems.map((item, index) => (
          <li key={index} className={`menu-item ${activeMenu === item.title ? 'active' : ''}`}>
            <div className="menu-link" onClick={() => handleMenuClick(item.title)}>
              
              <div className="hrms-dash-sidebar-menu-icon-sub-contain">
                <span className="sidebar-icon">{item.icon}</span>
                <span className="span-title">{item.title}</span>
              </div>

              {/* Submenu Arrow Icon */}
              {item.submenu && (
                <span className="hrms-dash-sidebar-menu-arrow">
                  {activeMenu === item.title ? (
                    <MdOutlineKeyboardArrowUp size="1.5rem" />
                  ) : (
                    <MdOutlineKeyboardArrowDown size="1.5rem" />
                  )}
                </span>
              )}
            </div>

            {/* Submenu Items */}
            {item.submenu && activeMenu === item.title && (
              <ul className="submenu-list">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="submenu-item" onClick={() => setHeaderTitle(subItem)}>
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dash_Sidebar;
