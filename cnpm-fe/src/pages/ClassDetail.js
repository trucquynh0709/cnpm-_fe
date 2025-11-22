import React, { useState } from 'react';
import '../styles/ClassDetail.css';
import '../styles/TutorProfile.css';
import { Link } from "react-router-dom";
import { Search, ArrowLeft, Menu, Bell, User, BookOpen, Users, Calendar, Settings } from 'lucide-react';
import Swal from 'sweetalert2';

export default function ClassDetail() {
  const [activeChapter, setActiveChapter] = useState(null);
 const handleRegister = () => {
    Swal.fire({
      title: 'Thành công!',
      text: 'Đăng ký lớp học thành công!',
      icon: 'success',
      confirmButtonText: 'Đóng',
      confirmButtonColor: '#2049A1',
      background: '#fff',
      color: '#1B2559',
      iconColor: '#2049A1',
      customClass: {
        popup: 'classdetail-swal-popup',
        title: 'classdetail-swal-title',
        confirmButton: 'classdetail-swal-button'
      }
    });};
  

  const chapters = [
    { id: 1, title: "Chương 1", subtitle: "Lexical Analysis" },
    { id: 2, title: "Chương 2", subtitle: "Syntax Analysis" },
    { id: 3, title: "Chương 3", subtitle: "AST Generation" },
    { id: 4, title: "Chương 4", subtitle: "OOP & FP" },
    { id: 5, title: "Chương 5", subtitle: "Name, Scope, Referencing Environment" },
    { id: 6, title: "Chương 6", subtitle: "Type" }
  ];

  return (
     <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-bk">BK</span> <span className="logo-text">TutorHub</span>
        </div>

        <nav className="nav-menu">
          <a href="/dashboard" className="nav-item">Dashboard</a>
          <a href="/dang-ky-khoa-hoc" className="nav-item active">Đăng ký khóa học</a>
          <a href="/tim-kiem-lop-hoc" className="nav-item">Tìm kiếm lớp học</a>
          <a href="/tien-do-hoc-tap" className="nav-item">Tiến độ học tập</a>
          <a href="/danh-sach-khoa-hoc" className="nav-item">Danh sách khóa học</a>
        </nav>

        <div className="nav-bottom">
          <a href="/profilesetting" className="nav-item">Cài đặt</a>
        </div>
      </aside>

        {/* Content Area */}
        

        <div className="classdetail-content-area">
          <div className="classdetail-container">
            <div className="tutor-profile-header">
              <Link to="/tutorprofile" className="tutor-profile-header-btn" aria-label="Quay lại">
                <ArrowLeft size={20} />
              </Link>
              <div className="tutor-profile-header-actions">
                <button className="tutor-profile-header-btn">
                  <Search size={20} />
                </button>
                <button className="tutor-profile-header-btn">
                  <Bell size={20} />
                </button>
                <button className="tutor-profile-header-btn">
                  <User size={20} />
                </button>
              </div>
            </div>

            {/* Hero Section with Word Cloud */}
            <div className="classdetail-hero-section">

              <div className="classdetail-word-cloud">
                <img src='/images/class-thumbnail.jpg'/>
              </div>

              <h1 className="classdetail-course-title">Nguyên lý ngôn ngữ lập trình</h1>
              <p className="classdetail-course-instructor">Giảng viên: <strong>ThS. Trần Phú N</strong></p>
              
              <button className="classdetail-btn-register" onClick={handleRegister} >Đăng ký</button>
            </div>

            {/* Two Column Layout */}
            <div className="classdetail-detail-grid">
              {/* Left Column - Course Info */}
              <div className="classdetail-course-info-card">
                <h3 className="classdetail-section-title">Mục tiêu khóa học</h3>
                <p className="classdetail-section-text">
                  Môn học này cung cấp cho sinh viên kiến thức về các nguyên lý thiết kế và hiện thực ngôn ngữ lập trình, các thành phần cơ bản trong các ngôn ngữ lập trình. Một loại ngôn ngữ lập trình khai báo cũng được giới thiệu trong môn học là ngôn ngữ lập trình hàm.
                </p>

                <h3 className="classdetail-section-title">Mô tả khóa học</h3>
                <ul className="classdetail-course-description-list">
                  <li>Các nguyên lý thiết kế và hiện thực ngôn ngữ lập trình</li>
                  <li>Mô tả ngôn ngữ lập trình một cách hình thức ở các mức độ từ vựng và cú pháp</li>
                  <li>Các hệ thống kiểu dữ liệu trên các ngôn ngữ lập trình</li>
                  <li>Các cấu trúc điều khiển trên các ngôn ngữ lập trình</li>
                  <li>Các cơ chế điều khiển dữ liệu trên các ngôn ngữ lập trình</li>
                  <li>Các cơ chế điều khiển trình tự trên các ngôn ngữ lập trình</li>
                </ul>
              </div>

              {/* Right Column - Chapters List */}
              <div className="classdetail-chapters-card">
                <h3 className="classdetail-section-title">Danh sách buổi học</h3>
                
                <div className="classdetail-chapters-list">
                  {chapters.map((chapter) => (
                    <div 
                      key={chapter.id} 
                      className={`classdetail-chapter-item ${activeChapter === chapter.id ? 'classdetail-chapter-active' : ''}`}
                      onClick={() => setActiveChapter(activeChapter === chapter.id ? null : chapter.id)}
                    >
                      <span className="classdetail-chapter-title">{chapter.title}</span>
                      <span className="classdetail-chapter-subtitle">: {chapter.subtitle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}