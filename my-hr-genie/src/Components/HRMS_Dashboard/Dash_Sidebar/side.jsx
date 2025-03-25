import React, { useState } from "react";
import brandlog from "../../../Assets/brandlogo.png";
import { FaUsersCog, FaUsers, FaMoneyCheck } from "react-icons/fa";
import { RiAlarmWarningFill, RiExchangeBoxFill } from "react-icons/ri";
import { MdOutlinePayments, MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaClock, FaUsersGear } from "react-icons/fa6";
import { RiTimeZoneFill } from "react-icons/ri";
import { PiIdentificationCardFill } from "react-icons/pi";
import "./Dash_Sidebar.css";

const Dash_Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  // Toggle only one menu open at a time
  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  `const menuItems = [
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
      icon: <RiAlarmWarningFill />,
      submenu: ["Sick Leave", "Casual Leave", "Work From Home"],
    },
    {
      title: "Team",
      icon: <FaUsers />,
      submenu: ["Team Members", "Roles & Permissions", "Projects"],
    },
    {
      title: "HR Team",
      icon: <FaUsersCog />,
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
  ];`

  return (
    <div className="hrms-dash-sidebar-container">
      {/* Sidebar Logo */}
      <div className="hrms-dash-sbr-logo">
        <img src={brandlog} alt="HR Genie" className="logo-img" />
      </div>

      <ul className="hrms-dash-sidebar-menu-list">
  {menuItems.map((item, index) => (
    <li key={index} className="hrms-dash-sidebar-menu-item">
      {/* Menu Title */}
      <div
        className={`hrms-dash-sidebar-menu-title ${activeMenu === item.title ? "active" : ""}`}
        onClick={() => toggleMenu(item.title)}
        onKeyDown={(e) => e.key === "Enter" && toggleMenu(item.title)}
        tabIndex={0}
        role="button"
        aria-expanded={activeMenu === item.title}
      >
        <div className="hrms-dash-sidebar-menu-icon-sub-contain">
          <span className="hrms-dash-sidebar-menu-icon">{item.icon}</span>
          <span className="span-title">{item.title}</span>
        </div>
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
          {item.submenu.map((sub, subIndex) => (
            <li key={subIndex} className="submenu-item">{sub}</li>
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
