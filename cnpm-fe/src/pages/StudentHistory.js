import React, { useState } from 'react';
import '../styles/StudentHistory.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { Settings, Clock, LayoutDashboard, User, History, CheckSquare, Search, Bell, Edit2, Mail, Plus, ArrowLeft, GraduationCap, Video, ChevronDown } from 'lucide-react';

export default function ProfileSetting() {
  const classes = [
    {
      id: 1,
      name: 'Mô hình hóa toán học',
      class: 'L01',
      date: 'Jan 25, 2024',
      time: '10:00 AM',
      mentor: 'Trần Lu',
      rating: '1/5'
    },
    {
      id: 2,
      name: 'Xác suất thống kê',
      class: 'L02',
      date: 'Feb 5, 2024',
      time: '02:00 PM',
      mentor: 'Tuệ Minh',
      rating: '5/5'
    },
    {
      id: 3,
      name: 'Kỹ thuật lập trình',
      class: 'L03',
      date: 'Mar 10, 2024',
      time: '01:00 PM',
      mentor: 'Huỳnh Múp',
      rating: '1/5'
    },
    {
      id: 4,
      name: 'Giải tích 2',
      class: 'L04',
      date: 'Apr 2, 2024',
      time: '09:45 AM',
      mentor: 'Quỳnh Kê',
      rating: '5/5'
    },
    {
      id: 5,
      name: 'Triết học Mác Lênin',
      class: 'L05',
      date: 'May 15, 2024',
      time: '11:15 AM',
      mentor: 'Nguyễn Văn',
      rating: '5/5'
    },
    {
      id: 6,
      name: 'Mạng máy tính',
      class: 'L06',
      date: 'June 8, 2024',
      time: '02:15 PM',
      mentor: 'Thị A',
      rating: '5/5'
    },
    {
      id: 7,
      name: 'Hệ điều hành',
      class: 'L07',
      date: 'Nov 20, 2024',
      time: '2:00 PM',
      mentor: 'Nguyễn Ngọc A',
      rating: '5/5'
    }
  ];

  // Function được định nghĩa BÊN TRONG component
  const getRatingClass = (rating) => {
    return rating === '5/5' ? 'rating-good' : 'rating-poor';
  };

  return (
    <div className="profile-dashboard">
      {/* Sidebar */}
      <aside className="profile-sidebar">
        <div className="profile-sidebar-item">
          <Link to="/profilesetting">
            <Settings size={24} color="#292D32" />
          </Link>
        </div>

        <div className="profile-sidebar-item">
          <Link to="/studentdashboard">
            <LayoutDashboard size={24} color="#292D32" />
          </Link>
        </div>
        
        <div className="profile-sidebar-item active">
          <Link to="/studenthistory">
            <History size={24} color="#292D32" />
          </Link>
        </div>
        
        <div className="profile-sidebar-item">
          <Link to="/studentquizzes">
            <CheckSquare size={24} color="#292D32" />
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="profile-main-content">
        {/* Header */}
        <div className="profile-header">
          <Link to="/tutorprofile" className="profile-header-btn" aria-label="Quay lại">
            <ArrowLeft size={20} />
          </Link>
          <div className="profile-header-actions">
            <button className="profile-header-btn">
              <Search size={20} />
            </button>
            <button className="profile-header-btn">
              <Bell size={20} />
            </button>
            <button className="profile-header-btn">
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="profile-content-area">
          {/* Profile Header Section */}
          <img className="profile-decor" src="/images/profile-decor.png" alt="Decoration" />
          
          <div className="history-container">
            <div className="history-header">
              <GraduationCap className="header-icon" />
              <h2>Lịch sử buổi học</h2>
            </div>

            <div className="table-wrapper">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>
                      Tên môn học
                      <ChevronDown className="sort-icon" />
                    </th>
                    <th>
                      Lớp
                      <ChevronDown className="sort-icon" />
                    </th>
                    <th>
                      Ngày học
                      <ChevronDown className="sort-icon" />
                    </th>
                    <th>
                      Giờ
                      <ChevronDown className="sort-icon" />
                    </th>
                    <th>
                      Mentor
                      <ChevronDown className="sort-icon" />
                    </th>
                    <th>
                      Đánh giá
                      <ChevronDown className="sort-icon" />
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map((item) => (
                    <tr key={item.id}>
                      <td className="subject-name">{item.name}</td>
                      <td>{item.class}</td>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>{item.mentor}</td>
                      <td>
                        <span className={`rating ${getRatingClass(item.rating)}`}>
                          {item.rating}
                        </span>
                      </td>
                      <td>
                        <button className="video-btn">
                          <Video className="video-icon" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}