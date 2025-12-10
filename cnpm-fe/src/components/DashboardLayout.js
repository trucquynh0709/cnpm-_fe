import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Menu } from 'lucide-react'; // Icon 3 gạch (Hamburger)
import '../components/DashboardLayout.css';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      {/* Sidebar Component */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Main Content Area */}
      <div className="dashboard-main-container">
        
        {/* Mobile Header: Chỉ hiện trên mobile để mở menu */}
        <div className="mobile-header-toggle">
          <button onClick={() => setIsSidebarOpen(true)} className="menu-toggle-btn">
            <Menu size={24} />
          </button>
          <span className="mobile-logo">BK TutorHub</span>
        </div>

        {/* Nội dung trang con sẽ được render ở đây */}
        <div className="page-content-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;