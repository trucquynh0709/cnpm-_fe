import React, { useState } from 'react';
import '../styles/StudentQuizzes.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { Settings, Clock, LayoutDashboard, User,Calendar, FileText, MessageSquare, Paperclip,Grid, History, CheckSquare, Search, Bell, Edit2, Mail, Plus, ArrowLeft, GraduationCap, Video, ChevronDown,List, MoreHorizontal } from 'lucide-react';

export default function StudentQuizzes() {
  const quizzes = [
    {
      id: 1,
      subject: 'Mô hình hóa toán học',
      quizName: 'Quiz 1: Giới thiệu mô hình toán học',
      deadline: '2024-12-01',
      timeLeft: '3 ngày',
      status: 'pending'
    },
    {
      id: 2,
      subject: 'Xác suất thống kê',
      quizName: 'Quiz 2: Phân phối xác suất',
      deadline: '2024-12-05',
      timeLeft: '7 ngày',
      status: 'pending'
    },
    {
      id: 3,
      subject: 'Kỹ thuật lập trình',
      quizName: 'Quiz 3: Cấu trúc dữ liệu',
      deadline: '2024-11-28',
      timeLeft: '5 giờ',
      status: 'urgent'
    },
    {
      id: 4,
      subject: 'Giải tích 2',
      quizName: 'Quiz 1: Đạo hàm và tích phân',
      deadline: '2024-12-10',
      timeLeft: '12 ngày',
      status: 'pending'
    },
    {
      id: 5,
      subject: 'Mạng máy tính',
      quizName: 'Quiz 2: Mô hình OSI',
      deadline: '2024-11-29',
      timeLeft: '1 ngày',
      status: 'urgent'
    },
    {
      id: 6,
      subject: 'Hệ điều hành',
      quizName: 'Quiz 1: Quản lý tiến trình',
      deadline: '2024-12-15',
      timeLeft: '17 ngày',
      status: 'pending'
    }
  ];

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
        
        <div className="profile-sidebar-item">
          <Link to="/studenthistory">
            <History size={24} color="#292D32" />
          </Link>
        </div>
        
        <div className="profile-sidebar-item active">
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
         <div className="quizzes-container">
      {/* Header */}
      <div className="quizzes-header">
        <div className="quizzes-header-left">
          <FileText size={32} />
          <h1>Bài Quiz chưa làm</h1>
        </div>
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Tìm kiếm bài quiz..." />
        </div>
      </div>

      {/* Quizzes Table */}
      <div className="quizzes-table-wrapper">
        <table className="quizzes-table">
          <thead>
            <tr>
              <th>
                Môn học
                <ChevronDown size={14} />
              </th>
              <th>
                Tên bài quiz
                <ChevronDown size={14} />
              </th>
              <th>
                Deadline
                <ChevronDown size={14} />
              </th>
              <th>
                Thời gian còn lại
                <ChevronDown size={14} />
              </th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr key={quiz.id} className={quiz.status === 'urgent' ? 'urgent-row' : ''}>
                <td>
                  <div className="subject-cell">
                    <div className="subject-icon">
                      <FileText size={16} />
                    </div>
                    <span className="subject-name">{quiz.subject}</span>
                  </div>
                </td>
                <td>
                  <span className="quiz-name">{quiz.quizName}</span>
                </td>
                <td>
                  <div className="deadline-cell">
                    <Calendar size={14} />
                    <span>{quiz.deadline}</span>
                  </div>
                </td>
                <td>
                  <div className={`time-left ${quiz.status}`}>
                    <Clock size={14} />
                    <span>{quiz.timeLeft}</span>
                  </div>
                </td>
                <td>
                  <button className="start-quiz-btn">
                    Bắt đầu làm
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State (if no quizzes) */}
      {quizzes.length === 0 && (
        <div className="empty-state">
          <FileText size={48} />
          <p>Không có bài quiz nào cần làm</p>
        </div>
      )}
    </div>
        </div>
      </main>
    </div>
  );
}