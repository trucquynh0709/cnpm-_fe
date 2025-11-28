import React from 'react';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';
import '../styles/CoordinatorDashboard.css';
import { useNavigate } from 'react-router-dom';

const CoordinatorDashboard = () => {
  const navigate = useNavigate();

  // BE cho course 
  const courses = [
    { title: 'Cấu trúc dữ liệu & Giải thuật', code: 'TL1', lecturer: 'ThS. Trần Ngọc Bảo Duy', type: 'code' },
    { title: 'Cấu trúc dữ liệu & Giải thuật', code: 'TL1', lecturer: 'ThS. Trần Ngọc Bảo Duy', type: 'code' },
    { title: 'Cấu trúc dữ liệu & Giải thuật', code: 'TL1', lecturer: 'ThS. Trần Ngọc Bảo Duy', type: 'code' },
    { title: 'Cấu trúc dữ liệu & Giải thuật', code: 'TL1', lecturer: 'ThS. Trần Ngọc Bảo Duy', type: 'code' },
    { title: 'Cấu trúc dữ liệu & Giải thuật', code: 'TL1', lecturer: 'ThS. Trần Ngọc Bảo Duy', type: 'code' },
    { title: 'Cấu trúc dữ liệu & Giải thuật', code: 'TL1', lecturer: 'ThS. Trần Ngọc Bảo Duy', type: 'code' },
  ];

  return (
    <div className="Coordinator-dashboard">
      <Sidebar />
      
      <main className="dashboard-content">
        {/* Top Bar */}
        <header className="dashboard-header">
          <div className="welcome-text">
            <h2>Chào mừng trở lại, aaaaaaaaấ</h2>
          </div>
          <div className="header-actions">
            <button className="icon-btn">💬</button>
            <button className="icon-btn">🔔</button>
            <div className="user-avatar"><img src="https://i.pravatar.cc/150?img=11" alt="coordinator avatar" ></img></div>
          </div>
        </header>



        {/* Filter & Search Bar */}
        <div className="controls-cover">
            <div className="controls-bar">
            <div className="search-box">
                <span className="search-icon">🔍</span>
                <input type="text" placeholder="Tìm kiếm lớp học..." />
            </div>
            <div className="action-buttons">
                <button className="btn-filter">⚙️ Bộ lọc</button>

                <button 
                className="btn-add" 
                onClick={() => navigate('/create-class')}>+ Mở lớp học mới</button>
            </div>
            </div>


            {/* Grid Course Cards */}
            <div className="course-grid">
            {courses.map((course, index) => (
                <CourseCard 
                key={index}
                title={course.title}
                code={course.code}
                lecturer={course.lecturer}
                imageType={course.type}
                />
            ))}
            </div>
        </div>


        {/* Pagination */}
        <div className="pagination">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <span>...</span>
          <button className="page-btn">5</button>
          <button className="page-btn">{'>'}</button>
        </div>
      </main>
    </div>
  );
};

export default CoordinatorDashboard;