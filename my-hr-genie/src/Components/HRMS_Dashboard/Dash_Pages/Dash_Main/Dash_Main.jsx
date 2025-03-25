import React, { useState, useEffect, useRef } from "react";
import "./Dash_Main.css";

import anysroll from "../../../../Assets/anyscroll.jpeg";

//useing and imported react-iocns here...
import { MdAccessTimeFilled } from "react-icons/md";
import { RiFileList3Fill } from "react-icons/ri";
import { BsCheckCircleFill } from "react-icons/bs";
import { SiAnswer } from "react-icons/si";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import {  FaTimes } from "react-icons/fa";
import { BiSolidParty } from "react-icons/bi";
import { HiMiniUsers } from "react-icons/hi2";

//using in dayjs and daypicker calender here ...
import dayjs from "dayjs";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Dash_Main = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the content for a seamless scroll
    const cloneContent = () => {
      const scrollItems = Array.from(scrollContainer.children);
      scrollItems.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollContainer.appendChild(clone);
      });
    };

    cloneContent();
  }, []);
  
  const [selectedDay, setSelectedDay] = useState(new Date());

  const [tasks, setTasks] = useState([
    { id: 1, title: "Design UI", description: "Create wireframes for dashboard" },
    { id: 2, title: "Fix Bugs", description: "Resolve login page issues" },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDesc, setNewTaskDesc] = useState("");

  const handleAddTask = () => {
    if (!newTaskTitle.trim() || !newTaskDesc.trim()) return;

    setTasks([...tasks, { id: tasks.length + 1, title: newTaskTitle, description: newTaskDesc }]);
    setNewTaskTitle("");
    setNewTaskDesc("");
    setShowPopup(false);
  };

  const [approvals, setApprovals] = useState([
    { id: 1, title: "Design task", dueDate: "03/01/25", description:"Loreipsumloreipsumloremipsumipsum" },
    { id: 2, title: "Review task", dueDate: "03/01/25", description:"Loreipsumloreipsumloremipsumipsum" },
    { id: 3, title: "Review task", dueDate: "03/01/25", description:"Loreipsumloreipsumloremipsumipsum" },
  ]);

  const [requests, setRequests] = useState([
    { id: 1, title: "Design task", status: "Rejected", description:"Loreipsumloreipsumloremipsumipsum"},
    { id: 2, title: "Development task", status: "Approved", description:"Loreipsumloreipsumloremipsumipsum"  },
    { id: 3, title: "Testing task", status: "Approved", description:"Loreipsumloreipsumloremipsumipsum"  },
  ]);

  const [events, setEvents] = useState([
    { id: 1, icons: <BiSolidParty size="1.5rem"/>, title: "Today's Birthday Employee", count: 2 },
    { id: 2, icons: <HiMiniUsers  size="1.5rem"/>, title: "Today's Work Anniversary", count: 2 },
  ]);




  return (
    <div className="mp-all-scroll-slection ">
      <div className="mp-main-dash-scroll-box-att-container">
        
        {/* Scrollable Content Box */}
        <div className="mp-main-dash-scroll-box-Scrollable">
          <div 
            className={`mp-main-dash-scroll-box-any-content-showing ${isPaused ? "paused" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="scroll-content" ref={scrollRef}>
              <div className="scroll-item">
                <h1>Hear for Good - Marquee</h1>
                <img src={anysroll} alt="Scrolling content" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, deserunt quae. 
                  Natus cum voluptas veritatis non tempore, consequatur rem molestias, quas ut 
                  placeat, expedita eius ex magnam deleniti magni at!
                </p>
                <p>
                  More text to test scrolling behavior inside this div. If there is a lot of content, 
                  this div should become scrollable while keeping the rest of the layout intact.
                </p>
                <p>Scroll inside this box without affecting the other layout elements.</p>
                <span>Thank you</span>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Button */}
        <div className="mp-main-dash-mark-attendance-container">
          <button>Mark Attendance</button>
          <p className="mp-main-dash-last-check">
            <MdAccessTimeFilled  size="1.5rem"/> Last check-in : 05:30
          </p>
        </div>
      </div>

      <div className="mp-contents-all-activities-container">
        {/* My Worklist */}
        <div className="mp-contents-all-activities-card">
          <div className="mp-all-activities-heading-icons">
            <span><RiFileList3Fill size="1.8rem"/></span> 
            <h2>My Worklist</h2> 
          </div>

          <div className="mp-activites-add-new-task-container" >
            <span>Add new task</span>
            <button onClick={() => setShowPopup(true)} ><GoPlus /></button>
          </div>

          {tasks.map((task) => (
            <div className="mp-activites-add-new-task-see-screen" key={task.id}>
              <strong>{task.title}</strong> 
              <p>{task.description}</p>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {showPopup && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Add New Task</h3>
                <button className="close-btn" onClick={() => setShowPopup(false)}>
                  <FaTimes />
                </button>
              </div>

              <input
                type="text"
                placeholder="Task Title"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />

              <textarea
                placeholder="Task Description"
                value={newTaskDesc}
                onChange={(e) => setNewTaskDesc(e.target.value)}
              ></textarea>

              <div className="modal-actions">
                <button className="submit-btn" onClick={handleAddTask}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Awaiting Approval */}
        <div className="mp-contents-all-activities-card">
          <div className="mp-all-activities-heading-icons">
            <span><BsCheckCircleFill size="1.8rem"/></span> 
            <h2>Awaiting Approval</h2>
          </div>
          
          {approvals.map((task) => (
            <div className="mp-caac-cts-aal-container" key={task.id}>
              <div className="mp-caac-cts-aal-div">
                <strong>{task.title}</strong>
                <span>Due on: {task.dueDate}</span>
              </div>
              <p>{task.description}</p>
            </div>
          ))}
        </div>

        {/* My Requests */}
        <div className="mp-contents-all-activities-card">
          <div className="mp-all-activities-heading-icons">
            <span><SiAnswer size="1.6rem"/></span> 
            <h2>My Requests</h2>
          </div>
          {requests.map((req) => (
            <div className="mp-caac-cts-aal-container"key={req.id}>
              <div className="mp-caac-cts-aal-div">
                <strong>{req.title}</strong>  
                <p className={req.status === "Rejected" ? "rejected" : "approved"}>{req.status}</p>
              </div>
              <p>{req.description}</p>
            </div>
          ))}
        </div>

        {/* Events */}
        <div className="mp-contents-all-activities-card">
          <div className="mp-all-activities-heading-icons">
            <span><BiSolidCalendarEvent size="1.8rem"/></span> 
            <h2>Events</h2>
          </div>
          <div className="mp-all-activities-event-container">
            {events.map((event) => (
              <div className="mp-all-activities-event-hold-ccco" key={event.id}>
                <strong>{event.icons}</strong>
                <div className="mp-all-activities-event-sub-con">
                  <h5>{event.title}</h5> 
                  <p>{event.count} Celebrations</p> 
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance */}
        <div className="mp-contents-all-activities-card">
          <div className="mp-all-activities-heading-icons">
            <span><FaCalendarDays size="1.5rem"/></span> 
            <h2>Attendance</h2>
          </div>
            <div className="calendar-container">
              <DayPicker
                mode="single"
                selected={selectedDay}
                onSelect={setSelectedDay}
                showOutsideDays
                fixedWeeks
                className="custom-day-picker"
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dash_Main;





//
//import and use in imae here..

// import calendarbold from '../../Assets/solar_calendar-bold.png';


{/* <div>
            
            <div className="mp-title-and-icon-style-container">
              <h3>Calendar</h3>
              <img src={calendarbold}/>
            </div>
           
          </div> */}
