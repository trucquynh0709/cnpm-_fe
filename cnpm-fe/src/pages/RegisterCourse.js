import '../styles/RegisterCourse.css';
import '../styles/TutorProfile.css';
import { Search, Menu, Bell, User, BookOpen, Users, Calendar, Settings, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ProfileModal from '../components/ProfileModal';
import StudentMainSidebar from '../components/StudentMainSidebar';
export default function RegisterCourse() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <StudentMainSidebar/>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
         <div className="tutor-profile-header">
          <Link to="/" className="tutor-profile-header-btn" aria-label="Quay lại">
            <ArrowLeft size={20} />
          </Link>
          <div className="tutor-profile-header-actions">
            <button className="tutor-profile-header-btn">
              <Search size={20} />
            </button>
            <button className="tutor-profile-header-btn">
              <Bell size={20} />
            </button>
            <button className="tutor-profile-header-btn"  onClick={() => setIsProfileModalOpen(true)}>
                
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area">

          {/* Search & Tutors Section */}
          <div className="tutors-section">
            {/* Search Bar */}
            <div className="search-bar">
              <input type="text" placeholder="Tìm kiếm tutor" />
            </div>

            {/* Tutors Header */}
            <div className="tutors-header">
              <h2>Tutor được đề xuất</h2>
              <div className="pagination">
                <span className="page active">1</span>
                <span className="page">2</span>
                <span className="page">3</span>
                <span className="page">...</span>
                <span className="page">67</span>
                <span className="page">68</span>
              </div>
            </div>

            {/* Tutors Grid */}
            <div className="tutors-grid">
              <div className="tutor-card">
                <img src="https://i.pravatar.cc/150?img=12" alt="ThS. Trần Phú N" />
                <h4>ThS. Trần Phú N</h4>
                 <Link to="/tutorprofile">
                <button className="btn-view">Xem khóa học</button>
                </Link>
              </div>

              <div className="tutor-card">
                <img src="https://i.pravatar.cc/150?img=14" alt="CN. Trần Tuấn B" />
                <h4>CN. Trần Tuấn B</h4>
                <button className="btn-view">Xem khóa học</button>
              </div>

              <div className="tutor-card">
                <img src="https://i.pravatar.cc/150?img=16" alt="CN. Ngô Đặng Tuệ M" />
                <h4>CN. Ngô Đặng Tuệ M</h4>
                <button className="btn-view">Xem khóa học</button>
              </div>

              <div className="tutor-card">
                <img src="https://i.pravatar.cc/150?img=18" alt="NCS. Huỳnh Minh T" />
                <h4>NCS. Huỳnh Minh T</h4>
                <button className="btn-view">Xem khóa học</button>
              </div>

              <div className="tutor-card">
                <img src="https://i.pravatar.cc/150?img=20" alt="ThS. Nguyễn Thị C" />
                <h4>ThS. Nguyễn Thị C</h4>
                <button className="btn-view">Xem khóa học</button>
              </div>

              <div className="tutor-card">
                <img src="https://i.pravatar.cc/150?img=22" alt="NCS. Nguyễn Ngọc Q" />
                <h4>NCS. Nguyễn Ngọc Q</h4>
                <button className="btn-view">Xem khóa học</button>
              </div>
            </div>
          </div>
        </div>
      </main>
       <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />
    </div>
  );
}