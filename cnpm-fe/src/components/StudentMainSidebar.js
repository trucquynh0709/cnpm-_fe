import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './StudentSidebars.css'; // We will create this combined CSS file

const StudentMainSidebar = () => {
  return (
    <aside className="student-main-sidebar">
      <div className="logo">
        <span className="logo-bk">BK</span> <span className="logo-text">TutorHub</span>
      </div>

      <nav className="nav-menu">
        <NavLink 
          to="/studentdashboard" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/dang-ky-khoa-hoc" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Đăng ký khóa học
        </NavLink>
        <NavLink 
          to="/tim-kiem-lop-hoc" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Tìm kiếm lớp học
        </NavLink>
        <NavLink 
          to="/tien-do-hoc-tap" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Tiến độ học tập
        </NavLink>
        <NavLink 
          to="/danh-sach-khoa-hoc" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Danh sách khóa học
        </NavLink>
      </nav>

      <div className="nav-bottom">
        <NavLink 
          to="/profilesetting" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Cài đặt
        </NavLink>
      </div>
    </aside>
  );
};

export default StudentMainSidebar;