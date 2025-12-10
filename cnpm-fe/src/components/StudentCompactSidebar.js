import React from 'react';
import { NavLink } from 'react-router-dom';
import { Settings, LayoutDashboard, History, CheckSquare } from 'lucide-react';
import './StudentSidebars.css';

const StudentCompactSidebar = () => {
  return (
    <aside className="student-compact-sidebar">
      
      <div className="compact-menu-item">
        <NavLink 
          to="/profilesetting" 
          className={({ isActive }) => `sidebar-icon-link ${isActive ? 'active' : ''}`}
          title="Cài đặt"
        >
          <Settings size={24} color="#292D32" />
        </NavLink>
      </div>

      <div className="compact-menu-item">
        <NavLink 
          to="/studentdashboard" 
          className={({ isActive }) => `sidebar-icon-link ${isActive ? 'active' : ''}`}
          title="Dashboard"
        >
          <LayoutDashboard size={24} color="#292D32" />
        </NavLink>
      </div>
      
      <div className="compact-menu-item">
        <NavLink 
          to="/studenthistory" 
          className={({ isActive }) => `sidebar-icon-link ${isActive ? 'active' : ''}`}
          title="Lịch sử"
        >
          <History size={24} color="#292D32" />
        </NavLink>
      </div>
      
      <div className="compact-menu-item">
        <NavLink 
          to="/studentquizzes" 
          className={({ isActive }) => `sidebar-icon-link ${isActive ? 'active' : ''}`}
          title="Bài tập"
        >
          <CheckSquare size={24} color="#292D32" />
        </NavLink>
      </div>

    </aside>
  );
};

export default StudentCompactSidebar;