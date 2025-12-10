import '../styles/TutorProfile.css';
import React, { useState } from 'react';
import { Search, Menu, Bell, User, BookOpen, Users, Calendar, Settings, ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import ProfileModal from '../components/ProfileModal';
import StudentMainSidebar from '../components/StudentMainSidebar';
const TutorProfile = () => {
  const [activePage, setActivePage] = useState(1);
 const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  // Dữ liệu giảng viên (có thể nhận từ props hoặc API)
  const tutor = {
    name: 'Trần Nguyên Phú N',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    faculty: 'Khoa khoa học & kỹ thuật máy tính',
    department: 'Khoa học máy tính',
    degree: 'Tiến sĩ',
    email: 'ntranphu@hcmut.edu.vn'
  };

  const courses = [
    {
      id: 1,
      title: 'Nguyên lý ngôn ngữ lập trình',
      code: 'TL3',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=200&fit=crop',
      instructor: 'ThS. Trần Phú N'
    },
    {
      id: 2,
      title: 'Cấu trúc dữ liệu & Giải thuật',
      code: 'TL2',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
      instructor: 'ThS. Trần Phú N'
    },
    {
      id: 3,
      title: 'Kỹ thuật lập trình',
      code: 'TL4',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=200&fit=crop',
      instructor: 'ThS. Trần Phú N'
    },
    {
      id: 4,
      title: 'Lập trình Web',
      code: 'TL5',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=200&fit=crop',
      instructor: 'ThS. Trần Phú N'
    },
    {
      id: 5,
      title: 'Cơ sở dữ liệu',
      code: 'TL6',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=200&fit=crop',
      instructor: 'ThS. Trần Phú N'
    },
    {
      id: 6,
      title: 'Trí tuệ nhân tạo',
      code: 'TL7',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop',
      instructor: 'ThS. Trần Phú N'
    }
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <StudentMainSidebar/>

      <div className="tutor-profile-main-content">
        {/* Header */}
        <div className="tutor-profile-header">
          <Link to="/registercourse" className="tutor-profile-header-btn" aria-label="Quay lại">
            <ArrowLeft size={20} />
          </Link>
          <div className="tutor-profile-header-actions">
            <button className="tutor-profile-header-btn">
              <Search size={20} />
            </button>
            <button className="tutor-profile-header-btn">
              <Bell size={20} />
            </button>
            <button className="tutor-profile-header-btn" onClick={() => setIsProfileModalOpen(true)}>
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Content Card */}
        <div className="tutor-profile-content-card">
          {/* Search Bar */}
          <div className="tutor-profile-search-wrapper">
            <div className="tutor-profile-search-bar">
              <Search size={24} />
              <input type="text" placeholder="Tìm kiếm tutor" />
            </div>
          </div>

          {/* Profile Card */}
          <div className="tutor-profile-profile-card">
            <div className="tutor-profile-profile-content">
              <img 
                src={tutor.avatar} 
                alt={tutor.name} 
                className="tutor-profile-profile-image" 
              />
              <div className="tutor-profile-profile-info">
                <h2>
                  Họ và Tên: <span>{tutor.name}</span>
                </h2>
                <p className="tutor-profile-info-item">
                  <strong>Khoa:</strong> {tutor.faculty}
                </p>
                <p className="tutor-profile-info-item">
                  <strong>Bộ môn:</strong> {tutor.department}
                </p>
                <p className="tutor-profile-info-item">
                  <strong>Trình độ:</strong> {tutor.degree}
                </p>
                <p className="tutor-profile-info-item">
                  <strong>Email:</strong> {tutor.email}
                </p>
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <h3 className="tutor-profile-courses-title">Các khóa học của giảng viên</h3>

          {/* Pagination */}
          <div className="tutor-profile-pagination">
            {[1, 2, 3, '...', 9, 10].map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && setActivePage(page)}
                className={`tutor-profile-page-btn ${page === activePage ? 'tutor-profile-page-btn-active' : ''}`}
                disabled={page === '...'}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Course Cards */}
          <div className="tutor-profile-courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="tutor-profile-course-card">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="tutor-profile-course-image" 
                />
                <div className="tutor-profile-course-info">
                  <h4>{course.title}</h4>
                  <p className="tutor-profile-course-detail">
                    Lớp: <span>{course.code}</span>
                  </p>
                  <p className="tutor-profile-course-detail">
                    Giảng viên: <span>{course.instructor}</span>
                  </p>
                  <Link to ="/classdetail">
                  <button className="tutor-profile-btn-view">Xem</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
             <ProfileModal 
                    isOpen={isProfileModalOpen} 
                    onClose={() => setIsProfileModalOpen(false)} 
                  />
    </div>
  );
};
export default TutorProfile;