import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../components/Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/admin-dashboard', icon: '📊' },
    { label: 'Thêm lớp học', path: '', icon: '⊕' },
    { label: 'Tìm kiếm lớp học', path: '', icon: '🔍' },
    { label: 'Danh sách sinh viên', path: '', icon: '👤' },
    { label: 'Danh sách lớp học', path: '', icon: '📝' },
  ];

  return (
    <aside className="sidebar-component">

        <div className="navbar__brand">BK<span className="navbar__subtitle">TutorHub</span></div> 

      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="menu-item">⚙️ Cài đặt</div>
      </div>
    </aside>
  );
};

export default Sidebar;