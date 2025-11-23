import React, { useState } from 'react';
import '../styles/ProfileSetting.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import '../styles/StudentDashboard.css';
import { Home,  ArrowRight, TrendingUp, Smile } from 'lucide-react';
import { Settings,ChevronRight, Calendar,CheckCircle2,Clock,LayoutDashboard, User,History, CheckSquare, Search, Bell, Edit2, Mail, Plus , ArrowLeft} from 'lucide-react';

const StudentDashboard = () => {
  const [studyTime] = useState({ hours: 2, minutes: 20 });
  
  const weeklyData = [
    { day: 'M', time: 0, label: 'M' },
    { day: 'T', time: 2, label: 'T' },
    { day: 'W', time: 3.5, label: 'W' },
    { day: 'T', time: 3, label: 'T' },
    { day: 'F', time: 0, label: 'F' },
    { day: 'S', time: 0, label: 'S' },
    { day: 'Today', time: 0, label: 'Today' }
  ];

  const subjects = [
{ name: 'XÁC SUẤT THỐNG KÊ', progress: 100, colorStart: '#314CFF', colorEnd: '#314CFF' },
    { name: 'MÔ HÌNH HÓA TOÁN HỌC', progress: 80, colorStart: '#314CFF', colorEnd: '#7FA1FF' },
    { name: 'GIẢI TÍCH 2', progress: 65, colorStart: '#314CFF', colorEnd: '#7FA1FF' },
    { name: 'HỆ THỐNG SỐ', progress: 40, colorStart: '#314CFF', colorEnd: '#7FA1FF' }
  ];

  const quizScores = [
    { quiz: 1, score: null },
    { quiz: 2, score: null },
    { quiz: 3, score: null },
    { quiz: 'Midterm', score: 6.8, label: 'Có tiến bộ' },
    { quiz: 4, score: 8.5 },
    { quiz: 5, score: null }
  ];

  const schedule = [
    { id: 1, subject: 'Science', day: 14, time: '09:30 - 11:20', color: '#FFBABE', textColor: '#FF3C6A', startHour: 9.5, duration: 1.83 },
    { id: 2, subject: 'Marketing', day: 16, time: '11:30 - 12:30', color: '#E6EFFF', textColor: '#394CFF', startHour: 11.5, duration: 1 },
    { id: 3, subject: 'Javascript', day: 19, time: '12:00 - 13:40', color: '#FFE7BA', textColor: '#D78D03', startHour: 12, duration: 1.67 },
    { id: 4, subject: 'Literature', day: 16, time: '14:00 - 15:45', color: '#E6EFFF', textColor: '#24B0C9', startHour: 14, duration: 1.75 },
    { id: 5, subject: 'HTML', day: 17, time: '15:30 - 16:00', color: '#FFC9BE', textColor: '#FF6500', startHour: 15.5, duration: 0.5 }
  ];

  const teammates = [
    {
      id: 1,
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?img=5',
      hasNotification: true,
      bgColor: '#E6EFFF'
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=12',
      hasNotification: true,
      bgColor: '#E6EFFF'
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      avatar: 'https://i.pravatar.cc/150?img=15',
      hasNotification: false,
      bgColor: 'transparent'
    },
    {
      id: 4,
      name: 'David Kim',
      avatar: 'https://i.pravatar.cc/150?img=33',
      hasNotification: false,
      bgColor: 'transparent'
    }
  ];


  return (
    <div className="profile-dashboard">
      {/* Sidebar */}
      <aside className="profile-sidebar">
       
        <div className="profile-sidebar-item">
           <Link to = "/profilesetting">
          <Settings size={24} color="#292D32" />
          </Link>
        </div>
        
        <div className="profile-sidebar-item active">
          <Link to = "/studentdashboard">
          <LayoutDashboard size={24} color="#292D32" />
          </Link>
        </div>
        <div className="profile-sidebar-item">
          <Link to = "/studenthistory">
          <History size={24} color="#292D32" />
          </Link>
        </div>
        <div className="profile-sidebar-item">
          <Link to = "/studentquizzes">
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
            <img className="profile-decor" src="/images/profile-decor.png"></img>
        <div className="dashboard-container">
      <div className="bento-grid">
        
        {/* Subject Progress Card */}
        <div className="bento-card subject-progress">
          <h2 className="card-title">Tiến độ từng môn</h2>
          <div className="subject-list">
            {subjects.map((subject, idx) => (
              <div key={idx} className="subject-item">
                <div className="subject-header">
                  <span className="subject-name" style={{ color: subject.colorStart }}>
                    {subject.name}
                  </span>
                  <span className="subject-percentage">{subject.progress}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill"
                    style={{
                      width: `${subject.progress}%`,
                      background: `linear-gradient(90deg, ${subject.colorStart}, ${subject.colorEnd})`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Study Time Card */}
        <div className="bento-card study-time">
          <div className="study-time-header">
            <div className="time-display">
              <h1 className="time-text">
                {studyTime.hours}h {studyTime.minutes}m
              </h1>
              <TrendingUp className="trending-icon" />
            </div>
            <p className="time-subtitle">Thời gian học trung bình một ngày</p>
          </div>

          <div className="weekly-chart">
            {weeklyData.map((day, idx) => (
              <div key={idx} className="chart-bar">
                <div className="bar-container">
                  <div 
                    className="bar-fill"
                    style={{ 
                      height: `${(day.time / 4) * 100}%`,
                      backgroundColor: day.time > 0 ? '#314CFF' : 'transparent'
                    }}
                  />
                </div>
                <span className="bar-label">{day.label}</span>
              </div>
            ))}
          </div>

          <div className="notification-card">
            <div className="notification-content">
              <h3 className="notification-title">Điều chỉnh thông báo</h3>
              <p className="notification-desc">Cài đặt thông báo lịch học, thời hạn bài tập</p>
            </div>
            <ChevronRight className="notification-icon" />
          </div>
        </div>

        {/* Quiz Score Card */}
        <div className="bento-card quiz-score">
          <div className="quiz-header">
            <h2 className="card-title">Giải tích 2</h2>
            <button className="smile-button">☺</button>
          </div>

          <div className="quiz-labels">
            {quizScores.map((item, idx) => (
              <div key={idx} className="quiz-label-item">
                <div className="quiz-label-text">Quiz</div>
                <div className="quiz-label-number">{item.quiz}</div>
              </div>
            ))}
          </div>

          <div className="chart-container">
            <svg className="line-chart" viewBox="0 0 400 100" preserveAspectRatio="none">
              <polyline
                fill="none"
                stroke="#314CFF"
                strokeWidth="2"
                points="20,80 90,40 155,20 240,30 320,10 400,90"
              />
              <circle cx="240" cy="30" r="4" fill="#314CFF" />
              <circle cx="320" cy="10" r="4" fill="#314CFF" />
              <polyline
                fill="none"
                stroke="#314CFF"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.5"
                points="320,10 400,50"
              />
            </svg>
            
            <div className="score-label">
              <div className="score-value">6.8</div>
              <div className="score-text">Có tiến bộ</div>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <CheckCircle2 className="check-icon" />
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">Làm tốt lắm !</h3>
              <p className="achievement-desc">Cố gắng phát huy nhé</p>
            </div>
          </div>
        </div>

        <div className="bento-card team-members feedback-card">
          <h2 className="feedback-title">Nhận xét</h2>
          <p className="feedback-subtitle">2 nhận xét gần đây</p>

          <div className="teammates-grid">
            {teammates.map((teammate) => (
              <div 
                key={teammate.id} 
                className="teammate-wrapper"
                style={{ backgroundColor: teammate.bgColor }}
              >
                <div className="avatar-container">
                  <img 
                    src={teammate.avatar} 
                    alt={teammate.name}
                    className="teammate-avatar"
                  />
                  {teammate.hasNotification && (
                    <span className="notification-dot"></span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="view-all-link">
            Toàn bộ nhận xét →
          </a>
        </div>

        {/* Weekly Schedule Card */}
        <div className="bento-card weekly-schedule">
          <h2 className="card-title">Lịch học tuần này</h2>
          <div className="schedule-wrapper">
            <div className="schedule-content">
              <div className="schedule-header">
                <div className="header-week">Week</div>
                {[14, 15, 16, 17, 18, 19, 20].map((day, idx) => (
                  <div key={day} className="header-day">
                    <div className="day-number">{day}</div>
                    <div className="day-name">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="schedule-grid">
                {[...Array(11)].map((_, idx) => {
                  const hour = 9 + idx;
                  return (
                    <div key={idx} className="time-row">
                      <div className="time-label">{hour}:00</div>
                    </div>
                  );
                })}

                {schedule.map(item => (
                  <div
                    key={item.id}
                    className="schedule-item"
                    style={{
                      backgroundColor: item.color,
                      left: `${((item.day - 14) + 1) * 12.5}%`,
                      top: `${(item.startHour - 9) * 48}px`,
                      height: `${item.duration * 48}px`
                    }}
                  >
                    <div className="schedule-subject" style={{ color: item.textColor }}>
                      {item.subject}
                    </div>
                    <div className="schedule-time">
                      <Clock className="clock-icon" style={{ color: item.textColor }} />
                      <span style={{ color: item.textColor }}>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

          </div>
      </main>
    </div>
  );
}

export default StudentDashboard;